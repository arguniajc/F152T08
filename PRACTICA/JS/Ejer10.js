/* Problema 10: Extractor de Información Personal */

let NombreCompleto = "Juan Carlos Pérez González";

let PrimerNombre = NombreCompleto.substring(0, 4);
let SegundoNombre = NombreCompleto.substring(5, 11);
let Apellidos = NombreCompleto.substring(12);
let Ultimas8 = NombreCompleto.slice(-8);
let SoloPerez = NombreCompleto.substring(12, 17);

console.log(`Nombre completo: "${NombreCompleto}"`);
console.log(`Primer nombre: "${PrimerNombre}"`);
console.log(`Segundo nombre: "${SegundoNombre}"`);
console.log(`Apellidos: "${Apellidos}"`);
console.log(`Últimas 8 letras: "${Ultimas8}"`);
console.log(`Solo "Pérez": "${SoloPerez}"`);
