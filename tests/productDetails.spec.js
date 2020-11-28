/* eslint-disable max-len */
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
    assert.strictEqual(Array.isArray((productDetails('alcool', 'mascara'))), true);
    assert.strictEqual(productDetails('teste-1', 'teste-2').length, 2);
    assert.strictEqual(productDetails('teste-1', 'teste-2').every((value, index, values) => {
      let flag = false;
      if (typeof (value) === 'object' && !flag) flag = true;
      else flag = false;
      return flag;
    }), true);
    assert.strictEqual(productDetails('teste-1', 'teste-2').every((value, index, values) => {
      let output = 0;
      values.forEach((valueTest) => {
        if (value.name === valueTest.name) {
          output += 1;
        }
      });
      if (output === 1) return true;
      return false;
    }), true);
    assert.strictEqual(productDetails('teste-1', 'teste-2').every((value) => {
      let output = 0;
      const pattern = /123$/;
      output = pattern.test(value.details.productId);
      return output;
    }), true);
  });
});
