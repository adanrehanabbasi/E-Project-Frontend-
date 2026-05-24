const paintings = [
    {
        image: "landscape Paintings/landscape1.jpg",
        title: "Flames of Freedom",
        description: "A bold and expressive abstract horse painting that captures the raw energy, grace, and untamed spirit of a powerful stallion. Dynamic brush strokes and layered textures blend fiery reds, golden ochres, deep blacks, and soft whites to create movement and emotion across the canvas. The artwork symbolizes strength, passion, and freedom while giving a modern contemporary aesthetic perfect for luxury interiors, galleries, and statement walls. This painting creates a dramatic visual impact and brings a sense of motion and elegance into any space.",
        price: "PKR 48,000",
        artist: "Eelen Marrow",
        ArtistQuote: "“This horse is not painted to be controlled — it is painted to be felt.” — Elena Marrow",
        size: "48 x 72 inches (Large Vertical Canvas)",
        Materials: "Acrylic Paint Oil, Texture Medium Palette, Knife Detailing, Premium Cotton Canvas, Metallic Gold Pigment Highlights, Protective Gloss Varnish",
        category: "Abstract Expressionism / Contemporary Modern Art",
        year: "2024"
    },
    {
        image: "landscape Paintings/landscape2.jpg",
        title: "Color Splash Art",
        description: "A mesmerizing harmony of vibrant organic tones and sudden color bursts that evoke the feeling of a mountain meadow in full spring bloom. Every splatter tells a unique story of freedom and natural elegance.",
        price: "Rs. 6,000",
        artist: "Ayesha Khan",
        ArtistQuote: "“Colors are the native language of wild nature.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "High-grade Fluid Acrylics, Heavy Gel Texture Medium, Cotton Canvas Base",
        category: "Abstract Nature Art",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape3.jpg",
        title: "Modern Texture Art",
        description: "Featuring deep, tactile grooves sculpted with palette knives to mimic the raw weathered bark of ancient woodland trees. The earthy neutral undertones create a stunning 3D shadow play on minimalist walls.",
        price: "Rs. 4,800",
        artist: "Ayesha Khan",
        ArtistQuote: "“Texture brings the silent surface of a canvas to life.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Modeling Paste, Premium Gesso Acrylics, Matte Varnish Finish",
        category: "Textured Contemporary Art",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape4.jpg",
        title: "Luxury Canvas Art",
        description: "A premium majestic landscape capturing the golden hours of dawn settling over a quiet mist-covered river valley. Accented with subtle metallic highlights that softly shimmer under warm interior lighting.",
        price: "Rs. 7,200",
        artist: "Ayesha Khan",
        ArtistQuote: "“Luxury lies in capturing the absolute peace of a quiet horizon.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Fine Art Oil Acrylics, 24k Gold Leaf Pigments, Gallery Wrapped Canvas",
        category: "Modern Luxury Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape5.jpg",
        title: "Classic Wall Painting",
        description: "A timeless artistic representation of a dense sunlit forest. Rays of shimmering sunlight cut beautifully through towering green canopies, bringing an instant sensation of fresh air and openness into your living room.",
        price: "Rs. 5,500",
        artist: "Ayesha Khan",
        ArtistQuote: "“A forest painting is a window that lets your spirit breathe.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Professional Acrylic Pigments, Stretched Linen Canvas, UV Gloss Coating",
        category: "Classical Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape6.jpg",
        title: "Premium Acrylic Sunset",
        description: "An elegant sunset masterpiece showcasing rich gradients of crimson, burning orange, and lavender skies reflecting flawlessly onto a calm oceanic coastline water body.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Every sunset is an artist's signature across the sky.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Heavy-body Acrylics, Blending Mediums, Satin Varnish Layer",
        category: "Seascape Landscape Art",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape7.jpg",
        title: "Ethereal Mountain Peaks",
        description: "A stunning fine art piece illustrating sharp mountain silhouettes wrapped in soft mysterious winter clouds, demonstrating the contrast between heavy rock and light mist.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Mountains call for us to look beyond our daily worries.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Studio Acrylic Paints, Fan Brush Texture Blend, Triple-primed Canvas",
        category: "Alpine Landscape Art",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape8.jpg",
        title: "The Autumn Pathway",
        description: "A highly immersive romantic painting of a long walking trail covered under a vibrant orange blanket of falling autumn leaves, inviting viewers to take a mental stroll.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Autumn shows us how beautiful it is to let things go.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Palette Knife Acrylic Detailing, Glaze Coat, Heavy Canvas Boards",
        category: "Impressionist Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape9.jpg",
        title: "Whispering Wilderness",
        description: "Capturing a secluded pristine lake surrounded by lush deep green pine trees. A serene and calming artwork aimed to reduce stress and offer refreshing organic colors.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“In the wilderness, we find our inner rhythm again.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Deep Tone Artist Oils, Impasto Gel Blend, Gloss Protective Coat",
        category: "Wilderness Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape10.jpg",
        title: "Emerald Forest Canopy",
        description: "Looking straight up from the forest floor into a majestic ceiling of ancient emerald trees. A breathtaking vertical perspective painting full of life and depth.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Look up and lose yourself in nature's architecture.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Professional Grade Fluid Acrylics, Fine Point Brushes, Satin Canvas",
        category: "Forest Wilderness Art",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape11.jpg",
        title: "Golden Desert Dunes",
        description: "Rich layered textures depicting windblown ridges of a vast desert at sunset. The glowing warm palette creates an exotic atmospheric mood for modern living areas.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "...The desert has a quiet majesty that speaks to the soul... — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Natural Sand Particles Mixed with Fine Acrylic Gel, Protective Spray",
        category: "Desert Abstract Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape12.jpg",
        title: "Ocean Breeze Horizon",
        description: "A calming minimalist painting displaying gentle shoreline turquoise waves washing over clean sand, transitioning into a boundless foggy pale blue sky.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“The sea heals because it carries no boundaries.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "High Viscosity Acrylics, Soft Sponge Blending Layers, Linen Canvas",
        category: "Minimalist Seascape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape13.jpg",
        title: "Canyon Echoes",
        description: "Inspired by majestic red rock canyons, this artwork features multi-layered linear strokes of deep terracottas, warm ochres, and dust rose clay tones.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Time etches the most beautiful patterns on earth.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Earthy Palette Knife Acrylic Mediums, Stretched Strong Cotton Backing",
        category: "Geological Abstract Art",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape14.jpg",
        title: "Reflections of Spring",
        description: "Vibrant flower beds bordering a quiet clear pond. The dynamic paint application mimics beautiful impressionist ripples reflecting soft floral clusters.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Spring reminds us that life will always bloom back.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Fine Detail Acrylic Paint Brushes, High Gloss Moisture Proof Coating",
        category: "Impressionist Botanical Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape15.jpg",
        title: "Tropical Paradise Tide",
        description: "A joyful summer landscape featuring glowing palm silhouettes over crystal clear tropical shores. Instantly lightens up any office or bedroom setting.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Keep a piece of endless summer in your heart always.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Premium Non-fading Pigments, Heavy Stretched Double-Weave Canvas",
        category: "Tropical Landscape Art",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape16.jpg",
        title: "Misty Highlands",
        description: "Evoking the ancient Scottish highlands, moody dark green rolling hills pass underneath a magnificent grey storm cloud formation with hints of sunlight.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“There is a raw, pure magic inside a stormy sky.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Oil Base Mixed Media Acrylic Coating, Matte Protective Layer",
        category: "Moody Nordic Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape17.jpg",
        title: "Lavender Fields Forever",
        description: "A wide scenic landscape layout displaying continuous symmetrical rows of rich purple French lavender fields stretching far out to a soft pastel horizon line.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Scent and color have the power to transport your mind.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Thick Impasto Acrylic Stroke Paste, Premium Quality Cotton Base",
        category: "Floral Vista Painting",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape18.jpg",
        title: "Frozen Solitude",
        description: "A chillingly gorgeous minimalistic winter landscape capturing quiet snow-covered pine woods standing beside a completely frozen arctic lake bed.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Silence is the most profound sound of winter.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Titanium White Gesso Art Blends, Shimmering Ice Flake Crystals, Varnish",
        category: "Winter Arctic Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape19.jpg",
        title: "Premium Acrylic Art 19",
        description: "A massive detailed focus on jagged rocky cliffs under bright blue summer skies. Accents of green moss patches contrast sharply against sharp grey rock ridges.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Stand firm like a ridge through all the changing seasons.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Heavy Texture Knife Plaster Paste, Deep Fine Tone Matte Artist Inks",
        category: "Realism Mountain Landscape",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape20.jpg",
        title: "Premium Acrylic Art 20",
        description: "An incredibly lively meadow painting filled with tiny hand-painted yellow wildflowers dancing under full sunny blue skies, bringing absolute joy to the viewer.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Happiness is a simple field of bright golden flowers.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Fine Splatter Acrylic Styling, Semi-Gloss Protection Seal Coating",
        category: "Bright Botanical Vista",
        year: "2026"
    },
    {
        image: "landscape Paintings/landscape21.jpg",
        title: "Premium Acrylic Art 21",
        description: "A magical northern lights cosmic landscape featuring deep green and cosmic neon violet glowing waves streaking across a starry night forest skyline.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“The night sky holds wonders that exceed all human imagination.” — Ayesha Khan",
        size: "24 x 36 Inches",
        Materials: "Fluorescent High-luminance Acrylic Inks, Star Point Dotted Gesso Canvas",
        category: "Celestial Nature Fantasy Art",
        year: "2026"
    }
];

// ========================
// CHECK PAGE TYPE
// ========================
const isHome = document.getElementById("cardContainer");

// ========================
// HOME PAGE (CARDS)
// ========================
if (isHome) {
    isHome.innerHTML = ""; // Purana data clear karne ke liye
    paintings.forEach((p, i) => {
        isHome.innerHTML += `
        <div class="col-md-4">
            <div class="card shadow-sm h-100">
                <img src="${p.image}" class="card-img-top" style="height: 300px; object-fit: cover;">
                <div class="card-body">
                    <h5>${p.title}</h5>
                    <p style="height: 60px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${p.description}</p>
                    <b>${p.price}</b>
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
    if (!painting) return;

    const detailBox = document.getElementById("detailBox");

    detailBox.innerHTML = `
    <div class="row g-4 align-items-center">
        <div class="col-md-6">
            <img src="${painting.image}" class="img-fluid rounded shadow" style="max-height: 500px; width: 100%; object-fit: cover;">
        </div>
        <div class="col-md-6">
            <h1>${painting.title}</h1>
            <p class="mt-3">${painting.description}</p>
            <h3 class="mt-3 text-warning">${painting.price}</h3>
            <hr>
            <p><b>Artist:</b> ${painting.artist}</p>
            <p><b>Artist Quote:</b> ${painting.ArtistQuote}</p>
            <p><b>Materials:</b> ${painting.Materials}</p>
            <p><b>Size:</b> ${painting.size}</p>
            <p><b>Category:</b> ${painting.category}</p>
            <p><b>Year:</b> ${painting.year}</p>
            <button class="btn btn-dark mt-3">Add To Cart</button>
            <button class="btn btn-outline-dark mt-3 ms-2" onclick="downloadWord()">
                Download Word
            </button>
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
    if (!painting) return alert("Data not found!");

    let content = `
Title: ${painting.title}
Description: ${painting.description}
Price: ${painting.price}
Artist: ${painting.artist}
Artist Quote: ${painting.ArtistQuote}
Materials: ${painting.Materials}
Size: ${painting.size}
Category: ${painting.category}
Year: ${painting.year}
    `;

    let blob = new Blob([content], { type: "application/msword" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = painting.title.replace(/\s+/g, '_') + ".doc";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}