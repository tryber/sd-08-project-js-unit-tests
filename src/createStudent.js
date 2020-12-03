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

// const createStudent = (studentName) => {
//   const student  = {
//     name: studentName,
//     feedback: 'Eita pessoa boa!',
//     // console.log(createStudent('João'))
//   };
//   return student
//   // console.log(createStudent('João'))
// };

// // console.log(createStudent('João'))

// module.exports = createStudent;

// // console.log(createStudent('João'))


// const createStudent = (string) => {
//   const student = {
//     name: string,
//     feedback: () => 'Eita pessoa boa!',
//   };
//   return student;
// };

const createStudent = name => ({
  name,
  feedback: () => {
    const msg = 'Eita pessoa boa!';
    return msg;
  },
});

module.exports = createStudent;