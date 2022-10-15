const input = require('../support/input');

(async function () {
  const nota_1 = parseInt(await input('Ingrese la nota 1:'));
  const nota_2 = parseInt(await input('Ingrese la nota 2:'));
  const promedio = (nota_1 + nota_2) / 2;
  console.log('El promedio es: ' + promedio);
})();
