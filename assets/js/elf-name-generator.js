let choice = {firstLetter: "", monthChoice: ""};
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

//function to generate elf name
function generateName() {
    if (choice.firstLetter && choice.monthChoice) {
        document.getElementById("resultContainer").style.display = "block";
        result.textContent = choice.firstLetter + " " + choice.monthChoice;
    } else {
        alert("Please input your data first.");
    }
}

function displayButtonText() {
  const button = document.getElementById('loadName');
  if (document.body.offsetWidth < 600) {
    button.innerText = 'Go!'
  }
}

 displayButtonText();
