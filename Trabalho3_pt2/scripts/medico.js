function get() {
    var xhttp = new XMLHttpRequest()
    var url = "https://private-ce040-medicos.apiary-mock.com/medico"

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var retorno = JSON.parse(this.responseText)
            myfunction(retorno)
        }
    }

    xhttp.open("GET", url, true)
    xhttp.send()

    function myfunction(arr) {
        var id = 0
        var out = '<tr class = "table"><th>Id</th><th>Nome</th><th>Especialidade</th></tr>'
        for (let i = 0; i < arr.length; i++) {
            out += '<tr class = "table"><td>' + arr[i]['id'] + '</td>' + '<td>' + arr[i]['nome'] + '</td>' + '<td>' + arr[i]['especialidade'] + '</td>' + '<td>'+
            '<button onclick="alertaa(\'' + id + '\')">Excluir</button>' + '<a href="cadastrar_paciente.html?id=' + id + '">Editar</a></td>' + '</td>' + '</tr>'
            }
            document.getElementById('lista').innerHTML = out
        }
}

function alertaa() {
    var xhttp = new XMLHttpRequest()
    var r = confirm("Voce quer mesmo deletar?");
    if (r == true) {
        var url = "https://private-ce040-medicos.apiary-mock.com/medico/id"
        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 204) {
                alert("Sucesso")
                document.location.reload(true)
            }
        }

        xhttp.open("DELETE", url, true)
        xhttp.send()
    }
}

function getParam() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = ""
    var c = url.searchParams.get("id")

    return c
}

function getbyid() {

    var param = getParam()

    if (param != null) {
        document.getElementById('cadastrar').disabled = true

        
    var xhttp = new XMLHttpRequest()
    var url = "https://private-ce040-medicos.apiary-mock.com/medico/id"


        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var retorno = JSON.parse(this.responseText)
                preencherCampos(retorno)
            }
        }
    
        xhttp.open("GET", url, true)
        xhttp.send()
        
    } else {
        document.getElementById('update').disabled = true
    }
}

function preencherCampos(arr) {
    document.getElementById("nome").value = arr[0].nome
    document.getElementById("especialidade").value = arr[0].especialidade
}

function update() {
    var xhttp = new XMLHttpRequest()
    var url = "https://private-ce040-medicos.apiary-mock.com/medico/id"

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            alert('Medico alterado com sucesso')
            window.location.href = "index.html"
        }
    }

    xhttp.open("PUT", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    var NewEmpregado = {
        nome: document.getElementById("nome").value,
        especialidade: document.getElementById("especialidade").value,

    };

    xhttp.send(JSON.stringify(NewEmpregado));
}

function cadastrar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 201) {
                alert('Cadastrado com sucesso')
                window.location.href = "index.html"
            }
        }
    };

    xhttp.open("POST", "https://private-ce040-medicos.apiary-mock.com/medico", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    var NewEmpregado = {
        nome: document.getElementById("nome").value,
        especialidade: document.getElementById("especialidade").value,
    };

    xhttp.send(JSON.stringify(NewEmpregado));

}