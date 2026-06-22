import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    collection,
    doc,
    runTransaction,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJTHgfj0HlORoUH_T-Yu3sxsTXxXcVfIs",
    authDomain: "dongarwar-store-63517.firebaseapp.com",
    projectId: "dongarwar-store-63517",
    storageBucket: "dongarwar-store-63517.firebasestorage.app",
    messagingSenderId: "451688707854",
    appId: "1:451688707854:web:9eaa73f5f20b8553b2c95f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function loadProducts() {
    onSnapshot(
        collection(db, "products"),
        snapshot => {
            const firebaseProducts = [];

            snapshot.forEach(docSnap => {
                firebaseProducts.push({
                    ...docSnap.data(),
                    firebaseId: docSnap.id,
                    id: docSnap.id
                });
            });

            if (window.replaceProducts) {
                window.replaceProducts(firebaseProducts);
            }
            console.log("Firebase products loaded:", firebaseProducts.length);
        },
        error => {
            console.error("Firebase products load failed:", error);
            if (window.showStoreToast) {
                window.showStoreToast("Firebase products load failed.");
            }
        }
    );
}

window.reduceFirebaseStock = async function reduceFirebaseStock(cartItems) {
    const updates = cartItems
        .filter(item => item.firebaseId || item.id)
        .map(item => runTransaction(db, async transaction => {
            const productRef = doc(db, "products", item.firebaseId || item.id);
            const productSnap = await transaction.get(productRef);

            if (!productSnap.exists()) return;

            const product = productSnap.data();

            if (item.size && Array.isArray(product.sizes)) {
                const nextSizes = product.sizes.map(size => {
                    if (size.label !== item.size || typeof size.stock !== "number") return size;
                    return {
                        ...size,
                        stock: Math.max(0, size.stock - item.qty)
                    };
                });

                transaction.update(productRef, { sizes: nextSizes });
                return;
            }

            if (typeof product.stock === "number") {
                transaction.update(productRef, {
                    stock: Math.max(0, product.stock - item.qty)
                });
            }
        }));

    await Promise.all(updates);
};

loadProducts();
