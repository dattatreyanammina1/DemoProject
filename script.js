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

