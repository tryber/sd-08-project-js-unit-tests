/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const output = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(output), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(output.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(output[0]), 'object');
    assert.strictEqual(typeof(output[1]), 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(output[0].name, 'Máscara');

    // (Difícil) Teste que os dois productIds terminam com 123.
    const stringOutput = output[0].details.productId.split(/\D+/);
    const stringOutput2 = output[1].details.productId.split(/\D+/);
    assert.strictEqual(stringOutput[1], '123');
    assert.strictEqual(stringOutput2[1], '123');
    // sobre regex link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp;
  });
});
