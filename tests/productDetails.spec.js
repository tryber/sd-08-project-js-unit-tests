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
    assert.deepStrictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(productDetails().length, 2);
    assert.deepStrictEqual(typeof productDetails()[0], 'object');
    assert.deepStrictEqual(typeof productDetails()[1], 'object');
    assert.notDeepStrictEqual(productDetails('Alcool gel', 'Máscara')[0], productDetails('Alcool gel', 'Máscara')[1]);
    const productIds = productDetails('Alcool gel', 'Máscara');
    let resultado = false;
    for (let i = 0; i < productIds.length; i += 1) {
      const idDoProduto = productIds[i].details.productId;
      let aux = '';
      for (let j = idDoProduto.length -3; j < idDoProduto.length; j += 1) {
        aux += idDoProduto[j];
      }
      if (aux !== '123') {
        resultado = false;
      } else {
        resultado = true;
      }
    }
    assert.strictEqual(resultado, true);
  });
});
