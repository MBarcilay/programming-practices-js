function buttonSi() {
    // Mostrar en pantalla mensaje de agradecimiento
    document.getElementById("main").innerHTML = "Gracias :) ¡Sabía que dirías que sí!";
}

function buttonNo() {
  var mainElement = document.getElementById("main");
  var containerElement = mainElement.parentElement;
  var containerRect = containerElement.getBoundingClientRect();
  var mainRect = mainElement.getBoundingClientRect();
  var containerWidth = containerRect.width;
  var containerHeight = containerRect.height;
  var mainWidth = mainRect.width;
  var mainHeight = mainRect.height;

  var randomX = Math.floor(Math.random() * (containerWidth - mainWidth));
  var randomY = Math.floor(Math.random() * (containerHeight - mainHeight));

  mainElement.style.position = "absolute";
  mainElement.style.left = randomX + "px";
  mainElement.style.top = randomY + "px";
}
