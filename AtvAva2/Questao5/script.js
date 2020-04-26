
function soma(){
    var n1 = parseInt(document.getElementById('numero1').value, 10)
    var n2 = parseInt(document.getElementById('numero2').value, 10)
    var n3 = parseInt(document.getElementById('numero3').value, 10)

    var soma = n1 + n2 + n3
    var mensagem = ''

    if (soma % 2 === 0)
        mensagem = 'Par'
    else
        mensagem = 'Impar'

    if (~isNaN(soma))
        soma = 0
        mensagem = 'Par'


    alert("Valor: " + soma + "\n" + mensagem)
}