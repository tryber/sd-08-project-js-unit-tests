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
    assert.strictEqual(Array.isArray(productDetails('product1','product2')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('product1','product2')[0], 'object');
    assert.strictEqual(typeof productDetails('product1','product2')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('product1','product2')[0], productDetails('produto1','produto2')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const endOfProduct1 = Object.values(productDetails('1','2')[0].details.productId);
    const endOfProduct2 = Object.values(productDetails('1','2')[1].details.productId);
    assert.strictEqual(`${endOfProduct1[1]}${endOfProduct1[2]}${endOfProduct1[3]}`, '123');
    assert.strictEqual(`${endOfProduct2[1]}${endOfProduct2[2]}${endOfProduct2[3]}`, '123');
  });
});
