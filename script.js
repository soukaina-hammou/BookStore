const books = [
  {
    id: 1,
    title: "The Midnight Archive",
    author: "Elena Rivers",
    price: 24,
    category: "fantasy",
    image: "https://placehold.co/300x420/5b4b8a/ffffff?text=Fantasy+Cover",
  },
  {
    id: 2,
    title: "Whispers in Ash",
    author: "Dorian Black",
    price: 19,
    category: "horror",
    image: "https://placehold.co/300x420/2b2d42/ffffff?text=Horror+Cover",
  },
  {
    id: 3,
    title: "Sunlit Promises",
    author: "Ava Hart",
    price: 21,
    category: "romance",
    image: "https://placehold.co/300x420/d4a5a5/ffffff?text=Romance+Cover",
  },
  {
    id: 4,
    title: "The Quiet Habit",
    author: "Miles Reed",
    price: 18,
    category: "self",
    image: "https://placehold.co/300x420/9fc5a8/ffffff?text=Self+Dev",
  },
  {
    id: 5,
    title: "Kingdoms of Mist",
    author: "Rhea Sol",
    price: 26,
    category: "fantasy",
    image: "https://placehold.co/300x420/6d597a/ffffff?text=Fantasy+Cover",
  },
  {
    id: 6,
    title: "The Hollow House",
    author: "Cyrus Vale",
    price: 20,
    category: "horror",
    image: "https://placehold.co/300x420/3b3b3b/ffffff?text=Horror+Cover",
  },
  {
    id: 7,
    title: "Letters at Dawn",
    author: "Mira Lane",
    price: 22,
    category: "romance",
    image: "https://placehold.co/300x420/f6c1c7/ffffff?text=Romance+Cover",
  },
  {
    id: 8,
    title: "Focus Rituals",
    author: "Theo Brooks",
    price: 17,
    category: "self",
    image: "https://placehold.co/300x420/c7e0c5/ffffff?text=Self+Dev",
  },
  {
    id: 9,
    title: "The Ember Crown",
    author: "Nia Storm",
    price: 25,
    category: "fantasy",
    image: "https://placehold.co/300x420/ffb347/ffffff?text=Fantasy+Cover",
  },
  {
    id: 10,
    title: "Crimson Tide",
    author: "Isla Morn",
    price: 23,
    category: "horror",
    image: "https://placehold.co/300x420/1d3557/ffffff?text=Horror+Cover",
  },
  {
    id: 11,
    title: "Hearts in Bloom",
    author: "Sienna Vale",
    price: 20,
    category: "romance",
    image: "https://placehold.co/300x420/f7d6e0/ffffff?text=Romance+Cover",
  },
  {
    id: 12,
    title: "The Momentum Method",
    author: "Jordan Cole",
    price: 19,
    category: "self",
    image: "https://placehold.co/300x420/b7d3df/ffffff?text=Self+Dev",
  },
];

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartDrawer = document.getElementById("cartDrawer");
const cartButton = document.getElementById("cartButton");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

let activeCategory = "all";
let cart = [];

const formatPrice = (value) => `$${value.toFixed(2)}`;

const renderBooks = () => {
  const filtered =
    activeCategory === "all"
      ? books
      : books.filter((book) => book.category === activeCategory);

  productGrid.innerHTML = filtered
    .map(
      (book) => `
      <article class="card">
        <img src="${book.image}" alt="${book.title} cover" />
        <div>
          <h4>${book.title}</h4>
          <p>by ${book.author}</p>
        </div>
        <div class="card-footer">
          <span class="price">${formatPrice(bookrice)}</span>
          <button class="btn ghost" data-id="${book.id}">Add to Cart</button>
        </div>
      </article>
    `,
    )
    .join("");
};

const updateCartUI = () => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "$0.00";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title} cover" />
        <div>
          <h5>${item.title}</h5>
          <p>${item.author}</p>
          <p>${formatPrice(itemrice)} · Qty ${item.quantity}</p>
        </div>
      </div>
    `,
    )
    .join("");

  const totalPrice = cart.reduce(
    (sum, item) => sum + itemrice * item.quantity,
    0,
  );
  cartTotal.textContent = formatPrice(totalPrice);
};

const addToCart = (id) => {
  const book = books.find((item) => item.id === id);
  if (!book) return;

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartush({ ...book, quantity: 1 });
  }

  updateCartUI();
};

const setCategory = (category) => {
  activeCategory = category;
  filterButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderBooks();
};

const openCart = () => {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
};

const closeCartDrawer = () => {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => setCategory(btn.dataset.category));
});

productGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches("button[data-id]")) {
    addToCart(Number(target.dataset.id));
  }
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
overlay.addEventListener("click", closeCartDrawer);

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

renderBooks();
updateCartUI();
