document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");
  const next = document.querySelector(".nav.right");
  const prev = document.querySelector(".nav.left");

  let index = 0;

  function updateSlider() {
    const slideWidth = slide[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
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

  window.addEventListener("resize", updateSlider); 
});
