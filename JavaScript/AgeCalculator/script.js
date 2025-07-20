function Calculate() {
  const dob = Number(document.getElementById("dob").value.split("-")[0]);
  const cd = Number(document.getElementById("curr").value.split("-")[0]);
  const Age = cd - dob;

  document.getElementById("Your_age").innerText = "Your age is : " + Age +" Years";
}
