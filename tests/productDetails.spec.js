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
  const assert = require('assert');
  assert.strictEqual(Array.isArray(productDetails('prod1', 'prod2')), true);
  assert.strictEqual(productDetails('prod1', 'prod2').length, 2);
  assert.strictEqual(typeof productDetails('prod1', 'prod2')[0] === 'object' && typeof productDetails('prod1', 'prod2')[1] === 'object', true);
  assert.notStrictEqual(productDetails('prod1', 'prod2')[0], productDetails('prod1', 'prod2')[1]);
  const arrayProd1Id = Object.values(productDetails('prod1', 'prod2')[0].details);
  const arrayProd2Id = Object.values(productDetails('prod1', 'prod2')[1].details);
  assert.strictEqual(arrayProd1Id[0].slice(-3) ==='123' && arrayProd2Id[0].slice(-3) === '123', true);
  });
});
