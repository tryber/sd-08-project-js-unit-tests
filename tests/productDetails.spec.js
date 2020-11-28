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
    const product = productDetails('Álcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(product), true);
    assert.strictEqual(product.length, 2);
    for (let item = 0; item < product.length; item += 1) {
      assert.strictEqual(typeof product[item], 'object');
      assert.strictEqual(product[item].details.productId.endsWith('123'), true)
    }
    const equal = product[0] === product[1];
    assert.deepStrictEqual(equal, false);
  });
});
