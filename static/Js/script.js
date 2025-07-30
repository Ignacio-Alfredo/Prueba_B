function contarPares(numero) {
    let cantidadPares = 0;
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            cantidadPares++;
        }
    }
    return cantidadPares;
}

function ejContarPares() {
    const numeroIngresado = parseInt(document.getElementById('input1').value);
    
    if (isNaN(numeroIngresado) || numeroIngresado < 1) {
        alert("Por favor, ingresa un número válido mayor o igual a 1.");
        console.log("Error: Número inválido.");
        return;
    }

    const resultado = contarPares(numeroIngresado);
    alert("La cantidad de números pares es: " + resultado);
}