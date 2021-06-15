// we will always rely on type inference
// type inference will occur only we assign the value to the same line of var declaration
let apples = 5;
// : type is type annotations
// 1. we use when function return any
let speed: string = "fast";
let hasNme:boolean = false;

let nothingMuch:null = null;
let nothing:undefined = undefined;

// built in objects
let now:Date = new Date();

// Array
let colors: string[] = ['red','green','blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,false,true];

// Classes
class Car{

}

let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i:number) => void = (i: number) =>{
  console.log(i);
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10,"y":20}';
// type of JSON.parse that return is any
// we need to annotate the type of coordinate will be an object that
// consists of two keys x, and y
const coordinates: {x: number,y: number} = JSON.parse(json);

console.log(coordinates); // {x:10, y:20}

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red','green','blue'];
let foundWord: boolean;

for(let i=0;i<words.length;i++){
  if(words[i] == 'green'){
    foundWord = true;
  }
}

// 3) Variabe whose type cannot be infered correctly
let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;

for(let i=0;i<numbers.length;i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}