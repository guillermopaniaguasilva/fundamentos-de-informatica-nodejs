const input = require('../support/input');

(async function () {
  let hasta = parseInt(await input('Ingrese un número:'));
  let contador = 1;
  while (contador <= hasta) {
    console.log(contador);
    contador++;
  }
})();
