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
const average = (numbers) => {
  let output;
  if (numbers.length > 0) {
    let flag = true;
    let sum = 0;
    numbers.forEach((number) => {
      console.log(typeof (number) === 'number');
      if (typeof (number) === 'number') {
        sum += number;
      } else {
        flag = false;
      }
    });
    if (flag) {
      output = Math.round(sum / numbers.length);
    }
  }
  return output;
};

module.exports = average;
