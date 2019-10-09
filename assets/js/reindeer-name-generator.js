let choice = { firstLetter: "", monthChoice: "" };
let result = document.getElementById("result");

//  letterChoice function
function letterChoice() {
  letter = document.getElementById("name").value;
  choice.firstLetter = letter;
}

//  monthChoice function
function monthChoice() {
  month = document.getElementById("month").value;
  choice.monthChoice = month;
}

//function to generate reindeer name
function generateName() {
  if (choice.firstLetter && choice.monthChoice) {
    document.getElementById("resultContainer").style.display = "block";
    result.textContent = choice.firstLetter + " " + choice.monthChoice;
  } else {
    alert("Please input your data first.");
  }
}
