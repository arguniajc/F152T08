/* Problema 16: Analizador de Verdadero y Falso */
let Valor1 = 0;
let Valor2 = "";
let Valor3 = "0";
let Valor4 = "false";
let Valor5 = null;
let Valor6 = undefined;
let Valor7 = [];
let Valor8 = {};

console.log("El valor " + Valor1 + " es: " + (!!Valor1 ? "verdadero" : "falso"));
console.log('El valor "' + Valor2 + '" es: ' + (!!Valor2 ? "verdadero" : "falso"));
console.log('El valor "' + Valor3 + '" es: ' + (!!Valor3 ? "verdadero" : "falso"));
console.log('El valor "' + Valor4 + '" es: ' + (!!Valor4 ? "verdadero" : "falso"));
console.log("El valor " + Valor5 + " es: " + (!!Valor5 ? "verdadero" : "falso"));
console.log("El valor " + Valor6 + " es: " + (!!Valor6 ? "verdadero" : "falso"));
console.log("El valor [] es: " + (!!Valor7 ? "verdadero" : "falso"));
console.log("El valor {} es: " + (!!Valor8 ? "verdadero" : "falso"));
