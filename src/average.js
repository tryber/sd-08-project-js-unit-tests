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
const checkArray = (array) => {
  let countOfError = 0;
  for(let i = 0; i < array.length; i += 1) {
    if (typeof array[i] == 'string') {
      countOfError += 1;
    }
  }
  if (array.length == 0 ) {
    countOfError += 1;
  }
  return countOfError;
}
const average = (array) => {
  let check = checkArray(array);
  let result = 0;
  if (check >= 1) {
    result = undefined;
  } else {
    result = Math.round(array.reduce((sum, item) => sum += item, 0) / array.length);
  }
  return result;
};
module.exports = average;
