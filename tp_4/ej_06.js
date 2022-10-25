const input = require('../support/input');

(async function () {
  const numero = parseInt(await input('Ingrese un número:'));
  let contador = 1;
  while (contador <= 12) {
    console.log(numero * contador);
    contador++;
  }
})();
