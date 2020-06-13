var xhttp = new XMLHttpRequest()



function get() {
    var url = "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/employees"

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var retorno = JSON.parse(this.responseText)
            myfunction(retorno)
        }
    }

    xhttp.open("GET", url, true)
    xhttp.send()

    function myfunction(arr) {
        var out = '<tr><th>Id</th><th>Nome</th><th>Salario</th><th>Idade</th><th>Açoes</th></tr>'
        for (let i = 0; i < arr.data.length; i++) {
            out += '<tr><td>' + arr.data[i]['id'] + '</td>' + '<td>' + arr.data[i]['employee_name'] + '</td>' + '<td>' + arr.data[i]['employee_salary'] + '</td>' + '<td>' + arr.data[i]['employee_age'] + '</td>' +
                '<td><a href="teste.html">Excluir</a></td>' + '<td><a href="teste.html"> | Editar</a></td>' + '</tr>'
        }

        document.getElementById('lista').innerHTML = out
    }
}