// Ex1
console.log('Excercise 1');
const greeter = (myArray, counter) => {
  const greetText = "Hello";

  for (const element of myArray) {
    console.log(`${greetText} ${element}`);
  }
};

greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

// Ex2
console.log('\nExcercise 2');
const capitalizeFirstLetter = ([first, ...rest]) => first.toUpperCase() + rest.join('');

console.log(capitalizeFirstLetter("hello")); // Output: "Hello"

// Ex3
console.log('\nExcercise 3');
const colors = ["red", "green", "blue"];
const capitalizeColors = colors.map(color => capitalizeFirstLetter(color));

console.log(capitalizeColors); // Output: ["Red", "Green", "Blue"]

// Ex4
console.log('\nExcercise 4');
const numbers = [10, 15, 25, 30, 5, 20];
const filteredNumbers = numbers.filter(num => num >= 20);

console.log(filteredNumbers); // Output: [25, 30, 20]

// Ex5
console.log('\nExcercise 5');
const nums = [1, 2, 3, 4];
const sum = nums.reduce((total, num) => total + num, 0);
const product = nums.reduce((total, num) => total * num, 1);

console.log(`Sum: ${sum}`); // Output: "Sum: 10"
console.log(`Product: ${product}`); // Output: "Product: 24"

// Ex6
console.log('\nExcercise 6');
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
}

const mySedan = new Sedan("Toyota", 2020, 15000);
console.log(mySedan); // Output: Sedan { model: 'Toyota', year: 2020, balance: 15000 }