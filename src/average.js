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

const average = (xablau) => {
  if (xablau.length === 0) {
    return undefined;
  }
  let soma = 0;

  for (let index = 0; index < xablau.length; index += 1) {
    if (typeof xablau[index] === 'number') {
      soma += xablau[index];
    } else {
      return undefined;
    }
  }

  const media = soma / xablau.length;

  return Math.round(media);
};
module.exports = average;

console.log(average([2, 2]));
console.log(average([1, 1]));
console.log(average([1, '2']));
