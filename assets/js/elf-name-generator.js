//array of first Name

let firstNames = [ "Annabell", "Bella", "Bitty", "Bling-Bling", "BoBunny",
  "Bubbles", "Button", "Charmy", "Cosmo", "Flower", "Fluffy", "Foxy",
  "Frilly", "Glimmer", "Glitzy", "Happy", "Inky", "Jolly", "Jolly",
  "Mischievous", "Moxie", "Perky", "Pixie", "Purdy", "Scrappy", "Shimmer",
  "Shorty", "Snowy", "Sparkle", "Stampy", "Tinsel", "Tiny", "Twinkle", "Wonky"
];

//array of last Name

let lastNames = [
  "Big-ears", "Blue-bug", "Crafty-Pants", "Curly-Toes", "Gifty-Pants",
  "Glitter-Bottom", "Jingle-Bells", "McGlitter", "McSprinkles", "Merry-Mess",
  "Point-Ears", "Rolly-Renn", "Sugar-Gems", "Sugar-Stitches", "Twinkle-Toes",
  "Twinkles", "Upset", "Yoyo", "Zoom"
];

//generateName function
function generateName(){
  let firstName =  firstNames[ Math.floor (Math.random() * firstNames.length ) ];
  let lastName =  lastNames[ Math.floor (Math.random() * lastNames.length ) ];
  return firstName + " " + lastName;
}

//printName function
function printName(){

  //get a random name
  let theName = generateName();

  //change the name
  let nameContainer = document.querySelector('.name');
  nameContainer.textContent = theName;
}

//the magic!
document.getElementById('loadName').addEventListener("click", printName, false);
