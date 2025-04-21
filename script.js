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

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Forgot Password Endpoint
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    // Simulate sending a password reset email
    if (email) {
        res.json({ message: `Password reset link sent to ${email}` });
    } else {
        res.status(400).json({ error: 'Email is required' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

document.getElementById('forgotPassword').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default navigation

  const email = document.getElementById('email').value;
  if (!email) {
      alert('Please enter your email address!');
      return;
  }

  fetch('/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
      if (data.message) {
          alert(data.message);
      } else {
          alert('Error: Could not send password reset link.');
      }
  });
});
document.getElementById('forgotPassword').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default navigation

  const email = document.getElementById('email').value;
  if (!email) {
      alert('Please enter your email address!');
      return;
  }

  fetch('/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
      if (data.message) {
          alert(data.message);
      } else {
          alert('Error: Could not send password reset link.');
      }
  });
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally
  
  const email = document.getElementById('email').value;
  const message = document.getElementById('message');

  if (!email) {
      message.textContent = "Please enter your email address!";
      message.style.color = "red";
      return;
  }

  // Simulate sending reset link
  fetch('/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
      message.textContent = data.message || "Reset link sent successfully!";
      message.style.color = "green";
  })
  .catch(err => {
      message.textContent = "Error sending reset link!";
      message.style.color = "red";
  });
});

document.getElementById('generateOtpButton').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const otpMessage = document.getElementById('otpMessage');

  if (!email) {
      otpMessage.textContent = "Please enter your email address!";
      otpMessage.style.color = "red";
      return;
  }

  // Simulate OTP generation
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  localStorage.setItem('generatedOtp', otp); // Store OTP locally for validation
  otpMessage.textContent = `OTP sent to ${email}: ${otp}`;
  otpMessage.style.color = "green";
});

document.getElementById('verifyOtpButton').addEventListener('click', function () {
  const enteredOtp = document.getElementById('otp').value;
  const storedOtp = localStorage.getItem('generatedOtp');
  const verifyMessage = document.getElementById('verifyMessage');

  if (enteredOtp === storedOtp) {
      verifyMessage.textContent = "OTP verified successfully!";
      verifyMessage.style.color = "green";
      localStorage.removeItem('generatedOtp'); // Clear stored OTP
  } else {
      verifyMessage.textContent = "Invalid OTP. Please try again.";
      verifyMessage.style.color = "red";
  }
});

// script.js
function submitForm() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (username && email && password) {
      alert(`Account Created Successfully!\nUsername: ${username}\nEmail: ${email}`);
  } else {
      alert('Please fill in all fields!');
  }
}
const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Save the username and remember me checkbox state in localStorage
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (rememberMeCheckbox.checked) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('username', usernameInput.value);
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('username');
      }
      alert('Login successful!');
    });

    // Load the saved username and checkbox state on page load
    window.addEventListener('load', () => {
      const remembered = localStorage.getItem('rememberMe') === 'true';
      const savedUsername = localStorage.getItem('username');
      rememberMeCheckbox.checked = remembered;
      if (remembered && savedUsername) {
        usernameInput.value = savedUsername;
      }
    });

    //otp
    Creating an OTP (One-Time Password) generation system in JavaScript is pretty straightforward. Here's a simple way to implement it:
Steps to generate an OTP:
- Generate a random number.
- Ensure it's a fixed length (e.g., 6 digits).
- Send it to the user via email or SMS.
- Validate the OTP entered by the user.

Example Code:
// Function to generate a random OTP
function generateOTP(length = 6) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10); // Random digit (0-9)
    }
    return otp;
}

// Example usage:
const otp = generateOTP();
console.log("Generated OTP:", otp);


Validating OTP:
To validate the OTP, store it temporarily (e.g., in session storage) and check if the user-entered OTP matches it.
// Storing OTP
sessionStorage.setItem("otp", otp);

// Function to validate OTP
function validateOTP(userInputOTP) {
    const storedOTP = sessionStorage.getItem("otp");
    return userInputOTP === storedOTP;
}

// Example validation:
console.log(validateOTP("123456")); // Returns true or false


const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("ratingValue");

stars.forEach(star => {
    star.addEventListener("click", function() {
        let value = this.getAttribute("data-value");
        
        // Remove active class from all stars
        stars.forEach(s => s.classList.remove("active"));

        // Add active class to selected stars
        for (let i = 0; i < value; i++) {
            stars[i].classList.add("active");
        }

        ratingValue.textContent = `Rating: ${value}`;
    });
});