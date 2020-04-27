
function soma(){
    var n1 = 0
    var n2 = 0
    var n3 = 0

    if (document.getElementById('numero1').value !== '')
        var n1 = parseInt(document.getElementById('numero1').value, 10)

    if (document.getElementById('numero2').value !== '')
        var n2 = parseInt(document.getElementById('numero2').value, 10)

    if (document.getElementById('numero3').value !== '')
        var n3 = parseInt(document.getElementById('numero3').value, 10)

    if (isNaN(n1))
        n1 = 0

    if (isNaN(n2))
        n2 = 0

    if (isNaN(n3))
        n3 = 0
    
    var soma = n1 + n2 + n3
    var mensagem = ''

    if (soma % 2 === 0)
        mensagem = 'Par'
    else
        mensagem = 'Impar'
    
    if (isNaN(soma)){
        soma = 0
        mensagem = 'Par'
    }

    alert("Valor: " + soma + "\n" + mensagem)
}