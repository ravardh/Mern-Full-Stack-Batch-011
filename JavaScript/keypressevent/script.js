document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;
  const code = event.code;

  //document.getElementById("output").textContent = "You have Pressed Key " + key + " with code " +code;
  document.getElementById(
    "output"
  ).textContent = `You have Pressed Key ${key} with code ${code}`;

  key === "r"
    ? (document.bgColor = "red")
    : key === "g"
    ? (document.bgColor = "green")
    : key === "b"
    ? (document.bgColor = "blue")
    : (document.bgColor = "white");
}
