let ecuacion = "";

function actualizarPantalla(texto) {
    document.getElementById("pan").innerText = texto;
}

function pres(numero) {
    if (numero === '.' && ecuacion.endsWith('.')) return;
    if (ecuacion === "") {
        ecuacion = numero;
    } else {
        ecuacion = ecuacion + numero; 
    }
    actualizarPantalla(ecuacion);
}

function preso(simbolo) {
    ecuacion = ecuacion + " " + simbolo + " ";
    actualizarPantalla(ecuacion);
}

function mos() {
    try {
        let textoLimpio = ecuacion;
        
        textoLimpio = textoLimpio.replaceAll('×', '*');
        textoLimpio = textoLimpio.replaceAll('÷', '/');
        
        let resultado = eval(textoLimpio);
        
        actualizarPantalla(resultado);
        ecuacion = String(resultado); 
    } catch (error) {
        actualizarPantalla("Error");
        ecuacion = "";
    }
}

function limpiarPantalla() {
    ecuacion = "";           
    actualizarPantalla("0"); 
}

function borrarUltimo() {
    if (ecuacion.endsWith(" ")) {
        ecuacion = ecuacion.slice(0, -3);
    } else {
        ecuacion = ecuacion.slice(0, -1);
    }
    
    if (ecuacion === "") {
        actualizarPantalla("0");
    } else {
        actualizarPantalla(ecuacion);
    }
}

