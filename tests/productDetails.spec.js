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
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('xampo', 'sabonete'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.ok(productDetails('xampo', 'sabonete'), Object.entries(productDetails) === 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const produto = productDetails('xampu', 'sabonete');
    for (let i = 0; i < produto.length; i += 1) {
      assert.strictEqual(typeof produto[i], 'object');
    }
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails()[0], productDetails()[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(produto[0].details.productId.endsWith('123'), true);
    assert.strictEqual(produto[1].details.productId.endsWith('123'), true)
  });
});
