/* Problema 9: Buscador de Palabras */
let Frase = "JavaScript es genial y JavaScript es poderoso";

console.log(`Texto: "${Frase}"`);
console.log(`Primera aparición de "JavaScript": posición ${Frase.indexOf("JavaScript")}`);
console.log(`Última aparición de "JavaScript": posición ${Frase.lastIndexOf("JavaScript")}`);
console.log(`¿Contiene "genial"? ${Frase.includes("genial")}`);
console.log(`¿Empieza con "JavaScript"? ${Frase.startsWith("JavaScript")}`);
console.log(`¿Termina con "poderoso"? ${Frase.endsWith("poderoso")}`);
