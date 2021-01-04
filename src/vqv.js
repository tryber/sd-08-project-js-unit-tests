const vqv = (nome, idade) => {
  const trybePhrase =
  `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

  if (nome === undefined && idade === undefined) {
    return undefined;
  } return trybePhrase;
};

module.exports = vqv;
