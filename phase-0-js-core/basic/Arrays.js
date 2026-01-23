// Arrays are a collection of items; example shopping list
// The square brackets [ ] create the array, and commas separate the items

// creating arrays

let shoppingList = ["Milk", "Bread", "Butter", "Sugar", "Tea leaves", "Cake"];

// Array of friends' names
let friends = ["Alice", "Bob", "Charlie", "Diana"];

// Array of numbers (ages)
let ages = [25, 30, 22, 28];

// Mixed types (yes, JavaScript allows this!)
let mixedBag = ["Hello", 42, true, null];

// Empty array (like an empty box)
let emptyArray = [];

console.log(friends); // Shows: ["Alice", "Bob", "Charlie", "Diana"]

// accessing elements of an array
let fruits = ["Apple", "Banana", "Orange", "Grape"];

// Position 0 = First item
console.log(fruits[0]); // "Apple"

// Position 1 = Second item  
console.log(fruits[1]); // "Banana"

// Position 3 = Fourth item
console.log(fruits[3]); // "Grape"

// What if we try position 4?
console.log(fruits[4]); // undefined (doesn't exist!)


// modifying or updating elements in an array
let colors = ["Red", "Green", "Blue", "Green", "Yellow"];

console.log(colors); // ["Red", "Green", "Blue"]

// Change the second color (index 1)
colors[1] = "Yellow";

console.log(colors); // ["Red", "Yellow", "Blue"]

// Add a new color at position 3
colors[3] = "Purple";

console.log(colors); // ["Red", "Yellow", "Blue", "Purple"]

/* try{
    colors.at(5) = "Pink";
} catch(e) {
    console.log(e.message);
}

console.log(colors); */

// getting the size of an array
let groceries = ["Milk", "Eggs", "Bread", "Cheese", "Butter"];

// .length tells you how many items
console.log(groceries.length); // 5

// Last item is always length - 1
let lastItem = groceries[groceries.length - 1];
console.log(lastItem); // "Butter"

// adding items into an array
let playlist = ["Song 1", "Song 2"];

// .push() adds to the end
playlist.push("Song 3");
console.log(playlist); // ["Song 1", "Song 2", "Song 3"]

playlist.push("Song 4", "Song 5");
console.log(playlist); // ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"]

let todoList = ["Buy groceries", "Clean room"];

// .unshift() adds to the beginning
todoList.unshift("Wake up early");
console.log(todoList); // ["Wake up early", "Buy groceries", "Clean room"]

// removing items from an array
let stackOfBooks = ["Book A", "Book B", "Book C"];

// .pop() removes the last item
let removedBook = stackOfBooks.pop();

console.log(removedBook); // "Book C"
console.log(stackOfBooks); // ["Book A", "Book B"]

let queue = ["Person 1", "Person 2", "Person 3"];

// .shift() removes the first item
let firstPerson = queue.shift();

console.log(firstPerson); // "Person 1"
console.log(queue); // ["Person 2", "Person 3"]

// finding items of an array

// .indexOf() finds FIRST position of an item(there might exist several of the same)
let bananaPosition = fruits.indexOf("Banana");
console.log(bananaPosition); // 1 (first Banana at index 1)

let pineapplePosition = fruits.indexOf("Pineapple");
console.log(pineapplePosition); // -1 (not found!)

let tools = ["Hammer", "Screwdriver", "Wrench"];

// .includes() returns true or false
let hasHammer = tools.includes("Hammer");
console.log(hasHammer); // true

let hasDrill = tools.includes("Drill");
console.log(hasDrill); // false


// looping through an array
// Visit each color one by one
for (let i = 0; i < colors.length; i++) {
  console.log(`Color ${i + 1}: ${colors[i]}`);
}

// even easier way
for (color in colors) {
    console.log(`I love ${colors.at(color)}`);
}

// sorting items in an array
let names = ["Zoe", "Adam", "Charlie", "Beth"];
names.sort(); // alphabetical order
console.log(names); // ["Adam", "Beth", "Charlie", "Zoe"]

names.reverse(); // reversed order
console.log(names);


// joining to string
let words = ["Hello", "World", "!"];
let sentence = words.join(" "); // Join with space
console.log(sentence); // "Hello World !"

let tags = ["js", "arrays", "tutorial"];
let hashtags = tags.map(tag => `#${tag}`).join(" ");
console.log(hashtags); // "#js #arrays #tutorial"

// .slice() - Copy a Portion (Doesn't Change Original)
let namesPortion = names.slice(0, 2);
console.log(namesPortion);

// .splice() - Remove/Add Items Anywhere (Changes Original)
let months = ["Jan", "March", "April", "June"];

// At position 1, remove 0 items, add "Feb"
months.splice(1, 0, "Feb");
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

// At position 4, remove 1 item, add "May"
months.splice(4, 1, "May");
console.log(months); // ["Jan", "Feb", "March", "April", "May"]

// Just remove 2 items starting at position 2
months.splice(2, 2);
console.log(months); // ["Jan", "Feb", "May"]

// .indexOf() - Find Position of Item
// Find FIRST occurrence
let firstGreen = colors.indexOf("Green");
console.log(firstGreen); 

// Find from specific position
let secondGreen = colors.indexOf("Green", 2); // Start searching from index 2
console.log(secondGreen);

// Item not found returns -1
let purpleIndex = colors.indexOf("Purple");
console.log(purpleIndex);

// .includes() - Check if Item Exists
// Returns true or false
console.log(tools.includes("Hammer")); // true
console.log(tools.includes("Drill"));  // false

// .find() - Find First Matching Item
let numbers = [5, 12, 8, 130, 44];

// Find first number greater than 10
let found = numbers.find(num => num > 10);
console.log(found); // 12

// With objects
let users = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30},
  {name: "Charlie", age: 20}
];

let adult = users.find(user => user.age >= 30);
console.log(adult); // {name: "Bob", age: 30}

// .map() - Transform Each Item (Creates NEW Array)
// Double each number
let doubled = numbers.map(num => num * 2);
console.log(doubled);
console.log(numbers);

// Convert to strings
let strings = numbers.map(num => `Number: ${num}`);
console.log(strings);

// .filter() - Keep Only Matching Items
let scores = [85, 42, 90, 56, 78, 95, 30];

// Keep only passing scores (>= 60)
let passingScores = scores.filter(score => score >= 60);
console.log(passingScores); // [85, 90, 78, 95]

// Filter objects
let products = [
  {name: "Laptop", price: 1000},
  {name: "Mouse", price: 20},
  {name: "Keyboard", price: 50}
];

let affordable = products.filter(product => product.price < 100);
console.log(affordable); // [{name: "Mouse", price: 20}, {name: "Keyboard", price: 50}]

// .reduce() - Combine All Items into One Value
let prices = [10, 20, 30, 40];

// Calculate total (sum all numbers)
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 100

// Find maximum
let max = prices.reduce((max, price) => price > max ? price : max, 0);
console.log(max); // 40

// .concat() - Combine Arrays
let allNumbers = prices.concat(numbers);
console.log(allNumbers);

// .toString() - Simple String Conversion
let stringOfWords = words.toString();
console.log(stringOfWords);