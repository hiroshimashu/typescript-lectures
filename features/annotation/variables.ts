import { number } from "prop-types";

let apples: string = 'red';
let speed: string = 'able';

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let date: Date = new Date();
let myNumber: number[] = [1, 2, 3];
let mystring: string[] = ['a', 'b', 'c'];

class Car {}
let car: Car = new Car();

// Object leterals
let point: { x: number; y: number } = {
	x: 10,
	y: 20
};

// Functions
const myFunction: (n: number) => number = (i: number) => {
	return i * 2;
};

// type annotation
// when to use type annotation?

// 1) Function that returns any type
const json = '{ "x": 10, "y": 20 }';
const parsed: { x: number; y: number } = JSON.parse(json);
console.log(parsed);

// 2) when declare a variable on a one line and intialize it later

// 3) Variable whose type can not be infered
let numbers = [10, 12, 13]
let numberAboveZero: boolean | number = false;

for (let i; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    } else 
}