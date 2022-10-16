const input = require('../support/input.js');

(async function () {
  const numero_1 = parseInt(await input('Ingrese el primer número: '));
  const numero_2 = parseInt(await input('Ingrese el segundo número: '));

  if (numero_1 === numero_2) {
    console.log('Los números son iguales');
  } else {
    console.log('Los números son diferentes');
  }
})();
