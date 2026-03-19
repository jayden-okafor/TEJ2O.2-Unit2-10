/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden
 * Created on: Mar 2026
 * This program shows you the light level using the microbit
 */

// clear screen
basic.clearScreen()

// variables
let neopixelStrip: neopixel.Strip = null
let lightLevel:number = null

neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// turn all 4 pixels off
neopixelStrip.clear()

input.onButtonPressed(Button.A, function() {
    lightLevel = input.lightLevel()

    if (lightLevel <= 52) {
        // show light level
        basic.showNumber(lightLevel)

        // turn off pixels
        neopixelStrip.clear()
        neopixelStrip.show()
    }

    if (lightLevel > 52 && lightLevel <= 104) {
        // show light level
        basic.showNumber(lightLevel)
    
        // show red for 2 seconds
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
        basic.pause(2000)

        // turn off pixels
        neopixelStrip.clear()
        neopixelStrip.show()
    }

    if (lightLevel > 104 && lightLevel <= 156) {
        // show light level
        basic.showNumber(lightLevel)

        // show red and yellow for 2 seconds
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        neopixelStrip.show()
        basic.pause(2000)

        // turn off pixels
        neopixelStrip.clear()
        neopixelStrip.show()
    }

    if (lightLevel > 156 && lightLevel <= 208) {
        // show light level
        basic.showNumber(lightLevel)

        // show red, yellow, and green for 2 seconds
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
        basic.pause(2000)

        // turn off pixels
        neopixelStrip.clear()
        neopixelStrip.show()
    }

    if (lightLevel > 208) {
        // show light level
        basic.showNumber(lightLevel)

        // show red, yellow, green, and white for 2 seconds
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.show()
        basic.pause(2000)

        // turn off pixels
        neopixelStrip.clear()
        neopixelStrip.show()
    }
})
