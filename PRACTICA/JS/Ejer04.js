/* Problema 4: Calculadora de Interés Simple */
/* Monto Final = Capital + (Capital × Tasa × Tiempo) */
let capital = 5000;
let tasa = 3.5 / 100; 
let tiempo = 2;
let Interes = capital*tasa*tiempo;
let MontoFinal = capital + Interes;

console.log(`Capacidad inicial: $${capital}`);
console.log(`Capacidad interés: ${(tasa * 100).toFixed(1)}% anual`);
console.log(`Tiempo: ${tiempo} años`);
console.log(`Interes ganado: $${Interes.toFixed(0)}`);
console.log(`Monto final: $${MontoFinal}`);
