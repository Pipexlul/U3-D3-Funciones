// 3.1
function pintar(element) {
  element.style.backgroundColor = "yellow";
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", (ev) => {
  pintar(ev.target);
});

// 3.2
function pintar2(element, color) {
  element.style.backgroundColor = color;
}

const ele2 = document.getElementById("ele2");
ele2.style.backgroundColor = "green";
ele2.addEventListener("click", (ev) => {
  pintar2(ev.target, "yellow");
});
