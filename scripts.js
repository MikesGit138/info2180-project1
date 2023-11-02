document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const messageDiv = document.querySelector('.message');
    const emailInput = document.querySelector('input[name="email"]');
  
    const displayMessage = (message, isError = false) => {
      messageDiv.className = isError ? 'message error-message' : 'message';
      messageDiv.innerHTML = message;
    };
  
    const validateEmail = (email) => {
      return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? true : false;
    };
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
  
      if (!email || !validateEmail(email)) {
        displayMessage('Please enter a valid email address.', true);
        return;
      }
  
      displayMessage(`Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`);
    });
  });
  