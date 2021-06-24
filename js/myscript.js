function calcular() {
  // Acessando elementos na Árvore DOM
  var campo1 = Number(document.querySelector("#txtn1").value);
  var campo2 = Number(document.querySelector("#txtn2").value);
  var setCalc = document.getElementsByName("rad");
  var resultado = document.querySelector("#resultado");

  // Variáveis que terão seus valores alterados dinamicamente
  // com base no cálculo escolhido
  var formula = "";
  var calcMedia = 0.0;
  var diferenca = "";
  var mediaExigida = 0.0;

  if (campo1 == "" || campo2 == "") {
    alert("[ERRO] Verifique os campos e tente novamente!")
  }
  else {
    // se a média das unidades estiver marcada
    if (setCalc[0].checked) {
      mediaExigida = 6.0;
      calcMedia = ((campo1 * 4)+(campo2 * 6)) / 10;
      formula = `((${campo1} x 4)+(${campo2} x 6)) / 10`
      if (calcMedia < 6.0) {
        diferenca = 'Diferença: ' + String((6.0 - calcMedia).toFixed(1));
      }
    }
    // se a média final estiver marcada
    else if (setCalc[1].checked) {
      mediaExigida = 5.0;
      calcMedia = ((campo1 * 6)+(campo2 * 4)) / 10;
      formula = `((${campo1} x 6)+(${campo2} x 4)) / 10`;
      if (calcMedia < 5.0) {
        diferenca = 'Diferença: ' + String((5.0 - calcMedia).toFixed(1));
      }
    }
    // Considerando apenas uma única casa decimal na mediaExigida e no calcMedia. 
    // A diferenca também está considerando uma casa decimal, mas ela está sendo
    // convertida para string por causa da concatenação no fluxo.
    resultado.innerHTML = `
      <p class="badge bg-danger text-wrap">Média exigida: ${mediaExigida.toFixed(1)}</p>
      <p>Fórmula: ${formula}</p>
      <p>Média: ${calcMedia.toFixed(1)}</p>
      <p>${diferenca}</p>
    `;
  }
}
