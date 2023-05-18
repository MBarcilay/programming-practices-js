function adivinar() {
  var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  var numeroUsuario = parseInt(document.getElementById("numero").value);
  var resultado = document.getElementById("resultado");

  if (numeroUsuario === numeroAleatorio) {
    resultado.textContent = "¡Correcto! Has adivinado el número.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Incorrecto. El número correcto era " + numeroAleatorio + ".";
    resultado.style.color = "red";
  }
    document.getElementById("numero").value = "";
}
