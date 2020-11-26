/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

function sum(num1, num2) {
  return num1 + num2;
}
function multp(num1, num2) {
  return num1 * num2;
}
function divs(num1, num2) {
  return Math.round(num1 / num2) - 1;
}
function subs(num1, num2) {
  return num1 - num2;
}
const calculator = {
  add: sum,
  mult: multp,
  div: divs,
  sub: subs,
};

module.exports = calculator;
