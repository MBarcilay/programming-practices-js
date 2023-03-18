//fahrenheit to celcius
function fahrenheitToCelcius(fahrenheit) {

    var celciusConverted = 0;
    fahrenheit = document.getElementById("fahrenheit").value;

    celciusConverted = parseFloat((fahrenheit - 32) * 5 / 9);
    console.log(celciusConverted);
    document.getElementById("result").innerHTML = celciusConverted;
    return celciusConverted;
}

//celcius to fahrenheit
function celciusToFahrenheit(celcius) {

    var fahrenheitConverted = 0;
    celcius = document.getElementById("celcius").value;

    fahrenheitConverted = parseFloat(celcius * 9 / 5 + 32);
    console.log(fahrenheitConverted);
    document.getElementById("result").innerHTML = fahrenheitConverted;
    return fahrenheitConverted;
}