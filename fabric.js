const paintings = [
    {
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=60",
        title: "Silk Symphony",
        description: "A gorgeous luxury hand-painted artwork on premium pure raw silk fabric featuring smooth fluid textures and brilliant organic shades. This masterpiece displays fine floral layouts and intricate outliner borders that create an undeniable royal touch in executive master rooms. The soft texture catches natural surrounding ambient lights beautifully.",
        price: "Rs. 8,500",
        artist: "Ayesha Khan",
        ArtistQuote: "“Silk holds the rhythm of colors like no other surface can ever achieve.” — Ayesha Khan",
        size: "18 x 24 Inches",
        Materials: "Premium Fabric Acrylics, Pure Raw Silk Base, Gold Outliner Base, Silk Fixative Spray",
        category: "Traditional Fabric Art",
        year: "2026"
    },
    {
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&auto=format&fit=crop&q=60",
        title: "Linen Landscape Craft",
        description: "An exceptional modern abstract landscape rendered seamlessly on durable hand-woven organic linen fabric material. The high absorption properties of the cloth give the acrylic washes a distinctive matte finish and a wonderful rustic visual depth. An ideal premium selection for minimal style apartments or cozy entryways.",
        price: "Rs. 6,800",
        artist: "Ayesha Khan",
        ArtistQuote: "“Woven threads provide a structured soul and endless warmth to abstract visions.” — Ayesha Khan",
        size: "20 x 20 Inches (Square)",
        Materials: "High-Opacity Textile Pigments, Organic Unbleached Linen, Soft Shading Brushes",
        category: "Abstract Textile Landscape",
        year: "2026"
    },
    {
        image: "https://i.pinimg.com/736x/ac/80/5d/ac805dfd4b3a894bc4f332025d148e28.jpg",
        title: "Vibrant Cotton Bloom",
        description: "A beautifully energetic handmade painting featuring deep contrasting values and floral patterns hand-drawn on premium heavy-weight cotton cloth. This piece infuses immediate brightness and continuous spiritual calmness into family lounges, making it a perfect conversation starter. The specialized fabric layers prevent fading forever.",
        price: "Rs. 5,500",
        artist: "Ayesha Khan",
        ArtistQuote: "“Every brushstroke on cloth is a beautiful dance of tradition meeting modern design.” — Ayesha Khan",
        size: "16 x 22 Inches",
        Materials: "Water-Resistant Fabric Paints, 100% Khadi Cotton Base, Fabric Sealant Finish",
        category: "Floral Textile / Contemporary Art",
        year: "2026"
    },
    {
        image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=600&auto=format&fit=crop&q=60",
        title: "Ethereal Tapestry",
        description: "A highly thoughtful contemporary abstract design crafted on textured khadi surface using warm organic color dyes and metallic accents. This luxury artwork represents high-class aesthetic geometry and balance, providing an inspirational statement look engineered for boutique galleries or luxury hotels. Completely protected from moisture.",
        price: "Rs. 9,200",
        artist: "Ayesha Khan",
        ArtistQuote: "“Art on fabric isn't just a picture to watch; it's a sensory experience to feel.” — Ayesha Khan",
        size: "24 x 36 Inches (Large Canvas Mount)",
        Materials: "Concentrated Fabric Dyes, Premium Textured Khadi, Metallic Copper Paste",
        category: "Modern Minimalist Tapestry",
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
                <p><b>Artist:</b> ${painting.artist}</p>
                <p><b>Size:</b> ${painting.size}</p>
                <p><b>Materials/Medium:</b> ${painting.Materials}</p>
                <p><b>Category:</b> ${painting.category}</p>
                <p><b>Year:</b> ${painting.year}</p>
            </div>
            <p class="fst-italic text-muted bg-light p-2 rounded mt-2">${painting.ArtistQuote}</p>
            
            <div class="mt-4">
                <button class="btn btn-dark px-4 py-2">Add To Cart</button>
                <button class="btn btn-outline-dark px-4 py-2 ms-2" onclick="downloadWord()">
                    Download Word Document
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
Title: ${painting.title}
Description: ${painting.description}
Price: ${painting.price}
Artist: ${painting.artist}
Artist Quote: ${painting.ArtistQuote}
Materials/Medium: ${painting.Materials}
Size: ${painting.size}
Category: ${painting.category}
Year: ${painting.year}
Image Link: ${painting.image}
    `;

    let blob = new Blob([content], { type: "application/msword" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = painting.title.replace(/\s+/g, '_') + "_Details.doc";
    link.click();
}