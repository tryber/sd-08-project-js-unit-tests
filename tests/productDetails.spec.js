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
    assert.strictEqual(Array.isArray(productDetails('azul', 'preto')), true);
    assert.strictEqual(productDetails('azul', 'preto').length, 2);
    assert.strictEqual(typeof Object.keys(productDetails('azul', 'preto')), 'object');
    assert.strictEqual(productDetails('azul', 'preto')[0] !== productDetails('azul', 'preto')[1], true)
    assert.strictEqual(productDetails('azul', 'preto')[0].details.productId.endsWith('123') && productDetails('azul', 'preto')[1].details.productId.endsWith('123'), true);
  });
});
