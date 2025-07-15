/* Problema 7: Validador de Números */
let Valor1 = 42;
let Valor2 = "123";
let Valor3 = NaN;
let Valor4 = 3.14;
let Valor5 = "texto";
let Valor6 = Infinity;
let Valor7 = 0;

console.log(`Analizando: ${Valor1}`);
console.log(`- Es número: ${typeof Valor1 === 'number'}`);
console.log(`- Es finito: ${Number.isFinite(Valor1)}`);
console.log(`- Es entero: ${Number.isInteger(Valor1)}`);

console.log(`\nAnalizando: ${Valor2}`);
console.log(`- Es número: ${typeof Valor2 === 'number'}`);
console.log(`- Es finito: ${Number.isFinite(Valor2)}`);
console.log(`- Es entero: ${Number.isInteger(Valor2)}`);

console.log(`\nAnalizando: ${Valor3}`);
console.log(`- Es número: ${typeof Valor3 === 'number'}`);
console.log(`- Es finito: ${Number.isFinite(Valor3)}`);
console.log(`- Es entero: ${Number.isInteger(Valor3)}`);

console.log(`\nAnalizando: ${Valor4}`);
console.log(`- Es número: ${typeof Valor4 === 'number'}`);
console.log(`- Es finito: ${Number.isFinite(Valor4)}`);
console.log(`- Es entero: ${Number.isInteger(Valor4)}`);

console.log(`\nAnalizando: ${Valor5}`);
console.log(`- Es número: ${typeof Valor5 === 'number'}`);
console.log(`- Es finito: ${Number.isFinite(Valor5)}`);
console.log(`- Es entero: ${Number.isInteger(Valor5)}`);

console.log(`\nAnalizando: ${Valor6}`);
console.log(`- Es número: ${typeof Valor6 === 'number'}`);
console.log(`- Es finito: ${Number.isFinite(Valor6)}`);
console.log(`- Es entero: ${Number.isInteger(Valor6)}`);

console.log(`\nAnalizando: ${Valor7}`);
console.log(`- Es número: ${typeof Valor7 === 'number'}`);
console.log(`- Es finito: ${Number.isFinite(Valor7)}`);
console.log(`- Es entero: ${Number.isInteger(Valor7)}`);
