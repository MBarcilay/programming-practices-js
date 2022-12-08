//CALCULADORA BÁSICA

//Declaraciones de variables
let numero1;
let numero2;
let operacion;

//funcion de init
function init(){
    //variables
    let resultado = document.getElementById('display');
    let reset = document.getElementById('btn-ac');
    let borrar = document.getElementById('btn-del');
    let suma = document.getElementById('btn-sum');
    let resta = document.getElementById('btn-sub');
    let multiplicacion = document.getElementById('btn-mul');
    let division = document.getElementById('btn-div');
    let igual = document.getElementById('btn-eq');
    let punto = document.getElementById('btn-dot');
    let uno = document.getElementById('btn-1');
    let dos = document.getElementById('btn-2');
    let tres = document.getElementById('btn-3');
    let cuatro = document.getElementById('btn-4');
    let cinco = document.getElementById('btn-5');
    let seis = document.getElementById('btn-6');
    let siete = document.getElementById('btn-7');
    let ocho = document.getElementById('btn-8');
    let nueve = document.getElementById('btn-9');
    let cero = document.getElementById('btn-0');

    //Eventos de click
    uno.onclick = function(e){
        resultado.value = resultado.value  + "1";
    }

    dos.onclick = function(e){
        resultado.value = resultado.value  + "2";
    }

    tres.onclick = function(e){
        resultado.value = resultado.value  + "3";
    }

    cuatro.onclick = function(e){
        resultado.value = resultado.value  + "4";
    }

    cinco.onclick = function(e){
        resultado.value = resultado.value  + "5";
    }

    seis.onclick = function(e){
        resultado.value = resultado.value  + "6";
    }

    siete.onclick = function(e){
        resultado.value = resultado.value  + "7";
    }

    ocho.onclick = function(e){
        resultado.value = resultado.value  + "8";
    }

    nueve.onclick = function(e){
        resultado.value = resultado.value  + "9";
    }

    cero.onclick = function(e){
        resultado.value = resultado.value  + "0";
    }

    reset.onclick = function(e){
        resetear();
    }

    limpiar.onclick = function(e){
        borrar();
    }

    suma.onclick = function(e){
        resultado.value = resultado.value  + "+";
        operacion = "+";
    }

    resta.onclick = function(e){
        resultado.value = resultado.value  + "-";
        operacion = "-";
    }

    multiplicacion.onclick = function(e){
        resultado.value = resultado.value  + "*";
        operacion = "*";
    }

    division.onclick = function(e){
        resultado.value = resultado.value  + "/";
        operacion = "/";
    }

    igual.onclick = function(e){
        resultado.value = resultado.value;
        resolver();
    }

    punto.onclick = function(e){
        resultado.value = resultado.value;
    }

    //funciones
    function limpiar(){
        resultado.value = "";
    }

    function resetear(){
        resultado.value = "0";
        numero1 = 0;
        numero2 = 0;
        operacion = "";
    }

    function resolver(){
        let res = 0;
        switch(operacion){
            case "+":
                res = parseFloat(numero1) + parseFloat(numero2);
                break;
            case "-":
                res = parseFloat(numero1) - parseFloat(numero2);
                break;
            case "*":
                res = parseFloat(numero1) * parseFloat(numero2);
                break;
            case "/":
                res = parseFloat(numero1) / parseFloat(numero2);
                break;
        }
        resetear();
        resultado.value = res;
    }

}

init();