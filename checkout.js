// Function to handle place order button click
function placeOrder() {
    // Here you can add logic to submit order to backend, handle payments, etc.
    alert('Order placed successfully!'); // Example alert for demonstration

    // Clear cart or redirect to thank you page
    // Example: clearCart();
    // Example: window.location.href = 'thankyou.html';
}

// Event listener for place order button
const placeOrderButton = document.querySelector('.place-order-button');
if (placeOrderButton) {
    placeOrderButton.addEventListener('click', placeOrder);
}