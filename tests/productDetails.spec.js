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
    const products1 = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(products1), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    const products2 = productDetails('Carne', 'Arroz');
    const lengthArray = products2.length;
    assert.strictEqual(lengthArray, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const products3 = productDetails('Cerveja', 'Vinho');
    const objectInArray = typeof products3[0] === 'object' && typeof products3[1] === 'object' ? true : false;
    assert.strictEqual(objectInArray, true);

    // Teste que os dois objetos são diferentes entre si.
    const products4 = productDetails('Limão', 'Laranja');
    const iten1 = products4[0];
    const iten2 = products4[1];
    assert.notDeepStrictEqual(iten1, iten2);

    // (Difícil) Teste que os dois productIds terminam com 123.
    const products5 = productDetails('Coca-cola', 'Nike');
    const itens = `${products5[0].details.productId}, ${products5[1].details.productId}`;
    assert.strictEqual(itens, 'Coca-cola123, Nike123');

  });
});
