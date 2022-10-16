const input = require('../support/input.js');

(async function () {
  const precioMinimo = 50;
  let precioTotal = precioMinimo;

  const distancia = parseInt(await input('Ingrese la distancia en km: '));

  if (distancia > 0 && distancia <= 10) {
    precioTotal += distancia * 20;
  } else if (distancia > 10) {
    precioTotal += distancia * 15;
  }

  console.log(`El precio total es de $${precioTotal}`);
})();
