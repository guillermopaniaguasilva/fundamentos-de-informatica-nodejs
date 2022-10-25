const input = require('../support/input');

(async function () {
  const base = parseInt(await input('Ingrese la base:'));
  const exponente = parseInt(await input('Ingrese el exponente:'));
  let total = 1;
  let contador = 1;

  while (contador <= exponente) {
    total *= base;
    contador++;
  }

  console.log('El resultado es:', total);
})();
