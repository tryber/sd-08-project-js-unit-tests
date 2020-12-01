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
    assert.strictEqual(Array.isArray(productDetails('papel', 'caneta')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual((productDetails('papel', 'caneta')).length === 2, true)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(productDetails('papel', 'caneta')[0]) && typeof(productDetails('papel', 'caneta')[1]) === 'object', true)
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails('papel', 'caneta')[0] !== (productDetails('papel', 'caneta')[1]), true)
    // (Difícil) Teste que os dois productIds terminam com 123.
    
    const idProduct1 = productDetails('papel', 'caneta')[0].details.productId;
    const idProduct2 = productDetails('papel', 'caneta')[1].details.productId;

    const size1 = idProduct1.length;
    const size2 = idProduct2.length;

    const last1 = idProduct1.slice(size1 - 3);
    const last2 = idProduct2.slice(size2 - 3);

    assert.strictEqual(last1 === last2, true);
  });
});
