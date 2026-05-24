const paintings = [
  {
      image: "landscape Paintings/landscape1.jpg",
      title: "Flames of Freedom",
      description: "A bold and expressive abstract horse painting that captures the raw energy, grace, and untamed spirit of a powerful stallion. Dynamic brush strokes and layered textures blend fiery reds, golden ochres, deep blacks, and soft whites to create movement and emotion across the canvas. The artwork symbolizes strength, passion, and freedom while giving a modern contemporary aesthetic perfect for luxury interiors, galleries, and statement walls. This painting creates a dramatic visual impact and brings a sense of motion and elegance into any space.",
      price: "PKR 48,000",
      artist: "Elena Marrow",
      ArtistQuote: "“This horse is not painted to be controlled — it is painted to be felt.” — Elena Marrow",
      size: "48 x 72 inches (Large Vertical Canvas)",
      Materials: "Acrylic Paint Oil, Texture Medium Palette, Knife Detailing, Premium Cotton Canvas, Metallic Gold Pigment Highlights, Protective Gloss Varnish",
      category: "Abstract Expressionism / Contemporary Modern Art",
      year: "2024"
  },
  {
      image: "landscape Paintings/landscape2.jpg",
      title: "Color Splash Art",
      description: "An extraordinary explosion of premium high-pigment colors layered beautifully to reflect emotional depth and modern abstraction. This handmade masterpiece uses fluid dynamics to create an energetic yet sophisticated atmosphere on canvas, making it an ideal choice for vibrant living areas or creative studio spaces. The visual rhythm of color splashes immediately captures human focus and elevates room aesthetics.",
      price: "Rs. 6,000",
      artist: "Ayesha Khan",
      ArtistQuote: "“Colors on a canvas are the silent reflection of a peaceful spirit.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Acrylic on Canvas, Fluid Mediums, Gloss Topcoat",
      category: "Abstract Art / Contemporary Landscape",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape3.jpg",
      title: "Modern Texture Art",
      description: "Crafted with elegant structural paste and heavy-body fine acrylic highlights, this premium relief painting displays wonderful physical depth. The intentional palette knife ridges form distinct patterns that play with room shadows under different lighting conditions throughout the day. It brings an extremely rich, tactile luxury experience into standard executive offices and minimalist corridors.",
      price: "Rs. 4,800",
      artist: "Ayesha Khan",
      ArtistQuote: "“Textures add a physical depth to thoughts that words cannot define.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Heavy Structure Paste, Fine Acrylics, Cotton Canvas",
      category: "Abstract Textured Art",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape4.jpg",
      title: "Luxury Canvas Art",
      description: "A breathtaking contemporary artwork featuring delicate metallic gold-leaf highlights that shimmer perfectly against a sophisticated neutral background. This painting represents premium minimalist aesthetics, bringing balance, deep harmony, and an undeniable touch of upper-class luxury to hotel lounges or modern master bedrooms. Sealed with a protective high-gloss coat for lifelong durability.",
      price: "Rs. 7,200",
      artist: "Ayesha Khan",
      ArtistQuote: "“True luxury in art lies in the deep simplicity of its stroke.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Gold Leafing, Premium Acrylic Binder, Gallery Wrap Canvas",
      category: "Minimalist Modern Landscape",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape5.jpg",
      title: "Classic Wall Painting",
      description: "A stunning traditional perspective view showing rich nature tones and classic mountain ranges blended perfectly using fine studio brushes. This handmade custom scenery adds deep visual depth to any living area, making the room look spacious and deeply connected with nature elements. Ideal for family sitting halls and cozy spaces.",
      price: "Rs. 5,500",
      artist: "Ayesha Khan",
      ArtistQuote: "“Nature is the ultimate canvas painted by divine hands.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Studio Acrylic Colors, Matte Protective Varnish, Linen Base",
      category: "Classic Landscape Art",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape6.jpg",
      title: "Premium Acrylic Art",
      description: "A premium display of modern landscape aesthetics capturing misty forests during early autumn dawns. The transitioning shades of orange, amber, and deep moss greens are layered expertly to present depth, bringing refreshing natural serenity into urban apartments.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“To paint a forest is to breathe life into shadows.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "High-Pigment Acrylics, Flat Brush Blending, Archival Canvas",
      category: "Impressionist Landscape",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape7.jpg",
      title: "Ocean Whisper",
      description: "Capturing the raw power and majestic depth of deep blue sea waves crashing over golden shores. This artwork uses premium texture gel and fine fluid white acrylic structures to realistically depict sea foam, bringing cool coastal breezes and meditative calmness into your rooms.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“The ocean speaks a language that the soul instantly understands.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Texture Modeling Gel, Gloss Varnish, Heavy Duty Canvas",
      category: "Marine Seascape Art",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape8.jpg",
      title: "Sunset Serenade",
      description: "A brilliant fiery sunset horizon rendered with smooth transitions of rich crimson, deep violet, and warm cadmium yellows. The silhouettes of serene meadow trees add a peaceful, romantic focal point that glows beautifully under ambient indoor lighting configurations.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Every sunset brings the promise of a peaceful new dawn.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Blended Fine Acrylic Mediums, Satin Protective Topcoat",
      category: "Expressionist Sunset Art",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape9.jpg",
      title: "Misty Mountain Range",
      description: "An elegant monochrome-heavy minimalist view depicting high alpine peaks covered in deep morning fog. The soft gradients of slate gray and charcoal create a quiet, majestic atmosphere that anchors corporate cabins and modern minimalist bedrooms flawlessly.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Silence is loudest on the peaks of untouched mountains.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Heavy Body Gesso, Premium Carbon Pigments, Stretched Canvas",
      category: "Minimalist Nordic Art",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape10.jpg",
      title: "Golden Meadow",
      description: "Vibrant abstract fields filled with golden wild flowers shimmering under midday summer sunshine. This artwork heavily incorporates thick palette knife strokes and genuine gold metallic pigments to capture light dynamically from different viewpoint angles.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Fields of gold are the earth’s way of laughing in sunshine.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Metallic Gold Pigments, Impasto Medium, Cotton Canvas Base",
      category: "Impasto Floral Landscape",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape11.jpg",
      title: "Autumn Pathway",
      description: "A mesmerizing perspective landscape guiding the viewer through an arch of golden maple trees. The crisp details of falling leaves and rich earth tones bring warmth, comfort, and nostalgic seasonal beauty into formal meeting areas.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Autumn is a second spring where every leaf is a beautiful flower.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Fine Line Brushes, Acrylic Paint, UV Protective Varnish",
      category: "Realism Landscape Collection",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape12.jpg",
      title: "Emerald Forest Lake",
      description: "Deep emerald water bodies reflecting dense pine tree silhouettes under soft cloudy skies. This therapeutic color composition induces profound mental relaxation, making it an exceptional center piece for healthcare lounges or study settings.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“In the reflection of quiet waters, the mind finds its true center.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Fluid Acrylic Glazes, Cotton Canvas, High-Gloss Finish",
      category: "Contemporary Wilderness Landscape",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape13.jpg",
      title: "Desert Solitude",
      description: "The minimalist expanse of rolling sand dunes rendered in rich terracotta, soft beige, and pale peach tints. The delicate wave lines made via fine brushwork capture the silent, timeless dignity of peaceful desert landscapes.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“The desert clean air clarifies the clutter of human thoughts.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Matte Premium Acrylics, Fine Grain Texturing Paste",
      category: "Modern Bohemian Desert Art",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape14.jpg",
      title: "Lavender Horizons",
      description: "Infinite blooming French lavender fields meeting soft violet pastel horizons at dusk. The rhythmic lavender rows use multi-layered stippling art steps to build a three-dimensional visual field that brightens up home entryways.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Fragrance is the invisible color that art attempts to showcase.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Heavy-Body Acrylics, Stippling Brushes, Premium Base Canvas",
      category: "Provencal Impressionism",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape15.jpg",
      title: "Celestial Valley",
      description: "A dreamy fantasy valley resting under an expansive star-filled night sky and shimmering auroras. The rich usage of deep cobalt blues, neon teals, and diamond dust glitters creates an enchanting, imaginative masterwork.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Look past the horizon line, and you will find universes waiting.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Phosphorescent Highlights, Acrylic Paints, Protective Varnish",
      category: "Surreal Fantasy Landscape",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape16.jpg",
      title: "Spring Symphony",
      description: "Blossoming cherry trees overhanging crystal clear river streams during early spring peak weeks. The vibrant pink petals floating across blue water tones fill your room interiors with joyful, refreshing, and lively vibes.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Springtime blooms are nature’s joyous anthem after cold silences.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Premium Palette Knife Detailing, Acrylic on Stretched Linen",
      category: "Vibrant Botanical Landscape",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape17.jpg",
      title: "Winter Reflections",
      description: "Frosty snow-covered riverbanks holding frozen ice glass reflections under soft golden winter morning sun rays. The specialized use of iridescent mediums mimics the cold sparkle of raw snow beautifully.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Winter coldness highlights the inner warmth of home spaces.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Iridescent Medium, Premium Acrylics, Sealed Board Canvas",
      category: "Hyperrealistic Winter Art",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape18.jpg",
      title: "Enchanted Waterfalls",
      description: "Majestic waterfalls descending into emerald lagoon steps surrounded by tropical ferns. The energetic water movement flows downwards elegantly across the canvas height, providing refreshing chi energy to your walls.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Water is the softest element, yet it carves stone valleys deep.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Fluid Acrylic Blends, Layered Varnish Finish, Cotton Canvas",
      category: "Tropical Scenery Art",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape19.jpg",
      title: "Silver Birch Woods",
      description: "Stately silver birch tree trunks lined up inside a clean monochrome forest layout. The sharp black-and-white patterns on bark structures create a timeless, artistic graphic rhythm perfect for ultra-modern luxury lounges.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Trees stand tall as silent guardians of ancient earth wisdom.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "High Contrast Gesso Paints, Heavy Cotton Canvas Base",
      category: "Modern Minimalist Woodlands",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape20.jpg",
      title: "Tuscan Summer Skies",
      description: "Warm rolling hills of rural Italy adorned with classic cypress trees and old stone villas under blue summer skies. It brings rich European vintage holiday textures and historical art tones into contemporary dining spaces.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Slowing down in old paths brings true creative inspiration.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Glazed Acrylic Varnishes, Custom Fine Brushes, Stretched Canvas",
      category: "Vintage European Scenery",
      year: "2026"
  },
  {
      image: "landscape Paintings/landscape21.jpg",
      title: "Abstract Thunderstorm",
      description: "A dramatic visual interpretation of a heavy rain thunderstorm brewing over open plains. The deep slate clouds mixed with bright electric gold bolts create an artistic powerhouse of pure energy and statement contrast.",
      price: "Rs. 6,300",
      artist: "Ayesha Khan",
      ArtistQuote: "“Storms clean out skies, leaving room for brilliant light.” — Ayesha Khan",
      size: "24 x 36 Inches",
      Materials: "Heavy Texture Acrylic Paste, Metallic Leafing, Gloss Sealant",
      category: "Abstract Atmospheric Landscape",
      year: "2026"
  }
];

// ========================
// CHECK IF WE ARE ON THE MAIN PAGE
// ========================
const isHome = document.getElementById("cardContainer");

if (isHome) {
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
function openDetail(index) {
  localStorage.setItem("painting", JSON.stringify(paintings[index]));

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
function showDetail() {
  const painting = JSON.parse(localStorage.getItem("painting"));
  if (!painting) return;

  const detailBox = document.getElementById("detailBox");
  if (!detailBox) return;

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
          <p class="mb-2"><b>Materials:</b> ${materials}</p>
          <p class="mb-2"><b>Size:</b> ${painting.size}</p>
          <p class="mb-2"><b>Category:</b> ${painting.category}</p>
          <p class="mb-3"><b>Year:</b> ${painting.year}</p>

          <button class="btn btn-dark mt-2 px-4">
              Add To Cart
          </button>

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

  if(home && detail) {
      detail.classList.remove("active", "active-page");
      home.classList.add("active", "active-page");
  }
}

// ========================
// WORD DOWNLOAD
// ========================
function downloadWord() {
  const painting = JSON.parse(localStorage.getItem("painting"));
  if (!painting) {
      alert("No data found to download!");
      return;
  }

  const quote = painting.ArtistQuote || "N/A";
  const materials = painting.Materials || painting.medium || "Acrylic on Canvas";

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

// Document lifecycle hook for managing runtime state transitions
document.addEventListener("DOMContentLoaded", () => {
    const detailViewActive = document.getElementById("detailPage")?.classList.contains("active-page");
    if(detailViewActive) {
        showDetail();
    }
});