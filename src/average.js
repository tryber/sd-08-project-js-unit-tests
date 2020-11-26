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
  let contador = 0;
  //if (arr === null) {
  // return undefined;
  // }
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof arr[index] !== 'number') {
      return undefined;
    } else {
      contador += Math.round(arr[index]);
    }
  }
  return contador / arr.length;
  // const arrayInt = Math.round(arr);
};

module.exports = average;

/*const array = [2.4, 2.7, 2.9];
const zez = [];
let zdzssd = 0;
for (let i = 0; i < array.length; i++) {
  zdzssd += Math.round(array[i]);

  /* zez.push(Math.round(array[i]));
  console.log(zez); 
}
let divisao = zdzssd / array.length;
console.log(divisao); */
