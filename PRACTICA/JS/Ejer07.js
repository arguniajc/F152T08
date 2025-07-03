/* Problema 7: Validador de Números */
let valor1 = 42;
let valor2 = "123";
let valor3 = NaN;
let valor4 = 3.14;
let valor5 = "texto";
let valor6 = Infinity;
let valor7 = 0;


console.log("Analizando: " + valor1);
console.log("- Es número: " + (typeof valor1 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor1));
console.log("- Es entero: " + Number.isInteger(valor1));

console.log("\nAnalizando: " + valor2);
console.log("- Es número: " + (typeof valor2 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor2));
console.log("- Es entero: " + Number.isInteger(valor2));

console.log("\nAnalizando: " + valor3);
console.log("- Es número: " + (typeof valor3 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor3));
console.log("- Es entero: " + Number.isInteger(valor3));

console.log("\nAnalizando: " + valor4);
console.log("- Es número: " + (typeof valor4 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor4));
console.log("- Es entero: " + Number.isInteger(valor4));

console.log("\nAnalizando: " + valor5);
console.log("- Es número: " + (typeof valor5 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor5));
console.log("- Es entero: " + Number.isInteger(valor5));


console.log("\nAnalizando: " + valor6);
console.log("- Es número: " + (typeof valor6 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor6));
console.log("- Es entero: " + Number.isInteger(valor6));


console.log("\nAnalizando: " + valor7);
console.log("- Es número: " + (typeof valor7 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor7));
console.log("- Es entero: " + Number.isInteger(valor7));
