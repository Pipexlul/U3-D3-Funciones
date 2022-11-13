const colorDisplay = document.querySelector("#color-display");

let globalColor = "blue";

const keyHandler = (ev) => {
  switch (ev.key) {
    case "a": {
      globalColor = "blue";
      colorDisplay.textContent = "Azul";
      break;
    }
    case "s": {
      globalColor = "orange";
      colorDisplay.textContent = "Naranjo";
      break;
    }
    case "d": {
      globalColor = "black";
      colorDisplay.textContent = "Negro";
      break;
    }
  }
};

const clickHandler = (ev) => {
  const elem = ev.target;

  elem.style.backgroundColor = globalColor;
};

const divs = [
  document.querySelector("#div1"),
  document.querySelector("#div2"),
  document.querySelector("#div3"),
  document.querySelector("#div4"),
];

divs.forEach((div) => {
  div.addEventListener("click", clickHandler);
});

document.addEventListener("keydown", keyHandler);
