

function inicia() {
    var list = ["HTML", "CSS", "JavaScript", "SQL","BOOTSTRAP"];
    var tamanho = list.length;
    
    var texto = "<ul>";
    for (i = 0; i < tamanho; i++) {
        texto += "<li>" + list[i] + "</li>";
    }
    texto += "</ul>";
    
    document.getElementById("lista").innerHTML = texto;
    
}