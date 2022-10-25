const input = require('../support/input');

(async function () {
  let numero = parseInt(await input('Ingrese un número:'));
  let mayor = numero;
  let menor = numero;
  while (numero !== -1) {
    if (numero > mayor) {
      mayor = numero;
    }
    if (numero < menor) {
      menor = numero;
    }
    numero = parseInt(await input('Ingrese un número:'));
  }

  console.log('El mayor es:', mayor);
  console.log('El menor es:', menor);
})();
