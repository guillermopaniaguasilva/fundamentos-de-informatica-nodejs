(async function () {
  const desde = 42;
  const hasta = 176;
  let contador = desde;
  let total = desde;

  while (contador <= hasta) {
    if (contador % 2 !== 0) {
      total += contador;
    }
    contador++;
  }
  console.log('El total es:', total);
})();
