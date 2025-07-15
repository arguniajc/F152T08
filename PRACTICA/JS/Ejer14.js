/* Problema 14: Formateador de Códigos */
let NumFactura = "7";
let CodProducto = "42";
let IdUsuario = "123";

let Factura = "F-" + NumFactura.padStart(3, "0");
let Producto = "PROD-" + CodProducto.padStart(4, "0");
let Usuario = "USER-" + IdUsuario.padStart(5, "0");
let Separador = "-".repeat(30);
let Oferta = "¡OFERTA!".repeat(3);

console.log(`Factura: ${Factura}`);
console.log(`Producto: ${Producto}`);
console.log(`Usuario: ${Usuario}`);
console.log(Separador);
console.log(Oferta);
