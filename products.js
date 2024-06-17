// Sample products data
const products = [
    { id: 1, name: 'Apple', price: 100.0, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwzfHxhcHBsZXN8ZW58MHx8fHwxNzA5ODM4ODA4fDA&ixlib=rb-4.0.3&fm=jpg&w=8256&h=5504&fit=max' },
    { id: 2, name: 'Spinach', price: 60.0, image: 'https://images.moneycontrol.com/static-mcnews/2023/07/Health-benefits-of-spinach.jpg?impolicy=website&width=1600&height=900' },
    { id: 3, name: 'Amul Butter - 300g', price: 180.0, image: 'https://www.bigbasket.com/media/uploads/p/m/1202759_3-amul-butter-pasteurized.jpg?tr=w-1200,q=80' }
];

// Function to initialize products in the order summary
function initializeProducts() {
    const orderSummary = document.querySelector('.js-order-summary');
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item-container');

        // Product image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        productElement.appendChild(img);

        // Product details
        const details = document.createElement('div');
        details.classList.add('cart-item-details');

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        details.appendChild(productName);

        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = `${product.price.toFixed(2)}`;
        details.appendChild(price);

        const quantity = document.createElement('div');
        quantity.classList.add('quantity');
        quantity.innerHTML = `
            <label>Quantity:</label>
            <input type="number" value="1" min="1">
        `;
        details.appendChild(quantity);

        const deleteLink = document.createElement('button');
        deleteLink.classList.add('js-delete-quantity-link');
        deleteLink.textContent = 'Remove';
        deleteLink.addEventListener('click', () => {
            // Logic to remove the product from cart
            // Example: removeProduct(product.id);
            productElement.remove();
            updateOrderSummary(); // Update order summary after removal
        });
        details.appendChild(deleteLink);

        productElement.appendChild(details);
        orderSummary.appendChild(productElement);
    });

    updateOrderSummary(); // Update initial order summary
}

// Function to update order summary totals
function updateOrderSummary() {
    const itemCount = document.getElementById('item-count');
    const itemsTotal = document.getElementById('items-total');
    const subtotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    // Calculate totals based on added products (in a real scenario, use data from cart)
    const numItems = products.length;
    const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
    const shipping = 4.99;
    const estimatedTax = totalPrice * 0.1;
    const orderTotal = totalPrice + shipping + estimatedTax;

    // Update DOM with calculated values
    itemCount.textContent = numItems;
    itemsTotal.textContent = `${totalPrice.toFixed(2)}`;
    subtotal.textContent = `${totalPrice.toFixed(2)}`;
    tax.textContent = `${estimatedTax.toFixed(2)}`;
    total.textContent = `${orderTotal.toFixed(2)}`;
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
});