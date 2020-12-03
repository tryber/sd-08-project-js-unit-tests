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

const aux = productDetails('Alcool gel', 'Máscara')
const firstID = aux[0].details.productId.slice(-3)
const secondID = aux[1].details.productId.slice(-3)


describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
  
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('a', 'b').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('a', 'b'), 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails(), false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(firstID === secondID, true)

  });
});
