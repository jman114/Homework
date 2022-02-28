//Create A Few Classes - Create One "General Category" Class
//Using The Web Store(Inventory), Video Game, And Game Console Example
class GeneralGames {
    constructor(gameId, gameName, gamePrice){
        this.gameId = gameId;
        this.gameName = gameName;
        this.gamePrice = gamePrice;

        this.game = `This ${this.gameId} ${this.gameName} ${this.gamePrice}.`
    }
greeting() {
    return "This games name is ${gameName}";
 }
};

  
  console.log("Inventory ... \n", GeneralGames);


//Create Two More Classes Which Extend From The First Class

//Video Game Category Inventory Class 
class VideoGames extends GeneralGames {
    constructor(gameId, gameName, gamePrice, gameCategory){
     super(gameId, gameName, gamePrice);
     this.gameCategory = gameCategory;
  }
  greeting() {
      return "Games Are In Stock!";
  }
};

console.log("\n Video Games ... \n", VideoGames);

class GameComplete extends VideoGames {
    constructor(gameId, gameName, gamePrice, gameCategory, gameConsole){
        super(gameId, gameName, gamePrice, gameCategory);
        this.gameConsole = gameConsole;
    }
    greeting() {
        return "Games and Consoles are In Stock!";
    }
}; 

console.log("\n Game Consoles ... \n", GameComplete);

const GameOne = new GameComplete(313, "Mega Man", 59.99, "Shooter", "Playstation 5");

GameOne.play = function() {
    return 'I love to play video games!';
};

console.log("\n Complete Game And Inventory ... \n", GameOne);

console.log("\n Games In Stock Message...", GameOne.greeting());
  
console.log("\n We Love To play games...", GameOne.play());