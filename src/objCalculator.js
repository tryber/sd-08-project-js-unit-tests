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
  add: (integer1, integer2) => integer1 + integer2,
  mult: (integer1, integer2) => integer1 * integer2,
  div: (integer1, integer2) => Math.floor(integer1 / integer2),
  sub: (integer1, integer2) => integer1 - integer2,
};

module.exports = calculator;
