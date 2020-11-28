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

const calculator = {
  add: function add (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return Math.floor(a + b);
    }
  },
  sub: function sub (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return Math.floor(a - b);
    }
  },
  mult: function mult (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return Math.floor(a * b);
    }
  },
  div: function div (a, b) {
    if (typeof a === 'number' && typeof b === 'number' && b !== 0) {
      return Math.floor(a / b);
    }
  },
};

module.exports = calculator;
