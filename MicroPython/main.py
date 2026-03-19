# Copyright (c) 2026 MTHS All rights reserved
#
# Created by: Jayden
# Created on: Mar 2026
# This program shows you the light level using the microbit

from microbit import *
import neopixel

# clear screen
display.clear()

# variables
neopixelStrip = None
lightLevel = None

neopixelStrip = neopixel.NeoPixel(pin16, 4)

# turn all 4 pixels off
neopixelStrip.clear()
neopixelStrip.show()

while True:
    if button_a.is_pressed():
        lightLevel = display.read_light_level()

        if lightLevel <= 52:
            # show light level
            display.scroll(str(lightLevel))

            # turn off pixels
            neopixelStrip.clear()
            neopixelStrip.show()

        if lightLevel > 52 and lightLevel <= 104:
            # show light level
            display.scroll(str(lightLevel))

            # show red for 2 seconds
            neopixelStrip[0] = (255, 0, 0)
            neopixelStrip.show()
            sleep(2000)

            # turn off pixels
            neopixelStrip.clear()
            neopixelStrip.show()

        if lightLevel > 104 and lightLevel <= 156:
            # show light level
            display.scroll(str(lightLevel))

            # show red and yellow for 2 seconds
            neopixelStrip[0] = (255, 0, 0)
            neopixelStrip[1] = (255, 255, 0)
            neopixelStrip.show()
            sleep(2000)

            # turn off pixels
            neopixelStrip.clear()
            neopixelStrip.show()

        if lightLevel > 156 and lightLevel <= 208:
            # show light level
            display.scroll(str(lightLevel))

            # show red, yellow, and green for 2 seconds
            neopixelStrip[0] = (255, 0, 0)
            neopixelStrip[1] = (255, 255, 0)
            neopixelStrip[2] = (0, 255, 0)
            neopixelStrip.show()
            sleep(2000)

            # turn off pixels
            neopixelStrip.clear()
            neopixelStrip.show()

        if lightLevel > 208:
            # show light level
            display.scroll(str(lightLevel))

            # show red, yellow, green, and white for 2 seconds
            neopixelStrip[0] = (255, 0, 0)
            neopixelStrip[1] = (255, 255, 0)
            neopixelStrip[2] = (0, 255, 0)
            neopixelStrip[3] = (255, 255, 255)
            neopixelStrip.show()
            sleep(2000)

            # turn off pixels
            neopixelStrip.clear()
            neopixelStrip.show()
