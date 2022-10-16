const input = require('../support/input.js');

(async function () {
  const año = parseInt(await input('Ingrese un año: '));

  if (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0)) {
    console.log('El año es bisiesto');
  } else {
    console.log('El año no es bisiesto');
  }
})();
