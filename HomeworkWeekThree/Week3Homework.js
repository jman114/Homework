//pizzaToppings Array
pizzaToppings = ["Pepperoni, ",  "Cheese, ", "Sausage, ", "and Bacon. "];

//greetCustomer Function 
function greetCustomers() {
  let str = "Welcome to Pizza House, our toppings are ";

  for (let name of pizzaToppings) {
  str += `${name}`;
}
  console.log(str);
}
greetCustomers();

//getPizzaOrder Function
function getPizzaOrder(size, crust, ...pizzaToppings) {
    
    return console.log("One", size  +  crust + pizzaToppings)
}

// again, invoke the function and pass in more than two strings
getPizzaOrder("Large ", "Thick ", "pepperoni, ", "sausage ", " bacon");

obj.method = function(greetCustomers) {
   return "the key is 'method' and it calls refers to a function";
 };

// for (let greetCustomers of pizzaToppings) {
//     console.log(pizzaToppings);