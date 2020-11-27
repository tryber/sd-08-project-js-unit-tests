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
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[1], 'object');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const fun = productDetails('Alcool gel', 'Máscara');
    assert.notDeepStrictEqual(fun[0], fun[1]);
    // Teste que os dois objetos são diferentes entre si.
    const final1 = fun[0].details.productId;
    const final2 = fun[1].details.productId;
    const f1231 = final1.substr(final1.length - 3);
    const f1232 = final2.substr(final2.length - 3);
    assert.strictEqual(f1231, '123');
    assert.strictEqual(f1232, '123');
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});







