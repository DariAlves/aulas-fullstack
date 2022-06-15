const operacoes = require('./modulo/operacoes'); //! Módulo local
const { nome } = require('./modulo/nome');
const fs = require('fs'); //! Módulo nativo (nodejs)
//! Módulos de terceiros (NPM)

console.log(operacoes.somar(1, 2));

console.log(nome);
