function media () {
    var n1 = parseInt(document.getElementById("primeiroNumero").value);
    var n2 = parseInt(document.getElementById("segundoNumero").value);
    var n3 = parseInt(document.getElementById("terceiroNumero").value);
    var n4 = parseInt(document.getElementById("quartoNumero").value);
    var resultado = (n1+n2+n3+n4)/4;
    document.getElementById("resultado").innerHTML += "A média dos números acima é:" + resultado;
}