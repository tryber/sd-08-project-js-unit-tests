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
      Object.prototype.toString.call(productDetails('Xablau', 'Xablimbo')),
      '[object Array]'
    );
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Xablau', 'Xablimbo').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(
      [
        Object.prototype.toString.call(productDetails('Xablau', 'Xablimbo')[0]),
        Object.prototype.toString.call(productDetails('Xablau', 'Xablimbo')[1]),
      ],
      ['[object Object]', '[object Object]']
    );
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(
      productDetails('Xablau', 'Xablimbo')[0],
      productDetails('Xablau', 'Xablimbo')[1]
    );
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(
      [
        productDetails('Xablau', 'Xablimbo')[0].details.productId.replace(
          /[^123]/gi,
          ''
        ),
        productDetails('Xablau', 'Xablimbo')[1].details.productId.replace(
          /[^123]/gi,
          ''
        ),
      ],
      ['123', '123']
    );
  });
});
