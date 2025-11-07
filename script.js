const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const total = document.getElementById('total');

let cart = [];

document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    cart.push({ name, price });
    updateCart();
  });
});

cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'flex';
});

document.getElementById('close-cart').addEventListener('click', () => {
  cartModal.style.display = 'none';
});

function updateCart() {
  cartItems.innerHTML = '';
  let totalPrice = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} ر.س`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });
  cartCount.textContent = cart.length;
  total.textContent = `الإجمالي: ${totalPrice} ر.س`;
}
