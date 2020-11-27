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

const divider = (a, b) => {
  const div = Math.floor(a / b);
  return div;
};

const multiplier = (a, b) => {
  const mult = a * b;
  return mult;
};

const adder = (a, b) => {
  const add = a + b;
  return add;
};

const subtract = (a, b) => {
  const sub = a - b;
  return sub;
};

const calculator = {
  add: adder,
  mult: multiplier,
  div: divider,
  sub: subtract,
};

module.exports = calculator;
