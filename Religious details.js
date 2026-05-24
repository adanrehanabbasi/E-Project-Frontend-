const paintings = [
    {
        image: "Religious Paintings/1.jpeg",
        title: "Flames of Freedom",
        description: "This artwork features a modern and elegant form of Arabic calligraphy, presented on a soft  background that adds warmth and subtle sophistication. The dark calligraphic strokes create a strong contrast, making the design visually striking while maintaining a minimal and balanced composition.The brushwork appears expressive yet controlled, with smooth, flowing lines combined with slightly textured strokes that give the piece a handcrafted and authentic feel. Fine detailing and variation in line thickness enhance the beauty of the script, showing precision and artistic skill.The overall composition conveys a sense of calmness, reflection, and gentle spirituality. The simplicity of the background, combined with the bold calligraphy, creates a harmonious balance between modern aesthetics and traditional artistic expression.This painting reflects clean craftsmanship, thoughtful design, and emotional depth, making it both visually appealing and meaningful as a decorative piece.",
        price: "PKR 10,000",
        artist: "Sabeen Sarfaraz",
        ArtistQuote: "“This Art is not painted to be decoration — it is painted for faith.” —Sabeen Sarfaraz",
        size: "48 x 72 inches (Large Vertical Canvas)",
        Materials: "Acrylic Paint Oil, Texture Medium Palette, Knife Detailing, Premium Cotton Canvas, Metallic Gold Pigment Highlights, Protective Gloss Varnish",
        category: "Abstract Expressionism / Contemporary Modern Art",
        year: "2024"
    },
    {
        image: "Religious Paintings/2.jpg",
        title: "Color Splash Art",
        description: "An extraordinary blend of divine abstract strokes and vibrant color layers that bring immediate spiritual energy into any room. This handmade painting represents the joy and brightness of faith through harmonized acrylic splashes. Perfect for living areas, it creates an elegant focal point while matching both traditional and modern decor styles beautifully.",
        price: "Rs. 6,000",
        artist: "Ayesha Khan",
        ArtistQuote: "“Colors on a canvas are the silent reflection of a peaceful spirit.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "High-Pigment Acrylic Paints, Fine Cotton Canvas, Blending Medium, Satin Varnish",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/3.jpg",
        title: "Modern Texture Art",
        description: "Crafted with premium heavy-body textures and elegant metallic highlights, this artwork depicts structural depth and spiritual stability. The detailed palette knife work forms beautiful visual patterns that symbolize the deep layers of belief and inner peace. It adds a premium sophisticated touch to executive offices and modern standard homes.",
        price: "Rs. 4,800",
        artist: "Ayesha Khan",
        ArtistQuote: "“Textures add a physical depth to thoughts that words cannot define.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Modeling Paste, Heavy Body Acrylics, Palette Knife, Triple-Primed Canvas",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/4.jpg",
        title: "Luxury Canvas Art",
        description: "A spectacular spiritual masterpiece featuring fine gold leaf details that interact beautifully with surrounding environment lighting. The clean composition and premium background shading emphasize peace, luxury, and sacred devotion. It serves as an inspirational statement piece designed specifically for luxury drawing rooms and gallery displays.",
        price: "Rs. 7,200",
        artist: "Ayesha Khan",
        ArtistQuote: "“True luxury in art lies in the deep simplicity of its stroke.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Premium Acrylic Medium, Gold Leaf Accents, Stretched Linen Canvas, High Gloss Coat",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/5.jpg",
        title: "Classic Wall Painting",
        description: "A beautifully balanced handmade religious painting featuring rich warm undertones and classic styling. The soft fluid transitions across the canvas create a serene atmosphere, making it a perfect addition for family gathering spaces. Its premium matte finish protects the intricate details while keeping the visual gaze comfortable and peaceful.",
        price: "Rs. 5,500",
        artist: "Ayesha Khan",
        ArtistQuote: "“Every wall demands a story that speaks of grace, peace, and history.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Matte Finish Acrylic Paints, Rigid Canvas Board, Fine Outliners, Anti-UV Spray",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/6.jpg",
        title: "Premium Acrylic Art",
        description: "This premium artwork blends devotion and contemporary style through deep contrasting values and smooth blended strokes. The rich pigmentation ensures long-lasting colors that immediately capture attention and elevate the spiritual vibes of your space. An ideal piece for mindfulness zones, prayer rooms, or modern entrance corridors.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“When devotion blends with colors, art becomes a form of meditation.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Artist-Grade Acrylic Pigments, Museum Quality Canvas, Soft Blending Brushes",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/7.jpg",
        title: "Sacred Light Essence",
        description: "An elegant showcase of light and shadow interacting beautifully to present a sense of divine aura and presence. The smooth fluid transitions and fine detailing provide a relaxing visual rhythm that helps reduce stress and promotes everyday focus. Hand-painted with care to bring continuous grace, style, and tranquility to your home walls.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Light and shadows work together to bring out the sacred beauty of a canvas.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Fluid Acrylic Paints, Double Stretched Canvas, Clear Protective Topcoat",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/8.jpg",
        title: "Divine Sanctuary",
        description: "A masterfully composed piece that transforms any regular room wall into a quiet sanctuary of prayer and reflection. The specific layout features balanced organic shapes and soft spiritual backgrounds that respect traditional art principles while embracing modern simplicity. Perfect for gifting loved ones on premium religious occasions.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“A single spiritual stroke can turn an empty canvas into a sanctuary.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "High-Opacity Acrylic Inks, Fine Grain Canvas, Archival Isolation Varnish",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/9.jpg",
        title: "Soulful Reflections",
        description: "An evocative premium calligraphy background painting that speaks directly to the soul seeking peace and daily spiritual connection. Every color layer is applied patiently to form an artistic depth that reveals new subtle details under different lighting conditions. A premium choice for collectors who appreciate meaningful contemporary art.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Art is the language of the soul when the heart seeks peace.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Professional Acrylic Sets, Synthetic Detailing Brushes, Gloss Varnish",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/10.jpg",
        title: "Divine Harmony",
        description: "Featuring a well-calculated geometric harmony and specialized color balancing, this painting spreads positive vibrations all around. The fine-grain cotton canvas holds the thick heavy-body layers perfectly, offering a distinct premium texture you can feel upon close viewing. Beautifully compliments neutral or modern wooden interior furnishings.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“In every color patch, there is an expression of divine harmony.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Heavy Body Acrylic Paints, Cotton Duck Canvas, Matte Varnishing Base",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/11.jpg",
        title: "Eternal Rhythm",
        description: "A gorgeous representation of traditional calligraphy structures translated beautifully into modern fluid abstract formats. The bold black strokes create a strong sense of movement and absolute certainty, anchoring the overall design with power and stability. Perfect for adding historical values wrapped in contemporary luxury art layers.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“The beauty of calligraphy and art lies in its eternal rhythm.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Liquid Carbon Acrylics, Fine Calligraphy Brushes, Primed Canvas Surface",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/12.jpg",
        title: "Serene Vision",
        description: "This unique artwork features calming soft pastel tones blended elegantly with delicate textures to evoke immediate mental serenity. The smooth artistic execution reflects deep focus and absolute clarity of mind, transforming your living room environment completely. Sealed perfectly with a protective silk coating for a lifetime glow.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“A peaceful mind guides the hand to create timeless artwork.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Soft Blend Formulation Gel, Premium Stretched Frame, Protective Silk Coat",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/13.jpg",
        title: "Silent Prayer",
        description: "An outstanding creative blend of fine art mediums that acts as a quiet, visual prayer within your home or office space. The customized layout brings together soft aesthetic colors and subtle golden detailing that catches candlelight elegantly at night. Perfect for building an atmosphere of gratitude, peace, and absolute luxury.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Art acts as a silent prayer that beautifully fills the environment.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Pastel Pigment Mix, Custom Texturing Pastes, Linen Weave Canvas Frame",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/14.jpg",
        title: "Balance of Faith",
        description: "A powerful graphic composition showing deep contrasts and fine line work that perfectly balances modern abstraction with high spiritual values. The sharp details are rendered beautifully with professional-grade fine liner brushes on highly durable stretched canvas. A highly recommended piece for modern studio flats and reception desks.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Bold contrasts display the beautiful balance of life and faith.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "High-Density Acrylic Colors, Sharp Detailing Brushes, Sealed Gesso Layer",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/15.jpg",
        title: "Textured Stories",
        description: "An impressive impasto artwork featuring rich heavy paint ridges that narrate silent spiritual stories beyond standard written scripts. The deep physical texture provides an appealing look that invites visitors to closely observe the artistic process and color choices. Finished with a clean satin protective seal to prevent dust settling.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Textures tell stories that cannot be completely written with standard text.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Impasto Texture Base, Deep Rich Acrylic Pigments, Satin Protective Spray",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/16.jpg",
        title: "Ethereal Metallic Glow",
        description: "Designed with special metallic pigments, this unique painting interacts beautifully with daylight, creating a soft ethereal golden shimmer. The abstract layout flows effortlessly across the premium canvas, symbolizing continuous spiritual abundance and guidance. An exceptional modern accent for dining room spaces or boutique displays.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Metallic hints capture environmental light and give an ethereal glow.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Metallic Highlights, Fluid Base Acrylic Colors, Premium Stretched Canvas",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/17.jpg",
        title: "Sacred Order",
        description: "A highly thoughtful composition that gracefully organizes complex abstract elements into a peaceful, unified visual order. The slow-drying gel techniques allow for incredibly smooth gradients that symbolize universal balance, stability, and calm. Perfectly suited for spaces that require absolute focus, relaxation, and mental clarity.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Composition brings messy thoughts into complete, beautiful visual orders.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Professional Acrylic Mediums, Retarder Gels, Double-Primed Stretched Board",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/18.jpg",
        title: "Traditional Roots",
        description: "This meaningful painting extends historical calligraphy roots into modern artistic formats using deep earthy tones and rustic gesso layers. The strong textural layout honors heritage while seamlessly blending into contemporary minimalist interiors with ease. Brings a sophisticated historic charm and elegant pride into your home styling.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Art is an extension of traditional roots into modern abstract fields.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Earthy Acrylic Shades, Gesso Texture Foundation, Coarse Grain Base Sheet",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/19.jpg",
        title: "Binding Elements",
        description: "A unique design where fine finishing lines beautifully connect distinct color patches together, symbolizing complete emotional and spiritual wholeness. The high-quality fluid medium keeps colors exceptionally bright, preventing fading even under direct ambient room lights. Excellent statement choice for luxury corridors.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“The final strokes are the ones that bind all emotional elements together.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Liquid Form Acrylic Paints, Fine Liner Synthetic Points, Satin Polish Base",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/20.jpg",
        title: "Natural Flow",
        description: "Created using advanced pouring mediums, this artwork shows organic fluid channels that represent life's natural spiritual journey. The beautiful intermixing cells of paint form fascinating micro-structures that hold the viewer's attention instantly. A highly energetic modern artwork that brings life, movement, and peace together.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“Let the colors flow naturally; art finds its own perfect destination.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Interactive Pouring Mediums, High Pigment Colors, Gloss Isolation Layer",
        category: "Religious Abstract Art",
        year: "2026"
    },
    {
        image: "Religious Paintings/21.jpeg",
        title: "Spiritual Journey",
        description: "The crown jewel of the religious collection, summarizing faith, rich texture, and premium design into one absolute masterpiece canvas. Thick impasto mixes combine beautifully with gold accents and high-gloss varnish, creating a magnificent multidimensional surface. Perfect for luxury home entrances or premium gallery display rooms.",
        price: "Rs. 6,300",
        artist: "Ayesha Khan",
        ArtistQuote: "“This collection is a heartfelt journey through peace, belief, and aesthetics.” — Ayesha Khan",
        size: "24 x 36 Inches",
        medium: "Acrylic on Canvas",
        Materials: "Heavy Impasto Mixing Pastes, Metallic Accents, Diamond Gloss Varnish Seal",
        category: "Religious Abstract Art",
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
        <div class="col-md-4">
            <div class="card shadow-sm h-100">
                <img src="${p.image}" class="card-img-top" alt="${p.title}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5>${p.title}</h5>
                        <p>${p.description}</p>
                        <b>${p.price}</b>
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
    <div class="row g-4 align-items-center">
        <div class="col-md-6">
            <img src="${painting.image}" class="img-fluid rounded shadow" alt="${painting.title}">
        </div>
        <div class="col-md-6">
            <h1>${painting.title}</h1>
            <p class="mt-3">${painting.description}</p>
            <h3 class="mt-3 text-warning">${painting.price}</h3>
            <hr>
            <p><b>Artist:</b> ${painting.artist}</p>
            <p><b>Artist Quote:</b> ${painting.ArtistQuote || 'N/A'}</p>
            <p><b>Materials:</b> ${painting.Materials || 'N/A'}</p>
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
    if (!painting) return;

    let content = `
Title: ${painting.title}
Description: ${painting.description}
Price: ${painting.price}
Artist: ${painting.artist}
Artist Quote: ${painting.ArtistQuote || 'N/A'}
Materials: ${painting.Materials || 'N/A'}
Size: ${painting.size}
Category: ${painting.category}
Year: ${painting.year}
    `;

    let blob = new Blob([content], { type: "application/msword" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = painting.title + ".doc";
    link.click();
}
