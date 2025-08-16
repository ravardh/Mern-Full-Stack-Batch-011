function left() {
  let currentloc = Number(
    document.getElementById("inner-div").style.marginLeft.split("px")[0]
  );

  if (currentloc === 0) return;

  currentloc += 210;
  document.getElementById("inner-div").style.marginLeft = currentloc + "px";
}
function right() {
  let currentloc = Number(
    document.getElementById("inner-div").style.marginLeft.split("px")[0]
  );

  if (currentloc === -2100) return;

  currentloc -= 210;
  document.getElementById("inner-div").style.marginLeft = currentloc + "px";
}

console.log(
  Number(document.getElementById("inner-div").style.marginLeft.split("px")[0])
);
