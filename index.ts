// Teoria y Practica 1
type Producto = {
    id: number;
    name: string;
    price: number;
}
const productoEjemplo: Producto = {
    id: 1,
    name: "Laptop",
    price: 999.99
};

console.log(productoEjemplo);

// 2

let sum: number = 5 + 10;
let isValid: boolean = sum > 10 && sum < 20;

let number: number = 2;
let evenNumber: boolean = number % 2 ===0;
console.log(evenNumber);

//3

let value: number = 5;

if (value > 0) {
    console.log("Value is positive");
} else if (value === 0) {
    console.log("Value is 0");
} else {
    console.log("Value is negative");
}

switch (true) {
    case value > 0:
      console.log("Value is positive");
      break;
    case value < 0:
      console.log("Value is negative");
      break;
    case value === 0:
      console.log("Value is zero");
      break;
    default:
      console.log("Invalid value");
  }

  // 4
  let numbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(num => console.log(num));
let squares = numbers.map(num => num * num);

let nombres: string[] = ["Alejandro","Manuela","Santiago","Paulina","Jose","Suaza"]

for (let i = 0; i < nombres.length; i++) {
    console.log(`For normal ${i}: ${nombres[i]}`);
  }

nombres.forEach(name=>console.log(`For Each: ${name}`));


// Estructuras de datos y funciones

// 1
let numbersToSum: number []= [1,5,6,9,10];

let total = numbersToSum.reduce((a, v) => a + v, 0);

console.log(total)

// 2

const arrayOfStrings: string[] = ["A", "B", "C", "D", "E"]
const concatenateStrings = function(strings: string[]): string {
    return strings.join(' ');
};

console.log(concatenateStrings(arrayOfStrings));


// 3
type Person = {
    id: number;
    name: string;
}

let arrayOfObjects: Person[] = [
    { id: 1, name: "Alejandro" },
    { id: 2, name: "Manuela" },
    { id: 3, name: "Santiago" },
    { id: 4, name: "Paulina" },
    { id: 5, name: "Jose" }
];
console.log("Array de objetos:")
arrayOfObjects.forEach(person => console.log(person.name))
// 4
const maxValue = function(value: number []): number {
    return Math.max(...value);
}

console.log("Máximo en el array:", maxValue(numbersToSum));


// Objetos

// Ejercicio practico

// 1


type CarType = {
    brand: string;
    model: string;
    year: number;
}
 // 2 
class Car {
    static getCarInfo(car: CarType): string {
        return `Your car: Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
    }
}

const myCar: CarType = {
    brand: "Tesla",
    model: "Model 3",
    year: 2024
};

const carInfo = Car.getCarInfo(myCar);
console.log(carInfo);

//3 
function returnNewCar(c: CarType) {
    console.log({ brand: c.brand, model: c.model, year: c.year + 1 });
};

console.log(returnNewCar(myCar));

// Funciones

// Tarea 1

const newArray :number[]= [5,85,1];
const maxValue2 = function(value: number []): number {
    return Math.max(...value);
}
console.log(maxValue2(newArray));


// Tarea 2
function validateParameters<T>(first: T, second: T, ...rest: any[]): void {
    // Verificar que los dos primeros parámetros sean del mismo tipo
    if (typeof first !== typeof second) {
        throw new Error("Los dos primeros parámetros deben ser del mismo tipo.");
    }

    // Verificar que todos los parámetros adicionales sean del mismo tipo que los dos primeros
    rest.forEach(param => {
        if (typeof param !== typeof first) {
            throw new Error("Todos los parámetros adicionales deben ser del mismo tipo que los dos primeros parámetros.");
        }
    });

    console.log("Todos los parámetros son válidos.");
}

console.log(validateParameters(1,2,3,"hola"));
// Tarea 3

function rotateMatrix90Degrees(matrix: number[][]): number[][] {
    const n = matrix.length;

    // Paso 1: Transponer la matriz
    let transposedMatrix: number[][] = [];
    for (let i = 0; i < n; i++) {
        transposedMatrix[i] = [];
        for (let j = 0; j < n; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    // Paso 2: Invertir cada fila de la matriz transpuesta
    for (let i = 0; i < n; i++) {
        transposedMatrix[i].reverse();
    }

    return transposedMatrix;
}

// Ejemplo de uso
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix90Degrees(matrix);
console.log(rotatedMatrix);