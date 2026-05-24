// ==========================================
// 1. Contact Form Logic (Safely Wrapped)
// ==========================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for reaching out! Galleria team will contact you soon.");
        this.reset();
    });
}

// ==========================================
// 2. Custom Carousel / Slider Logic
// ==========================================
let slideIndex = 0;

if (document.getElementsByClassName("carousel-slide").length > 0) {
    showSlides();
}

function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    if (slides.length === 0) return;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000);
}

function showSlidesManual(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}