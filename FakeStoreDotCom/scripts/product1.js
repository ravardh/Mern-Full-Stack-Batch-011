async function getProducts() {
  const response = await fetch("https://fakestoreapi.in/api/products");
  const data = await response.json();

  // console.log(data);

  const products = data.products;

  //   for (var i = 0; i < products.length; i++) {
  //     console.log(products[i]);
  //   }

  let productList = document.getElementById("ProductList");

  products.forEach((element) => {
    // console.log(element);

    let d = document.createElement("div");
    d.classList.add("row", "border", "border-dark", "rounded", "shadow", "p-3");

    if (element.discount) {
      d.innerHTML = `
                <div class="col-3 border border-danger">
            <img
              src=${element.image}
              alt="ProductImage"
              width="100%"
              class="object-fit-cover"
            />
          </div>
          <div class="col-9 border border-success p-4">
            <h2>${element.title}</h2>
            <span class="fs-6"><b>Brand:</b> ${element.brand}</span>
            <div class="d-grid mt-4">
              <span class="text-danger">Limited Time Deal... Hurry Up!!!</span>
              <span class="fs-5">
                <b>Price:</b> <span class="text-success fw-bold">₹${
                  element.price * 85 - (element.price * element.discount) / 100
                }</span>
              </span>
              <span class="text-primary-emphasis">
                <b>MRP:</b> <del>₹${element.price * 85}</del>
              </span>
            </div>
            <div class="mt-4 d-flex gap-3">
              <button class="btn btn-warning">Buy Now</button>
              <button class="btn btn-outline-warning">Add to Cart</button>
            </div>
    `;
    } else {
      d.innerHTML = `
                <div class="col-3 border border-danger">
            <img
              src=${element.image}
              alt="ProductImage"
              width="100%"
              class="object-fit-cover"
            />
          </div>
          <div class="col-9 border border-success p-4">
            <h2>${element.title}</h2>
            <span class="fs-6"><b>Brand:</b> ${element.brand}</span>
            
              <span class="fs-5">
                <b>Price:</b> <span class="text-success fw-bold">₹${
                  element.price * 85
                }</span>
              </span>
              
            <div class="mt-4 d-flex gap-3">
              <button class="btn btn-warning">Buy Now</button>
              <button class="btn btn-outline-warning">Add to Cart</button>
            </div>
    `;
    }

    productList.appendChild(d);
  });
}


getProducts();  