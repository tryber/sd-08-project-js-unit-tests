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
    const test = productDetails('Alcool gel', 'Máscara');
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(typeof (test), 'object');
    assert.strictEqual(test.length, 2);
    assert.strictEqual(typeof (test[0], test[1]), 'object');
    assert.notDeepStrictEqual(typeof (test[0], test[1]), 'object');
    
    const produto1 = test[0].details.productId;
    const produto2 = test[1].details.productId;
    let checkProduto1 = 0;
    let checkProduto2 = 0;
    if (product1[produto1.length-1] === '3') {
      if (product1[produto1.length-2] === '2') {
        if (product1[produto1.length-3] === '1') {
          checkProduto1 = 1;
        }
      }
    }
    assert.strictEqual(checkProduto1, 1);
    if (produto2[produto2.length-1] === '3') {
      if (produto2[produto2.length-2] === '2') {
        if (produto2[produto2.length-3] === '1') {
          checkProduto2 = 1;
        }
      }
    }
    assert.strictEqual(checkProduto2,1);
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
