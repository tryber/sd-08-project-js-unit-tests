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
  - Uma chave `fetchMenu` que tem uma função associada, esta por sua vez retorna o objeto recebido por parâmetro na função `createMenu`. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

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
    assert.fail();
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto que contêm a chave `fetchMenu` e esta por sua vez tem como valor uma função que ao ser executada retorna um objeto qualquer. Exemplo de retorno: { fetchMenu: function }.
    // ```
    // const objetoRetornadoTeste1 = createMenu(objetoQualquer) // Retorno: { fetchMenu: function }
    // const objetoRetornadoTeste1.fetchMenu() // retorno: objetoQualquer
    // ```
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 2: Verifique que, quando a função createMenu for chamada passando como parâmetro o objeto: `{ food: {}, drink: {} }`, retorne um objeto que ao executar a função associada a propriedade `fetchMenu` deste objeto, o retorno da função de ser um objeto que tenha somente as chaves `food` e `drink`.
    // ```
    // const objetoRetornadoTeste2 = createMenu(objetoQualquer);
    // objetoRetornadoTeste2.fetchMenu() // retorno: { food: {}, drink: {}}
    // ```
    // Agora faça o TESTE 3 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 3: Verifique que o menu passado como parâmetro para a função createMenu é idêntico ao menu retornado pela função `fetchMenu`, dentro do objeto retornado pela função `createMenu`. Ou seja, o valor ao executar 'objetoRetornadoTeste3.fetchMenu()' deve ser exatamente o mesmo objeto menu passado por parâmetro.
    // ```
    // const objetoRetornadoTeste3 = createMenu(objetoQualquer);
    // objetoRetornadoTeste3.fetchMenu() // Retorno: objetoQualquer
    // ```
    // Agora faça o TESTE 4 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornadoTeste4.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornadoTeste4 = createMenu(objetoQualquer);
    // objetoRetornadoTeste4.consumption // Valor: []
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que ao chamar a função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornadoTeste5.order('coxinha')`, tal string é adicionada ao array contido em `objetoRetornadoTeste5.consumption
    // ```;
    // const objetoRetornadoTeste5 = createMenu(objetoQualquer);
    // objetoRetornadoTeste5.order("coxinha");
    // objetoRetornadoTeste5.comsuption // Valor: ["coxinha"]
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens ao array `objetoRetornadoTeste6.consumption` conforme os itens pedidos.
    // ```
    // const objetoRetornadoTeste6 = createMenu(objetoQualquer);
    // objetoRetornadoTeste6.order("agua");
    // objetoRetornadoTeste6.order("sopa");
    // objetoRetornadoTeste6.order("sashimi");
    // objetoRetornadoTeste6.consumption // Valor: ["agua", "sopa", "sashimi"]
    // ```
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função associada a propriedade `order` aceita que pedidos repetidos sejam adicionados ao array `consumption`.
    // ```
    // const objetoRetornadoTeste7 = createMenu(objetoQualquer);
    // objetoRetornadoTeste7.order('coxinha');
    // objetoRetornadoTeste7.order('agua');
    // objetoRetornadoTeste7.order('coxinha');
    // objetoRetornadoTeste7.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornadoTeste8.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornadoTeste8.consumption`
    // ```
    // const objetoRetornadoTeste8 = createMenu(objetoQualquer);
    // objetoRetornadoTeste8.order("agua");
    // objetoRetornadoTeste8.order("agua");
    // objetoRetornadoTeste8.order("sopa");
    // objetoRetornadoTeste8.order("sashimi");
    // objetoRetornadoTeste8.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
