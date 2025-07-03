/* Problema 1: Calculadora de Ventas */

/* Una tienda vendió 3 productos durante el día:
• Producto A: $1250.75
• Producto B: $890.50
• Producto C: $2340.25

Calcular el total de ventas, el promedio de venta por producto, y mostrar el total redondeado a 2 decimales.

💡 Salida Esperada:
Producto A: $1250.75
Producto B: $890.5
Producto C: $2340.25
Total de ventas: $4481.5
Promedio por producto: $1493.83 */

let productoA = 1250.75;
let productoB = 890.50;
let productoC = 2340.25;

let Total = productoA+productoB+productoC;
let Promedio = productoA+productoB+productoC/3;
console.log(`Producto A: $${productoA}`);
console.log(`Producto B: $${productoB}`);
console.log(`Producto C: $${productoC}`);
console.log(`Total ventas: $${Total}`);
console.log(`Promedio por producto: $${ Promedio.toFixed(2)}`);