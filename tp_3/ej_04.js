const input = require('../support/input.js');

(async function () {
  const nota_1 = parseInt(await input('Ingrese la primera nota: '));
  const nota_2 = parseInt(await input('Ingrese la segunda nota: '));

  if (nota_1 >= 0 && nota_1 <= 10 && nota_2 >= 0 && nota_2 <= 10) {
    if (nota_1 >= 7 && nota_2 >= 7) {
      console.log('Promociona');
    }

    if (nota_1 >= 4 && nota_1 < 7 && nota_2 >= 4 && nota_2 < 7) {
      console.log('Aprueba');
    }

    if (nota_1 < 4 || nota_2 < 4) {
      console.log('Recupera');
    }
  } else {
    console.log('Alguna de las notas ingresadas no es válida');
  }
})();
