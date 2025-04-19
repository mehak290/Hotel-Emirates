
document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.addEventListener('click', function () {
      alert('Your response has been sent successfully! We will contact you shortly.');
      console.log('Send Response button clicked!');
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.nav.left');
    const nextBtn = document.querySelector('.nav.right');
  
    let currentIndex = 0;
  
    function showSlide(index) {
      const slideWidth = images[0].clientWidth;
      slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showSlide(currentIndex);
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showSlide(currentIndex);
    });
  
    window.addEventListener('resize', () => showSlide(currentIndex));
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("revealBranches").addEventListener("click", () => {
      document.querySelector(".branch.left").classList.remove("hidden");
      document.querySelector(".branch.right").classList.remove("hidden");
      document.querySelector(".branch.left").classList.add("show");
      document.querySelector(".branch.right").classList.add("show");
    });
  });
  
  