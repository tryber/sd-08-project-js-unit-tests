/*
  A função numbers recebe um array (tamanho variável),
  retornando true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false
*/

const numbers = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return false;
    }
  }
  return true;
};

module.exports = numbers;
