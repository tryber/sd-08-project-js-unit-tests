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
  let total = 0;
  const isArray = Array.isArray(array);
  function isNumber(element) {
    return (typeof element === 'number');
  }
  const isNumbers = array.every(isNumber);
  const isNotEmpty = array.length !== 0;

  if (isArray && isNumbers && isNotEmpty) {
    array.forEach((element) => {
      total += element;
    });
  } else {
    return undefined;
  }

  return Math.round(total / array.length);
};

module.exports = average;
