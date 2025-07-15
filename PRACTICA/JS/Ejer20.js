/* Problema 20: Detector de Tipos y Conversiones */
let Valor1 = 42;
let Valor2 = "texto";
let Valor3 = null;
let Valor4 = undefined;
let Valor5 = [];

console.log(`=== ANALIZANDO: ${Valor1} ===`);
console.log(`Tipo: ${typeof Valor1}`);
console.log(`Como string: "${String(Valor1)}"`);
console.log(`Como número: ${Number(Valor1)}`);
console.log(`Como booleano: ${Boolean(Valor1)}`);

console.log(`\n=== ANALIZANDO: "${Valor2}" ===`);
console.log(`Tipo: ${typeof Valor2}`);
console.log(`Como string: "${String(Valor2)}"`);
console.log(`Como número: ${Number(Valor2)}`);
console.log(`Como booleano: ${Boolean(Valor2)}`);

console.log(`\n=== ANALIZANDO: ${Valor3} ===`);
console.log(`Tipo: ${typeof Valor3}`);
console.log(`Como string: "${String(Valor3)}"`);
console.log(`Como número: ${Number(Valor3)}`);
console.log(`Como booleano: ${Boolean(Valor3)}`);

console.log(`\n=== ANALIZANDO: ${Valor4} ===`);
console.log(`Tipo: ${typeof Valor4}`);
console.log(`Como string: "${String(Valor4)}"`);
console.log(`Como número: ${Number(Valor4)}`);
console.log(`Como booleano: ${Boolean(Valor4)}`);

console.log(`\n=== ANALIZANDO: [] ===`);
console.log(`Tipo: ${typeof Valor5}`);
console.log(`Como string: "${String(Valor5)}"`);
console.log(`Como número: ${Number(Valor5)}`);
console.log(`Como booleano: ${Boolean(Valor5)}`);
