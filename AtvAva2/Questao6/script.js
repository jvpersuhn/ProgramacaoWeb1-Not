function calcularFatorial() {
    var numero = parseInt(document.getElementById('numero').value, 10);
    var fatorial = 1;
    numero++;
    while (numero > 1) {
        fatorial = fatorial * (numero-1);
        numero = numero -1;
    }
    if (numero != 1 || numero == 0) {
        fatorial = 0;
    }
    var texto = "Resultado= " + fatorial;
    document.getElementById("result").innerHTML = texto;
}