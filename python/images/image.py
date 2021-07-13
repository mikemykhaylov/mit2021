from PIL import Image, ImageDraw
import math

final_image = Image.new("L", (200, 66))
final_image_drawer = ImageDraw.Draw(final_image)

art = open("art.txt", "r")
Lines = art.readlines()

colors = {}

characters = "@%&#*/(,. "

for i in range(len(characters)):
    color_value = math.floor(255 * i / len(characters))
    colors[characters[i]] = color_value

for i in range(len(Lines)):
    line = Lines[i]
    for j in range(len(line) - 1):
        char = line[j]
        final_image_drawer.point([j, i], colors[char])

# final_image.show()

final_image.save("./image.png")
