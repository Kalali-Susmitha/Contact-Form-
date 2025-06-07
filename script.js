document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Error fields
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let valid = true;

  // Name validation
  if (name === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    valid = false;
  }

  // Message validation
  if (message === '') {
    messageError.textContent = 'Message cannot be empty.';
    valid = false;
  }

  // If all valid
  if (valid) {
    successMessage.textContent = 'Thank you! Your message has been received.';
    document.getElementById('contactForm').reset();
  }
});
