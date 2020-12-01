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
  add: (primeiroNumero, segundoNumero) => {
    const addResult = primeiroNumero + segundoNumero;
    return addResult;
  },
  mult: (primeiroNumero, segundoNumero) => {
    const multResult = primeiroNumero * segundoNumero;
    return multResult;
  },
  div: (primeiroNumero, segundoNumero) => {
    const divResult = primeiroNumero / segundoNumero;
    return Math.trunc(divResult);
  },
  sub: (primeiroNumero, segundoNumero) => {
    const subResult = primeiroNumero - segundoNumero;
    return subResult;
  },
};

module.exports = calculator;
