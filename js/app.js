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
        name: "Comfort",
        price: 58,
        cat: "General",
        img: "images/comfort58.jpg",
        sizes: [
            { label: "210ml", price: 58, img: "images/comfort58.jpg", stock: 3 },
            { label: "860ml", price: 230, img: "images/comfort230.jpg", stock: 0 }
        ]

    }, {
        id: 9,
        name: "mens lower pant",
        price: 250,
        mrp: 330,
        cat: "Clothes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAHvGdkq86_CW4hFBBLHjOWed0tMv-fgUPA&s"
    }, {
        id: 10,
        name: "Ponds Powder",
        price: 260,
        cat: "Cosmetics",
        img: "images/ponds.jpg",
        sizes: [
            { label: "250gm", price: 260, img: "images/ponds.jpg" },
            { label: "100gm", price: 125, img: "images/ponds.jpg" },
            { label: "50gm", price: 65, img: "images/ponds.jpg" },
            { label: "19 gm", price: 10, img: "images/ponds10.jpg" }
        ]

    }, {
        id: 11,
        name: "Garnier Cream",
        price: 109,
        cat: "Cosmetics",
        img: "images/vitaminc.jpg",
        sizes: [
            { label: "23gm", price: 109, img: "images/vitaminc.jpg" },
            { label: "45gm", price: 249, img: "images/vitaminc.jpg" }
        ],
        selectedIndex: 0,
    }, {
        id: 12,
        name: "ENGAGE Perfume",
        price: 220,
        mrp: 255,
        cat: "Perfumes",
        img: "images/engage.jpg"
    }, {
        id: 13,
        name: "DENVER",
        price: 230,
        cat: "Perfumes",
        img: "images/denver.jpg",
        stock: 0
    }, {
        id: 14,
        name: "Bellavita CEO men",
        price: 149,
        mrp: 175,
        cat: "Perfumes",
        img: "images/ceomen.jpg"
    }, {
        id: 15,
        name: "Magnet Perfume",
        price: 240,
        mrp: 255,
        cat: "Perfumes",
        img: "images/magnet1.jpg"
    }, {
        id: 16,
        name: "sandal attar",
        price: 50,
        cat: "Perfumes",
        img: "images/sandal.jpg.jpeg"
    }, {
        id: 17,
        name: "Parachute Coconut oil",
        price: 65,
        cat: "Hair oils",
        img: "images/parachute.jpg",
        sizes: [
            { label: "100ml", price: 65, img: "images/parachute.jpg" },
            { label: "20ml", price: 10, img: "images/parachute10.jpg" }
        ]
    }, {
        id: 18,
        name: "Shanti aavla",
        price: 20,
        cat: "Hair oils",
        img: "images/shanti.jpg"
    }, {
        id: 19,
        name: "Vasmol oil",
        price: 35,
        cat: "Hair oils",
        img: "images/vasmol.jpg"
    }, {
        id: 20,
        name: "kesh king (50ml)",
        price: 99,
        cat: "Hair oils",
        img: "images/keshking.jpg"
    }, {
        id: 21,
        name: "Glow & Lovely (50g)",
        price: 135,
        cat: "Cosmetics",
        img: "images/glow.jpg"
    }, {
        id: 22,
        name: "Khushbu oil (100ml)",
        price: 60,
        cat: "Hair oils",
        img: "images/khushbu.jpg"
    }, {
        id: 23,
        name: "Bajaj almond drops (50ml)",
        price: 41,
        cat: "Hair oils",
        img: "images/almond.jpg"
    }, {
        id: 24,
        name: "Ponds sandal Powder",
        price: 75,
        cat: "Cosmetics",
        img: "images/sandal2.jpg"
    }, {
        id: 25,
        name: "jannatul attar",
        price: 50,
        mrp: 100,
        cat: "Perfumes",
        img: "images/jannatul.jpg.jpeg"
    }, {
        id: 26,
        name: "Shirlie attar",
        price: 50,
        mrp: 100,
        cat: "Perfumes",
        img: "images/roll.jpg.jpeg"
    }, {
        id: 27,
        name: "men scarf",
        price: 70,
        mrp: 100,
        cat: "Clothes",
        img: "images/muf.jpg"
    }, {
        id: 28,
        name: "Everyouth Scrub",
        price: 15,
        cat: "Cosmetics",
        img: "images/ginger.jpg"
    }, {
        id: 29,
        name: "Everyouth Golden mask",
        price: 15,
        cat: "Cosmetics",
        img: "images/golden.jpg"
    }, {
        id: 30,
        name: "Everyouth Tan Removal",
        price: 20,
        cat: "Cosmetics",
        img: "images/cherry.jpg"
    }, {
        id: 31,
        name: "Bandana mask",
        price: 20,
        mrp: 40,
        cat: "Clothes",
        img: "images/bandana.jpg"
    }, {
        id: 32,
        name: "Himalaya Lipbalm",
        price: 20,
        cat: "Cosmetics",
        img: "images/lip.jpg"
    }, {
        id: 33,
        name: "Saffron cream",
        price: 60,
        cat: "Cosmetics",
        img: "images/saffron.jpg",
        createdAt: Date.now(),
        sizes: [
            { label: "Brown", price: 60, img: "images/saffron.jpg" },
            { label: "Gold", price: 60, img: "images/saffron2.jpg" }
        ]

    }, {
        id: 34,
        name: "Whitetone Cream",
        price: 48,
        cat: "Cosmetics",
        img: "images/whitecream.jpg",
        createdAt: Date.now()

    }, {
        id: 35,
        name: "Whitetone Powder",
        price: 65,
        cat: "Cosmetics",
        img: "images/whitepowder.jpg",
        createdAt: Date.now()

    }, {
        id: 36,
        name: "Himalaya Baby Lotion (100ml)",
        price: 115,
        cat: "Cosmetics",
        img: "images/himalayalotion.jpg",
        createdAt: Date.now()

    }, {
        id: 37,
        name: "Himalaya Baby Powder (50gm)",
        price: 60,
        cat: "Cosmetics",
        img: "images/himalayapowder.jpg",
        createdAt: Date.now()
    }, {
        id: 38,
        name: "Himalaya Baby massage oil (50ml)",
        price: 75,
        cat: "Cosmetics",
        img: "images/himalayaoil.jpg",
        createdAt: Date.now()
    }, {
        id: 39,
        name: "Necklace-1",
        price: 200,
        mrp: 270,
        cat: "Beauty",
        img: "images/necklace1.jpg.jpeg",
        createdAt: Date.now()
    }, {
        id: 40,
        name: "Necklace-2",
        price: 150,
        mrp: 230,
        cat: "Beauty",
        img: "images/necklace2.jpg.jpeg",
        createdAt: Date.now()
    }, {
        id: 41,
        name: "Necklace-3",
        price: 150,
        mrp: 230,
        cat: "Beauty",
        img: "images/necklace3.jpg.jpeg",
        createdAt: Date.now()
    }, {
        id: 42,
        name: "Necklace-4",
        price: 190,
        mrp: 260,
        cat: "Beauty",
        img: "images/necklace4.jpg.jpeg",
        createdAt: Date.now()
    }, {
        id: 43,
        name: "Necklace-5",
        price: 220,
        mrp: 300,
        cat: "Beauty",
        img: "images/necklace5.jpg.jpeg",
        createdAt: Date.now()
    }, {
        id: 44,
        name: "Necklace-6",
        price: 150,
        mrp: 230,
        cat: "Beauty",
        img: "images/necklace6.jpg.jpeg",
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


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


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

            p.selectedIndex = 0;
            

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

          let defaultStock = p.sizes ? p.sizes[0].stock : p.stock;

          let buttonHTML = "";
          if (defaultStock === 0) {
            buttonHTML = `
              <button class="add-btn out" disabled>
                Out of Stock
              </button>
            `;
          } else {
            buttonHTML = `
              <button class="add-btn" 
  id="btn-${p.id}"
  onclick="flyToCart(this.closest('.card').querySelector('img')); addToCart(${p.id})">
  +
</button>


            `;
          }

          return `
  <div class="card" style="position:relative;">
    
    ${p.sizes && p.sizes[0].stock === 0 
  ? `<div class="stock-ribbon">OUT OF STOCK</div>` 
  : ""}


    <img id="img-${p.id}" 
     src="${p.img}" 
     onclick="openImg(this.src)">



            <div class="card-title">${p.name}</div>
            ${p.sizes ? `
<div class="variant-group">
  ${p.sizes.map((s,i)=>`
    <button 
      class="variant-btn ${i===0 ? 'active' : ''}" 
      onclick="changeSize(${p.id}, ${i}, this)">
      ${s.label}
    </button>
  `).join("")}
</div>
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

  // 🔹 Agar product me sizes hain
  let selectedSize = null;

  if (product.sizes && product.sizes.length > 0) {
    selectedSize = product.sizes[product.selectedIndex];
  }

  // 🔹 Final values decide karo
  const finalPrice = selectedSize ? selectedSize.price : product.price;
  const finalImg   = selectedSize ? selectedSize.img   : product.img;
  const finalSize  = selectedSize ? selectedSize.label : null;

  // 🔹 Check agar same variant already cart me hai
  const existingItem = cart.find(item =>
    item.id === product.id &&
    item.size === finalSize
  );

  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: finalPrice,
      img: finalImg,
      size: finalSize,
      qty: 1
    });
  }

 saveCart();
  updateCartUI();
  renderCart();
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
            saveCart();
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

  let line = `• ${i.name}`;

  if (i.size) {
    line += ` (${i.size})`;
  }

  line += ` (x${i.qty}) - ₹${itemTotal}%0A`;

  orderList += line;

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
function changeSize(productId, index, btn) {
  const product = products.find(p => p.id === productId);

  product.selectedIndex = index;
  const size = product.sizes[index];

  // Price update
  document.getElementById(`price-${productId}`).innerText =
    "₹" + size.price;

  // Image update
  document.getElementById(`img-${productId}`).src =
    size.img;

  // Active button fix
  const group = btn.closest(".variant-group");
  group.querySelectorAll(".variant-btn").forEach(b =>
    b.classList.remove("active")
  );
  btn.classList.add("active");


  // ✅ STOCK LOGIC
  const addBtn = document.getElementById(`btn-${productId}`);

  if (size.stock === 0) {
    addBtn.disabled = true;
    addBtn.innerText = "Out";
  } else {
    addBtn.disabled = false;
    addBtn.innerText = "+";
  }
}
updateCartUI();
renderCart();