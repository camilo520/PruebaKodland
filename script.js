let currentIndex = 0;

const cards = document.querySelector(".cards");
const card = document.querySelector(".card");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

function updateCarousel() {
  const cardWidth = card.offsetWidth + 16;
  cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener("resize", () => {
  updateCarousel();
});

const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
