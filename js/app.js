const PHONE = "919322144882";
const products = [{
        id: 1,
        name: "Garnier Facewash",
        price: 115,
        cat: "Cosmetics",
        img: "https://m.media-amazon.com/images/I/61nVOy19a-L.jpg"
    }, {
        id: 2,
        name: "Himalaya Face Wash",
        price: 20,
        cat: "Cosmetics",
        img: "https://adn-static1.nykaa.com/media/wysiwyg/HH_NEEMs1.jpg?tr=w-400,pr-true"
    }, {
        id: 3,
        name: "Bellavita Honey OUD Perfume",
        price: 149,
        mrp: 175,
        cat: "Perfumes",
        img: "https://m.media-amazon.com/images/I/51wORUd8k1L._AC_UL480_FMwebp_QL65_.jpg"
    }, {
        id: 4,
        name: "Room Freshner Spray",
        price: 149,
        mrp: 169,
        cat: "General",
        img: "https://m.media-amazon.com/images/I/61nao4paPES.jpg"
    }, {
        id: 5,
        name: "Colin (125 ml)",
        price: 40,
        cat: "General",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrea4-zHOQZD-oL4pCuqERk7KS9YK91SQN4g&s"
    }, {
        id: 6,
        name: "Garnier Men Acnofight",
        price: 110,
        mrp: 120,
        stock: 1,
        cat: "Cosmetics",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sYAFEe5jDELXoYpzB1Ksy3o21_qlDigjOg&s"
    }, {
        id: 7,
        name: "men scarf",
        price: 80,
        mrp: 100,
        cat: "Clothes",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBLqjar8MnUgAbKzRLufcq9v6AnMUEL1PEUpns9HJ_CKQ7YHlmG9QS326lWV4UoA_TPJAzv7imwHNY-pkxN_kOXPNXblbP90-vcLNzF9ioX_MlY7b703crBw"
    }, {
        id: 8,
        name: "Comfort (210 ml)",
        price: 58,
        cat: "General",
        img: "https://quickeselling.blob.core.windows.net/qesliveimages/uploads/10143/products/1589889283_comfort_after_wash_morning_fresh_fabric_conditioner_220_ml.jpg"
    }, {
        id: 9,
        name: "Comfort (860 ml)",
        price: 230,
        mrp: 235,
        stock: 0,
        cat: "General",
        img: "https://m.media-amazon.com/images/I/61jY0St3PGL.jpg"
    }, {
        id: 10,
        name: "mens lower pant",
        price: 250,
        mrp: 330,
        stock: 5,
        cat: "Clothes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAHvGdkq86_CW4hFBBLHjOWed0tMv-fgUPA&s"
    }, {
        id: 11,
        name: "Ponds Powder",
        price: 125,
        cat: "Cosmetics",
        img: "images/ponds.jpg",
        sizes: [
            { label: "100gm", price: 125 },
            { label: "23 gm", price: 10 }
        ]

    }, {
        id: 12,
        name: "Garnier Cream",
        price: 109,
        cat: "Cosmetics",
        img: "images/vitaminc.jpg"
    }, {
        id: 13,
        name: "ENGAGE Perfume",
        price: 220,
        mrp: 255,
        cat: "Perfumes",
        img: "images/engage.jpg"
    }, {
        id: 14,
        name: "DENVER",
        price: 230,
        cat: "Perfumes",
        img: "images/denver.jpg"
    }, {
        id: 15,
        name: "Bellavita CEO men",
        price: 149,
        mrp: 175,
        cat: "Perfumes",
        img: "images/ceomen.jpg"
    }, {
        id: 16,
        name: "Magnet Perfume",
        price: 240,
        mrp: 255,
        cat: "Perfumes",
        img: "images/magnet1.jpg"
    }, {
        id: 17,
        name: "sandal attar",
        price: 50,
        cat: "Perfumes",
        img: "images/sandal.jpg.jpeg"
    }, {
        id: 18,
        name: "Parachute Coconut oil",
        price: 65,
        cat: "Hair oils",
        img: "images/parachute.jpg"
    }, {
        id: 19,
        name: "Shanti aavla",
        price: 20,
        cat: "Hair oils",
        img: "images/shanti.jpg"
    }, {
        id: 20,
        name: "Vasmol oil",
        price: 35,
        cat: "Hair oils",
        img: "images/vasmol.jpg"
    }, {
        id: 21,
        name: "kesh king (50ml)",
        price: 99,
        cat: "Hair oils",
        img: "images/keshking.jpg"
    }, {
        id: 22,
        name: "Glow & Lovely (50g)",
        price: 135,
        cat: "Cosmetics",
        img: "images/glow.jpg"
    }, {
        id: 23,
        name: "Khushbu oil (100ml)",
        price: 60,
        cat: "Hair oils",
        img: "images/khushbu.jpg"
    }, {
        id: 24,
        name: "Bajaj almond drops (50ml)",
        price: 41,
        cat: "Hair oils",
        img: "images/almond.jpg"
    }, {
        id: 25,
        name: "Ponds sandal Powder",
        price: 75,
        cat: "Cosmetics",
        img: "images/sandal2.jpg"
    }, {
        id: 26,
        name: "jannatul attar",
        price: 50,
        mrp: 100,
        cat: "Perfumes",
        img: "images/jannatul.jpg.jpeg"
    }, {
        id: 27,
        name: "Shirlie attar",
        price: 50,
        mrp: 100,
        cat: "Perfumes",
        img: "images/roll.jpg.jpeg"
    }, {
        id: 28,
        name: "men scarf",
        price: 70,
        mrp: 100,
        cat: "Clothes",
        img: "images/muf.jpg"
    }, {
        id: 29,
        name: "Everyouth Scrub",
        price: 15,
        cat: "Cosmetics",
        img: "images/ginger.jpg"
    }, {
        id: 30,
        name: "Everyouth Golden mask",
        price: 15,
        cat: "Cosmetics",
        img: "images/golden.jpg"
    }, {
        id: 31,
        name: "Everyouth Tan Removal",
        price: 20,
        cat: "Cosmetics",
        img: "images/cherry.jpg"
    }, {
        id: 32,
        name: "Bandana mask",
        price: 20,
        mrp: 40,
        cat: "Clothes",
        img: "images/bandana.jpg"
    }, {
        id: 33,
        name: "Himalaya Lipbalm",
        price: 20,
        cat: "Cosmetics",
        img: "images/lip.jpg"
    }, {
        id: 34,
        name: "Saffron cream brown",
        price: 60,
        cat: "Cosmetics",
        img: "images/saffron.jpg",
        createdAt: Date.now()

    }, {
        id: 35,
        name: "Whitetone Cream",
        price: 48,
        cat: "Cosmetics",
        img: "images/whitecream.jpg",
        createdAt: Date.now()

    }, {
        id: 36,
        name: "Whitetone Powder",
        price: 65,
        cat: "Cosmetics",
        img: "images/whitepowder.jpg",
        createdAt: Date.now()

    }, {
        id: 37,
        name: "Himalaya Baby Lotion (100ml)",
        price: 115,
        cat: "Cosmetics",
        img: "images/himalayalotion.jpg",
        createdAt: Date.now()

    }, {
        id: 38,
        name: "Himalaya Baby Powder (50gm)",
        price: 60,
        cat: "Cosmetics",
        img: "images/himalayapowder.jpg",
        createdAt: Date.now()
    }, {
        id: 39,
        name: "Himalaya Baby massage oil (50ml)",
        price: 75,
        cat: "Cosmetics",
        img: "images/himalayaoil.jpg",
        createdAt: Date.now()
    }, {
        id: 40,
        name: "Saffron cream gold",
        price: 60,
        mrp: 75,
        cat: "Cosmetics",
        img: "images/saffron2.jpg",
        createdAt: Date.now()
    },



];
products.forEach((p, index) => {
    if (!p.createdAt) {
        p.createdAt = 1; // sab purane products ko same old time
    }
});

function getSortedProducts(list) {
    return [...list].sort((a, b) => {
        if (b.createdAt !== a.createdAt) {
            return b.createdAt - a.createdAt; // NEWEST FIRST
        }
        return b.id - a.id; // fallback (extra safety)
    });
}


let cart = [];

function renderCategories() {
    const cats = ["All", ...new Set(products.map(p => p.cat))];
    document.getElementById("categoryChips").innerHTML = cats.map((c, i) => `
                <div class="chip ${i === 0 ? 'active' : ''}" onclick="filterCat('${c}', this)">${c}</div>
            `).join("");
}

products.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

function renderProducts(list) {
    document.getElementById("storesWrap").innerHTML = `
    <div class="shop-section">
      <div class="shop-header">
        <div class="shop-name">DONGARWAR Store</div>
        <div class="status-badge online">OPEN</div>
      </div>

      <div class="vertical-list">
        ${list.map(p => {

          let priceHTML = "";
          if (p.mrp && p.mrp > p.price) {
            const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
            priceHTML = `
              <div class="price-box">
                <span class="selling-price" id="price-${p.id}">₹${p.price}</span>

                <span class="mrp">₹${p.mrp}</span>
                <span class="discount">${discount}% OFF</span>
              </div>
            `;
          } else {
            priceHTML = `
              <div class="price-box">
                <span class="selling-price" id="price-${p.id}">₹${p.price}</span>

              </div>
            `;
          }

          let buttonHTML = "";
          if (p.stock === 0) {
            buttonHTML = `
              <button class="add-btn out" disabled>
                Out of Stock
              </button>
            `;
          } else {
            buttonHTML = `
              <button class="add-btn" 
  onclick="flyToCart(this.closest('.card').querySelector('img')); addToCart(${p.id})">
  +
</button>

            `;
          }

          return `
  <div class="card" style="position:relative;">
    
    ${p.stock === 0 ? `<div class="stock-ribbon">OUT OF STOCK</div>` : ""}

    <img src="${p.img}" onclick="openImg('${p.img}')" style="cursor:zoom-in;">


            <div class="card-title">${p.name}</div>
            ${p.sizes ? `
<select onchange="changeSize(${p.id}, this.value)">
  ${p.sizes.map((s,i)=>`
    <option value="${i}">${s.label}</option>
  `).join("")}
</select>
` : ""}

            <div style="display:flex; justify-content:space-between; align-items:center;">
              ${priceHTML}
              ${buttonHTML}
            </div>
          </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}
function flyToCart(imgElement) {
  const cart = document.getElementById("miniCartBtn");

  const imgRect = imgElement.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  const clone = imgElement.cloneNode(true);
  clone.style.position = "fixed";
  clone.style.top = imgRect.top + "px";
  clone.style.left = imgRect.left + "px";
  clone.style.width = imgRect.width + "px";
  clone.style.height = imgRect.height + "px";
  clone.style.transition = "all 0.8s ease-in-out";
  clone.style.zIndex = "9999";
  clone.style.borderRadius = "12px";

  document.body.appendChild(clone);

  setTimeout(() => {
    clone.style.top = cartRect.top + "px";
    clone.style.left = cartRect.left + "px";
    clone.style.width = "20px";
    clone.style.height = "20px";
    clone.style.opacity = "0.5";
  }, 50);

  setTimeout(() => {
  cart.classList.add("bump");   // 👈 YE LINE ADD
  setTimeout(() => cart.classList.remove("bump"), 200);  // 👈 YE LINE ADD
  clone.remove();
}, 850);

}



       function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product.stock === 0) return;

  const finalPrice = product.selectedPrice || product.price;
  const finalSize = product.selectedSize || null;

  const item = cart.find(i =>
    i.id === id &&
    i.price === finalPrice &&
    i.size === finalSize
  );

  if (item) {
    item.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      img: product.img,
      price: finalPrice,
      mrp: product.mrp,
      size: finalSize,   // 👈 size save ho raha hai
      qty: 1
    });
  }

  updateCartUI();
  showToast("Added to cart!");
}



        function updateCartUI() {
            const count = cart.reduce((a, b) => a + b.qty, 0);
            document.getElementById("cartCount").innerText = count;
            document.getElementById("miniCartBtn").classList.toggle("visible", count > 0);
        }

        function renderCart() {
    const box = document.getElementById("cartItems");
    let subtotal = 0;

    box.innerHTML = cart.map(i => {
        subtotal += i.price * i.qty;
        return `
        <div class="cart-item">
            <div><b>${i.name} ${i.size ? `(${i.size})` : ""}</div>
            <div class="qty-ctrl">
                <span onclick="changeQty(${i.id}, -1)">−</span>
                ${i.qty}
                <span onclick="changeQty(${i.id}, 1)">+</span>
            </div>
        </div>`;
    }).join("");

    let delivery = subtotal >= FREE_DELIVERY_LIMIT ? 0 : DELIVERY_CHARGE;
    let grandTotal = subtotal + delivery;

    document.getElementById("total").innerText =
        "₹" + grandTotal + (delivery ? " (₹10 delivery)" : "");

    // 👇 Free delivery bar update
    updateFreeDelivery(subtotal);
}


        function changeQty(id, n) {
            const item = cart.find(i => i.id === id);
            item.qty += n;
            if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
            updateCartUI();
            renderCart();
            if (cart.length === 0) closeModals();
        }

        // --- NAVIGATION & MODALS ---
        const cartModal = document.getElementById("cartModalBg");
        const formModal = document.getElementById("formModalBg");

        document.getElementById("miniCartBtn").onclick = () => { cartModal.classList.add("show"); renderCart(); };
        document.getElementById("closeCartBtn").onclick = () => cartModal.classList.remove("show");
        
        document.getElementById("openFormBtn").onclick = () => {
            if(cart.length === 0) return;
            cartModal.classList.remove("show");
            formModal.classList.add("show");
        };

        document.getElementById("closeFormBtn").onclick = () => formModal.classList.remove("show");

        function closeModals() {
            cartModal.classList.remove("show");
            formModal.classList.remove("show");
        }

        // --- FINAL CHECKOUT ---
        document.getElementById("finalCheckoutBtn").onclick = () => {
            const name = document.getElementById("userName").value;
            const phone = document.getElementById("userPhone").value;
            const address = document.getElementById("userAddress").value;

            if (!name || !phone || !address) {
                alert("Please fill all details!");
                return;
            }
let orderList = "";
let subtotal = 0;

cart.forEach(i => {
  const itemTotal = i.price * i.qty;
  orderList += `• ${i.name} (x${i.qty}) - ₹${itemTotal}%0A`;
  subtotal += itemTotal;
});

let delivery = subtotal >= FREE_DELIVERY_LIMIT ? 0 : DELIVERY_CHARGE;
let grandTotal = subtotal + delivery;


           const finalMsg =
`*DONGARWAR NEW ORDER*%0A
--------------------------%0A
*Customer:* ${name}%0A
*Contact:* ${phone}%0A
*Address:* ${address}%0A
--------------------------%0A
*Items:*%0A
${orderList}
--------------------------%0A
*Subtotal:* ₹${subtotal}%0A
*Delivery:* ${delivery === 0 ? "FREE 🚚" : "₹" + DELIVERY_CHARGE}%0A
--------------------------%0A
*TOTAL PAYABLE: ₹${grandTotal}*%0A
--------------------------%0A
Please confirm my order 🙏`;

            
            window.open(`https://wa.me/${PHONE}?text=${finalMsg}`, "_blank");
        };

        // --- SEARCH & FILTER ---
        document.getElementById("searchInput").oninput = e => {
            const v = e.target.value.toLowerCase();
            const filtered = products.filter(p =>
  p.name.toLowerCase().includes(v)
);
renderProducts(getSortedProducts(filtered));

        };

        function filterCat(cat, el) {
            document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
            el.classList.add("active");
            const filtered =
  cat === "All"
    ? products
    : products.filter(p => p.cat === cat);

renderProducts(getSortedProducts(filtered));

        }

        // --- AI & UTILS ---
       

        function showToast(msg) {
            const t = document.getElementById("toast");
            t.innerText = msg;
            t.classList.add("show");
            setTimeout(() => t.classList.remove("show"), 2000);
        }

        // Init
        renderCategories();
        renderProducts(getSortedProducts(products));

        

        
const FREE_DELIVERY_LIMIT = 99;
const DELIVERY_CHARGE = 10;


function updateFreeDelivery(subtotal) {
    const bar = document.getElementById("freeBar");
    const text = document.getElementById("freeText");

    if (!bar || !text) return;

    if (subtotal >= FREE_DELIVERY_LIMIT) {
        bar.style.width = "100%";
        text.innerHTML = "🎉 FREE DELIVERY UNLOCKED";
    } else {
        const percent = Math.min((subtotal / FREE_DELIVERY_LIMIT) * 100, 100);
        bar.style.width = percent + "%";
        text.innerHTML =
            `₹${FREE_DELIVERY_LIMIT - subtotal} aur add karo aur ₹${DELIVERY_CHARGE} delivery bachaao 🚚`;
    }
}
    // INSTANT SPLASH REMOVE (NO WAIT)
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = "0";
      splash.style.transition = "opacity 0.12s linear";
      setTimeout(() => splash.remove(), 300);
    }, 500); // sirf 150ms
  }
});
    function openImg(src) {
  document.getElementById("previewImg").src = src;
  document.getElementById("imgModal").classList.add("show");
}

function closeImg() {
  document.getElementById("imgModal").classList.remove("show");
  document.getElementById("imgModal").onclick = e => {
  if (e.target.id === "imgModal") closeImg();
};

}
function changeSize(productId, index) {
  const product = products.find(p => p.id === productId);
  const size = product.sizes[index];

  document.getElementById(`price-${productId}`).innerText =
    "₹" + size.price;

  product.selectedPrice = size.price;
  product.selectedSize = size.label;   // 👈 ye add karo
}