function getParam() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("id")

    return c
}

function getbyid() {
    var xhttp = new XMLHttpRequest()
    var url = "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/employee/" + getParam()

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var retorno = JSON.parse(this.responseText)
            preencherCampos(retorno)
        }
    }

    xhttp.open("GET", url, true)
    xhttp.send()
}

function preencherCampos(arr) {
    document.getElementById("nome").value = arr.data.employee_name
    document.getElementById("salario").value = arr.data.employee_age
    document.getElementById("idade").value = arr.data.employee_salary
}

function update() {
    var xhttp = new XMLHttpRequest()
    var url = "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/update/"

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var retorno = JSON.parse(this.responseText)
            window.location.href = "index.html"
        }
    }

    xhttp.open("PUT", url + getParam(), true);
    xhttp.setRequestHeader("Content-type", "application/json");

    var NewEmpregado = {
        name: document.getElementById("nome").value,
        salary: document.getElementById("salario").value,
        age: document.getElementById("idade").value,

    };

    xhttp.send(JSON.stringify(NewEmpregado));
}

function cadastrar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                window.location.href = "index.html"
            }
        }
    };

    xhttp.open("POST", "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/create", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    var NewEmpregado = {
        name: document.getElementById("nome").value,
        salary: document.getElementById("salario").value,
        age: document.getElementById("idade").value,

    };

    xhttp.send(JSON.stringify(NewEmpregado));

}