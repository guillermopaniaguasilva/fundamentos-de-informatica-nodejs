const input = require('../support/input');

(async function () {
  const periodoEnSegundos = parseInt(
    await input('Ingrese el periodo en segundos:')
  );
  const periodoEnDias = periodoEnSegundos / (60 * 60 * 24);
  const periodoEnDiasEntero = Math.floor(periodoEnDias);

  let resto = periodoEnDias - periodoEnDiasEntero;

  const periodoEnHoras = resto * 24;
  const periodoEnHorasEntero = Math.floor(periodoEnHoras);

  resto = periodoEnHoras - periodoEnHorasEntero;

  const periodoEnMinutos = resto * 60;
  const periodoEnMinutosEntero = Math.floor(periodoEnMinutos);

  resto = periodoEnMinutos - periodoEnMinutosEntero;

  const periodoEnSegundosRestantes = resto * 60;
  const periodoEnSegundosEntero = Math.floor(periodoEnSegundosRestantes);

  console.log(
    `${periodoEnSegundos} segundos son ${periodoEnDiasEntero} dias, ${periodoEnHorasEntero} horas, ${periodoEnMinutosEntero} minutos y ${periodoEnSegundosEntero} segundos`
  );
})();
