//Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ["pepperoni", "bacon", "sausage", "chicken"]

//console.log(pizzaToppings)

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomers() {
let str = "Welcome to Pizza House, our toppings are ";

for (let name of pizzaToppings) {
   str += `${name}, `;
 }
   console.log(str);
 }
 greetCustomers();


// Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs

//Pizza Order Function
function getPizzaOrder(size, crust, ...pizzaToppings) {
  // prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
  let message = `One ${size} ${crust} crust pizza with `;

  for (let name of pizzaToppings){
    message += `${name}, `;
  }
    console.log(`${message} coming up...`)
    return [size,  crust, pizzaToppings]
}
// outputs a list with the size, crust, and toppings
//getPizzaOrder("Large ", "Thick ","pepperoni ", "sausage "," bacon");

let pizzaInput = getPizzaOrder("Large ", "Thick ","pepperoni ", "sausage "," bacon")
const preparePizza= function ([orderSize, orderCrust, orderToppings]){
  console.log("cooking pizza...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  }
}
let cooked = preparePizza(pizzaInput);

function servePizza(pizza) {
   let message = console.log(`Order is up! Here is your ${pizza.size} ${pizza.crust} with ${pizza}. Enjoy!`);

   for (let name of pizzaToppings) {
     message += `${name}`;
   }
   console.log(message);
   return pizza;
}
servePizza(pizzaInput);