const input = require('../support/input');

(async function () {
  const numero_1 = parseInt(await input('Ingrese el numero 1:'));
  const numero_2 = parseInt(await input('Ingrese el numero 2:'));
  const numero_3 = parseInt(await input('Ingrese el numero 3:'));

  const promedio = (numero_1 + numero_2 + numero_3) / 3;

  console.log('El promedio es: ' + promedio);
})();
