const sumbit = document.getElementById('submit');
const input = document.getElementById("input");
const message = document.getElementById("message");


let myArray = ['Rudolph', 'Santa Claus', 'Gingerbread', 'Cookie', 'Tinker', 'Perky', 'Snowflake', 'Elvis', 'Happy', 'Jingle', 'Sugar', 'Candy', 'Lulu', 'Christmas', 'Bell', 'Nick', 'Noel', 'Claus', 'Emmanuel', 'Frost'];


function submitButton() {

  // generate random name
  if (input.value.length > 0) {
    input.style.borderColor = 'royalblue';
    let randomName = Math.floor(Math.random() * (myArray.length));
    document.getElementById('generated-name').innerHTML = myArray[randomName];

    // add required message
  } if (input.value.length === 0) {
    setMessages('Enter Your Name');

  } else {

    setMessages();
  }

  // clear input 
  input.value = "";
};


function setMessages(msg) {
  message.style.color = 'yellow';
  message.style.fontSize = '1.5rem';
  message.textContent = msg;
}


function pressEnter(event) {
  if (input.value.length > 0 && event.which === 13) {
    submitButton();
  }
}

sumbit.addEventListener('click', submitButton);
input.addEventListener('keypress', pressEnter);
