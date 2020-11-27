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
  add: (par1, par2) => par1 + par2,
  mult: (par1, par2) => par1 * par2,
  div: (par1, par2) => Math.trunc(par1 / par2),
  sub: (par1, par2) => par1 - par2,
};

/* console.log(calculator.add(1, 2));
console.log(calculator.mult(1, 3));
console.log(calculator.div(5, 2));
console.log(calculator.sub(7, 1)); */

module.exports = calculator;
