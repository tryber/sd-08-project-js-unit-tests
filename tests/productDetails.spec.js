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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(productDetails('a', 'b').length, 2);
    const item1 = productDetails('a', 'b')[0];
    const item2 = productDetails('a', 'b')[1];
    let itensObjetos = null;
    if (typeof item1 === 'object' && typeof item2 === 'object') {
      itensObjetos = 'object';
    }
    assert.strictEqual(itensObjetos, 'object');
    assert.notDeepStrictEqual(item1, item2);
    const firstProductId = productDetails('a', 'b')[0].details.productId;
    const secondProductId = productDetails('a', 'b')[1].details.productId;
    let endFirstId = '';
    let endSecondId = '';
    for (let iFirst = firstProductId.length - 3; iFirst < firstProductId.length; iFirst += 1) {
      endFirstId += firstProductId[iFirst];
    }
    for (let iSecond = secondProductId.length - 3; iSecond < secondProductId.length; iSecond += 1) {
      endSecondId += secondProductId[iSecond];
    }
    let endIs123 = '';
    if (endFirstId === '123' && endSecondId === '123') {
      endIs123 = '123';
    }
    assert.strictEqual(endIs123, '123');
  });
});
