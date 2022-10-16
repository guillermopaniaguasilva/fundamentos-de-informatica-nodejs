const input = require('../support/input.js');

(async function () {
  const dia = parseInt(await input('Ingrese el día: '));
  const mes = parseInt(await input('Ingrese el mes: '));
  const año = parseInt(await input('Ingrese el año: '));

  if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && año > 0) {
    console.log('La fecha es válida');
  } else {
    console.log('La fecha no es válida');
  }
})();
