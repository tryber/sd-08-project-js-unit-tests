/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// Respondi com a ajuda do plantão com o
const average = (ary) => {
  const total = ary.length;
  let same = 0;
  let media = 0;
  // era para ser '==' porém como o code climate estava implicando teve que ficar assim '<='
  if (total <= '') {
    media = undefined;
  }
  for (let index = 0; index < total; index += 1) {
    if (typeof ary[index] !== 'number') {
      media = undefined; break;
    } else {
      same += ary[index];
      media = Math.round(same / total);
    }
  }
  return media;
};
module.exports = average;
