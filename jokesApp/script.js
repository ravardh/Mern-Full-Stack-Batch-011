async function getJokes() {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Any?type=twopart"
  );

  const data = await response.json();

  console.log(data);

  //   fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => console.log(data));

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchline").innerText = data.delivery;
}
