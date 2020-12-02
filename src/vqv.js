/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  if (nome === null && idade === null) {
    return undefined;
  }
  const sentence =
  `Oi, meu nome é ${nome}!
  Tenho ${idade} anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`;
  return sentence;
};
vqv('Víctor', 28);

module.exports = vqv;
