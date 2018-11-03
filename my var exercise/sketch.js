// this will allow us to input a degFahrenheit value and
//converter it to degCelcius

//firstly two variables are declared, Fahrenheit and Celcius
//which will hold the number of degrees Fahrenheit and Celcius, respecttively

// prompt method will allow us to provide a default value (70)
// that can be over written by the user's input
var degFahrenheit = prompt("Enter the degrees in Fahrenheit",70);

var degCelcius = 0;
degCelcius = (degFahrenheit - 32) * 5/9;  // this is a conversion calculation

alert (degFahrenheit + " degrees Fahrenheit equals " + degCelcius + " degrees Celcius");
