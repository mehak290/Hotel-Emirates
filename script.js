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
  function validateEmail(email) {
    // Regular expression for validating email format
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Check if the email matches the regex pattern
    if (emailRegex.test(email)) {
        return true; // Valid email
    } else {
        return false; // Invalid email
    }
}

// Example usage
const email = prompt("Enter your email:");
if (validateEmail(email)) {
    console.log("Valid email address!");
} else {
    console.log("Invalid email address!");
}

function validatePassword(password) {
  // Regular expression for password validation
  // - Minimum 8 characters
  // - At least one uppercase letter
  // - At least one lowercase letter
  // - At least one number
  // - At least one special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Test if the password matches the requirements
  if (passwordRegex.test(password)) {
      return true; // Valid password
  } else {
      return false; // Invalid password
  }
}

// Example usage
const password = prompt("Enter your password:");
if (validatePassword(password)) {
  console.log("Password is valid!");
} else {
  console.log("Password is invalid! It must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
}