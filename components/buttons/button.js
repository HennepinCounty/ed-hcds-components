// Prevent click events if aria-disabled="true"

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hc-button[aria-disabled="true"]');
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (button.getAttribute('aria-disabled') === 'true') {
          e.preventDefault();
        }
      });
    });
  }
);
