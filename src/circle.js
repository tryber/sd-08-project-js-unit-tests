/* eslint-disable max-len */

/*
  Essa função recebe o raio de um círculo,
  retornando um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos! Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1)).toPrecision(2)`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/
const assert = require('assert');

const circle = (radius) => {
  const PI = 3.14;
  if (!radius) { return undefined; }
  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};
assert.strictEqual(typeof circle(5), 'object');
// Teste se o objeto retornado tem 3 entradas.
assert.deepStrictEqual(circle(1), { radius: 1, area: 3.14, circumference: 6.28 });
// Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
assert.strictEqual(circle(), undefined);
// Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
assert.deepStrictEqual(circle(2), { radius: 2, area: 12.56, circumference: 12.56 });
// Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
assert.deepStrictEqual(circle(3), {
  radius: 3,
  area: 28.259999999999998,
  circumference: 18.84,
});
module.exports = circle;
