//fahrenheit to celcius
function fahrenheitToCelcius(fahrenheit) {

    let celciusConverted = 0;

    celciusConverted = parseFloat((fahrenheit - 32) * 5 / 9);
    console.log(celciusConverted);
    document.getElementById("result").innerHTML = celciusConverted;
    return celciusConverted;
}

//celcius to fahrenheit
function celciusToFahrenheit(celcius) {

    let fahrenheitConverted = 0;

    fahrenheitConverted = parseFloat(celcius * 9 / 5 + 32);
    console.log(fahrenheitConverted);
    document.getElementById("result").innerHTML = fahrenheitConverted;
    return fahrenheitConverted;
}