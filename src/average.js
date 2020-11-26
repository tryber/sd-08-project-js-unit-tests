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

const average = (arr = []) => {
  if (arr.length === 0) return undefined;
  const arrNum = arr;
  const { length } = arrNum;
  let sunNumber = 0;
  for (let index = 0; index < length; index += 1) {
    if (typeof arrNum[index] === 'string') {
      return undefined;
    }
    sunNumber += arrNum[index];
  }
  const result = Math.round(sunNumber / length);
  return result;
};

module.exports = average;
