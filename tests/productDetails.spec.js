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
const retorno = productDetails('Alcool gel', 'Máscara')
let acessProductID0 = retorno[0].details.productId;
let acessProductID1 = retorno[1].details.productId
describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    assert.ok(Array.isArray(productDetails()))// Teste que o retorno da função é um array.
    assert.strictEqual((retorno.length), 2)// Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual((typeof retorno[0]), 'object')// Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual((typeof retorno[1]), 'object')// Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notDeepStrictEqual((retorno[0]),retorno[1])// Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(acessProductID0.substr(acessProductID0.length -3, 3), '123')
    assert.strictEqual(acessProductID1.substr(acessProductID1.length -3, 3), '123')// (Difícil) Teste que os dois productIds terminam com 123.
  });
});
