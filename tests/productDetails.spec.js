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
    let expected = productDetails('mascara', 'alcool');
    assert.strictEqual(Array.isArray(productDetails('mascara', 'alcool')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    expected = Object.keys(productDetails('mascara', 'alcool')).length
    assert.strictEqual = (expected, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    expected = Object.values(productDetails('mascara', 'alcool'));
    assert.deepStrictEqual(typeof(expected), 'object' );
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(expected[0], expected[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const finalWords = expected[0].details.productId;
    const finalWordsTwo = expected[1].details.productId;
    const resultFirst = finalWords.slice(-3);
    const resultSecond = finalWordsTwo.slice(-3);
    let finalResult = false;
    if(resultFirst === "123" && resultSecond === "123"){
      finalResult = true;
    }
    assert.deepStrictEqual( finalResult, true);
  });
});
