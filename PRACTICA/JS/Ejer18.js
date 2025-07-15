/* Problema 18: Convertidor Universal */
let TextoNumero = "42";
let NumeroZero = 0;

console.log(`Valor original: "${TextoNumero}"`);
console.log(`Con Number(): ${Number(TextoNumero)}`);
console.log(`Con +: ${+TextoNumero}`);
console.log(`Con parseInt(): ${parseInt(TextoNumero)}`);
console.log(`Con Boolean(): ${Boolean(TextoNumero)}`);
console.log(`Con !!: ${!!TextoNumero}`);

console.log(`\nValor 0 como string: "${String(NumeroZero)}"`);
console.log(`Valor 0 como booleano: ${Boolean(NumeroZero)}`);
