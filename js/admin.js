import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJTHgfj0HlORoUH_T-Yu3sxsTXxXcVfIs",
    authDomain: "dongarwar-store-63517.firebaseapp.com",
    projectId: "dongarwar-store-63517",
    storageBucket: "dongarwar-store-63517.firebasestorage.app",
    messagingSenderId: "451688707854",
    appId: "1:451688707854:web:9eaa73f5f20b8553b2c95f",
    measurementId: "G-82RXW50J9P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.addProduct = async function() {

    const sizes = [];

    document.querySelectorAll(".size-row").forEach(row => {

        sizes.push({
            label: row.querySelector(".size-label").value,
            price: Number(row.querySelector(".size-price").value),
            stock: Number(row.querySelector(".size-stock").value),
            img: row.querySelector(".size-img").value
        });

    });

    await addDoc(collection(db, "products"), {

        name: document.getElementById("name").value,

        price: Number(document.getElementById("price").value),

        stock: Number(document.getElementById("stock").value),

        cat: document.getElementById("cat").value,

        img: document.getElementById("img").value,

        sizes: sizes.length ? sizes : null,

        createdAt: Date.now()

    });

    alert("Product Added!");

    loadProducts();
};

async function loadProducts() {

    const snapshot = await getDocs(collection(db, "products"));

    const box = document.getElementById("productsList");

    box.innerHTML = "";

    snapshot.forEach(product => {

        const data = product.data();

        box.innerHTML += `
<div class="product-card">

  <div class="product-info">

    <div class="product-name">
      ${data.name}
    </div>

    <div class="price">
      ₹${data.price}
    </div>

    <div class="product-stock">
      Stock: ${data.stock}
    </div>

  </div>

  <button
    class="edit-btn"
    onclick="editProduct('${product.id}',
      '${data.name}',
      '${data.price}',
      '${data.stock}',
      '${data.cat}',
      '${data.img}')">
    Edit
  </button>

  <button
    class="delete-btn"
    onclick="deleteProduct('${product.id}')">
    Delete
  </button>

</div>
`;
    });
}

window.deleteProduct = async function(id) {

    if (!confirm("Delete Product?")) return;

    await deleteDoc(doc(db, "products", id));

    alert("Deleted");

    loadProducts();
};

window.editProduct = async function(
    id,
    oldName,
    oldPrice,
    oldStock,
    oldCat,
    oldImg
) {

    const name = prompt("Product Name", oldName);
    if (name === null) return;

    const price = Number(prompt("Price", oldPrice));
    if (isNaN(price)) return;

    const stock = Number(prompt("Stock", oldStock));
    if (isNaN(stock)) return;

    const cat = prompt("Category", oldCat);
    if (cat === null) return;

    const img = prompt("Image URL", oldImg);
    if (img === null) return;

    await updateDoc(doc(db, "products", id), {
        name,
        price,
        stock,
        cat,
        img
    });

    alert("Product Updated!");

    loadProducts();
};

loadProducts();

window.addSizeField = function() {

    const box = document.getElementById("sizesContainer");

    const div = document.createElement("div");

    div.className = "size-row";

    div.innerHTML = `
        <input type="text"
               class="size-label"
               placeholder="Size Label (23gm)">

        <input type="number"
               class="size-price"
               placeholder="Price">

        <input type="number"
               class="size-stock"
               placeholder="Stock">

        <input type="text"
               class="size-img"
               placeholder="Image URL">

        <button type="button"
                onclick="this.parentElement.remove()">
            ❌
        </button>
    `;

    box.appendChild(div);
};