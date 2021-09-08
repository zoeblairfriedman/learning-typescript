//type annotation
let apples = 5; // annotation removed <--type inference
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

// When to use annotations
// 1) Function that returns the 'any' type. JSON.parse() is an example of this because it depends on what we put into it. So typescript makes them all "any"
const json = '{"x": 10, "y": 20}'
const coordinates:  { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = [];
let foundWord: boolean;

for (let i = 0; i < words.length; i++){
  if (words[i] === 'green'){
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]; 
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0){
    numberAboveZero = numbers[i]
  }
}

