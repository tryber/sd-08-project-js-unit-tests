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
    assert.strictEqual(
      Array.isArray(productDetails('Alcool gel', 'Máscara')),
      true,
    );
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const arr = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(
      [typeof arr[0], typeof arr[1]],
      ['object', 'object'],
    );
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(
      productDetails('Alcool gel', 'Máscara')[0],
      productDetails('Alcool gel', 'Máscara')[1],
    );
    // (Difícil) Teste que os dois productIds terminam com 123.
    const detailsFirst = arr[0].details.productId;
    const endFirst = detailsFirst.substr(
      detailsFirst.length - 3,
      detailsFirst.length,
    );
    const detailsSecond = arr[0].details.productId;
    const endSecond = detailsSecond.substr(
      detailsSecond.length - 3,
      detailsSecond.length,
    );
    assert.strictEqual(endFirst, '123');
    assert.strictEqual(endSecond, '123');
  });
});
