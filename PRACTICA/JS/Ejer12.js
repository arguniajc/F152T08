/* Problema 12: Procesador de Lista de Compras */
let listaCompras = "pan,leche,huevos,queso,manzanas";
let Productos = ListaCompras.split(",");

console.log(`Lista original: "${ListaCompras}"`);
console.log(`Número de productos: ${Productos.length}`);
console.log("Productos:");
console.log(`1. ${Productos[0]}`);
console.log(`2. ${Productos[1]}`);
console.log(`3. ${Productos[2]}`);
console.log(`4. ${Productos[3]}`);
console.log(`5. ${Productos[4]}`);

let ListaConGuiones = Productos.join(" - ");
console.log(`Lista con guiones: "${ListaConGuiones}"`);
