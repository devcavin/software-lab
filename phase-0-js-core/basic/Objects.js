/**
 * curly braces { } create the object, and we use key-value pairs
 */

// creating an object
// Object for a book
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  pages: 218,
  isFiction: true
};

// Object for a car
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
  isAutomatic: true
};

// Object for a product in a store
let product = {
  name: "Laptop",
  price: 999.99,
  inStock: true,
  features: ["16GB RAM", "512GB SSD", "Intel i7"]
};

console.log(book); // Shows all book information


// accessing object properties
let person = {
  name: "Bob",
  age: 30,
  job: "Developer"
};

// Use a dot followed by the property name
console.log(person.name);   // "Bob"
console.log(person.age);    // 30
console.log(person.job);    // "Developer"

// Use square brackets with the property name as a string
console.log(person["name"]);  // "Bob"
console.log(person["age"]);   // 30

// Why use brackets? When property name has spaces or special characters
let weirdObject = {
  "first name": "John",
  "last name": "Doe",
  "favorite-color": "blue"
};

console.log(weirdObject["first name"]);      // "John"
console.log(weirdObject["favorite-color"]);  // "blue"
// console.log(weirdObject.first name);      // ERROR! Can't use dot here

// changing or adding properties
let dog = {
  name: "Buddy",
  breed: "Golden Retriever"
};

console.log(dog); // {name: "Buddy", breed: "Golden Retriever"}

// Change existing property
dog.age = 3;
console.log(dog); // {name: "Buddy", breed: "Golden Retriever", age: 3}

// Add new property
dog["color"] = "golden";
console.log(dog); // {name: "Buddy", breed: "Golden Retriever", age: 3, color: "golden"}

// Change a value
dog.age = 4;  // Buddy had a birthday!
console.log(dog.age); // 4

// removing properties
let user = {
  username: "coder123",
  password: "secret",
  email: "coder@example.com"
};

// Remove password (for security)
delete user.password;

console.log(user); 
// {username: "coder123", email: "coder@example.com"}
// password is gone!

// checking if a property exists
let phone = {
  brand: "Apple",
  model: "iPhone 13",
  storage: "128GB"
};

// Check if property exists
console.log("brand" in phone);      // true
console.log("price" in phone);      // false
console.log(phone.hasOwnProperty("model"));  // true (another way)

// What happens if we access non-existent property?
console.log(phone.price);  // undefined (not an error!)

// looping through objects
let student = {
  name: "Emma",
  grade: "A",
  age: 16,
  subjects: ["Math", "Science", "English"]
};

// Loop through all properties
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// nested objects
let company = {
  name: "TechCorp",
  location: "San Francisco",
  employees: {
    ceo: {
      name: "Sarah Chen",
      salary: 1000000
    },
    manager: {
      name: "David Kim",
      salary: 150000
    },
    intern: {
      name: "Alex Johnson",
      salary: 30000
    }
  }
};

// Access nested properties
console.log(company.employees.ceo.name);  // "Sarah Chen"
console.log(company.employees.intern.salary); // 30000

// Or with brackets
console.log(company["employees"]["manager"]["name"]); // "David Kim"

// common methods

// Get all keys
let keys = Object.keys(person);
console.log(keys);

// Get all values
let values = Object.values(person);
console.log(values);

// Get key-value pairs
let entries = Object.entries(person);
console.log(entries);

// shallow copy objects
let personCopy = {...person};