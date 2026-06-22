import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
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
    stock: 4,
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
    name: "Men Scarf",
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
        { label: "860ml", price: 230, img: "images/comfort230.jpg", stock: 4 }
    ]
}, {
    id: 9,
    name: "Mens Lower Pant",
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
        { label: "19gm", price: 10, img: "images/ponds10.jpg" }
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
    ]
}, {
    id: 12,
    name: "Engage Perfume",
    price: 220,
    mrp: 255,
    cat: "Perfumes",
    img: "images/engage.jpg"
}, {
    id: 13,
    name: "Denver",
    price: 230,
    cat: "Perfumes",
    img: "images/denver.jpg",
    stock: 0
}, {
    id: 14,
    name: "Bellavita CEO Men",
    price: 149,
    mrp: 175,
    cat: "Perfumes",
    img: "images/ceomen.jpg",
    stock: 0
}, {
    id: 15,
    name: "Magnet Perfume",
    price: 240,
    mrp: 255,
    cat: "Perfumes",
    img: "images/magnet1.jpg",
    stock: 0
}, {
    id: 16,
    name: "Sandal Attar",
    price: 50,
    cat: "Perfumes",
    img: "images/sandal.jpg.jpeg",
    stock: 0
}, {
    id: 17,
    name: "Parachute Coconut Oil",
    price: 65,
    cat: "Hair oils",
    img: "images/parachute.jpg",
    sizes: [
        { label: "100ml", price: 65, img: "images/parachute.jpg" },
        { label: "20ml", price: 10, img: "images/parachute10.jpg" }
    ]
}, {
    id: 18,
    name: "Shanti Aavla",
    price: 20,
    cat: "Hair oils",
    img: "images/shanti.jpg"
}, {
    id: 19,
    name: "Vasmol Oil",
    price: 35,
    cat: "Hair oils",
    img: "images/vasmol.jpg"
}, {
    id: 20,
    name: "Kesh King (50ml)",
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
    name: "Khushbu Oil (100ml)",
    price: 60,
    cat: "Hair oils",
    img: "images/khushbu.jpg"
}, {
    id: 23,
    name: "Bajaj Almond Drops (50ml)",
    price: 41,
    cat: "Hair oils",
    img: "images/almond.jpg"
}, {
    id: 24,
    name: "Ponds Sandal Powder",
    price: 75,
    cat: "Cosmetics",
    img: "images/sandal2.jpg"
}, {
    id: 25,
    name: "Jannatul Attar",
    price: 50,
    mrp: 100,
    cat: "Perfumes",
    img: "images/jannatul.jpg.jpeg"
}, {
    id: 26,
    name: "Shirlie Attar",
    price: 50,
    mrp: 100,
    cat: "Perfumes",
    img: "images/roll.jpg.jpeg"
}, {
    id: 27,
    name: "Men Scarf",
    price: 70,
    mrp: 100,
    cat: "Clothes",
    img: "images/muf.jpg"
}, {
    id: 28,
    name: "Everyuth Scrub",
    price: 15,
    cat: "Cosmetics",
    img: "images/ginger.jpg"
}, {
    id: 29,
    name: "Everyuth Golden Mask",
    price: 15,
    cat: "Cosmetics",
    img: "images/golden.jpg"
}, {
    id: 30,
    name: "Everyuth Tan Removal",
    price: 20,
    cat: "Cosmetics",
    img: "images/cherry.jpg"
}, {
    id: 31,
    name: "Bandana Mask",
    price: 20,
    mrp: 40,
    cat: "Clothes",
    img: "images/bandana.jpg"
}, {
    id: 32,
    name: "Himalaya Lip Balm",
    price: 20,
    cat: "Cosmetics",
    img: "images/lip.jpg"
}, {
    id: 33,
    name: "Saffron Cream",
    price: 60,
    cat: "Cosmetics",
    img: "images/saffron.jpg",
    createdAt: 20260601,
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
    createdAt: 20260601
}, {
    id: 35,
    name: "Whitetone Powder",
    price: 65,
    cat: "Cosmetics",
    img: "images/whitepowder.jpg",
    createdAt: 20260601
}, {
    id: 36,
    name: "Himalaya Baby Lotion (100ml)",
    price: 115,
    cat: "Cosmetics",
    img: "images/himalayalotion.jpg",
    createdAt: 20260601
}, {
    id: 37,
    name: "Himalaya Baby Powder (50gm)",
    price: 60,
    cat: "Cosmetics",
    img: "images/himalayapowder.jpg",
    createdAt: 20260601
}, {
    id: 38,
    name: "Himalaya Baby Massage Oil (50ml)",
    price: 75,
    cat: "Cosmetics",
    img: "images/himalayaoil.jpg",
    createdAt: 20260601
}, {
    id: 39,
    name: "Necklace 1",
    price: 200,
    mrp: 270,
    cat: "Beauty",
    img: "images/necklace1.jpg.jpeg",
    createdAt: 20260601
}, {
    id: 40,
    name: "Necklace 2",
    price: 150,
    mrp: 230,
    cat: "Beauty",
    img: "images/necklace2.jpg.jpeg",
    createdAt: 20260601
}, {
    id: 41,
    name: "Necklace 3",
    price: 150,
    mrp: 230,
    cat: "Beauty",
    img: "images/necklace3.jpg.jpeg",
    createdAt: 20260601
}, {
    id: 42,
    name: "Necklace 4",
    price: 190,
    mrp: 260,
    cat: "Beauty",
    img: "images/necklace4.jpg.jpeg",
    createdAt: 20260601
}, {
    id: 43,
    name: "Necklace 5",
    price: 220,
    mrp: 300,
    cat: "Beauty",
    img: "images/necklace5.jpg.jpeg",
    createdAt: 20260601
}, {
    id: 44,
    name: "Necklace 6",
    price: 150,
    mrp: 230,
    cat: "Beauty",
    img: "images/necklace6.jpg.jpeg",
    createdAt: 20260601
}, {
    id: 45,
    name: "Mamaearth Rice Facewash",
    price: 125,
    cat: "Cosmetics",
    img: "images/mamaearth-rice.webp",
    createdAt: 20260601
}];

async function uploadAllProducts() {

    for (const product of products) {

        await addDoc(collection(db, "products"), {

            name: product.name,
            price: product.price || null,
            mrp: product.mrp || null,
            cat: product.cat || "",
            img: product.img || "",
            stock: product.stock !== undefined ? product.stock : 10,
            sizes: product.sizes || null,
            createdAt: product.createdAt || Date.now()

        });

        console.log("Uploaded:", product.name);
    }

    alert("All Products Uploaded ✅");
}

// uploadAllProducts();