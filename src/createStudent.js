/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = (nameP) => {
  const student = {
    name: nameP,
    feedback: () => 'Eita pessoa boa!',
  };
  return student;
};
createStudent('Leandrão, o Lobo Solitário');
// Estava usando template literals para atribuir nameP à chave name,
// consultei o código do colega Massaki neste ponto.
module.exports = createStudent;
