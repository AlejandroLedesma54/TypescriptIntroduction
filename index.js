var productoEjemplo = {
    id: 1,
    name: "Laptop",
    price: 999.99
};
console.log(productoEjemplo);
// 2
var sum = 5 + 10;
var isValid = sum > 10 && sum < 20;
var number = 2;
var evenNumber = number % 2 === 0;
console.log(evenNumber);
//3
var value = 5;
if (value > 0) {
    console.log("Value is positive");
}
else if (value === 0) {
    console.log("Value is 0");
}
else {
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
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
numbers.forEach(function (num) { return console.log(num); });
var squares = numbers.map(function (num) { return num * num; });
var nombres = ["Alejandro", "Manuela", "Santiago", "Paulina", "Jose", "Suaza"];
for (var i = 0; i < nombres.length; i++) {
    console.log("For normal ".concat(i, ": ").concat(nombres[i]));
}
nombres.forEach(function (name) { return console.log("For Each: ".concat(name)); });
// Estructuras de datos y funciones
// 1
var numbersToSum = [1, 5, 6, 9, 10];
var total = numbersToSum.reduce(function (a, v) { return a + v; }, 0);
console.log(total);
// 2
var arrayOfStrings = ["A", "B", "C", "D", "E"];
var concatenateStrings = function (strings) {
    return strings.join(' ');
};
console.log(concatenateStrings(arrayOfStrings));
var arrayOfObjects = [
    { id: 1, name: "Alejandro" },
    { id: 2, name: "Manuela" },
    { id: 3, name: "Santiago" },
    { id: 4, name: "Paulina" },
    { id: 5, name: "Jose" }
];
console.log("Array de objetos:");
arrayOfObjects.forEach(function (person) { return console.log(person.name); });
// 4
var maxValue = function (value) {
    return Math.max.apply(Math, value);
};
console.log("Máximo en el array:", maxValue(numbersToSum));
// 2 
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.getCarInfo = function (car) {
        return "Your car: Brand: ".concat(car.brand, ", Model: ").concat(car.model, ", Year: ").concat(car.year);
    };
    return Car;
}());
var myCar = {
    brand: "Tesla",
    model: "Model 3",
    year: 2024
};
var carInfo = Car.getCarInfo(myCar);
console.log(carInfo);
//3 
function returnNewCar(c) {
    console.log({ brand: c.brand, model: c.model, year: c.year + 1 });
}
;
console.log(returnNewCar(myCar));
// Funciones
// Tarea 1
var newArray = [5, 85, 1];
var maxValue2 = function (value) {
    return Math.max.apply(Math, value);
};
console.log(maxValue2(newArray));
// Tarea 2
function validateParameters(first, second) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    // Verificar que los dos primeros parámetros sean del mismo tipo
    if (typeof first !== typeof second) {
        throw new Error("Los dos primeros parámetros deben ser del mismo tipo.");
    }
    // Verificar que todos los parámetros adicionales sean del mismo tipo que los dos primeros
    rest.forEach(function (param) {
        if (typeof param !== typeof first) {
            throw new Error("Todos los parámetros adicionales deben ser del mismo tipo que los dos primeros parámetros.");
        }
    });
    console.log("Todos los parámetros son válidos.");
}
console.log(validateParameters(1, 2, 3, "hola"));
// Tarea 3
