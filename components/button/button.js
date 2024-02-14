// aria-disabled="true" functionality for an accessible disabled button
// this makes the button still findable but not operable

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
