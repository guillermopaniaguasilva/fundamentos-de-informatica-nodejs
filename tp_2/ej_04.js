const input = require('../support/input');

(async function () {
  const edad = parseInt(await input('Ingrese su edad:'));

  const edadEnDias = edad * 365;

  console.log('Su edad en dias es: ' + edadEnDias);
})();
