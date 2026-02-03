// Sample books data
const booksData = [
    // Fantasy Novels
    {
        id: 1,
        title: "The Dragon's Quest",
        author: "Emma Silverstone",
        price: 24.99,
        category: "fantasy",
        image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
        rating: 4.8
    },
    {
        id: 2,
        title: "Kingdom of Shadows",
        author: "Marcus Blackwood",
        price: 22.99,
        category: "fantasy",
        image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=600&fit=crop",
        rating: 4.6
    },
    {
        id: 3,
        title: "The Enchanted Forest",
        author: "Luna Moonlight",
        price: 19.99,
        category: "fantasy",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 4,
        title: "Sword of Destiny",
        author: "Richard Stormwind",
        price: 26.99,
        category: "fantasy",
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
        rating: 4.9
    },
    
    // Horror Novels
    {
        id: 5,
        title: "The Haunting Hour",
        author: "Sarah Darkmore",
        price: 21.99,
        category: "horror",
        image: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400&h=600&fit=crop",
        rating: 4.5
    },
    {
        id: 6,
        title: "Midnight Screams",
        author: "Vincent Crow",
        price: 23.99,
        category: "horror",
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
        rating: 4.4
    },
    {
        id: 7,
        title: "The Abandoned Manor",
        author: "Isabella Graves",
        price: 20.99,
        category: "horror",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        rating: 4.6
    },
    {
        id: 8,
        title: "Whispers in the Dark",
        author: "Nathan Shadow",
        price: 22.99,
        category: "horror",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
        rating: 4.7
    },
    
    // Romantic Novels
    {
        id: 9,
        title: "Love in Paris",
        author: "Sophie Laurent",
        price: 18.99,
        category: "romantic",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        rating: 4.8
    },
    {
        id: 10,
        title: "Summer Romance",
        author: "Emily Rose",
        price: 17.99,
        category: "romantic",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
        rating: 4.6
    },
    {
        id: 11,
        title: "Hearts Entwined",
        author: "Olivia Bennett",
        price: 19.99,
        category: "romantic",
        image: "https://images.unsplash.com/photo-1491841651911-c44c30c34548?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 12,
        title: "Forever Yours",
        author: "Charlotte Vale",
        price: 16.99,
        category: "romantic",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
        rating: 4.9
    },
    
    // Self-Development Books
    {
        id: 13,
        title: "Mindful Living",
        author: "Dr. James Wilson",
        price: 29.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        rating: 4.9
    },
    {
        id: 14,
        title: "The Success Mindset",
        author: "Michael Roberts",
        price: 27.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
        rating: 4.8
    },
    {
        id: 15,
        title: "Atomic Habits Guide",
        author: "Patricia Chen",
        price: 25.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=600&fit=crop",
        rating: 4.9
    },
    {
        id: 16,
        title: "Peak Performance",
        author: "David Martinez",
        price: 28.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    }
];

// Initialize cart
let cart = [];

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Category filtering
const categoryBtns = document.querySelectorAll('.category-btn');
const booksContainer = document.getElementById('booksContainer');

// Display books function
function displayBooks(category = 'all') {
    let filteredBooks = category === 'all' 
        ? booksData 
        : booksData.filter(book => book.category === category);
    
    booksContainer.innerHTML = filteredBooks.map(book => `
        <div class="book-card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative h-80 overflow-hidden bg-gray-200">
                <img src="${book.image}" alt="${book.title}" class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    <i class="fas fa-star"></i> ${book.rating}
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-semibold text-gray-800 mb-1 truncate">${book.title}</h3>
                <p class="text-sm text-gray-600 mb-3">by ${book.author}</p>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-2xl font-bold text-purple-600">$${book.price}</span>
                    <span class="text-xs text-gray-500 uppercase px-2 py-1 bg-gray-100 rounded">${book.category}</span>
                </div>
                <button onclick="addToCart(${book.id})" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
                    <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Category button click handlers
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Display filtered books
        const category = btn.getAttribute('data-category');
        displayBooks(category);
    });
});

// Add to cart function
function addToCart(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (book) {
        cart.push(book);
        updateCartCount();
        showNotification(`"${book.title}" added to cart!`);
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.fa-shopping-cart').nextElementSibling;
    cartCount.textContent = cart.length;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Thank you! Your message has been sent.');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Initialize page
displayBooks('all');