const input = require('../support/input');

(async function () {
  const inversion_1 = parseInt(
    await input('Ingrese la inversion de la persona 1:')
  );
  const inversion_2 = parseInt(
    await input('Ingrese la inversion de la persona 2:')
  );
  const inversion_3 = parseInt(
    await input('Ingrese la inversion de la persona 3:')
  );

  const inversion_total = inversion_1 + inversion_2 + inversion_3;

  const porcentaje_1 = (inversion_1 * 100) / inversion_total;
  const porcentaje_2 = (inversion_2 * 100) / inversion_total;
  const porcentaje_3 = (inversion_3 * 100) / inversion_total;

  console.log(
    'El porcentaje de la inversion de la persona 1 es: ' + porcentaje_1
  );
  console.log(
    'El porcentaje de la inversion de la persona 2 es: ' + porcentaje_2
  );
  console.log(
    'El porcentaje de la inversion de la persona 3 es: ' + porcentaje_3
  );
})();
