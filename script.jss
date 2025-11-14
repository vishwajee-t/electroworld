

function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('cart-list');
  const totalEl = document.getElementById('total');

  let total = 0;
  cartList.innerHTML = '';

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} – ₨ ${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = `Total: ₨ ${total}`;
}
function searchProducts() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const name = product.querySelector('h3').textContent.toLowerCase();
    if(name.includes(input)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

