//Two Variables
let pizzaPlace = "Big Ole Pizza Store";
let numberOfToppings = 39;

//Printing Variable Values
console.log(pizzaPlace);
console.log(numberOfToppings);

//Printing Variable Type
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

let pizzaSummary = `My pizza place is ${pizzaPlace} and we have ${numberOfToppings} toppings.`;
console.log(pizzaSummary);

let toppings = 10;
toppings >= 10 ? console.log("A whole lot of pizza") : console.log("Quality, not quantity.");



//Bonus 
// Went to study hall and realized I was doing this wrong and the code below this is what I ended up with.
// let x = 0;
//     while (x <= 39) {
//         console.log(x);
// x += 2;
// }


//Iteration is checking if i less than or equal to the numberOfToppings, if not add 1.
for (let i = 1; i <= numberOfToppings; i++){
    // Checking to see if it's an even number.
      if (i % 2 === 0){
        console.log(i);
      }
      
  }