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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const product = productDetails('Álcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(product), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(product.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (index = 0; index < product.length; index += 1) {
      assert.strictEqual(typeof (product[index]), 'object')
    }
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(product[1], product[2]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    for (index = 0; index < product.length; index += 1) {
      assert.strictEqual(product[index].details.productId.endsWith('123'), true)
    }
  });
});
//método endsWith retirada do link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith