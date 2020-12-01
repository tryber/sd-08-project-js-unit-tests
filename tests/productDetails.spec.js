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
    const verifyKeys = Object.keys(productDetails('x', 'y')).length;
    const verifyEntries = Object.entries(productDetails('mascara', 'whatever'));
    const verifyValues = Object.values(productDetails('mascara', 'whatever'));
    const productId1 = productDetails('mascara', 'whatever')[0].details.productId.slice(-3).includes('123');
    const productId2 = productDetails('mascara', 'whatever')[1].details.productId.slice(-3).includes('123');
    assert.deepStrictEqual(typeof productDetails('x', 'y'), 'object');
    assert.strictEqual(verifyKeys, 2);
    assert.strictEqual(typeof verifyEntries, 'object');
    assert.notDeepStrictEqual(verifyValues[0], verifyValues[1]);
    assert.strictEqual(productId1, productId2);
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
