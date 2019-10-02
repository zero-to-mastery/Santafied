//array of first Name
let firstNames = [
  "Sparkle","BoBunny","Jolly","Moxie","Bella","Charmy","Glitzy",
  "Bling-Bling","Perky","Cosmo","Bubbles","Pixie","Frilly","Scrappy",
  "Bitty","Purdy","Tinsel","Foxy","Stampy","Inky","Wonky","Glimmer",
  "Shimmer","Happy","Button","Tiny","Snowy","Fluffy","Jolly","Mischievous",
];

//array of last Name
let lastNames = [
  "Gifty-Pants","Point-Ears","Sugar-Gems","McSprinkles","Merry-Mess",
  "Jingle-Bells","Glitter-Bottom","Crafty-Pants","Twinkle-Toes",
  "Sugar-Stitches","McGlitter","Curly-Toes","Big-ears","Rolly-Renn","Twinkles",
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
