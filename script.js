// Frontend-only bookstore demo (Tailwind CDN + Vanilla JS)

// Mock data (at least 8 books)
const books = [
	{
		id: 1,
		title: "The Midnight Archive",
		author: "Elena Rivers",
		price: 24,
		category: "fantasy",
		coverUrl: "https://placehold.co/600x840/5b4b8a/ffffff?text=Fantasy+Cover",
	},
	{
		id: 2,
		title: "Whispers in Ash",
		author: "Dorian Black",
		price: 19,
		category: "horror",
		coverUrl: "https://placehold.co/600x840/2b2d42/ffffff?text=Horror+Cover",
	},
	{
		id: 3,
		title: "Sunlit Promises",
		author: "Ava Hart",
		price: 21,
		category: "romance",
		coverUrl: "https://placehold.co/600x840/d4a5a5/ffffff?text=Romance+Cover",
	},
	{
		id: 4,
		title: "The Quiet Habit",
		author: "Miles Reed",
		price: 18,
		category: "self",
		coverUrl: "https://placehold.co/600x840/9fc5a8/ffffff?text=Self+Dev",
	},
	{
		id: 5,
		title: "Kingdoms of Mist",
		author: "Rhea Sol",
		price: 26,
		category: "fantasy",
		coverUrl: "https://placehold.co/600x840/6d597a/ffffff?text=Fantasy+Cover",
	},
	{
		id: 6,
		title: "The Hollow House",
		author: "Cyrus Vale",
		price: 20,
		category: "horror",
		coverUrl: "https://placehold.co/600x840/3b3b3b/ffffff?text=Horror+Cover",
	},
	{
		id: 7,
		title: "Letters at Dawn",
		author: "Mira Lane",
		price: 22,
		category: "romance",
		coverUrl: "https://placehold.co/600x840/f6c1c7/ffffff?text=Romance+Cover",
	},
	{
		id: 8,
		title: "Focus Rituals",
		author: "Theo Brooks",
		price: 17,
		category: "self",
		coverUrl: "https://placehold.co/600x840/c7e0c5/ffffff?text=Self+Dev",
	},
];

const STORAGE_KEY = "bookstore_cart_v1";

const els = {
	productGrid: document.getElementById("productGrid"),
	featuredRow: document.getElementById("featuredRow"),
	filterButtons: document.querySelectorAll(".filter-btn"),
	resultsMeta: document.getElementById("resultsMeta"),
	year: document.getElementById("year"),

	cartButton: document.getElementById("cartButton"),
	cartCount: document.getElementById("cartCount"),
	cartHeaderCount: document.getElementById("cartHeaderCount"),
	cartDrawer: document.getElementById("cartDrawer"),
	cartOverlay: document.getElementById("cartOverlay"),
	closeCart: document.getElementById("closeCart"),
	clearCart: document.getElementById("clearCart"),
	cartItems: document.getElementById("cartItems"),
	cartTotal: document.getElementById("cartTotal"),
};

let activeCategory = "all";

/**
 * Cart format stored in localStorage:
 * [{ id: number, qty: number }]
 */
function loadCart() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed
			.filter((x) => typeof x?.id === "number" && typeof x?.qty === "number")
			.map((x) => ({ id: x.id, qty: Math.max(1, Math.floor(x.qty)) }));
	} catch {
		return [];
	}
}

function saveCart(cart) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function formatPrice(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
}

function getBookById(id) {
	return books.find((b) => b.id === id) || null;
}

function getFilteredBooks() {
	if (activeCategory === "all") return books;
	return books.filter((b) => b.category === activeCategory);
}

function renderFeatured() {
	if (!els.featuredRow) return;
	const featured = books.slice(0, 4);
	els.featuredRow.innerHTML = featured
		.map((b) => {
			return `
				<article class="min-w-[220px] snap-start overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
					<div class="relative">
						<img src="${b.coverUrl}" alt="${b.title} cover" class="h-44 w-full object-cover" />
						<div class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900">
							${b.category}
						</div>
					</div>
					<div class="p-4">
						<p class="line-clamp-1 text-sm font-semibold">${b.title}</p>
						<p class="mt-1 text-xs text-neutral-600">by ${b.author}</p>
						<div class="mt-3 flex items-center justify-between">
							<span class="text-sm font-bold">${formatPrice(b.price)}</span>
							<button data-add-to-cart="${b.id}" class="rounded-full bg-brand-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-900">Add</button>
						</div>
					</div>
				</article>
			`;
		})
		.join("");
}

function renderProducts() {
	const list = getFilteredBooks();
	if (els.resultsMeta) {
		els.resultsMeta.textContent = `${list.length} book(s)`;
	}

	els.productGrid.innerHTML = list
		.map((b) => {
			return `
				<article class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
					<div class="relative">
						<img src="${b.coverUrl}" alt="${b.title} cover" class="aspect-[3/4] w-full object-cover transition group-hover:scale-[1.02]" />
						<div class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900">
							${b.category}
						</div>
					</div>
					<div class="space-y-1 p-4">
						<h3 class="line-clamp-1 font-semibold tracking-tight">${b.title}</h3>
						<p class="text-sm text-neutral-600">by ${b.author}</p>
						<p class="pt-1 text-sm font-bold">${formatPrice(b.price)}</p>
					</div>
					<div class="flex items-center justify-between gap-3 border-t border-neutral-200 p-4">
						<button
							type="button"
							data-add-to-cart="${b.id}"
							class="w-full rounded-full bg-brand-800 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-900"
						>
							Add to cart
						</button>
					</div>
				</article>
			`;
		})
		.join("");
}

function setActiveFilterButton() {
	els.filterButtons.forEach((btn) => {
		const isActive = btn.dataset.category === activeCategory;
		btn.classList.toggle("bg-brand-800", isActive);
		btn.classList.toggle("text-white", isActive);
		btn.classList.toggle("border-brand-800", isActive);
		btn.classList.toggle("bg-white", !isActive);
	});
}

function openCart() {
	els.cartDrawer.classList.remove("translate-x-full");
	els.cartOverlay.classList.remove("hidden");
	els.cartOverlay.setAttribute("aria-hidden", "false");
	els.cartButton.setAttribute("aria-expanded", "true");
}

function closeCart() {
	els.cartDrawer.classList.add("translate-x-full");
	els.cartOverlay.classList.add("hidden");
	els.cartOverlay.setAttribute("aria-hidden", "true");
	els.cartButton.setAttribute("aria-expanded", "false");
}

function computeCartDerived(cart) {
	const items = cart
		.map((ci) => {
			const book = getBookById(ci.id);
			if (!book) return null;
			return { book, qty: ci.qty };
		})
		.filter(Boolean);

	const totalItems = items.reduce((sum, x) => sum + x.qty, 0);
	const totalPrice = items.reduce((sum, x) => sum + x.book.price * x.qty, 0);
	return { items, totalItems, totalPrice };
}

function renderCart() {
	const cart = loadCart();
	const { items, totalItems, totalPrice } = computeCartDerived(cart);

	els.cartCount.textContent = String(totalItems);
	els.cartHeaderCount.textContent = `${totalItems} item(s)`;
	els.cartTotal.textContent = formatPrice(totalPrice);

	if (items.length === 0) {
		els.cartItems.innerHTML = `
			<div class="rounded-2xl border border-dashed border-neutral-200 p-6 text-center">
				<p class="font-semibold">Your cart is empty</p>
				<p class="mt-1 text-sm text-neutral-600">Add books from the shop.</p>
			</div>
		`;
		return;
	}

	els.cartItems.innerHTML = `
		<ul class="space-y-4">
			${items
				.map(({ book, qty }) => {
					return `
						<li class="flex gap-3 rounded-2xl border border-neutral-200 p-3">
							<img src="${book.coverUrl}" alt="${book.title} cover" class="h-20 w-14 rounded-xl object-cover" />
							<div class="min-w-0 flex-1">
								<p class="truncate font-semibold">${book.title}</p>
								<p class="truncate text-sm text-neutral-600">by ${book.author}</p>
								<div class="mt-2 flex items-center justify-between gap-2">
									<div class="inline-flex items-center overflow-hidden rounded-full border border-neutral-200">
										<button class="px-3 py-1.5 text-sm hover:bg-neutral-50" data-qty-dec="${book.id}" aria-label="Decrease quantity">−</button>
										<span class="px-3 py-1.5 text-sm">${qty}</span>
										<button class="px-3 py-1.5 text-sm hover:bg-neutral-50" data-qty-inc="${book.id}" aria-label="Increase quantity">+</button>
									</div>
									<div class="text-right">
										<p class="text-sm font-semibold">${formatPrice(book.price * qty)}</p>
										<button class="text-xs text-neutral-600 underline hover:text-neutral-900" data-remove="${book.id}">Remove</button>
									</div>
								</div>
							</div>
						</li>
					`;
				})
				.join("")}
		</ul>
	`;
}

function addToCart(bookId) {
	const cart = loadCart();
	const idx = cart.findIndex((x) => x.id === bookId);
	if (idx >= 0) {
		cart[idx].qty += 1;
	} else {
		cart.push({ id: bookId, qty: 1 });
	}
	saveCart(cart);
	renderCart();
}

function removeFromCart(bookId) {
	const cart = loadCart().filter((x) => x.id !== bookId);
	saveCart(cart);
	renderCart();
}

function setQty(bookId, nextQty) {
	const qty = Math.max(0, Math.floor(nextQty));
	const cart = loadCart();
	const idx = cart.findIndex((x) => x.id === bookId);
	if (idx < 0) return;

	if (qty <= 0) {
		cart.splice(idx, 1);
	} else {
		cart[idx].qty = qty;
	}

	saveCart(cart);
	renderCart();
}

function bindEvents() {
	// Filters
	els.filterButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			activeCategory = btn.dataset.category || "all";
			setActiveFilterButton();
			renderProducts();
		});
	});

	// Delegate add-to-cart clicks
	document.addEventListener("click", (e) => {
		const target = e.target;
		if (!(target instanceof HTMLElement)) return;

		const addId = target.getAttribute("data-add-to-cart");
		if (addId) {
			addToCart(Number(addId));
			openCart();
			return;
		}

		const removeId = target.getAttribute("data-remove");
		if (removeId) {
			removeFromCart(Number(removeId));
			return;
		}

		const incId = target.getAttribute("data-qty-inc");
		if (incId) {
			const cart = loadCart();
			const item = cart.find((x) => x.id === Number(incId));
			if (item) setQty(item.id, item.qty + 1);
			return;
		}

		const decId = target.getAttribute("data-qty-dec");
		if (decId) {
			const cart = loadCart();
			const item = cart.find((x) => x.id === Number(decId));
			if (item) setQty(item.id, item.qty - 1);
			return;
		}
	});

	// Cart drawer
	els.cartButton.addEventListener("click", openCart);
	els.closeCart.addEventListener("click", closeCart);
	els.cartOverlay.addEventListener("click", closeCart);
	els.clearCart.addEventListener("click", () => {
		saveCart([]);
		renderCart();
	});

	// Escape to close
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") closeCart();
	});
}

function init() {
	if (els.year) els.year.textContent = String(new Date().getFullYear());
	setActiveFilterButton();
	renderFeatured();
	renderProducts();
	renderCart();
	bindEvents();
}

document.addEventListener("DOMContentLoaded", init);

// Tailwind CDN config
			tailwind = {
				theme: {
					extend: {
						fontFamily: {
							sans: ["Inter", "ui-sans-serif", "system-ui"],
							display: ["Merriweather", "ui-serif", "Georgia"],
						},
						colors: {
							brand: {
								50: "#faf7f2",
								100: "#f3ece0",
								200: "#e7d7bf",
								300: "#d7bc95",
								400: "#c59c69",
								500: "#b68147",
								600: "#a56b3c",
								700: "#875434",
								800: "#6f442f",
								900: "#5c3828",
							},
						},
					},
				},
			};