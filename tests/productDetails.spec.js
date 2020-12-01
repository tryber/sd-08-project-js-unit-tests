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
    const products = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(products), true);
    assert.strictEqual(products.length, 2);
    assert.strictEqual(
      products.some((item) => typeof item !== 'object'),
      false
    );
    assert.notDeepStrictEqual(products[0], products[1]);
    assert.strictEqual(
      products.every((product) => /123$/.test(product.details.productId)),
      true
    );
  });
});
