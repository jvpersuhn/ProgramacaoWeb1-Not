function inicia() {
  var film = {
     titulo: "Vingadores: Ultimato",
     ano : "2019",
     genero : "Ação/Ficção Científica",
     infoFilme : function() {
       return "<strong> - Filme 1:</strong> " + this.titulo + " - " + this.ano + " - " + this.genero;
     }
   };
   document.getElementById("film1").innerHTML = film.infoFilme();
 
   var film2 = {
     titulo: "Coringa",
     ano : "2019",
     genero : "Drama",
     infoFilme : function() {
       return "<strong> - Filme 2:</strong> " + this.titulo + " - " + this.ano + " - " + this.genero;
     }
   };
 
   document.getElementById("film2").innerHTML = film2.infoFilme();
 
   var film3 = {
     titulo: "O Rei Leão",
     ano : "2019",
     genero : "Animação",
     infoFilme : function() {
       return "<strong> - Filme 3:</strong> " + this.titulo + " - " + this.ano + " - " + this.genero;
     }
   };
 
   document.getElementById("film3").innerHTML = film3.infoFilme();
  
}