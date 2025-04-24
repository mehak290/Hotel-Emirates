document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");
  const next = document.querySelector(".nav.right");
  const prev = document.querySelector(".nav.left");

  let index = 0;

  function updateSlider() {
    const slideWidth = slide[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;

    // Disable the previous button if on the first slide
    if (index === 0) {
      prev.disabled = true;
    } else {
      prev.disabled = false;
    }

    // Disable the next button if on the last slide
    if (index === slide.length - 3) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }
  }

  next.addEventListener("click", () => {
    if (index < slide.length - 1) {
      index++;
      updateSlider();
    }
  });

  prev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  // Handle window resizing
  window.addEventListener("resize", updateSlider);

  // Initial setup
  updateSlider();
});
