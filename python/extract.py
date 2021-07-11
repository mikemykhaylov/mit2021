import requests
from pathlib import Path
from bs4 import BeautifulSoup as bs
from urllib.parse import urljoin

# URL of the web page you want to extract
url = "https://hackmit.org"

# initialize a session
session = requests.Session()
# set the User-agent as a regular browser
session.headers[
    "User-Agent"
] = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"

# get the HTML content
html = session.get(url).content

# parse HTML using beautiful soup
soup = bs(html, "html.parser")

# get the JavaScript files
script_files = []

for script in soup.find_all("script"):
    if script.attrs.get("src"):
        # if the tag has the attribute 'src'
        script_url = urljoin(url, script.attrs.get("src"))
        script_files.append(script_url)

base_path = Path(__file__).parent

for js in script_files:
    if "min" in js:
        continue
    r = requests.get(js)
    file_path = (base_path / f"../www/{js.split('/')[-1]}").resolve()
    open(file_path, "wb").write(r.content)
