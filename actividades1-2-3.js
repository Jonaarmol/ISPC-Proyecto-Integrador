/*
Actividad 1: Fundamentos de JavaScript

1: Escribir un programa que:

Declare dos variables ( nombre y edad )
Imprima un mensaje como: "Hola, me llamo Ana y tengo 22 años."
*/

//Respuesta: 

let name1 = "Ana";
let age = 22;
console.log(`Hola, mi nombre es ${name1} y tengo ${age} años.`)

/*
2: Dado el siguiente array:
const numeros = [3, 7, 12, 5, 2];
Usar map para generar un nuevo array con los números al cuadrado.
Usar filter para obtener los números mayores a 5.
Escribir una función flecha que reciba un número y devuelva si es par o
impar.
*/

//Respuesta

const numbers = [3, 7, 12, 5, 2];
const numbersSqrt = numbers.map(function (num) {return num **2}); 
const greaterThanFive = numbers.filter(function (num) {return num >5});
const evenNumber = num => num % 2 === 0 ? "El número es par" : "El número es impar";
console.log(evenNumber(3))

/*
Actividad 2: Desestructuración y objetos

Dado el siguiente objeto:
const persona = {
 nombre: "Lucía",
 edad: 28,
 profesion: "Diseñadora",
};
1. Mostrar en consola un mensaje que diga: "Lucía tiene 28 años y trabaja
como Diseñadora." usando desestructuración.
2. Agregar una nueva propiedad al objeto llamada ciudad con el valor "Rosario" .
*/

//Respuestas:

const person ={
    personName: "Lucía",
    personAge: 28,
    personProfession: "Diseñadora",
}; 
const {personName, personAge, personProfession} = person;
console.log(`${personName} tiene ${personAge} y trabaja como ${personProfession}.`);
person.city = "Rosario";

/*
Actividad 3: Funciones y callbacks

Objetivo: Comprobar el uso de funciones como parámetros (callbacks).

Instrucciones:

1. Escribir una función que reciba un array y una función callback. La función
debe aplicar el callback a cada elemento del array y retornar el nuevo array.
*/

//Respuesta: 

function appliesToTheArray (array, callback) {return array.map(callback)};
const newArray = appliesToTheArray (["HOLA", "PROFE"], x => x.toLowerCase());
console.log(newArray);


