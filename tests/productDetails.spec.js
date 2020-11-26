/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const type = require('devtools-type');
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
    assert.strictEqual(type.is.array(productDetails('Alcool gel', 'Máscara')), true);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.strictEqual(type.is.object(productDetails('Alcool gel', 'Máscara')[0]), true);
    assert.strictEqual(type.is.object(productDetails('Alcool gel', 'Máscara')[1]), true);
    assert.strictEqual(
      productDetails('Alcool gel', 'Máscara')[0] === productDetails('Alcool gel', 'Máscara')[1],
      false,
    );

    assert.strictEqual(
      productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123'),
      true,
    );
    assert.strictEqual(
      productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123'),
      true,
    );
  });
});
