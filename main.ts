/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophie
 * Created on: Sep 2023
 * This program shows temperature
*/

basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.pause(1000)

//variables
let temperature: number

input.onButtonPressed(Button.A, function() {
  temperature = input.temperature()
  basic.showString("The temperature is " + temperature.toString() + 'C')
})
