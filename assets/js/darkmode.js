// Query for the toggle that is used to change between themes
const toggle = document.querySelector("#themeToggle");
const storedMode = localStorage.getItem("darkmode");
const navbar = document.querySelector(".navbar ");

const createElement = (elem, cssClass, txt = undefined) => {
  let node = document.createElement(elem); //create the List element

  if (cssClass) {
    node.classList.add(cssClass);
  }

  if (txt) {
    node.appendChild(document.createTextNode(txt));
  }

  return node;
};

const tc = createElement("DIV", "toggle-container");
const switchLabel = createElement("LABEL", "switch");
const checkbox = createElement("INPUT");
const spanSlider = createElement("SPAN", "slider");
const pTag = createElement("SPAN", "ptag", "dark mode");

checkbox.setAttribute("id", "themeToggle");
checkbox.setAttribute("type", "checkbox");
spanSlider.classList.add("round");
switchLabel.appendChild(pTag);
switchLabel.appendChild(checkbox);
switchLabel.appendChild(spanSlider);

tc.appendChild(switchLabel);

navbar.appendChild(tc);

// Listen for the toggle check/uncheck to toggle the dark class on the <body>
checkbox.addEventListener("click", ev => toggleDarkMode(ev.target.checked));

// Called by the media query to check/uncheck the toggle
function checkToggle(shouldCheck) {
  checkbox.checked = shouldCheck;
}

// Called when the page loads
if (storedMode === null || storedMode === "false") {
  toggleDarkMode(false);
} else {
  toggleDarkMode(true);
}

function toggleDarkMode(shouldEnable) {
  document.body.classList.toggle("dark", shouldEnable);
  checkToggle(shouldEnable);
  localStorage.setItem("darkmode", shouldEnable);
}
