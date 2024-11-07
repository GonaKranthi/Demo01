// Function to generate product rows dynamically
function generateProductRows(rowCount, productsPerRow) {
    const productGrid = document.querySelector('.product-grid');

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < productsPerRow; j++) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="Product Image">
                <div class="product-name">Product ${i * productsPerRow + j + 1}</div>
                <div class="product-price">$${(Math.random() * 50 + 10).toFixed(2)}</div>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        }
    }
}

// Sign up and Login functions (for future expansion)
function signUp() {
    alert('Sign-up feature coming soon!');
}

function login() {
    alert('Login feature coming soon!');
}
