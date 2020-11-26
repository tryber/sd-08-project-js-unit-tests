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
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (productDetails('Vodka', 'Energético')), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Vodka', 'Energético').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails('Vodka', 'Energético')[0]), 'object');
    assert.strictEqual(typeof (productDetails('Vodka', 'Energético')[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Vodka', 'Energético')[0], productDetails('Vodka', 'Energético')[1])
    // (Difícil) Teste que os dois productIds terminam com 123.
    const  produto1 = productDetails('Vodka', 'Energético')[0].details.productId;
    const index1 = produto1.length
    assert.strictEqual(produto1[index1 - 3] + produto1[index1 - 2] + produto1[index1 - 1], '123');

    const  produto2 = productDetails('Vodka', 'Energético')[1].details.productId;
    const index2 = produto2.length
    assert.strictEqual(produto2[index2 - 3] + produto2[index2 - 2] + produto2[index2 - 1], '123');
  });
});
