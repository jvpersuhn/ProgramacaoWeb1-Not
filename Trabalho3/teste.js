function saveInputs() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                alert("Cadastrado com sucesso")
            }
        }
    };

    xhttp.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    var NewEmpregado = {
        name: document.getElementById("nome").value,
        salary: document.getElementById("salario").value,
        age: document.getElementById("idade").value,

    };

    xhttp.send(JSON.stringify(NewEmpregado));

}