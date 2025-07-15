/* Problema 11: Corrector de Texto */
let TextoOriginal = "Me gusta Python. Python es facil. Python es rapido.";

let Paso1 = TextoOriginal.replaceAll("Python", "JavaScript");
let Paso2 = Paso1.replace("facil", "fácil");
let TextoCorregido = Paso2.replace("rapido", "rápido");

console.log(`Texto original: "${TextoOriginal}"`);
console.log(`Texto corregido: "${TextoCorregido}"`);
