let globalColor = "blue";

const keyHandler = (ev) => {
  switch (ev.key) {
    case "a": {
      globalColor = "blue";
      break;
    }
    case "s": {
      globalColor = "orange";
      break;
    }
    case "d": {
      globalColor = "black";
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
