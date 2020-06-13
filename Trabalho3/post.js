var xhttp = new XMLHttpRequest()
var url = 'https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/create'


function cadastrar() {
    function create_dict() {
        var dict = {
            "name": document.getElementById('nome'),
            "salary": document.getElementById('salary'),
            "age": document.getElementById("age")
        }

        return dict
    }

    xhttp.open("POST", url, true)

    xhttp.setRequestHeader("Content-Type", "raw")

    xhttp.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            alert('Deu certo')
        }
    }

    xhttp.send(create_dict())
}