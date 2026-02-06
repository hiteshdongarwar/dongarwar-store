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
        price: 235,
        cat: "General",
        img: "https://m.media-amazon.com/images/I/61jY0St3PGL.jpg"
    }, {
        id: 10,
        name: "mens lower pant",
        price: 250,
        cat: "Clothes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAHvGdkq86_CW4hFBBLHjOWed0tMv-fgUPA&s"
    }, {
        id: 11,
        name: "Ponds Powder (100gm)",
        price: 125,
        cat: "Cosmetics",
        img: "images/ponds.jpg"
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
        cat: "Perfumes",
        img: "images/ceomen.jpg"
    }, {
        id: 16,
        name: "Magnet Perfume",
        price: 240,
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
        cat: "Perfumes",
        img: "images/jannatul.jpg.jpeg"
    }, {
        id: 27,
        name: "Shirlie attar",
        price: 50,
        cat: "Perfumes",
        img: "images/roll.jpg.jpeg"
    }, {
        id: 28,
        name: "men scarf",
        price: 70,
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
        name: "Saffron",
        price: 60,
        cat: "Cosmetics",
        img: "images/saffron.jpg",
        createdAt: Date.now()

    },



];

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
        ${list.map(p => `
          <div class="card">
            <img src="${p.img}" onclick="openImg('${p.img}')" style="cursor:zoom-in;">

            <div class="card-title">${p.name}</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div class="price">₹${p.price}</div>
              <button class="add-btn" onclick="addToCart(${p.id})">+</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}


        function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product.stock === 0) return;

  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ ...product, qty: 1 });

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
            <div><b>${i.name}</b><br>₹${i.price}</div>
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
            renderProducts(products.filter(p => p.name.toLowerCase().includes(v)));
        };

        function filterCat(cat, el) {
            document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
            el.classList.add("active");
            renderProducts(cat === "All" ? products : products.filter(p => p.cat === cat));
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
        renderProducts(products);
        

        
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