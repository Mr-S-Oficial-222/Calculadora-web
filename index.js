let pantalla = document.getElementById("pan");
let operacion = "";

function pres(num) {
    if (num === '.' && operacion.endsWith('.')) return;
    if (operacion === "0" && num !== '.') {
        operacion = num;
    } else {
        operacion += num;
    }
    pantalla.innerText = operacion;
}

function preso(op) {
    if (["+", "-", "*", "/", "**"].some(el => operacion.endsWith(el))) return;
    operacion += op;
    pantalla.innerText = operacion;
}

function mos() {
    try {
        let resultado = eval(operacion);
        pantalla.innerText = resultado;
        operacion = resultado.toString();
    } catch (e) {
        pantalla.innerText = "Error";
        operacion = "";
    }
}

function limpiarPantalla() {
    operacion = "";
    pantalla.innerText = "0";
}
