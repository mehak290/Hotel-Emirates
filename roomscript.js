var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  centeredSlides: false,
  slidesOffsetAfter: 0,
  watchOverflow: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 3},
    640: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".success-msg").forEach(msg => {
    msg.style.display = "none";
  });
});

function bookRoom(btn) {
  const slide = btn.closest(".swiper-slide");
  const dates = slide.querySelectorAll(".date-input");
  const checkIn = dates[0].value;
  const checkOut = dates[1].value;
  const msg = slide.querySelector(".success-msg");

  if (!checkIn || !checkOut) {
    alert("Please select both check-in and check-out dates.");
    return;
  }

  msg.textContent = "✅Room Booked Successfully!";
  msg.style.display = "block";
}
