const input = require('../support/input');

(async function () {
  const numero = parseInt(await input('Ingrese un número:'));

  while (numero < 0) {
    console.log('El número debe ser positivo.');
    numero = parseInt(await input('Ingrese un número:'));
  }

  let suma = 0;
  let contador = 1;

  while (contador <= numero) {
    suma += contador;
    contador += 2;
  }

  console.log('La suma es:', suma);
})();
