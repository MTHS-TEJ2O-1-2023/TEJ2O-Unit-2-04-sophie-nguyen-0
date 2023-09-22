"""
Created by: sophie N
Created on: Sep 2023
This module is a Micro:bit MicroPython program that shows the temperature
"""

from microbit import *

display.clear
display.show(Image.HEART)

temp = 0

while True:
    if button_a.is_pressed():
        temp = temperature()
        display.scroll("The temperature is " + str(temp) + " C")
