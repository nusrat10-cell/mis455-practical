// Show alert when clicking 'Learn More' button
function showAlert() {
    Swal.fire({
        title: 'Welcome to Happy Skin!',
        text: 'Your skin deserves the best care, and we’re here to help you with that!',
        icon: 'info',
        confirmButtonText: 'Got it!'
    });
}

// Add product to cart (demo function)
function addToCart(productName, productPrice) {
    // Using localStorage to simulate a shopping cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create product object to add to the cart
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex !== -1) {
        // If product exists, increase quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // Otherwise, add new product
        cart.push(product);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show a nice confirmation
    Swal.fire({
        title: 'Product Added!',
        text: `${product.name} has been added to your cart.`,
        icon: 'success',
        confirmButtonText: 'Continue Shopping'
    });
}

// Submit contact form with validation
function submitForm(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (!name || !email || !message) {
        Swal.fire({
            title: 'Oops!',
            text: 'Please fill out all the fields before submitting.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
        return;
    }

    // Simulating form submission success
    Swal.fire({
        title: 'Thank You!',
        text: 'We have received your message. We will get back to you soon!',
        icon: 'success',
        confirmButtonText: 'Close'
    });

    // Reset the form after submission
    document.getElementById('contact-form').reset();
}
