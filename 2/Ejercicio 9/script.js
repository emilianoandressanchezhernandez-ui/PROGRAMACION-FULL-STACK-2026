<<<<<<< HEAD
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
=======
//1
console.log("Hola Mundo");

//2
let nombre2 = prompt("Dime tu nombre: "); 
console.log("Hola, " + nombre2);

//3
let numero1 = prompt("Dime un número: ");
let numero2 = prompt("Dime otro número: ");
console.log("El resultado de la suma es: " + (Number(numero1) + Number(numero2)));

//4
let edad = prompt("Dime tu edad: ");
if (Number(edad) >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//5
let numParOImpar = prompt("Dime un número: ");
if (Number(numParOImpar) % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

//6
let numMayor1 = prompt("Dime un número: ");
let numMayor2 = prompt("Dime otro número: ");
let numMayor3 = prompt("Dime otro número: ");
let mayor = Math.max(Number(numMayor1), Number(numMayor2), Number(numMayor3));
console.log("El número mayor es: " + mayor);

//7
let nota = prompt("Dime tu nota del 1 al 10: ");
if (Number(nota) < 5) {
    console.log("Insuficiente");
} else if (Number(nota) === 5 || Number(nota) === 6) {
    console.log("Aceptable");
} else if (Number(nota) >= 7) {
    console.log("Muy bien");
} else {
    console.log("Nota no válida");
}

//8
>>>>>>> 553ae966992688323ca437ad89a37e2af5027cfb
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

<<<<<<< HEAD
// 9-
=======
//9
>>>>>>> 553ae966992688323ca437ad89a37e2af5027cfb
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

<<<<<<< HEAD
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
=======
//10
let contraseña = prompt("Dime la contraseña: ");
while (contraseña !== "1234") {
    console.log("Contraseña incorrecta, inténtalo de nuevo.");
    contraseña = prompt("Dime la contraseña: ");
}
console.log("Contraseña correcta");

//11
let numHasta0 = prompt("Dime un número (o 0 para terminar): ");
let suma = 0;
while (Number(numHasta0) !== 0) {
    suma += Number(numHasta0);
    numHasta0 = prompt("Dime un número (o 0 para terminar): ");
}
console.log("La suma de los números es: " + suma);

//12
let num1Calculadora = prompt("Dime un número: ");
let num2Calculadora = prompt("Dime otro número: ");
let menu1 = prompt("Dime la operación (1- suma, 2- resta, 3- multiplicación, 4- división): ");
switch (menu1) {
    case "1":
        console.log("El resultado de la suma es: " + (Number(num1Calculadora) + Number(num2Calculadora)));
        break;
    case "2":
        console.log("El resultado de la resta es: " + (Number(num1Calculadora) - Number(num2Calculadora)));
        break;
    case "3":
        console.log("El resultado de la multiplicación es: " + (Number(num1Calculadora) * Number(num2Calculadora)));
        break;
    case "4":
        console.log("El resultado de la división es: " + (Number(num1Calculadora) / Number(num2Calculadora)));
        break;
    default:
        console.log("Operación no válida, vuelve a intentarlo");
}

//13
let menu2 = prompt("Dime la acción a realizar (1- saludar, 2- mostrar fecha, 3- Mostrar numero random): ");
switch (menu2) {
    case "1":
        let nombreMenu = prompt("Dime tu nombre: ");
        console.log("Hola, " + nombreMenu);
        break;
    case "2":
        let fecha = new Date();
        console.log("La fecha es: " + fecha);
        break;
    case "3":
        let numeroRandom = Math.floor(Math.random() * 10) + 1;
        console.log("El número aleatorio es: " + numeroRandom);
        break;
    default:
        console.log("Acción no válida, vuelve a intentarlo");
}

//14
numRandom = Math.floor(Math.random() * 100) + 1;
let averiguarNum = prompt("Adivina el número entre 1 y 100: ");
while (Number(averiguarNum) !== numRandom) {
    if (Number(averiguarNum) < numRandom) {
        console.log("El número es mayor, inténtalo de nuevo.");
    } else {
        console.log("El número es menor, inténtalo de nuevo.");
    }
    averiguarNum = prompt("Adivina el número entre 1 y 100: ");
}
console.log("Adivinaste el número");

//15

let cantidadNumPares = 0;
let ingresarNumPares = prompt("Dime un número (o 'fin' para terminar): ");
while (ingresarNumPares.toLowerCase() !== "fin") {
    if (Number(ingresarNumPares) % 2 === 0) {
        cantidadNumPares++;
    }
    ingresarNumPares = prompt("Dime un número (o 'fin' para terminar): ");
}
console.log("La cantidad de números pares es: " + cantidadNumPares);

//16
let array1 = ["PIM", "PUM", "PAM", "PEM", "POM"];
console.log(array1);

//17
let array2 = [1, 2, 3, 4, 5];
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

//18
let array3 = [1, 20, 312, 4, 25];
let MayorArray3 = Math.max(...array3);
console.log("El número mayor del array es: " + MayorArray3);
let MenorArray3 = Math.min(...array3);
console.log("El número menor del array es: " + MenorArray3);

//19
let arrayPromedio = [4, 7, 8, 8, 5];
let sumaArrayPromedio = arrayPromedio.reduce((a, b) => a + b, 0);
let promedioArrayPromedio = sumaArrayPromedio / arrayPromedio.length;
console.log("El promedio del array es: " + promedioArrayPromedio);

//20
let arrayNom = [];
let nombreArrayNom = prompt("Ingresa un nombre (o 'salir' para terminar): ");

while (nombreArrayNom.toLowerCase() !== "salir") {

    nombreArrayNom = prompt("Ingresa un nombre (o 'salir' para terminar): ");
    if (nombreArrayNom.toLowerCase() !== "salir") {
        arrayNom.push(nombreArrayNom);
    }
}
console.log("Los nombres ingresados son: " + arrayNom.join(", "));

//21
let arrayLength = [1, 2, 3, 4, 5];
console.log("El array tiene " + arrayLength.length + " elementos.");

//22
let arrayPares = [1, 2, 3, 4, 5, 6];
let arrayParesResultado = arrayPares.filter(num => num % 2 === 0);
console.log("Los números pares del array son: " + arrayParesResultado.join(", "));

//23
let arrayVerificarFruta = ["manzana", "banana", "naranja", "pera"];
let frutaBuscar = prompt("Dime una fruta: ");
if (arrayVerificarFruta.includes(frutaBuscar)) {
    console.log("La fruta " + frutaBuscar + " está en el array.");
} else {
    console.log("La fruta " + frutaBuscar + " no está en el array.");
}

//24
let eliminarArray = [1, 2, 3, 4, 5];
eliminarArray.pop();
console.log("El array después de eliminar el último elemento es: " + eliminarArray.join(", "));

//25
let agregarArray = [1, 2, 3, 4, 5];
agregarArray.push(6);
console.log("El array después de agregar un nuevo elemento es: " + agregarArray.join(", "));
>>>>>>> 553ae966992688323ca437ad89a37e2af5027cfb
