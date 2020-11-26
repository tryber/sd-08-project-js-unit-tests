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
    const test = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (test), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(test.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (test[0]), 'object');
    assert.strictEqual(typeof (test[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(test[0],test[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const product1 = test[0].details.productId;
    const product2 = test[1].details.productId;
    let checkProduct1 = 0;
    let checkProduct2 = 0;
    if (product1[product1.length-1] === '3') {
      if (product1[product1.length-2] === '2') {
        if (product1[product1.length-3] === '1') {
          checkProduct1 = 1;
        }
      }
    }
    assert.strictEqual(checkProduct1, 1);
    if (product2[product2.length-1] === '3') {
      if (product2[product2.length-2] === '2') {
        if (product2[product2.length-3] === '1') {
          checkProduct2 = 1;
        }
      }
    }
    assert.strictEqual(checkProduct2,1);
  });
});