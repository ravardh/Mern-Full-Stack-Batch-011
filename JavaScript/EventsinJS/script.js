const BG = document.getElementById("badaGola");

const CG1 = document.getElementById("chotaGola1");
const CG2 = document.getElementById("chotaGola2");
const CG3 = document.getElementById("chotaGola3");

CG1.addEventListener("mouseover", changecolor1);
CG2.addEventListener("mouseover", changecolor2);
CG3.addEventListener("mouseover", changecolor3);

CG1.addEventListener("mouseout", changecolor);
CG2.addEventListener("mouseout", changecolor);
CG3.addEventListener("mouseout", changecolor);

function changecolor1() {
  BG.style.backgroundColor = "red";
}
function changecolor2() {
  BG.style.backgroundColor = "blue";
}
function changecolor3() {
  BG.style.backgroundColor = "green";
}
function changecolor() {
  BG.style.backgroundColor = "white";
}

