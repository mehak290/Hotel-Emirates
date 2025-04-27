document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.addEventListener('click', function () {
      alert('Rooms are available. We will contact you shortly.');
      console.log('Send Response button clicked!');
    });
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
  const sendButton = document.getElementById("send-button");
  const contactForm = document.getElementById("contact-form");

  sendButton.addEventListener("click", function(event) {
    event.preventDefault(); // stop the form from actually submitting yet
    alert("Thank you! Your message has been sent.");
    console.log('contact button clicked!');
    contactForm.reset();
  });
});

