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

const AverageReturn = (a, b) => {
  if (b === 0) {
    return undefined;
  }
  return Math.round(a / b);
};

const average = (arr) => {
  const l = arr.length;
  let sum = 0;

  for (let i = 0; i < l; i += 1) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    }
    sum += arr[i];
  }
  return AverageReturn(sum, l);
};

module.exports = average;
