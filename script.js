document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Basic validation
    if (email === '' || password === '') {
      errorMessage.textContent = 'Please fill in all fields.';
    } else if (!email.includes('@')) {
      errorMessage.textContent = 'Please enter a valid email address.';
    } else {
      errorMessage.textContent = '';
      alert('Login successful!');
    }
  });