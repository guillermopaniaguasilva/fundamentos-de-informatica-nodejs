const input = require('../support/input');

(async function () {
  const distanciaEnMetros = parseInt(
    await input('Ingrese la distancia en metros:')
  );

  const distanciaEnCentimetros = distanciaEnMetros * 100;
  const distanciaEnPulgadas = distanciaEnCentimetros / 2.54;
  const distanciaEnPies = distanciaEnPulgadas / 12;
  const distanciaEnYardas = distanciaEnPies / 3;

  console.log('La distancia en centimetros es: ' + distanciaEnCentimetros);
  console.log('La distancia en pulgadas es: ' + distanciaEnPulgadas);
  console.log('La distancia en pies es: ' + distanciaEnPies);
  console.log('La distancia en yardas es: ' + distanciaEnYardas);
})();
