document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.addEventListener('click', function () {
      alert('Rooms are available. We will contact you shortly.');
      console.log('Send Response button clicked!');
    });
});
