const PHONE = "919322144882";
const FREE_DELIVERY_LIMIT = 99;
const DELIVERY_CHARGE = 10;

let products = [];


products.forEach(product => {
    product.createdAt = product.createdAt || 1;
    product.selectedIndex = 0;
});

let cart = readCart();
let activeCategory = "All";
let searchTerm = "";

function readCart() {
    try {
        const saved = JSON.parse(localStorage.getItem("cart"));
        if (!Array.isArray(saved)) return [];
        return saved
            .filter(item => item && item.id && item.qty > 0)
            .map(item => {
                const product = products.find(productItem => productItem.id === item.id);
                const size = item.size || "";
                const variant = product && product.sizes ?
                    product.sizes.find(sizeItem => sizeItem.label === size) :
                    null;
                const price = Number(item.price) || (variant ? variant.price : product ? product.price : 0);
                const img = item.img || (variant ? variant.img : product ? product.img : "");

                return {
                    key: item.key || cartKey(item.id, size),
                    id: item.id,
                    firebaseId: item.firebaseId || item.id,
                    name: item.name || (product ? product.name : "Product"),
                    price,
                    img,
                    size,
                    qty: Math.max(1, Number(item.qty) || 1)
                };
            })
            .filter(item => item.price > 0);
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function formatPrice(value) {
    return `Rs. ${value}`;
}

function getSortedProducts(list) {
    return [...list].sort((a, b) => {
        if (b.createdAt !== a.createdAt) return b.createdAt - a.createdAt;
        return b.id - a.id;
    });
}

function getVariant(product) {
    if (!product.sizes || product.sizes.length === 0) return null;
    return product.sizes[product.selectedIndex || 0];
}

function getProductStock(product) {
    const variant = getVariant(product);
    if (variant && typeof variant.stock === "number") return variant.stock;
    if (typeof product.stock === "number") return product.stock;
    return Infinity;
}

function isOutOfStock(product) {
    return getProductStock(product) === 0;
}

function getStockForCartItem(item) {
    const product = products.find(productItem => productItem.id === item.id);
    if (!product) return Infinity;

    if (item.size && product.sizes) {
        const variant = product.sizes.find(size => size.label === item.size);
        if (variant && typeof variant.stock === "number") return variant.stock;
    }

    if (typeof product.stock === "number") return product.stock;
    return Infinity;
}

function cartKey(id, size) {
    return `${id}::${size || ""}`;
}

function getFilteredProducts() {
    const term = searchTerm.trim().toLowerCase();
    return getSortedProducts(products.filter(product => {
        const matchesCategory = activeCategory === "All" || product.cat === activeCategory;
        const haystack = `${product.name} ${product.cat}`.toLowerCase();
        const matchesSearch = !term || haystack.includes(term);
        return matchesCategory && matchesSearch;
    }));
}

function renderCategories() {
    const cats = ["All", ...new Set(products.map(product => product.cat))];
    document.getElementById("categoryChips").innerHTML = cats.map(cat => `
        <button class="chip ${cat === activeCategory ? "active" : ""}" type="button" onclick="filterCat('${cat}', this)">
            ${cat}
        </button>
    `).join("");
}

function priceHTML(product) {
    const variant = getVariant(product);
    const price = variant ? variant.price : product.price;
    const mrp = variant && variant.mrp ? variant.mrp : product.mrp;

    if (mrp && mrp > price) {
        const discount = Math.round(((mrp - price) / mrp) * 100);
        return `
            <div class="price-box">
                <span class="selling-price" id="price-${product.id}">${formatPrice(price)}</span>
                <span class="mrp" id="mrp-${product.id}">${formatPrice(mrp)}</span>
                <span class="discount" id="discount-${product.id}">${discount}% OFF</span>
            </div>
        `;
    }

    return `
        <div class="price-box">
            <span class="selling-price" id="price-${product.id}">${formatPrice(price)}</span>
            <span class="mrp" id="mrp-${product.id}"></span>
            <span class="discount" id="discount-${product.id}"></span>
        </div>
    `;
}

function renderProducts(list) {
    const wrap = document.getElementById("storesWrap");
    const count = document.getElementById("productCount");
    count.innerText = `${list.length} item${list.length === 1 ? "" : "s"}`;

    if (list.length === 0) {
        wrap.innerHTML = `
            <div class="empty-state">
                <div>
                    <i class='bx bx-search-alt'></i>
                    <h3>No products found</h3>
                    <p>Try another search or category.</p>
                </div>
            </div>
        `;
        return;
    }

    wrap.innerHTML = `
        <section class="shop-section">
            <div class="product-grid">
                ${list.map(renderProductCard).join("")}
            </div>
        </section>
    `;
}

function renderProductCard(product) {
    const variant = getVariant(product);
    const img = variant ? variant.img : product.img;
    const stock = getProductStock(product);
    const out = stock === 0;

    return `
        <article class="card" id="card-${product.id}">
            ${out ? `<div class="stock-ribbon">OUT OF STOCK</div>` : ""}
            <button class="product-image-btn" type="button" onclick="openImg('${img}')">
                <img class="product-image" id="img-${product.id}" src="${img}" alt="${product.name}" loading="lazy">
            </button>
            <div class="card-body">
                <div class="card-meta">
                    <span class="category-label">${product.cat}</span>
                    <span class="stock-note" id="stock-${product.id}">${out ? "Unavailable" : "In stock"}</span>
                </div>
                <h3 class="card-title">${product.name}</h3>
                ${product.sizes ? `
                    <div class="variant-group">
                        ${product.sizes.map((size, index) => `
    <button class="variant-btn ${index === product.selectedIndex ? "active" : ""}"
        type="button"
        onclick='changeSize(${JSON.stringify(product.id)}, ${index}, this)'>
        ${size.label}
    </button>
`).join("")}
                    </div>
                ` : `<div class="variant-group" aria-hidden="true"></div>`}
                <div class="card-footer">
                    ${priceHTML(product)}
                    <button
    class="add-btn ${out ? "out" : ""}"
    id="btn-${product.id}"
    type="button"
    ${out ? "disabled" : ""}
    onclick='addFromCard(${JSON.stringify(product.id)}, this)'
>
    ${out ? "Out" : "<i class='bx bx-plus'></i>"}
</button>
                </div>
            </div>
        </article>
    `;
}

function applyFilters() {
    renderCategories();
    renderProducts(getFilteredProducts());
}

function addFromCard(id, button) {
    const image = button.closest(".card").querySelector("img");
    flyToCart(image);
    addToCart(id);
}

function flyToCart(imgElement) {
    const cartButton = document.getElementById("miniCartBtn");
    if (!imgElement || !cartButton) return;

    const imgRect = imgElement.getBoundingClientRect();
    const cartRect = cartButton.getBoundingClientRect();
    const clone = imgElement.cloneNode(true);

    clone.style.position = "fixed";
    clone.style.top = `${imgRect.top}px`;
    clone.style.left = `${imgRect.left}px`;
    clone.style.width = `${imgRect.width}px`;
    clone.style.height = `${imgRect.height}px`;
    clone.style.transition = "all 0.65s cubic-bezier(.2,.8,.2,1)";
    clone.style.zIndex = "9999";
    clone.style.borderRadius = "8px";
    clone.style.pointerEvents = "none";
    document.body.appendChild(clone);

    requestAnimationFrame(() => {
        clone.style.top = `${cartRect.top + 16}px`;
        clone.style.left = `${cartRect.left + 18}px`;
        clone.style.width = "20px";
        clone.style.height = "20px";
        clone.style.opacity = "0.35";
    });

    setTimeout(() => {
        cartButton.classList.add("bump");
        setTimeout(() => cartButton.classList.remove("bump"), 180);
        clone.remove();
    }, 680);
}

function addToCart(id) {

    console.log("Clicked ID =", id);

    const product = products.find(item => item.id === id);

    console.log("Found Product =", product);
    console.log("Firebase ID =", product.firebaseId);

    if (!product) {
        console.log("PRODUCT NOT FOUND");
        return;
    }

    console.log("firebaseId =", product.firebaseId);

    if (isOutOfStock(product)) {
        showToast("This product is currently out of stock.");
        return;
    }

    const variant = getVariant(product);
    const finalPrice = variant ? variant.price : product.price;
    const finalImg = variant ? variant.img : product.img;
    const finalSize = variant ? variant.label : "";

    const key = cartKey(product.id, finalSize);

    const existingItem = cart.find(item => item.key === key);

    const stockLimit = getProductStock(product);

    if (existingItem) {

        if (existingItem.qty >= stockLimit) {
            showToast(`Only ${stockLimit} available in stock.`);
            return;
        }

        existingItem.qty += 1;

    } else {

        const newItem = {
    key,
    id: product.id,
    firebaseId: product.firebaseId,
    name: product.name,
    price: finalPrice,
    img: finalImg,
    size: finalSize,
    qty: 1
};
        
        
        cart.push(newItem);

    }

    saveCart();
    updateCartUI();
    renderCart();

    showToast("Added to cart");
}

function getCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const delivery = subtotal > 0 && subtotal < FREE_DELIVERY_LIMIT ? DELIVERY_CHARGE : 0;
    return {
        subtotal,
        delivery,
        grandTotal: subtotal + delivery
    };
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cartCount").innerText = count;
    document.getElementById("miniCartBtn").classList.toggle("visible", count > 0);
}

function renderCart() {
    const box = document.getElementById("cartItems");
    const { subtotal, delivery, grandTotal } = getCartTotals();

    if (cart.length === 0) {
        box.innerHTML = `<div class="cart-empty">Your cart is empty.</div>`;
    } else {
        box.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img class="cart-thumb" src="${item.img}" alt="${item.name}">
                <div>
                    <p class="cart-name">${item.name}${item.size ? ` (${item.size})` : ""}</p>
                    <div class="cart-price">${formatPrice(item.price)} x ${item.qty} = ${formatPrice(item.price * item.qty)}</div>
                </div>
                <div class="qty-ctrl">
                    <button type="button" onclick="changeQty('${item.key}', -1)" aria-label="Decrease quantity">-</button>
                    <span>${item.qty}</span>
                    <button type="button" onclick="changeQty('${item.key}', 1)" aria-label="Increase quantity">+</button>
                </div>
            </div>
        `).join("");
    }

    document.getElementById("subtotal").innerText = formatPrice(subtotal);
    document.getElementById("delivery").innerText = delivery === 0 ? (subtotal === 0 ? "Rs. 0" : "Free") : formatPrice(delivery);
    document.getElementById("total").innerText = formatPrice(grandTotal);
    document.getElementById("openFormBtn").disabled = cart.length === 0;
    updateFreeDelivery(subtotal);
}

function changeQty(key, amount) {
    const item = cart.find(cartItem => cartItem.key === key);
    if (!item) return;

    if (amount > 0) {
        const stockLimit = getStockForCartItem(item);
        if (item.qty >= stockLimit) {
            showToast(`Only ${stockLimit} available in stock.`);
            return;
        }
    }

    item.qty += amount;
    if (item.qty <= 0) {
        cart = cart.filter(cartItem => cartItem.key !== key);
    }

    saveCart();
    updateCartUI();
    renderCart();
}

function updateFreeDelivery(subtotal) {
    const bar = document.getElementById("freeBar");
    const text = document.getElementById("freeText");
    if (!bar || !text) return;

    if (subtotal === 0) {
        bar.style.width = "0%";
        text.innerText = `Add ${formatPrice(FREE_DELIVERY_LIMIT)} to unlock free delivery.`;
        return;
    }

    if (subtotal >= FREE_DELIVERY_LIMIT) {
        bar.style.width = "100%";
        text.innerText = "Free delivery unlocked.";
    } else {
        const remaining = FREE_DELIVERY_LIMIT - subtotal;
        const percent = Math.min((subtotal / FREE_DELIVERY_LIMIT) * 100, 100);
        bar.style.width = `${percent}%`;
        text.innerText = `Add ${formatPrice(remaining)} more to save ${formatPrice(DELIVERY_CHARGE)} delivery.`;
    }
}

function filterCat(cat) {
    activeCategory = cat;
    applyFilters();
}

function changeSize(productId, index, btn) {
    const product = products.find(item => item.id === productId);
    if (!product || !product.sizes) return;

    product.selectedIndex = index;
    const size = product.sizes[index];
    const addBtn = document.getElementById(`btn-${productId}`);
    const stockNote = document.getElementById(`stock-${productId}`);
    const price = document.getElementById(`price-${productId}`);
    const mrp = document.getElementById(`mrp-${productId}`);
    const discount = document.getElementById(`discount-${productId}`);
    const image = document.getElementById(`img-${productId}`);

    price.innerText = formatPrice(size.price);
    image.src = size.img;

    if (size.mrp && size.mrp > size.price) {
        mrp.innerText = formatPrice(size.mrp);
        discount.innerText = `${Math.round(((size.mrp - size.price) / size.mrp) * 100)}% OFF`;
    } else {
        mrp.innerText = "";
        discount.innerText = "";
    }

    btn.closest(".variant-group").querySelectorAll(".variant-btn").forEach(item => item.classList.remove("active"));
    btn.classList.add("active");

    const out = size.stock === 0;
    addBtn.disabled = out;
    addBtn.classList.toggle("out", out);
    addBtn.innerHTML = out ? "Out" : "<i class='bx bx-plus'></i>";
    stockNote.innerText = out ? "Unavailable" : "In stock";

    const card = document.getElementById(`card-${productId}`);
    const existingRibbon = card.querySelector(".stock-ribbon");
    if (out && !existingRibbon) {
        card.insertAdjacentHTML("afterbegin", `<div class="stock-ribbon">OUT OF STOCK</div>`);
    }
    if (!out && existingRibbon) existingRibbon.remove();
}

function openImg(src) {
    document.getElementById("previewImg").src = src;
    document.getElementById("imgModal").classList.add("show");
}

function closeImg() {
    document.getElementById("imgModal").classList.remove("show");
    document.getElementById("previewImg").src = "";
}

function openProductModal(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    const variant = getVariant(product);
    const price = variant ? variant.price : product.price;
    const mrp = variant && variant.mrp ? variant.mrp : product.mrp;

    document.getElementById("modalImg").src = variant ? variant.img : product.img;
    document.getElementById("modalImg").alt = product.name;
    document.getElementById("modalName").innerText = product.name;
    document.getElementById("modalPrice").innerText = formatPrice(price);
    document.getElementById("modalMrp").innerText = mrp ? formatPrice(mrp) : "";
    document.getElementById("modalAddBtn").onclick = () => {
        addToCart(id);
        closeProductModal();
    };
    document.getElementById("productModal").classList.add("show");
}

function closeProductModal() {
    document.getElementById("productModal").classList.remove("show");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function focusSearch() {
    const input = document.getElementById("searchInput");
    input.focus();
    input.scrollIntoView({ behavior: "smooth", block: "center" });
}

function openCartNav() {
    document.getElementById("cartModalBg").classList.add("show");
    renderCart();
}

function showOffers() {
    showToast(`Free delivery above ${formatPrice(FREE_DELIVERY_LIMIT)}`);
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function openCheckoutForm() {
    if (cart.length === 0) return;
    document.getElementById("cartModalBg").classList.remove("show");
    document.getElementById("formModalBg").classList.add("show");
}

async function finalCheckout() {
    const name = document.getElementById("userName").value.trim();
    const phone = document.getElementById("userPhone").value.trim();
    const address = document.getElementById("userAddress").value.trim();

    if (!name || !phone || !address) {
        showToast("Please fill all delivery details.");
        return;
    }

    const { subtotal, delivery, grandTotal } = getCartTotals();
    const items = cart.map(item => {
        const size = item.size ? ` (${item.size})` : "";
        return `- ${item.name}${size} x ${item.qty}: ${formatPrice(item.price * item.qty)}`;
    }).join("\n");

    const message = [
        "*DONGARWAR NEW ORDER*",
        "--------------------------",
        `Customer: ${name}`,
        `Contact: ${phone}`,
        `Address: ${address}`,
        "--------------------------",
        "Items:",
        items,
        "--------------------------",
        `Subtotal: ${formatPrice(subtotal)}`,
        `Delivery: ${delivery === 0 ? "Free" : formatPrice(delivery)}`,
        `Total Payable: ${formatPrice(grandTotal)}`,
        "--------------------------",
        "Please confirm my order."
    ].join("\n");

    if (window.reduceFirebaseStock) {
    try {
        await window.reduceFirebaseStock(cart);

        cart = [];
saveCart();
updateCartUI();
renderCart();

        console.log("Stock updated successfully");
    } catch (error) {
        console.error("Stock update failed:", error);
        showToast("Stock update failed");
    }
}
    
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank");
}

function wireEvents() {
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");

    searchInput.addEventListener("input", event => {
        searchTerm = event.target.value;
        clearSearchBtn.classList.toggle("show", searchTerm.length > 0);
        renderProducts(getFilteredProducts());
    });

    clearSearchBtn.addEventListener("click", () => {
        searchTerm = "";
        searchInput.value = "";
        clearSearchBtn.classList.remove("show");
        renderProducts(getFilteredProducts());
        searchInput.focus();
    });

    document.getElementById("miniCartBtn").addEventListener("click", openCartNav);
    document.getElementById("closeCartBtn").addEventListener("click", () => document.getElementById("cartModalBg").classList.remove("show"));
    document.getElementById("openFormBtn").addEventListener("click", openCheckoutForm);
    document.getElementById("closeFormBtn").addEventListener("click", () => document.getElementById("formModalBg").classList.remove("show"));
    document.getElementById("finalCheckoutBtn").addEventListener("click", finalCheckout);

    ["cartModalBg", "formModalBg", "imgModal", "productModal"].forEach(id => {
        document.getElementById(id).addEventListener("click", event => {
            if (event.target.id === id) {
                event.currentTarget.classList.remove("show");
            }
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        document.querySelectorAll(".modal-overlay.show, .product-modal.show").forEach(modal => modal.classList.remove("show"));
    });
}

function hideSplash() {
    const splash = document.getElementById("splash");
    if (!splash) return;
    setTimeout(() => {
        splash.style.opacity = "0";
        setTimeout(() => splash.remove(), 220);
    }, 420);
}

document.addEventListener("DOMContentLoaded", () => {
    wireEvents();
    applyFilters();
    updateCartUI();
    renderCart();
    hideSplash();
});

window.replaceProducts = setProducts;
window.showStoreToast = showToast;

document.addEventListener("DOMContentLoaded", () => {
    wireEvents();
    applyFilters();
    updateCartUI();
    renderCart();
    hideSplash();
});

function setProducts(firebaseProducts) {

    products = firebaseProducts.map((product, index) => ({
        ...product,
        firebaseId: product.firebaseId,
        id: product.id || product.firebaseId,
        createdAt: product.createdAt || 1,
        selectedIndex: 0
    }));

    cart = readCart();

    applyFilters();
    updateCartUI();
    renderCart();

    console.log("Products Rendered =", products.length);
}