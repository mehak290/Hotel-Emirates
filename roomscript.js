var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1024: {
        slidesPerView: 3},
      768: {
        slidesPerView: 2
      },
      480: {
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

    msg.textContent = `✅ Booked from ${checkIn} to ${checkOut}`;
    msg.style.display = "block";
  }
