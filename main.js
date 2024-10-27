function plus() {
  let plusButtons = document.querySelectorAll('#plus');
  plusButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
          let quantityElement = document.querySelectorAll('#quantity')[index];
          let quantity = parseInt(quantityElement.innerText);
          quantity++;
          quantityElement.innerText = quantity;
      });
  });
}
plus();

function minus() {
  for (let i = 1; i <= 3; i++) {
      let minusButton = document.getElementById(`minus-${i}`);
      minusButton.addEventListener('click', function() {
          let quantityElement = document.getElementById(`quantity-${i}`);
          let quantity = parseInt(quantityElement.innerText);
          if (quantity > 1) {
              quantity--;
              quantityElement.innerText = quantity;
          }
      });
  }
}

minus();


document.querySelectorAll(".like").forEach((icon) => {
  icon.addEventListener("click", () => {
      icon.classList.toggle("liked"); // Toggle the "liked" class
  });
});