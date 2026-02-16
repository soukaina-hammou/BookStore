// Sample books data
const booksData = [
    // Fantasy Novels
    {
        id: 1,
        title: "حوجن",
        author: "Ibrahim Abbas",
        price: 24.99,
        category: "fantasy",
        image: "https://i.pinimg.com/736x/1f/1c/a6/1f1ca67e91b7d990319f6c29e4eb1e0a.jpg",
        rating: 4.8
    },
    {
        id: 2,
        title: "شبكة العنكبوت",
        author: "Marcus Blackwood",
        price: 22.99,
        category: "fantasy",
        image: "https://i.pinimg.com/736x/35/4c/78/354c78345005b2876fe7f2c8b05cd630.jpg",
        rating: 4.6
    },
    {
        id: 3,
        title: "بيتشيني",
        author: "Luna Moonlight",
        price: 19.99,
        category: "fantasy",
        image: "https://i.pinimg.com/736x/78/19/d5/7819d5d1f5ef7b5e70d5f13856c787cb.jpg",
        rating: 4.7
    },
    {
        id: 4,
        title: "سعد الدباس",
        author: "Richard Stormwind",
        price: 26.99,
        category: "fantasy",
        image: "https://i.pinimg.com/736x/a9/93/fe/a993fe8f450c3427eb7c848c0c019bd6.jpg",
        rating: 4.9
    },
    
    // Horror Novels
    {
        id: 5,
        title: "The Haunting Hour",
        author: "Sarah Darkmore",
        price: 21.99,
        category: "horror",
        image: "https://i.pinimg.com/736x/97/7d/7f/977d7fa2c5db4bb269837ea106dc5c17.jpg",
        rating: 4.5
    },
    {
        id: 6,
        title: "Midnight Screams",
        author: "Vincent Crow",
        price: 23.99,
        category: "horror",
        image: "https://i.pinimg.com/736x/91/87/06/918706df0555c94f874e57558e8d8be1.jpg",
        rating: 4.4
    },
    {
        id: 7,
        title: "The Abandoned Manor",
        author: "Isabella Graves",
        price: 20.99,
        category: "horror",
        image: "https://i.pinimg.com/736x/f2/04/85/f204850981ec894ccc70fd722bec565d.jpg",
        rating: 4.6
    },
    {
        id: 8,
        title: "Whispers in the Dark",
        author: "Nathan Shadow",
        price: 22.99,
        category: "horror",
        image: "https://i.pinimg.com/736x/a7/9c/5e/a79c5ec5a335069135b98ce64d88e4f2.jpg",
        rating: 4.7
    },
    
    // Romantic Novels
    {
        id: 9,
        title: "Love in Paris",
        author: "Sophie Laurent",
        price: 18.99,
        category: "romantic",
        image: "https://i.pinimg.com/736x/97/7d/7f/977d7fa2c5db4bb269837ea106dc5c17.jpg",
        rating: 4.8
    },
    {
        id: 10,
        title: "Summer Romance",
        author: "Emily Rose",
        price: 17.99,
        category: "romantic",
        image: "https://i.pinimg.com/736x/35/4c/78/354c78345005b2876fe7f2c8b05cd630.jpg",
        rating: 4.6
    },
    {
        id: 11,
        title: "Hearts Entwined",
        author: "Olivia Bennett",
        price: 19.99,
        category: "romantic",
        image: "https://i.pinimg.com/736x/78/19/d5/7819d5d1f5ef7b5e70d5f13856c787cb.jpg",
        rating: 4.7
    },
    {
        id: 12,
        title: "Forever Yours",
        author: "Charlotte Vale",
        price: 16.99,
        category: "romantic",
        image: "https://i.pinimg.com/736x/16/65/27/16652709ad6b3a5cf1a6ce55c4ce1fd3.jpg",
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
    },
    {
        id: 17,
        title: "The Power of Focus",
        author: "Sarah Johnson",
        price: 26.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 18,
        title: "Emotional Intelligence",
        author: "Daniel Smith",
        price: 26.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 19,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.8
    },
    {
        id: 20,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 21,
        title: "The Art of Leadership", 
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 22,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 23,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 24,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 25,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 26,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 27,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    },
    {
        id: 28,
        title: "The Art of Leadership",
        author: "Robert Davis",
        price: 32.99,
        category: "self-development",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        rating: 4.7
    }

];

// Initialize cart (stores objects: { id, qty })
let cart = [];

// Cart UI elements
const cartButton = document.getElementById('cartButton');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartGrandTotalEl = document.getElementById('cartGrandTotal');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCountBadge = document.getElementById('cartCount');

function openCart() {
    cartOverlay.classList.remove('hidden');
    cartDrawer.classList.remove('translate-x-full');
}

function closeCart() {
    cartOverlay.classList.add('hidden');
    cartDrawer.classList.add('translate-x-full');
}

// Wire cart open/close
if (cartButton) {
    cartButton.addEventListener('click', openCart);
}
if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
}
if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeCart);
}

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
                    <span class="text-2xl font-bold" style="color: #778873;">$${book.price}</span>
                    <span class="text-xs text-gray-500 uppercase px-2 py-1 bg-gray-100 rounded">${book.category}</span>
                </div>
                <button onclick="addToCart(${book.id})" class="w-full text-white py-2 rounded-lg font-medium transition" style="background: linear-gradient(to right, #A1BC98, #778873);" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
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
    if (!book) return;
    const existing = cart.find(item => item.id === bookId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: bookId, qty: 1 });
    }
    updateCartCount();
    renderCart();
    showNotification(`"${book.title}" added to cart!`);
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCountBadge) cartCountBadge.textContent = totalItems;
}

function formatCurrency(num) {
    return `$${num.toFixed(2)}`;
}

function renderCart() {
    if (!cartItemsContainer) return;
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center text-gray-600 py-10">
                <i class="fas fa-shopping-basket text-3xl mb-2" style="color:#778873"></i>
                <p>Your cart is empty.</p>
            </div>
        `;
        if (cartGrandTotalEl) cartGrandTotalEl.textContent = formatCurrency(0);
        return;
    }

    let grandTotal = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        const book = booksData.find(b => b.id === item.id);
        if (!book) return '';
        const itemTotal = book.price * item.qty;
        grandTotal += itemTotal;
        return `
            <div class="flex items-center border rounded-lg p-3">
                <img src="${book.image}" alt="${book.title}" class="w-16 h-20 object-cover rounded mr-3">
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-800 truncate">${book.title}</h4>
                    <div class="text-sm text-gray-600">Unit: ${formatCurrency(book.price)}</div>
                    <div class="mt-2 flex items-center">
                        <button class="px-2 py-1 rounded border" style="color:#778873; border-color:#D2DCB6" onclick="decQty(${book.id})">-</button>
                        <span class="mx-3 font-semibold">${item.qty}</span>
                        <button class="px-2 py-1 rounded border" style="color:#778873; border-color:#D2DCB6" onclick="incQty(${book.id})">+</button>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-gray-700 font-semibold" style="color:#778873">${formatCurrency(itemTotal)}</div>
                </div>
            </div>
        `;
    }).join('');

    if (cartGrandTotalEl) cartGrandTotalEl.textContent = formatCurrency(grandTotal);
}

function incQty(bookId) {
    const item = cart.find(i => i.id === bookId);
    if (item) {
        item.qty += 1;
        updateCartCount();
        renderCart();
    }
}

function decQty(bookId) {
    const idx = cart.findIndex(i => i.id === bookId);
    if (idx > -1) {
        cart[idx].qty -= 1;
        if (cart[idx].qty <= 0) {
            cart.splice(idx, 1);
        }
        updateCartCount();
        renderCart();
    }
}

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty.');
            return;
        }
        const total = cart.reduce((sum, item) => {
            const book = booksData.find(b => b.id === item.id);
            return sum + (book ? book.price * item.qty : 0);
        }, 0);
        showNotification(`Proceeding to checkout: ${formatCurrency(total)}`);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300';
    notification.style.backgroundColor = '#A1BC98';
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
// Initial render for empty cart
renderCart();