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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (productDetails('str1', 'str2')), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    const productKeysLength = Object.keys(productDetails('str1', 'str2')).length;
    assert.strictEqual(productKeysLength, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const productKey = Object.keys(productDetails('str1', 'str2'));
    assert.strictEqual(typeof (productKey), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const productEntries = Object.entries(productDetails('str1', 'str2'))
    assert.notStrictEqual(productEntries[0], productEntries[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const productValues = Object.values(productDetails('str1', 'str2'));
    const prodId1 = productValues[0].details.productId;
    const prodIdend1 = prodId1.slice(prodId1.length-3);
    const prodId2 = productValues[0].details.productId;
    const prodIdend2 = prodId2.slice(prodId2.length-3);
    assert.strictEqual(prodIdend1, prodIdend2);
  });
});
