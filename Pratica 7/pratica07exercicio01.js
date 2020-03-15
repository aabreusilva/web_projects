function mostra(valortotal, valorfalta) {
  mensagem.innerHTML = "Nota: " + valortotal + " falta:" + valorfalta;
}

function mostraaprovado(valortotal, valorfalta) {
  if (valortotal >= 70 && valorfalta <= 3) {
    mensagem.innerHTML = "Nota: " + valortotal + ", falta:" + valorfalta + ", Situação: Aprovado.";
  }
  else {
    mensagem.innerHTML = "Nota: " + valortotal + ", falta:" + valorfalta + ", Situação: Reprovado.";
  }
}