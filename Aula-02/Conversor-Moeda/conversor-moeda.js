function Converter() {
  var valorElemento = parseFloat(document.getElementById("valor").value);
  var valorEmReal = valorElemento * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
