const paintings = [
    {
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        title: "Glass Illusion Art",
        description: "A stunning vibrant artwork painted on a clear transparent OHP sheet, delivering a glass-painting style look with rich ink and acrylic blend techniques. The transparency creates a beautiful play of shadows when light passes through.",
        price: "PKR 5,500",
        artist: "Ayesha Khan",
        ArtistQuote: "“Transparency adds another dimension to colors.” — Ayesha Khan",
        size: "A4 Size Sheet",
        Materials: "Premium OHP Sheet, Acrylic Glass Inks, Outliner Detailing, Gloss Protective Spray",
        category: "Glass Art / Transparent Contemporary",
        year: "2025"
    },
    {
        image: "https://i.pinimg.com/1200x/1f/b5/48/1fb5481a2b8f36eb02d5340bbc2a7bcf.jpg",
        title: "Peacock Feathers",
        description: "Beautiful floral patterns drawn on high-grade transparent sheet with glossy glass paint, giving it a shiny crystal reflection look under direct light.",
        price: "Rs. 3,200",
        artist: "Ayesha Khan",
        ArtistQuote: "“Nature's vibrant colors look magical when light passes through clear layers.” — Ayesha Khan",
        size: "A4 Size",
        Materials: "Glass Paint on OHP Sheet, Translucent Outliners",
        category: "Floral Art / Transparent Miniature",
        year: "2026"
    },
    {
        image: "https://i.pinimg.com/736x/e3/65/2a/e3652a58c7161bf1a58b3baf9cfaa236.jpg",
        title: "Abstract Luminescence",
        description: "Modern handmade abstract shapes and textures flowing on a see-through transparent film. Perfect for minimalist and futuristic interiors.",
        price: "Rs. 4,500",
        artist: "Ayesha Khan",
        ArtistQuote: "“Abstract art on clear sheets interacts directly with the ambient space.” — Ayesha Khan",
        size: "A4 Size",
        Materials: "Acrylic & Mixed Media on OHP Sheet, Transparent Glazes",
        category: "Abstract Art / Modern Film Overlay",
        year: "2026"
    },
    {
        image: "https://i.pinimg.com/1200x/32/eb/23/32eb235dfdb31daff0433d97e4f703ab.jpg",
        title: "Stained Geometric Sheet",
        description: "Elegant symmetric geometric design created with hand-drawn professional black outliners and colorful translucent faux-stained glass layers.",
        price: "Rs. 3,800",
        artist: "Ayesha Khan",
        ArtistQuote: "“Geometry provides the structure, while transparency provides the spirit.” — Ayesha Khan",
        size: "A4 Size",
        Materials: "Glass Colors on OHP Sheet, Professional Lead Outliner",
        category: "Geometric Art / Faux Stained Glass",
        year: "2026"
    }
];

// ========================
// HOME PAGE RENDERING
// ========================
const cardContainer = document.getElementById("cardContainer");

if (cardContainer) {
    cardContainer.innerHTML = "";
    paintings.forEach((p, i) => {
        cardContainer.innerHTML += `
        <div class="col-md-6 col-lg-4">
            <div class="card shadow-sm h-100">
                <img src="${p.image}" class="card-img-top" style="height: 300px; object-fit: cover;" alt="${p.title}">
                <div class="card-body text-center d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="fw-bold">${p.title}</h5>
                        <p class="text-muted">${p.description}</p>
                        <b class="text-warning d-block my-2" style="font-size: 1.1rem;">${p.price}</b>
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
    localStorage.setItem("ohpPainting", JSON.stringify(paintings[index]));
    
    const home = document.getElementById("homePage");
    const detail = document.getElementById("detailPage");

    if (home && detail) {
        home.classList.remove("active", "active-page");
        detail.classList.add("active", "active-page");
    }
    
    showDetail();
}

// ========================
// SHOW DETAIL
// ========================
function showDetail() {
    const painting = JSON.parse(localStorage.getItem("ohpPainting"));
    if (!painting) return;

    const detailBox = document.getElementById("detailBox");
    if (!detailBox) return;

    const quote = painting.ArtistQuote || "N/A";
    const materials = painting.Materials || painting.medium || "Colors on OHP Sheet";

    detailBox.innerHTML = `
    <div class="row g-4 align-items-center">
        <div class="col-md-6">
            <img src="${painting.image}" class="img-fluid rounded shadow" style="max-height: 500px; object-fit: cover; width: 100%;" alt="${painting.title}">
        </div>
        <div class="col-md-6">
            <h1 class="fw-bold">${painting.title}</h1>
            <p class="mt-3 text-muted" style="font-size: 1.05rem; line-height: 1.6;">${painting.description}</p>
            <h3 class="mt-3 text-warning fw-bold">${painting.price}</h3>
            <hr>
            <p class="mb-2"><b>Artist:</b> ${painting.artist}</p>
            <p class="mb-2"><b>Artist Quote:</b> <span class="text-secondary"><i>${quote}</i></span></p>
            <p class="mb-2"><b>Materials/Medium:</b> ${materials}</p>
            <p class="mb-2"><b>Size:</b> ${painting.size}</p>
            <p class="mb-2"><b>Category:</b> ${painting.category}</p>
            <p class="mb-3"><b>Year:</b> ${painting.year}</p>
            <button class="btn btn-dark mt-2 px-4">Add To Cart</button>
            <button class="btn btn-outline-dark mt-2 ms-2 px-4" onclick="downloadWord()">
                <i class="bi bi-file-earmark-word-fill me-1"></i> Download Word
            </button>
        </div>
    </div>
    `;
}

// ========================
// BACK BUTTON
// ========================
function goBack() {
    const home = document.getElementById("homePage");
    const detail = document.getElementById("detailPage");

    if (home && detail) {
        detail.classList.remove("active", "active-page");
        home.classList.add("active", "active-page");
    }
}

// ========================
// WORD DOWNLOAD
// ========================
function downloadWord() {
    const painting = JSON.parse(localStorage.getItem("ohpPainting"));
    if (!painting) {
        alert("Painting data not found to download!");
        return;
    }

    const quote = painting.ArtistQuote || "N/A";
    const materials = painting.Materials || painting.medium || "Colors on OHP Sheet";

    let content = `
==================================================
              GALLERIA ART COLLECTION             
==================================================

Title:          ${painting.title}
Artist:         ${painting.artist}
Year:           ${painting.year}
Price:          ${painting.price}

--------------------------------------------------
SPECIFICATIONS:
--------------------------------------------------
Category:       ${painting.category}
Size:           ${painting.size}
Medium/Surface: ${materials}

--------------------------------------------------
ARTIST STATEMENT & QUOTE:
--------------------------------------------------
${quote}

--------------------------------------------------
DESCRIPTION:
--------------------------------------------------
${painting.description}

==================================================
         Thank you for supporting fine arts!      
==================================================
    `;

    let blob = new Blob([content], { type: "application/msword;charset=utf-8" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    
    let fileName = painting.title.trim().replace(/\s+/g, '_') + "_Details.doc";
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// DOM Lifecycle trigger system
document.addEventListener("DOMContentLoaded", () => {
    const detailViewActive = document.getElementById("detailPage")?.classList.contains("active-page");
    if (detailViewActive) {
        showDetail();
    }
});