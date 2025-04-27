document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission
  
      // Optionally, you can clear form values:
      form.reset();
  
      // Show confirmation message
      confirmationMessage.style.display = 'block';
  
      // Hide message after 5 seconds
      setTimeout(() => {
        confirmationMessage.style.display = 'none';
      }, 5000);
    });
  });
  