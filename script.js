function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-grid');
    allProducts.forEach(grid => {
        if (grid.dataset.category === category || category === 'all') {
            grid.style.display = 'flex';
        } else {
            grid.style.display = 'none';
        }
    });
}

// To show all products initially
document.addEventListener('DOMContentLoaded', () => {
    filterProducts('all');
});

function showCategory(category) {
    // Hide all product grids
    document.querySelectorAll('.product-grid').forEach(grid => {
        grid.style.display = 'none';
    });

    // Show the selected product grid
    document.getElementById(category).style.display = 'flex';
}

// Ensure no categories are shown by default on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-grid').forEach(grid => {
        grid.style.display = 'none';
    });
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Get the button and the dropdown content
var dropbtn = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');

// Toggle the visibility of the dropdown content
dropbtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
});

let cartVisible = false;
const cartItems = [];
const cartTotalElement = document.getElementById('cart-total');
const cartItemsElement = document.getElementById('cart-items');
const cartCountElement = document.getElementById('cart-count');

function toggleCart() {
    cartVisible = !cartVisible;
    document.getElementById('cart').className = cartVisible ? 'cart-visible' : 'cart-hidden';
}

function addToCart(name, price) {
    const item = cartItems.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsElement.appendChild(li);
        total += item.price * item.quantity;
    });
    cartTotalElement.textContent = `Total: $${total}`;
    cartCountElement.textContent = cartItems.length;
}

document.addEventListener('click', function(event) {
    const isClickInside = document.getElementById('cart').contains(event.target);
    if (!isClickInside && cartVisible) {
        toggleCart();
    }
});
