/* Problema 8: Analizador de Texto */
let Texto = " Aprender JavaScript es muy Divertido ";
let Textoimpio = Texto.trim();

console.log(`Texto original: ${Texto}`);
console.log(`Longitud original: ${Texto.length}`);
console.log(`Texto limpio: ${Textoimpio}`);
console.log(`Longitud limpia: ${Textoimpio.length}`);
console.log(`En mayúsculas: ${Textoimpio.toUpperCase()}`);
console.log(`En minúsculas: ${Textoimpio.toLowerCase()}`);
console.log(`Primer carácter: ${Textoimpio.trim().charAt(0)}`);
console.log(`Último carácter: ${Textoimpio[Textoimpio.length - 1]}`);
