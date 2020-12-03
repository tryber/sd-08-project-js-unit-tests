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
    assert.ok(Array.isArray(productDetails('Alcool', 'Algodão')));
    assert.deepStrictEqual(productDetails('Alcool', 'Algodão').length, 2)
    assert.deepStrictEqual(typeof productDetails('Alcool', 'Algodão')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('Alcool', 'Algodão')[1], 'object');
    assert.notDeepStrictEqual(Object.entries(productDetails('Alcool', 'Algodão')[0]).sort(), Object.entries(productDetails('Alcool', 'Algodão')[1]).sort())
    assert.deepStrictEqual(Object.values(productDetails('Alcool', 'Algodão'))[0].details.productId.substring(Object.values(productDetails('Alcool', 'Algodão'))[0].details.productId.length - 3, Object.values(productDetails('Alcool', 'Algodão'))[0].details.productId.length), '123');
    assert.deepStrictEqual(Object.values(productDetails('Alcool', 'Algodão'))[1].details.productId.substring(Object.values(productDetails('Alcool', 'Algodão'))[1].details.productId.length - 3, Object.values(productDetails('Alcool', 'Algodão'))[1].details.productId.length), '123');
  });
});
