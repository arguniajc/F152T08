/* Problema 4: Calculadora de Interés Simple */
/* Monto Final = Capital + (Capital × Tasa × Tiempo) */
let Capital = 5000;
let Tasa = 3.5 / 100; 
let Tiempo = 2;
let Interes = capital*tasa*tiempo;
let MontoFinal = capital + Interes;

console.log(`Capacidad inicial: $${Capital}`);
console.log(`Capacidad interés: ${(Tasa * 100).toFixed(1)}% anual`);
console.log(`Tiempo: ${Tiempo} años`);
console.log(`Interes ganado: $${Interes.toFixed(0)}`);
console.log(`Monto final: $${MontoFinal}`);
