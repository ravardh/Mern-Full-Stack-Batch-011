async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const products = document.getElementById("ProductList");

  data.forEach((element) => {
    const productRow = document.createElement("div");
    productRow.classList.add(
      "row",
      "border",
      "border-dark",
      "rounded",
      "shadow",
      "p-3"
    );

    productRow.innerHTML = `
          <div class="col-3 border border-danger">
            <div class="d-flex justify-content-center align-items-center">
            <img
              src=${element.image}
              alt=""
              width="200px"
              height="200px"
              class="object-fit-contain mt-5 "
            />
            </div>
          </div>
          <div class="col-9 border border-success p-4 d-flex flex-column gap-2">
            <a href="./productDetails.html" class="productLink text-decoration-none fs-2" >${
              element.title.length > 50
                ? element.title.slice(0, 50) + " ..."
                : element.title
            }</a>
            <span class="fs-6"><b>Category:</b> ${element.category}</span>
            <span class="">
              <b>Rating:</b> ${element.rating.rate}/5 (${
      element.rating.count
    } reviews)
            </span>
            <span class="fs-5">
              <b>Price:</b> <span class="text-success fw-bold">₹${(
                element.price * 85
              ).toFixed(2)}</span>
            </span>

            <div class="mt-4 d-flex gap-3">
              <button class="btn btn-warning">Buy Now</button>
              <button class="btn btn-outline-warning">Add to Cart</button>
            </div>
          </div>
    `;

    const link = productRow.querySelector(".productLink");

    link.addEventListener("click", (e) => {
      //e.preventDefault();
      selectData(element);
    });

    products.appendChild(productRow);
  });
}

getProducts();

function selectData(product) {
  sessionStorage.setItem("CurrentProduct", JSON.stringify(product));
}
