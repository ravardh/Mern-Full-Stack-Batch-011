function DisplayData() {
  const product = JSON.parse(sessionStorage.getItem("CurrentProduct"));

  const DisplayArea = document.getElementById("productDetail")

  DisplayArea.innerHTML=`
        <img
          src=${product.image}
          alt=""
          class="object-fit-cover w-100"
        />

        <div>
          <h2>${product.title}</h2>
        </div>
  `
}

DisplayData();