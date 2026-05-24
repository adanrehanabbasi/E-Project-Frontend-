const paintings = [
    {
        image: "https://i.pinimg.com/736x/1a/5b/d8/1a5bd8efe97aff9bbb6fa28bf9e34166.jpg",
        title: "Crochet Mobile Cover",
        description: "A super cute, custom-made knitted crochet smartphone sleeve crafted with premium organic cotton threads. It features dual shock-absorption padding, protective button slots, and an optional cross-body yarn strap. You can completely customize the color palette and stitch patterns according to your device model.",
        price: "Rs. 1,200",
        artist: "Ayesha Khan",
        ArtistQuote: "“Every loop is knitted with patience to shield your tech with pure softness.” — Ayesha Khan",
        size: "Custom Sizes (Made to order per phone model)",
        Materials: "Premium Cotton Yarn, Anti-stretch Lining, Wooden Security Button",
        category: "Crochet Accessories / Custom Tech Care",
        year: "2026"
    },
    {
        image: "https://i.pinimg.com/1200x/84/33/2d/84332d15a64723e9671c443812b7c618.jpg",
        title: "Aesthetic Crochet Bag",
        description: "An incredibly stylish and spacious hand-woven crochet shoulder bag perfect for everyday college or beach outings. The tight grid stitch structure ensures durability and shape-retention even under high weight. Customize your personal style by choosing multi-colored pastel themes or elegant solid shades.",
        price: "Rs. 2,800",
        artist: "Ayesha Khan",
        ArtistQuote: "“Carrying art on your shoulder means carrying an extension of your own unique personality.” — Ayesha Khan",
        size: "14 x 16 Inches (Standard Medium)",
        Materials: "Heavy Duty Macrame Yarn, Reinforced Fabric Inner Lining, Magnetic Clasp Closure",
        category: "Crochet Bags / Sustainable Fashion",
        year: "2026"
    },
    {
        image: "https://i.pinimg.com/736x/94/97/89/949789c6618f29c599a0747591ef05a9.jpg",
        title: "Custom Painted Pouch",
        description: "A wonderful multi-purpose zipper canvas pouch featuring beautiful hand-painted watercolor or acrylic floral motifs. Ideal for carrying makeup brushes, art stationery, or delicate jewelry securely inside a structured setup. The waterproof seal coat guarantees total paint safety during regular washings.",
        price: "Rs. 950",
        artist: "Ayesha Khan",
        ArtistQuote: "“Organization becomes a delightful luxury when wrapped in hand-painted canvas layers.” — Ayesha Khan",
        size: "8 x 5 Inches (Compact Rectangular)",
        Materials: "Heavy 12oz Duck Canvas, Premium Fabric Pigments, Heavy-Duty YKK Metallic Zipper",
        category: "Hand-Painted Goods / Useful Merchandise",
        year: "2026"
    },
    {
        image: "https://i.pinimg.com/1200x/cd/69/c5/cd69c5239addca1a34414d369729a404.jpg",
        title: "Knitted Floral Keychain",
        description: "Adorable handmade miniature crochet key accessories featuring gorgeous details like sunflowers, daisies, or custom initials. These tiny thread elements add instant character and warmth to your keys, bags, or auto dashboards. The perfect budget-friendly aesthetic gift item for friends and close family members.",
        price: "Rs. 450",
        artist: "Ayesha Khan",
        ArtistQuote: "“Small details have the greatest powers to bring massive everyday smiles.” — Ayesha Khan",
        size: "3 x 3 Inches (Miniature Accent)",
        Materials: "Fine Embroidery Threads, Stainless Steel Keyring Base, Hollow Fiber Fill Tech",
        category: "Crochet Miniature / Key Accents",
        year: "2026"
    }
];

// ========================
// HOME PAGE (CARDS RENDER)
// ========================
const isHome = document.getElementById("cardContainer");

if (isHome) {
    isHome.innerHTML = ""; 
    paintings.forEach((p, i) => {
        isHome.innerHTML += `
        <div class="col-md-3 col-sm-6">
            <div class="card shadow-sm h-100">
                <img src="${p.image}" class="card-img-top" alt="${p.title}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title fw-bold text-dark mb-1">${p.title}</h5>
                        <p class="card-text">${p.description}</p>
                        <b class="text-dark d-block mt-2">${p.price}</b>
                    </div>
                    <button class="btn btn-dark w-100 mt-3" onclick="openDetail(${i})">
                        View Details
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

// ========================
// OPEN DETAIL PAGE
// ========================
function openDetail(index) {
    localStorage.setItem("painting", JSON.stringify(paintings[index]));
    document.getElementById("homePage").classList.remove("active");
    document.getElementById("detailPage").classList.add("active");
    showDetail();
}

// ========================
// SHOW DETAIL
// ========================
function showDetail() {
    const painting = JSON.parse(localStorage.getItem("painting"));
    const detailBox = document.getElementById("detailBox");

    if (!painting || !detailBox) return;

    detailBox.innerHTML = `
    <div class="row g-4 align-items-center bg-white p-4 rounded shadow-sm">
        <div class="col-md-5 text-center">
            <img src="${painting.image}" class="img-fluid rounded shadow-sm" alt="${painting.title}" style="max-height: 450px; object-fit: contain;">
        </div>
        <div class="col-md-7">
            <h1 class="display-5 fw-bold text-dark">${painting.title}</h1>
            <p class="mt-3 text-secondary" style="font-size: 16px; line-height: 1.6;">${painting.description}</p>
            <h3 class="mt-3 fw-bold" style="color: #b8860b;">${painting.price}</h3>
            <hr>
            <div class="row row-cols-2 g-2" style="font-size: 14px;">
                <p><b>Craftsman:</b> ${painting.artist}</p>
                <p><b>Size Options:</b> ${painting.size}</p>
                <p><b>Materials Base:</b> ${painting.Materials}</p>
                <p><b>Category:</b> ${painting.category}</p>
                <p><b>Launch Year:</b> ${painting.year}</p>
            </div>
            <p class="fst-italic text-muted bg-light p-2 rounded mt-2">${painting.ArtistQuote}</p>
            
            <div class="mt-4">
                <button class="btn btn-dark px-4 py-2">Book Custom Order</button>
                <button class="btn btn-outline-dark px-4 py-2 ms-2" onclick="downloadWord()">
                    Download Order Specs
                </button>
            </div>
        </div>
    </div>
    `;
}

// ========================
// BACK BUTTON
// ========================
function goBack() {
    document.getElementById("detailPage").classList.remove("active");
    document.getElementById("homePage").classList.add("active");
}

// ========================
// WORD DOWNLOAD
// ========================
function downloadWord() {
    const painting = JSON.parse(localStorage.getItem("painting"));
    if (!painting) return;

    let content = `
Product Title: ${painting.title}
Custom Description: ${painting.description}
Base Price: ${painting.price}
Artist/Maker: ${painting.artist}
Quote Note: ${painting.ArtistQuote}
Materials Base: ${painting.Materials}
Size Details: ${painting.size}
Category: ${painting.category}
Year: ${painting.year}
Reference Image Link: ${painting.image}
    `;

    let blob = new Blob([content], { type: "application/msword" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = painting.title.replace(/\s+/g, '_') + "_Specs.doc";
    link.click();
}