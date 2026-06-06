let ecuacion = "";

function actualizarPantalla(texto) {
    document.getElementById("pan").innerText = texto;
}

function pres(numero) {
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
