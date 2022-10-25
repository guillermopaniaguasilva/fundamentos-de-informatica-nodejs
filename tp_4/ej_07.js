const input = require('../support/input');

(async function () {
  let numero = parseInt(await input('Ingrese un número:'));
  let contador = 1;
  let total = 0;
  let mayor = numero;
  let posicion = contador;
  while (contador < 10) {
    total += numero;
    if (numero > mayor) {
      mayor = numero;
      posicion = contador;
    }
    numero = parseInt(await input('Ingrese un número:'));
    contador++;
  }
  console.log('El promedio es:', total / 10);
  console.log('El mayor es:', mayor);
  console.log('La posición del mayor es:', posicion);
})();
