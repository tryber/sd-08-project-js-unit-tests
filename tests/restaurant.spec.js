/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(typeof createMenu({}), 'object');
    assert.strictEqual(typeof createMenu({}).fetchMenu, 'function');
    assert.strictEqual(typeof createMenu({}).fetchMenu(), 'object');
    assert.deepStrictEqual(createMenu({}).fetchMenu(), {
      drinks: {
      },
      food: {
      },
    });
    //#
    assert.deepStrictEqual(createMenu({ food: {}, drinks: {} }).fetchMenu(), { food: {}, drinks: {} });
    //#
    assert.deepStrictEqual(createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } }).fetchMenu(),
      { food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } });
    assert.deepStrictEqual(createMenu({}).consumption(), []);
    //#
    const test5 = createMenu({});
    test5.order('coxinha')
    assert.deepStrictEqual(test5.consumption(), ['coxinha']);
    //#
    const test6 = createMenu({});
    test6.order("coxinha");
    test6.order("agua");
    test6.order("sopa");
    test6.order("sashimi");
    assert.deepStrictEqual(test6.consumption(), ["coxinha", "agua", "sopa", "sashimi"]);
    //#
    const test7 = createMenu({});
    test7.order("coxinha");
    test7.order("agua");
    test7.order("coxinha");
    assert.deepStrictEqual(test7.consumption(), ["coxinha", "agua", "coxinha"]);
    //#
    const test8 = createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } });
    test8.order("coxinha");
    test8.order("agua");
    test8.order("coxinha");
    console.log(test8.pay())
    assert.strictEqual(test8.pay(), 11.7);

  });
});
