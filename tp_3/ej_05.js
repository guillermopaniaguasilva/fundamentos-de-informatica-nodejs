const input = require('../support/input.js');

(async function () {
  const precioBase = 500;
  const precioPorHoja = 20.2;

  let costoTotal = precioBase;

  const cantidadDeHojas = parseInt(
    await input('Ingrese la cantidad de hojas: ')
  );

  costoTotal += cantidadDeHojas * precioPorHoja;

  if (cantidadDeHojas > 300) {
    costoTotal += 200;
  }

  if (cantidadDeHojas > 600) {
    costoTotal += 336;
  }

  console.log(`El costo total es de $${costoTotal}`);
})();
