let operacion = "";

function pres(num) {
    if (num === '.' && operacion.endsWith('.')) return;
    if (operacion === "0" && num !== '.') {
        operacion = num;
    } else {
        operacion += num;
    }
    document.getElementById("pan").innerText = operacion;
}

function preso(op) {
    if (["+", "-", "*", "/", "**"].some(el => operacion.endsWith(el))) return;
    operacion += op;
    document.getElementById("pan").innerText = operacion;
}

function mos() {
    try {
        let resultado = eval(operacion);
        document.getElementById("pan").innerText = resultado;
        operacion = resultado.toString();
    } catch (e) {
        document.getElementById("pan").innerText = "Error";
        operacion = "";
    }
}

function limpiarPantalla() {
    operacion = "";
    document.getElementById("pan").innerText = "0";
}
