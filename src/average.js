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

//Compara Arrays
let a;
let b;
function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


const average = (array) => {
  let mean = 0;
  let sum = 0;
  if (arrayEquals(array, []) === true) {
    return undefined;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (typeof (array[i]) !== 'number') {
        return undefined;
      } else {
        sum = Math.round(sum) + Math.round(array[i]);
      };
    };
    mean = Math.round(sum) / array.length;
    return Math.round(mean);
  };
};

/* console.log(average([]));
console.log(average([1, 2]));
console.log(average([1, 1]));
console.log(average([1, '2']));
console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, 2, '3'])); */

module.exports = average;
