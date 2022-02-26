// const person = {
//     // other properties here
//     party() {
//       return "Dance, dance, dance!";
//     },
//   };

//   const person = {
//     name: "Pat",
//     // other properties and methods
//     greet() {
//       return `Hi, my name is ${this.name}`;

//     },
//   };


// declaring the function constructor
function Person(name, age, interests) {
    this.name = name;
    this.age = age;
    this.interests = interests;
    this.bio = `${this.name} is ${
      this.age
    } years old. They like ${this.interests.join(", ")}`;
    this.greet = function () {
      return `Hello! I'm ${this.name}`;
    };
  }
  
  // using the `NEW` keyword to create an instance of the object `Person`
  const pat = new Person("Pat", 35, ["movies", "cats"]);
  const mack = new Person("Mack", 31, ["music", "baseball", "TV"]);

pat.bio;