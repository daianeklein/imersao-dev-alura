function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith("jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.log("Nome de Filme inválido");
  }

  document.getElementById("filme").value = "";

  // console.log(filmeFavorito);
  // console.log(elementoFilmeFavorito);
  // console.log(elementoListaFilme);
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilme = document.getElementById("listaFilmes");

  elementoListaFilme.innerHTML =
    elementoListaFilme.innerHTML + elementoFilmeFavorito;
}
