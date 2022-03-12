//var listaFilmes = ["Yesterday", "A chegada", "Star Wars", "Harry Potter"];

//listaFilmes.push("Harry Potter 2");

//console.log(listaFilmes[0]);
//console.log(listaFilmes[1]);
//console.log(listaFilmes[2]);

//document.write("<p>" + listaFilmes[3] + "</p>");

var listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  "https://i.ytimg.com/vi/-PaOb8CRUSM/movieposter_en.jpg",
  "https://i.pinimg.com/originals/93/55/7f/93557f9394b184f697d4239ca9b4c1f6.png"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
