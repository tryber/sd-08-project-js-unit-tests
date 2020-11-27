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

const average = (array) => {
  let result = 0;
  if (
    Object.prototype.toString.call(array) !== '[object Array]' ||
    array.length === 0
  ) {
    //solução encontrada em https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array
    result = undefined;
  }

  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'number') {
      result += array[i];
    } else {
      result = undefined;
      break;
    }
  }
  result = Math.round(result / array.length);
  return result;
};
module.exports = average;
