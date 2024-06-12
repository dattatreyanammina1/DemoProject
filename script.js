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

document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartToggleBtn = document.getElementById('cart-toggle');

    let cartCount = 0;
    let cartTotal = 0;
    const cart = [];

    // Function to add item to cart
    function addToCart(id, name, price) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        cartCount++;
        cartTotal += price;
        updateCartDisplay();
    }

    // Function to update cart display
    function updateCartDisplay() {
        cartCountElement.textContent = cartCount;
        cartItemsElement.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItemsElement.appendChild(li);
        });
        cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
    }

    // Event listener for add-to-cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productId = productCard.dataset.id;
            const productName = productCard.dataset.name;
            const productPrice = parseFloat(productCard.dataset.price);
            addToCart(productId, productName, productPrice);
        });
    });

    // Event listener to toggle cart visibility
    cartToggleBtn.addEventListener('click', () => {
        const cartElement = document.getElementById('cart');
        cartElement.classList.toggle('cart-hidden');
        cartElement.classList.toggle('cart-visible');
    });
});