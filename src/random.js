

var susDate = new Date();
var day = susDate.getDate();
var month = susDate.getMonth();
var year = susDate.getFullYear();
var susDateFormat = month + 1 + "/" + day + "/" + year;

var endDate = "3/21/2023"

if (susDateFormat >= endDate) {
   // console.log("Yes")
}
// var todaysDate = new Date();

// todaysDate.toLocaleDateString();
// console.log(todaysDate)
// var eventDate = new Date()
// eventDate.setDate(eventDate.getDate() +  2)
// eventDate.toLocaleDateString();
// console.log(eventDate)

var todaysDate = new Date();
var eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 2);

// Check if eventDate is within 2 days of todaysDate
if (eventDate.getTime() <= todaysDate.getTime() + 2 * 24 * 60 * 60 * 1000) {
   console.log('Event is within 2 days of today!');
} else {
  console.log('Event is not within 2 days of today.');
}



class Hello {
   constructor() {
     this.num = 2;
   }
 
   addTwo() {
     const addIt = () => {
       // arrow function locks the value of `this`
       this.num = this.num + 3;
     }
     addIt();
   }
 }
 
 const h = new Hello();
 h.addTwo();
 console.log(h.num);

 class Card {
   constructor(rank, suit) {
     this.rank = rank;
     this.suit = suit;
   }
 
   outputCard() {
     console.log(this.rank + " of " + this.suit);
   }
 }
 
 const c = new Card(5, "diamonds");
 c.outputCard();

 var value = "hello";
   value = "goodbye";
   console.log(value);

   class Animal {
      eat() {
        console.log("om nom nom");
      }
    }
    
    class Dog extends Animal {
      // By using extends, the Dog class will inherit all methods from the Animal class
    }
    
    const d = new Dog();
    d.eat();

    const values = [
      "hello",
      "goodbye",
      "good day"
    ]
    
    for(let value of values) {
      console.log(value);
    }

   
    for(let i = 0; i < 10; i++) {
      console.log("Hello " + i);
    }
    //console.log("The value of i is: " + i); doesn't work with let
    
    const person = {
      name: "Ken",
      age: 29,
      status: "active"
    };
    
    const accountSettings = {
       person,
      status: "inactive",
      mood: "happy"
    };
    
    console.log(accountSettings);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumbers = [
  0,
  // include all the items inside the numbers array
  // without the enclosing array.
  ...numbers
];

console.log(newNumbers);

for(var i = 0; i < 10; i++) {
   console.log("Hello " + i);
 }
 
 console.log("The value of i is: " + i);

 function testing(n){
   var sum = 0;

   for(var i = 0; i < n; i++){
      sum += testing(i, i + 1);
   }
 }