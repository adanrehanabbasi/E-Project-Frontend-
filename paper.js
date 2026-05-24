const paintings = [
    {
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=60",
        title: "Golden Botanical",
        description: "An elegant botanical study on textured archival paper featuring subtle gold leaf embellishments and deep floral shadows. This handmade drawing balances classic nature elements with modern luxury layouts, making it a masterpiece for warm corridors or cozy reading rooms. The fine lines showcase absolute creative precision.",
        price: "Rs. 4,500",
        artist: "Ayesha Khan",
        ArtistQuote: "“Nature speaks in silent lines, and paper holds its softest whispers.” — Ayesha Khan",
        size: "12 x 16 Inches",
        Materials: "Fine Liner Ink, 300gsm Archival Paper, Metallic Gold Leaf, Matte UV Protect Finish",
        category: "Botanical / Minimalist Art",
        year: "2026"
    },
    {
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=60",
        title: "Ocean Whisper",
        description: "A breathtaking abstract watercolor fluid painting capturing the deep ocean waves on premium cold-pressed paper. The natural bleeding of blue tones creates a soothing movement that provides relief and daily focus to anyone watching. Perfect for modern office spaces or contemporary standard bedroom environments.",
        price: "Rs. 5,200",
        artist: "Ayesha Khan",
        ArtistQuote: "“Water and paper share a relationship of absolute freedom and natural flow.” — Ayesha Khan",
        size: "14 x 18 Inches",
        Materials: "Artist-Grade Watercolors, 320gsm Cold-Pressed Paper, Isolation Layer Coat",
        category: "Abstract Landscape / Fluid Art",
        year: "2026"
    },
    {
        image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&auto=format&fit=crop&q=60",
        title: "Crimson Sunset Shimmer",
        description: "An impressive landscape sketch on heavy cotton-base paper that displays a rich combination of ink detailing and acrylic washes. The sunset clouds are rendered with high contrasts to bring dynamic visual energy and structural balance into living rooms. Beautifully matches dark wood or neutral interior setups.",
        price: "Rs. 4,800",
        artist: "Ayesha Khan",
        ArtistQuote: "“Sunsets are proof that endings can be beautiful when captured on the right medium.” — Ayesha Khan",
        size: "12 x 12 Inches (Square)",
        Materials: "Calligraphy Ink, Premium Cotton Paper, Acrylic Wash, Protective Silk Spray",
        category: "Contemporary Landscape",
        year: "2026"
    },
    {
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=60",
        title: "Ethereal Dreams",
        description: "A highly thoughtful minimalist portrait abstract on fine grain paper using neutral earth shades and charcoal strokes. This premium piece focuses on organic geometry and inner clarity, offering an upscale aesthetic look tailored for luxury flats and modern design galleries. Wrapped beautifully in archival protection layers.",
        price: "Rs. 6,000",
        artist: "Ayesha Khan",
        ArtistQuote: "“Charcoal captures the raw shadow of human emotions with total honesty.” — Ayesha Khan",
        size: "16 x 20 Inches",
        Materials: "Willow Charcoal, Pastel Pigments, Fine Grain Matte Paper, Fixing Spray Finish",
        category: "Abstract Figurative Art",
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
            <img src="${painting.image}" class="img-fluid rounded shadow-sm max-height-400" alt="${painting.title}" style="max-height: 450px; object-fit: contain;">
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