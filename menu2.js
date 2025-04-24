// document.addEventListener("DOMContentLoaded", function () {
//     const leftBtn = document.querySelector('.nav.left');
//     const rightBtn = document.querySelector('.nav.right');
//     const slidesContainer = document.querySelector('.slides');
//     const slide = document.querySelector('.slide');
//     const slideWidth = slide.offsetWidth + 20; 
  
//     let currentPosition = 0;
  
//     rightBtn.addEventListener('click', () => {
//       if (currentPosition > -(slideWidth * (slidesContainer.children.length - 1))) {
//         currentPosition -= slideWidth;
//         slidesContainer.style.transform = `translateX(${currentPosition}px)`;
//       }
//     });
  
//     leftBtn.addEventListener('click', () => {
//       if (currentPosition < 0) {
//         currentPosition += slideWidth;
//         slidesContainer.style.transform = `translateX(${currentPosition}px)`;
//       }
//     });
//   });
document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slides");
  const slide = document.querySelector(".slide");
  const slideWidth = slide.offsetWidth + 20;

  let currentPosition = 0;
  const totalSlides = document.querySelectorAll(".slide").length;
  const visibleSlides = Math.floor(document.querySelector(".slider").offsetWidth / slideWidth);

  document.querySelector(".left").addEventListener("click", () => {
    currentPosition -= slideWidth;
    if (currentPosition < 0) {
      currentPosition = (totalSlides - visibleSlides) * slideWidth;
    }
    slidesContainer.style.transform = `translateX(-${currentPosition}px)`;
  });

  document.querySelector(".right").addEventListener("click", () => {
    currentPosition += slideWidth;
    if (currentPosition > (totalSlides - visibleSlides) * slideWidth) {
      currentPosition = 0;
    }
    slidesContainer.style.transform = `translateX(-${currentPosition}px)`;
  });
=======
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
