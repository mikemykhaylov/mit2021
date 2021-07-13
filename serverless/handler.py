import os
import datetime
import logging

import requests
import git
from selenium import webdriver

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


def run(event, context):
    current_time = datetime.datetime.now().time()
    name = context.function_name
    logger.info("Your cron function " + name + " ran at " + str(current_time))

    if not os.path.exists("/tmp/mit2021"):
        git.Repo.clone_from("https://github.com/mmykhaylov/mit2021.git", "/tmp/mit2021")

    repo = git.Repo("/tmp/mit2021")
    repo.remote().fetch()
    repo.index.reset("origin/main", hard=True)
    logger.info(repo.active_branch)

    options = webdriver.ChromeOptions()
    options.binary_location = "/opt/headless-chromium"
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--single-process")
    options.add_argument("--disable-dev-shm-usage")

    driver = webdriver.Chrome("/opt/chromedriver", chrome_options=options)
    driver.get("https://hackmit.org")
    logger.info(driver.title)

    for elem in driver.find_elements_by_xpath("//script"):
        js = elem.get_attribute("src")
        if "min" in js:
            continue
        logger.info(js)
        r = requests.get(js)
        file_path = f"/tmp/mit2021/www/{js.split('/')[-1].split('?')[0]}"
        open(file_path, "wb").write(r.content)

    driver.close()
    driver.quit()

    diffs = repo.git.diff(None, **{"name-only": True}).split("\n")

    date_string = datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    bot_message = f"{date_string}\n"

    if not diffs[0]:
        bot_message += "No changes detected"
    else:
        bot_message += f"{len(diffs)} file(s) changed:\n" + "\n".join(diffs)

    bot_token = os.getenv("BOT_TOKEN")
    channel_id = os.getenv("CHANNEL_ID")
    r = requests.post(
        f"https://api.telegram.org/bot{bot_token}/sendMessage",
        json={"chat_id": channel_id, "text": bot_message},
    ).json()
    logger.info(r)