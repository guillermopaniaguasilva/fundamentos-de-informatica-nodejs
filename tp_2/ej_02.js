const input = require('../support/input');

(async function () {
  const numeroA = parseInt(await input('Ingrese el numero A:'));
  const numeroB = parseInt(await input('Ingrese el numero B:'));

  console.log('El numero A es: ' + numeroA);
  console.log('El numero B es: ' + numeroB);

  const suma = numeroA + numeroB;
  const resta = numeroA - numeroB;

  console.log('La suma es: ' + suma);
  console.log('La resta es: ' + resta);
})();
