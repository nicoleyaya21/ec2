/* ===== NAVBAR SHADOW ON SCROLL ===== */
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ===== 3D PARALLAX EFFECT ===== */
const layers = document.querySelectorAll(".parallax-layer");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;

  layers.forEach((layer, index) => {
    const depth = (index + 1) * 10;
    layer.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});

/* ===== FADE IN ON SCROLL ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(reveal => {
    const boxTop = reveal.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);