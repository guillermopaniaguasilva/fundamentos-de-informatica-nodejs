const input = require('../support/input');

(async function () {
  const PORCENTAJE_DESCUENTO_JUBILACION = 11;
  const PORCENTAJE_DESCUENTO_OBRA_SOCIAL = 3;
  const PORCENTAJE_DESCUENTO_SINDICATO = 3;
  const PORCENTAJE_ADICIONAL_ANTIGUEDAD_SOLTEROS = 5;
  const PORCENTAJE_ADICIONAL_ANTIGUEDAD_CASADOS = 7;

  const salarioBase = parseInt(await input('Ingrese el sueldo básico:'));
  const antiguedad = parseInt(await input('Ingrese la antigüedad:'));
  const estadoCivil = await input(
    'Ingrese estado civil: Soltero (s) o casado (c)'
  );

  let salarioNeto = salarioBase;

  const totalAntesDeDescuentos =
    salarioBase +
    (estadoCivil === 's'
      ? PORCENTAJE_ADICIONAL_ANTIGUEDAD_SOLTEROS
      : (PORCENTAJE_ADICIONAL_ANTIGUEDAD_CASADOS / 100) * salarioBase) *
      antiguedad;

  salarioNeto = totalAntesDeDescuentos;
  const descuentoJubilacion =
    (PORCENTAJE_DESCUENTO_JUBILACION / 100) * salarioBase;
  const descuentoObraSocial =
    (PORCENTAJE_DESCUENTO_OBRA_SOCIAL / 100) * salarioBase;
  const descuentoSindicato =
    (PORCENTAJE_DESCUENTO_SINDICATO / 100) * salarioBase;
  const descuentos =
    descuentoJubilacion + descuentoObraSocial + descuentoSindicato;

  salarioNeto -= descuentos;

  if (estadoCivil === 's') {
    console.log('Estado civil: Soltero');
  } else {
    console.log('Estado civil: Casado');
  }
  console.log('Antigüedad: ' + antiguedad);
  console.log('Total sin descuentos: ' + totalAntesDeDescuentos);
  console.log('Descuentos:');
  console.log('Jubilación: ' + descuentoJubilacion);
  console.log('Obra Social: ' + descuentoObraSocial);
  console.log('Sindicato: ' + descuentoSindicato);
  console.log('Sueldo neto: ' + salarioNeto);
})();
