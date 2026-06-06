// 🌍 Variable global: aquí guardamos la operación en texto
let ecuacion = "";

// Función para actualizar el texto de tu visor gris
function actualizarPantalla(texto) {
    document.getElementById("pan").innerText = texto;
}

// 1. Para tus botones de números (que llaman a "pres")
function pres(numero) {
    if (ecuacion === "") {
        ecuacion = numero;
    } else {
        ecuacion = ecuacion + numero; 
    }
    actualizarPantalla(ecuacion);
}

// 2. Para tus botones de operación (que llaman a "preso")
function preso(simbolo) {
    ecuacion = ecuacion + " " + simbolo + " ";
    actualizarPantalla(ecuacion);
}

// 3. La función maestra para el botón "="
function mostrarResultado() {
    try {
        let textoLimpio = ecuacion;
        
        // Limpiamos los símbolos bonitos para que JS los entienda
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

// 4. NUEVA: Función para borrar todo cuando tocas la "C"
function limpiarPantalla() {
    ecuacion = "";           // Vaciamos la memoria interna
    actualizarPantalla("0"); // Volvemos a poner el visor en 0
}
