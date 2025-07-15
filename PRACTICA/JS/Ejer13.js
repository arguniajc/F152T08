/* Problema 13: Generador de Mensajes Personalizados */
let Nombre = "María";
let Edad = 25;
let Ciudad = "Barcelona";
let Profesion = "Diseñadora";

let Saludo = `¡Hola ${Nombre}! Bienvenida al sistema.`;
let Informacion = `${Nombre} tiene ${Edad} años, vive en ${Ciudad} y es ${Profesion}.`;
let Jubilacion = `Te faltan ${65 - Edad} años para jubilarte.`;

console.log(Saludo);
console.log(Informacion);
console.log(Jubilacion);
