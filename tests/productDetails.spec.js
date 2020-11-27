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
    const produtos = productDetails('gel', 'mascara');
    
    // Teste que o retorno da função é um array.
    assert.ok(Array.isArray(produtos), 'verifica se é array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.ok(produtos.length === 2, 'teste quant. produtos');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const testeObjetos = (typeof produtos[0] === 'object' && typeof produtos[1] === 'object');
    assert.ok(testeObjetos === true, 'testa se são objetos');
    // Teste que os dois objetos são diferentes entre si.
    const compObj = Object.values(produtos[0]) !== Object.values(produtos[1]);
    assert.ok(compObj === true, 'testa se os objetos são diferentes');
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
