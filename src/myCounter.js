/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  for (var counter_a = 0; counter_a <= 3; counter_a += 1) {
    myArray.push(counter_a);
    for (var counter_b = 2; counter_b <= 3; counter_b += 1) {
      myArray.push(counter_b);
    }
  }
  return myArray;
};

module.exports = myCounter;
