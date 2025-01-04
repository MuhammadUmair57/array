"use strict";
//Here is the TypeScript code to convert the temperatures from Celsius to Fahrenheit and store them in an array:
// Define the temperatures in Celsius
const temperaturesCelsius = [15, 23, 18, 27, 30, 25, 19, 22, 28, 16, 20, 24, 21, 29, 17];
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// Convert temperatures to Fahrenheit using map()
const temperaturesFahrenheit = temperaturesCelsius.map(celsiusToFahrenheit);
// Print the temperatures in Fahrenheit
console.log(temperaturesFahrenheit);
//This code defines an array of temperatures in Celsius, defines a function celsiusToFahrenheit to convert a single temperature from Celsius to Fahrenheit, and then uses the map() method to apply this function to each temperature in the array, storing the results in a new array temperaturesFahrenheit.
//When you run this code, it will print the temperatures in Fahrenheit to the console.
