/* Problema 17: Comparador de Igualdades */
let A1 = 5, B1 = "5";
let A2 = true, B2 = 1;
let A3 = false, B3 = 0;
let A4 = null, B4 = undefined;
let A5 = "", B5 = 0;

console.log("Comparando " + A1 + ' y "' + B1 + '":');
console.log("- Con == (con conversión): " + (A1 == B1));
console.log("- Con === (sin conversión): " + (A1 === B1));

console.log("\nComparando " + A2 + " y " + B2 + ":");
console.log("- Con == (con conversión): " + (A2 == B2));
console.log("- Con === (sin conversión): " + (A2 === B2));

console.log("\nComparando " + A3 + " y " + B3 + ":");
console.log("- Con == (con conversión): " + (A3 == B3));
console.log("- Con === (sin conversión): " + (A3 === B3));

console.log("\nComparando " + A4 + " y " + B4 + ":");
console.log("- Con == (con conversión): " + (A4 == B4));
console.log("- Con === (sin conversión): " + (A4 === B4));

console.log('\nComparando "' + A5 + '" y ' + B5 + ':');
console.log("- Con == (con conversión): " + (A5 == B5));
console.log("- Con === (sin conversión): " + (A5 === B5));
