let choice = { firstletter: "Cookie", month: "Lord Crackle" };

//  letterChoice function
function letterChoice() {
  letter = document.getElementById("name").value;
  choice.firstletter = letter;
}

//  monthChoice function
function monthChoice() {
  month = document.getElementById("month").value;
  choice.month = month;
}

//printName function
function printName() {
  let nameContainer = document.querySelector(".given-name");
  nameContainer.textContent = choice.firstletter + " " + choice.month;
}

//the magic!
document.getElementById("loadName").addEventListener("click", printName, false);
