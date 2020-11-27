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
    
    const testArray = productDetails('comb', 'pen');
    const productIdNumbers = (index) => {
      const obj = testArray[index];
      const id = obj.details.productId
      return id.slice(-3);
    }
    assert.strictEqual(Array.isArray(testArray), true);
    assert.strictEqual(testArray.lenght, 2);
    assert.strictEqual(typeof testArray[0], 'object');
    assert.strictEqual(typeof testArray[1], 'object');
    assert.notDeepStrictEqual(testArray[0], testArray[1]);
    assert.strictEqual(productIdNumbers(0), '123');
    assert.strictEqual(productIdNumbers(1), '123');

  });
});
