const input = require('../support/input.js');

(async function () {
  const numero = parseInt(await input('Ingrese un número: '));

  if (numero % 2 === 0) {
    console.log('El número es par');
  } else {
    console.log('El número es impar');
  }
})();
