const input = require('../support/input');

(async function () {
  let contadorPatentesPares = 0;
  let contadorPatentesImpares = 0;

  let ultimoDigito = parseInt(
    await input('Ingrese el último dígito de la patente:')
  );

  while (ultimoDigito !== -1) {
    while (ultimoDigito < 0 || ultimoDigito > 9) {
      console.log('El último dígito debe estar entre 0 y 9.');
      ultimoDigito = parseInt(
        await input('Ingrese el último dígito de la patente:')
      );
    }

    if (ultimoDigito % 2 === 0) {
      contadorPatentesPares++;
    } else {
      contadorPatentesImpares++;
    }

    ultimoDigito = parseInt(
      await input('Ingrese el último dígito de la patente:')
    );
  }

  console.log('Cantidad de patentes pares:', contadorPatentesPares);
  console.log('Cantidad de patentes impares:', contadorPatentesImpares);
})();
