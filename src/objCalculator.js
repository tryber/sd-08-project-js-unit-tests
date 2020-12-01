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
  add: (numer1, numer2)=>numer1 + numer2, 
  mult: (numer1, numer2)=>numer1 * numer2,
  div: (numer1, numer2)=>Math.floor(numer1 / numer2),
  sub: (numer1, numer2)=>numer1 - numer2,
};

module.exports = calculator;
