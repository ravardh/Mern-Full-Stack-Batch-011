function handleSubmit() {
  const data = document.getElementById("ipData").value;
  if (data.length < 3) {
    console.error("more than 3 characters required");
  } else if (!/^[A-Za-z ]+$/.test(data)) {
    console.error("only alphabets are allowed");
  }

  console.log(data);
}
