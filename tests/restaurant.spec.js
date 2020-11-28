/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    let objetoQualquer = {
      food: { coxinha: 3.9, sopa: 9.9, sashimi: 19.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    };
    const objetoRetornadoTeste1 = createMenu(objetoQualquer);

    assert.strictEqual(typeof objetoRetornadoTeste1, 'object');
    assert.strictEqual(typeof objetoRetornadoTeste1.fetchMenu, 'function');
    assert.deepStrictEqual(objetoRetornadoTeste1.fetchMenu(), objetoQualquer);

    objetoQualquer = { food: {}, drink: {} };
    const objetoRetornadoTeste2 = createMenu(objetoQualquer);
    assert.deepStrictEqual(objetoRetornadoTeste2.fetchMenu(), objetoQualquer);

    objetoQualquer = { food: {} };
    const objetoRetornadoTeste3 = createMenu(objetoQualquer);
    assert.deepStrictEqual(objetoRetornadoTeste3.fetchMenu(), objetoQualquer);

    const objetoRetornadoTeste4 = createMenu(objetoQualquer);
    assert.deepStrictEqual(objetoRetornadoTeste4.consumption, []);

    const objetoRetornadoTeste5 = createMenu(objetoQualquer);
    objetoRetornadoTeste5.order('coxinha');
    assert.deepStrictEqual(objetoRetornadoTeste5.consumption, ['coxinha']);

    const objetoRetornadoTeste6 = createMenu(objetoQualquer);
    objetoRetornadoTeste6.order('agua');
    objetoRetornadoTeste6.order('sopa');
    objetoRetornadoTeste6.order('sashimi');
    assert.deepStrictEqual(objetoRetornadoTeste6.consumption, [
      'agua',
      'sopa',
      'sashimi',
    ]);

    const objetoRetornadoTeste7 = createMenu(objetoQualquer);
    objetoRetornadoTeste7.order('coxinha');
    objetoRetornadoTeste7.order('agua');
    objetoRetornadoTeste7.order('coxinha');
    assert.deepStrictEqual(objetoRetornadoTeste6.consumption, [
      'coxinha',
      'agua',
      'coxinha',
    ]);

    objetoQualquer = {
      food: { coxinha: 3.9, sopa: 9.9, sashimi: 19.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    };
    const objetoRetornadoTeste8 = createMenu(objetoQualquer);
    objetoRetornadoTeste8.order('agua');
    objetoRetornadoTeste8.order('agua');
    objetoRetornadoTeste8.order('sopa');
    objetoRetornadoTeste8.order('sashimi');
    assert.strictEqual(objetoRetornadoTeste8.pay(), 41.36);
  });
});
