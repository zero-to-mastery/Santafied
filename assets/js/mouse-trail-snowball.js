const snow1 = document.getElementById("snowball1");
const snow2 = document.getElementById("snowball2");
const snow3 = document.getElementById("snowball3");

const mouseX = event => {
  return event.clientX;
}

const mouseY = event => {
  return event.clientY;
}

const positionElement = (event, snow) => {
  const mouse = {
    x: mouseX(event),
    y: mouseY(event)
  }

  snow.style.top = `${mouse.y + document.documentElement.scrollTop}px`;
  snow.style.left = `${mouse.x}px`;
}

window.onmousemove = event => {
  setTimeout(() => {
    positionElement(event, snow1);
  }, 100);  

  setTimeout(() => {
    positionElement(event, snow2);
  }, 200);  

  setTimeout(() => {
    positionElement(event, snow3);
  }, 300);  
}
