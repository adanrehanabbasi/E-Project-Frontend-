const paintings = [
  {
      image: "Abstract paintings/abstract1.jpg",
      title: "Flames of Freedom",
      description: "A bold and expressive abstract horse painting that captures the raw energy, grace, and untamed spirit of a powerful stallion. Dynamic brush strokes and layered textures blend fiery reds, golden ochres, deep blacks, and soft whites to create movement and emotion across the canvas. The artwork symbolizes strength, passion, and freedom while giving a modern contemporary aesthetic perfect for luxury interiors, galleries, and statement walls.",
      price: "PKR 48,000",
      artist: "Eelen Marrow",
      ArtistQuote: "“This horse is not painted to be controlled — it is painted to be felt.” — Elena Marrow",
      size: "48 x 72 inches (Large Vertical Canvas)",
      Materials: "Acrylic Paint Oil, Texture Medium Palette, Knife Detailing, Premium Cotton Canvas, Metallic Gold Pigment Highlights, Protective Gloss Varnish",
      category: "Abstract Expressionism / Contemporary Modern Art",
      year: "2024"
  },
  {
      image: "Abstract paintings/abstract2.jpg",
      title: "Color Splash Art",
      description: "An extraordinary explosion of premium high-pigment colors layered beautifully to reflect emotional depth and modern abstraction. This handmade masterpiece uses fluid dynamics to create an energetic yet sophisticated atmosphere on canvas, making it an ideal choice for vibrant living areas or creative studio spaces. The visual rhythm of color splashes immediately captures human focus and elevates room aesthetics.",
      price: "Rs. 6,000",
      artist: "Ayesha Khan",
      ArtistQuote: "“Colors on a canvas are the silent reflection of a peaceful spirit.” — Ayesha Khan",
      size: "24 x 36 Inches",
      medium: "Acrylic on Canvas",
      category: "Abstract Art",
      year: "2026"
  },
  {
      image: "Abstract paintings/abstract3.jpg",
      title: "Modern Texture Art",
      description: "Crafted with elegant structural paste and heavy-body fine acrylic highlights, this premium relief painting displays wonderful physical depth. The intentional palette knife ridges form distinct patterns that play with room shadows under different lighting conditions throughout the day. It brings an extremely rich, tactile luxury experience into standard executive offices and minimalist corridors.",
      price: "Rs. 4,800",
      artist: "Ayesha Khan",
      ArtistQuote: "“Textures add a physical depth to thoughts that words cannot define.” — Ayesha Khan",
      size: "24 x 36 Inches",
      medium: "Acrylic on Canvas",
      category: "Abstract Art",
      year: "2026"
  },
  {
      image: "Abstract paintings/abstract4.jpg",
      title: "Luxury Canvas Art",
      description: "A breathtaking contemporary artwork featuring delicate metallic gold-leaf highlights that shimmer perfectly against a sophisticated neutral background. This painting represents premium minimalist aesthetics, bringing balance, deep harmony, and an undeniable touch of upper-class luxury to hotel lounges or modern master bedrooms. Sealed with a protective high-gloss coat for lifelong durability.",
      price: "Rs. 7,200",
      artist: "Ayesha Khan",
      ArtistQuote: "“True luxury in art lies in the deep simplicity of its stroke.” — Ayesha Khan",
      size: "24 x 36 Inches",
      medium: "Acrylic on Canvas",
      category: "Abstract Art",
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
if(isHome){
  isHome.innerHTML = ""; 
  paintings.forEach((p, i) => {
      isHome.innerHTML += `
      <div class="col-md-6 col-lg-4">
          <div class="card shadow-sm h-100">
              <img src="${p.image}" class="card-img-top" alt="${p.title}">
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
function openDetail(index){
  // Object ko local storage me save kar rahe hain
  localStorage.setItem("painting", JSON.stringify(paintings[index]));

  // Aapke HTML layout ke standard active-page system ko maintain kiya hai
  const home = document.getElementById("homePage");
  const detail = document.getElementById("detailPage");

  if(home && detail) {
      home.classList.remove("active", "active-page");
      detail.classList.add("active", "active-page");
  }

  showDetail();
}

// ========================
// SHOW DETAIL
// ========================
function showDetail(){
  const painting = JSON.parse(localStorage.getItem("painting"));
  if(!painting) return;

  const detailBox = document.getElementById("detailBox");
  if(!detailBox) return;

  const quote = painting.ArtistQuote || "N/A";
  const materials = painting.Materials || painting.medium || "Acrylic on Canvas";

  detailBox.innerHTML = `
  <div class="row g-4 align-items-center">
      <div class="col-md-6">
          <img src="${painting.image}" class="img-fluid rounded shadow" alt="${painting.title}">
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
function goBack(){
  const home = document.getElementById("homePage");
  const detail = document.getElementById("detailPage");

  if(home && detail) {
      detail.classList.remove("active", "active-page");
      home.classList.add("active", "active-page");
  }
}

// ========================
// WORD DOWNLOAD (FIXED METHOD)
// ========================
function downloadWord(){
  const painting = JSON.parse(localStorage.getItem("painting"));
  if(!painting) {
      alert("No painting data found to download!");
      return;
  }

  const quote = painting.ArtistQuote || "N/A";
  const materials = painting.Materials || painting.medium || "Acrylic on Canvas";

  // Text alignment format for standard DOC documents
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

  // Content rendering using safe text blob structure
  let blob = new Blob([content], { type: "application/msword;charset=utf-8" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  
  // Clean filename layout creation
  let fileName = painting.title.trim().replace(/\s+/g, '_') + "_Details.doc";
  link.download = fileName;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Auto detection check if detail view is accessed directly on render
document.addEventListener("DOMContentLoaded", () => {
    const detailViewActive = document.getElementById("detailPage")?.classList.contains("active-page");
    if(detailViewActive) {
        showDetail();
    }
});