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
    assert.deepStrictEqual(typeof productDetails('test1', 'test2'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('test1', 'test2').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('test1', 'test2')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('test1', 'test2')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(
      productDetails('test1', 'test2')[0],
      productDetails('test1', 'test2')[1]
    );
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.notDeepStrictEqual(
      () => {
        const array = productDetails('test1', 'test2')[0].details.productId.split();
        const newArray = []
        for (let index = array.length; index >= array.length - 3; index -= 1){
          newArray.push(array[index]);
        }
        return newArray;
      },
      ['3','2','1',]
    );
    assert.notDeepStrictEqual(
      () => {
        const array = productDetails('test1', 'test2')[1].details.productId.split();
        const newArray = []
        for (let index = array.length; index >= array.length - 3; index -= 1){
          newArray.push(array[index]);
        }
        return newArray;
      },
      ['3','2','1',]
    );
  });
});
