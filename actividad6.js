/*
Actividad 6: Profundización en métodos de arrays (map,filter,reduce)

1. Usar filter para obtener solo los productos cuyo precio sea mayor a 100.
2. Usar map para obtener un nuevo array de strings con el siguiente formato: "Notebook: $1200"
3. Usar reduce para calcular el precio total de todos los productos.
4. Combinar filter y map para obtener los nombres de los productos que
cuesten menos de 100, todo en minúsculas.
*/

//Respuestas

const products = [
    {productName: "Notebook", price: 1200},
    {productName: "Mouse", price: 20},
    {productName: "Teclado", price: 50},
    {productName: "Monitor", price: 300},
    {productName: "Auriculares", price: 80},
];

//1
const greaterThan = products.filter(function (product) {return product.price > 100});
console.log(greaterThan)

//2
const arrayNewFormat = products.map(product => `${product.productName}: ${product.price}`);
console.log(arrayNewFormat)

//3  
const totalPriceArrow = products.reduce((counter, product) => counter + product.price, 0);
console.log (totalPriceArrow)

//4
const filtered = products.filter(product => product.price <100);
const mapped = filtered.map(product => product.productName.toLowerCase());