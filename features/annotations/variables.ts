//type annotation
let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false, true];

// Classes

class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function      expected arg   return  actual function now
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}