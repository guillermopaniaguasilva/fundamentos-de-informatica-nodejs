const input = require('../support/input');

(async function () {
  const porcentajeInteresMensual = 2;

  const capital = parseInt(await input('Ingrese el capital:'));
  const meses = parseInt(await input('Ingrese la cantidad de meses:'));

  const interesMensual = (capital * porcentajeInteresMensual) / 100;
  const interesTotal = interesMensual * meses;

  console.log('El interes mensual es: ' + interesMensual);
  console.log('El interes total es: ' + interesTotal);
})();
