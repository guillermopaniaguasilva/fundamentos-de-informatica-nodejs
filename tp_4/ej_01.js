const input = require('../support/input');

(async function () {
  let numero = parseInt(await input('Ingrese un número:'));
  const primerNumeroIngresado = numero;
  let ultimoNumeroIngresado = numero;
  while (numero !== -1) {
    ultimoNumeroIngresado = numero;
    numero = parseInt(await input('Ingrese un número:'));
  }

  console.log(
    `El primer número ingresado fue ${primerNumeroIngresado} y el último fue ${ultimoNumeroIngresado}`
  );
})();
