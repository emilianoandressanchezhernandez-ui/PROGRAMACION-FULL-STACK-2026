// 1-
console.log("¡Hola, mundo!");

// 2-
let nombre = prompt("Dime tu nombre: ");
console.log("Hola " + nombre);

// 3-
let numero1 = prompt("Dime un número: ");
let numero2 = prompt("Dime otro número: ");
let suma = Number(numero1) + Number(numero2);
console.log("El resultado de la suma es: " + suma);

// 4-
let edad = prompt("Dime tu edad: ");
if (edad >= 18) {
    console.log("Sos mayor de edad.");
} else {
    console.log("Sos menor de edad.");
}

// 5-
let numero = prompt("Dime un número y te digo si es par o impar: ");
if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

// 6-
let numeroA = prompt("Dime un número: ");
let numeroB = prompt("Dime otro número: "); 
let numeroC = prompt("Dime un tercer número: ");
let mayor = Math.max(numeroA, numeroB, numeroC);
console.log("El número mayor es: " + mayor);

// 7-
let nota = prompt("Dime tu nota de 0 a 10: ");
if (nota < 5) {
    console.log("Insuficiente");
} else if (nota == 5 || nota == 6) {
    console.log("Aceptable");
} else {
    console.log("Muy bien");
}

// 8-
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 9-
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 10-

let contraseña = prompt("Dime la contraseña: ");
if (contraseña === "1234") {
    console.log("Contraseña correcta.");
} else {
    console.log("Contraseña incorrecta.");
}

// 11-
let numeroHasta0 = prompt("Dime números y te mostraré la suma: ");
while (numeroHasta0 != 0) {
    suma += Number(numeroHasta0);
    numeroHasta0 = prompt("Dime otro número (o 0 para terminar): ");
}
console.log("La suma total es: " + suma);

// 12-
let menu = prompt("Elige una opción: 1. Suma, 2. resta, 3. multiplicación, 4. división, 5. salir");
let num1 = prompt("Dime el primer número: ");
let num2 = prompt("Dime el segundo número: ");
switch (menu) {
    case "1":
        console.log("El resultado de la suma es: " + (Number(num1) + Number(num2)));
    case "2":
        console.log("El resultado de la resta es: " + (Number(num1) - Number(num2)));
    case "3":
        console.log("El resultado de la multiplicación es: " + (Number(num1) * Number(num2)));
    case "4":
        if (num2 != 0) {
            console.log("El resultado de la división es: " + (Number(num1) / Number(num2)));
        } else {
            console.log("No se puede dividir por cero.");
        }
    case "5":
        console.log("Saliendo del programa.");
        break;
    default:
        console.log("Opción no válida.");
}