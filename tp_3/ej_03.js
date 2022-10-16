const input = require('../support/input.js');

(async function () {
  const mes = parseInt(await input('Ingrese un número de mes: '));

  if (mes >= 1 && mes <= 12) {
    if (mes === 1) {
      console.log('Enero');
    } else if (mes === 2) {
      console.log('Febrero');
    } else if (mes === 3) {
      console.log('Marzo');
    } else if (mes === 4) {
      console.log('Abril');
    } else if (mes === 5) {
      console.log('Mayo');
    } else if (mes === 6) {
      console.log('Junio');
    } else if (mes === 7) {
      console.log('Julio');
    } else if (mes === 8) {
      console.log('Agosto');
    } else if (mes === 9) {
      console.log('Septiembre');
    } else if (mes === 10) {
      console.log('Octubre');
    } else if (mes === 11) {
      console.log('Noviembre');
    } else if (mes === 12) {
      console.log('Diciembre');
    }
  } else {
    console.log('El mes ingresado no es válido');
  }
})();
