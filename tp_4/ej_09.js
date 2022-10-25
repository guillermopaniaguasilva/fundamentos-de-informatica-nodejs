const input = require('../support/input');

(async function () {
  const multiploA = parseInt(await input('Ingrese un número:'));
  const multiploB = parseInt(await input('Ingrese un número:'));
  let total = 0;
  let contador = 1;

  while (contador <= multiploB) {
    total += multiploA;
    contador++;
  }

  console.log('El resultado es:', total);
})();
