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
    assert.strictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2)
    assert.strictEqual(typeof (productDetails()[0] && productDetails()[1]), 'object')
    assert.notStrictEqual(productDetails('Alcool gel', 'Máscara')[0], productDetais('Alcool gel', 'Máscara')[1]);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara')[0])
  });
});
