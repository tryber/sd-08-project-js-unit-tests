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
  let trueResult = 0;
  let result = 0; 
  if (Object.prototype.toString.call(array) !== '[object Array]' || array === []) { //solução encontrada em https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array
     trueResult = undefined;
     for (let i = 0; i < array.length; i += 1) {
       if (typeof array[i] !== 'number') {
         trueResult = undefined;
         console.log(trueResult)
       } else {
       result += array[i];
        console.log(result)
     }
     }
   
   trueResult = (Math.round(result / array.length)) 
    return trueResult
  }}
console.log(average(['um', 'dois', 'tres']))
module.exports = average;
