const createStudent = (nome) => {
  const output = {
    name: nome,
    feedback: () => 'Eita pessoa boa!',
  };
  return output;
};

const estudante = createStudent('Leandrão, o Lobo Solitário')

console.log(estudante.name); // Retorna: 'Leandrão, o Lobo Solitário'
console.log(estudante.feedback()); // Retorna: 'Eita pessoa boa!'