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
    const functionOutput = createMenu({ food: {}, drink: {} });
    const object = { food: {}, drink: {} }

    assert.deepStrictEqual(Object.entries(createMenu({objeto: 'qualquer'}))[0], [ 'fetchMenu', { objeto: 'qualquer' } ]);
    
    assert.deepStrictEqual(Object.keys(functionOutput.fetchMenu), [ 'food', 'drink' ]);
    
    assert.deepStrictEqual(functionOutput.fetchMenu, object);
    
    assert.deepStrictEqual(createMenu(functionOutput).consumption, []);
    
    const verificaFuncao = (pedidoQualquer) => {
      const pedido = createMenu()
      pedido.order(pedidoQualquer);
      return pedido.consumption;
    }
    
    assert.deepStrictEqual(verificaFuncao('coxinha'), ['coxinha']);
   
    const verificaPedidos = () => {
      const pedido = createMenu()
      pedido.order("coxinha");
      pedido.order("agua");
      pedido.order("sopa");
      pedido.order("sashimi");

      return pedido.consumption;
    }

    assert.deepStrictEqual(verificaPedidos(), ["coxinha", "agua", "sopa", "sashimi"]);
    
    const verificaRepeticao = () => {
      const pedido = createMenu()
      pedido.order("coxinha");
      pedido.order("agua");
      pedido.order("coxinha");
      
      return pedido.consumption;
    }
    assert.deepStrictEqual(verificaRepeticao(), ['coxinha', 'agua', 'coxinha']);

    const verificaPreco = () => {
      const pedido = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })
      pedido.order("coxinha");
      pedido.order("agua");
      pedido.order("coxinha");
      
      return pedido.pay();
    }
    assert.strictEqual(verificaPreco(), 1.1 * (3.9 + 3.9 + 3.9))
  })
});