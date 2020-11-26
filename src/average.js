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

const average = (arr) => {
  let sumOfTheNumbers = 0;
  if (arr.lenght === 0) {
    return undefined;
  }

  for (let index = 1; index < arr.lenght; index += 1) {
    if (typeof arr[index] !== 'number') {
      return undefined;
    }
    sumOfTheNumbers += arr[index];
  }

  return Math.round(sumOfTheNumbers) / arr.lenght;
};

module.exports = average;
