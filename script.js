const products = [
  { id: 1, name: "Laptop", price: 750 },
  { id: 2, name: "Smartphone", price: 430 },
  { id: 3, name: "Headphones", price: 270 },
  { id: 4, name: "Smartwatch", price: 120 },
];

const cartItems = [];

function addProductToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingCartItem = cartItems.find(
    (item) => item.product.id === productId
  );

  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    cartItems.push({ product: product, quantity: 1 });
  }

  displayCart();
}

function removeProductFromCart(productId) {
  const itemIndex = cartItems.findIndex(
    (item) => item.product.id === productId
  );
  if (itemIndex > -1) {
    cartItems.splice(itemIndex, 1);
  }
  displayCart();
}

function calculateTotalPrice() {
  return cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
}

function displayProducts() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
          <span>${product.name} - $${product.price.toFixed(2)}</span>
          <button data-id="${product.id}">Add to Cart</button>
      `;
    productList.appendChild(productDiv);
  });

  document.querySelectorAll(".product button").forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"));
      addProductToCart(id);
    });
  });
}

function displayCart() {
  const cartList = document.querySelector(".cart-list");
  cartList.innerHTML = "";

  cartItems.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `
          <span>${item.product.name} x ${item.quantity}</span>
          <span>$${(item.product.price * item.quantity).toFixed(2)}</span>
          <button data-id="${item.product.id}">Remove</button>
      `;
    cartList.appendChild(cartItemDiv);
  });

  document.querySelector(
    ".cart-total"
  ).innerText = `Total: $${calculateTotalPrice().toFixed(2)}`;

  document.querySelectorAll(".cart-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"));
      removeProductFromCart(id);
    });
  });
}

displayProducts();
displayCart();
