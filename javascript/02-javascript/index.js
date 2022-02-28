const operacoesAritmeticas = require('./modulo/calculadora');

function calcularValores(valor1, valor2, modulo) {
  for (const operador in modulo) {
    console.log(
      `O resultado de ${valor1} ${operador} ${valor2} = ${modulo[operador](
        valor1,
        valor2
      )}`
    );
  }
}

calcularValores(10, 2, operacoesAritmeticas);
