const input = require('../support/input');

(async function () {
  let numero = parseInt(await input('Ingrese un número:'));
  while (numero !== -1) {
    numero = parseInt(await input('Ingrese un número:'));
  }
})();
