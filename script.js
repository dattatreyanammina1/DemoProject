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

let cart = [];
        
        function toggleCart() {
            const cartElement = document.getElementById('cart');
            cartElement.classList.toggle('cart-hidden');
            cartElement.classList.toggle('cart-visible');
        }

        function addToCart(productName, productPrice) {
            cart.push({ name: productName, price: productPrice });
            updateCart();
        }

        function updateCart() {
            const cartCount = document.getElementById('cart-count');
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            
            cartCount.textContent = cart.length;
            
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price}`;
                cartItems.appendChild(li);
                total += item.price;
            });
            
            cartTotal.textContent = `Total: $${total}`;
        }

        const menuBtn = document.getElementById('menu-btn');
        const nav = document.querySelector('nav ul');
        
        menuBtn.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
        
        nav.addEventListener('click', (e) => {
          if (e.target.tagName === 'A') {
            nav.classList.remove('show');
          }
        });
