let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
  let quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
  let matchItem;
  cart.forEach(item => {
    if (productId === item.productId) {
      matchItem = item;
    }
  });
  if (matchItem) {
    matchItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveToStorage();
  document.querySelector('.js-checkout-items').innerHTML = `Checkout (${updateCartQuantity()} items)`;
}

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach(item => {
    cartQuantity += item.quantity;
  });
  return cartQuantity;
}

function removeCartItem(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveToStorage();
    document.querySelector('.js-checkout-items').innerHTML = `Checkout (${updateCartQuantity()} items)`;
}

function updateCartItemQuantity(productId, newQuantity) {
    cart.forEach(item => {
        if (item.productId === productId) {
            item.quantity = newQuantity;
        }
    });
    saveToStorage();
    document.querySelector('.js-checkout-items').innerHTML = `Checkout (${updateCartQuantity()} items)`;
}