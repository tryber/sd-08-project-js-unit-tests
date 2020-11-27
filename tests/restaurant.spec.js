const assert = require('assert');
const createMenu = require('../src/restaurant');

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