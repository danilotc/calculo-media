function calcular() {
  // Acessando elementos na Árvore DOM
  var campo1 = Number(document.querySelector("#txtn1").value);
  var campo2 = Number(document.querySelector("#txtn2").value);
  var setCalc = document.getElementsByName("rad");
  var resultado = document.querySelector("#resultado");

  // Variáveis que terão seus valores atribuídos dinamicamente
  // com base no cálculo escolhido
  var formula = "";
  var calcMedia = 0;
  var diferenca = "";
  var mediaExigida = 0;

  // prettier-ignore
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
    // Convertendo resultado para string e extraindo os três
    // primeiros caracteres para considerar apenas uma única
    // casa decimal com precisão, sem arredondar.
    // Além disso, formatando resultado final com bootstrap
    // usando interpolação de string.
    resultado.innerHTML = `
      <div class="card">
        <div class="card-body">
          <p>Média exigida: ${mediaExigida.toFixed(1)}</p>
          <p>Fórmula: ${formula}</p>
          <p>Média: ${calcMedia.toFixed(1)}</p>
          <p>${diferenca}</p>
        </div>
      </div>
    `;
  }
}
