document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".article-slider-wrapper");
  const prevBtn = document.getElementById("btn-prev-article");
  const nextBtn = document.getElementById("btn-next-article");

  function updateButtons() {
    // Check if we are at the start
    prevBtn.disabled = sliderWrapper.scrollLeft <= 0;
    // Check if we are at the end (within 1px tolerance)
    nextBtn.disabled =
      Math.ceil(sliderWrapper.scrollLeft + sliderWrapper.clientWidth) >=
      sliderWrapper.scrollWidth;
  }

  prevBtn.addEventListener("click", () => {
    const article = sliderWrapper.querySelector(".article");
    if (!article) return;
    const gap = 16; // CSS gap in px
    const scrollAmount = article.offsetWidth + gap;
    sliderWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    const article = sliderWrapper.querySelector(".article");
    if (!article) return;
    const gap = 16; // CSS gap in px
    const scrollAmount = article.offsetWidth + gap;
    sliderWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Update buttons on scroll too (when user scrolls manually)
  sliderWrapper.addEventListener("scroll", updateButtons);

  // Initial button state
  updateButtons();
});
