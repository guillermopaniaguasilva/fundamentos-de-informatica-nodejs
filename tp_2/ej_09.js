const input = require('../support/input');

(async function () {
  const salarioBase = 50000;
  const comision = 5000;
  const porcentajePorVenta = 5;
  let salarioTotal = salarioBase;

  const vendedor = await input('Ingrese el numero del vendedor:');
  const cantidadDeVentas = await input('Ingrese la cantidad de ventas:');
  const valorDeVentas = await input('Ingrese el valor de las ventas:');

  const totalEnComisiones = comision * cantidadDeVentas;
  const totalPorPorcentaje = (valorDeVentas * porcentajePorVenta) / 100;

  salarioTotal += totalEnComisiones + totalPorPorcentaje;

  console.log(
    `El salario total del vendedor ${vendedor} es de $${salarioTotal}`
  );
})();
