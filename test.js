JavaScript
// Validación simple de lógica
const precioUnitario = 10;
const cantidad = 3;
const totalEsperado = 30;

const totalCalculado = precioUnitario * cantidad;

if (totalCalculado !== totalEsperado) {
    console.error(" Error en el cálculo del carrito");
    process.exit(1); // Hace que el pipeline falle
} else {
    console.log(" Pruebas de carrito exitosas");
}
