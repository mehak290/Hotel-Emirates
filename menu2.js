document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.querySelector('.nav.left');
    const rightBtn = document.querySelector('.nav.right');
    const slidesContainer = document.querySelector('.slides');
    const slide = document.querySelector('.slide');
    const slideWidth = slide.offsetWidth + 20; 
  
    let currentPosition = 0;
  
    rightBtn.addEventListener('click', () => {
      if (currentPosition > -(slideWidth * (slidesContainer.children.length - 1))) {
        currentPosition -= slideWidth;
        slidesContainer.style.transform = `translateX(${currentPosition}px)`;
      }
    });
  
    leftBtn.addEventListener('click', () => {
      if (currentPosition < 0) {
        currentPosition += slideWidth;
        slidesContainer.style.transform = `translateX(${currentPosition}px)`;
      }
    });
  });
  