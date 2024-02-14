const openButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
let lastFocusedElement;

const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
let firstFocusableElement;
let lastFocusableElement;

// Function to update the list of focusable elements and set the first and last
const updateFocusableElements = () => {
  const focusableElements = modal.querySelectorAll(focusableElementsString);
  firstFocusableElement = focusableElements[0];
  lastFocusableElement = focusableElements[focusableElements.length - 1];
};

const closeModal = () => {
  modal.close();
  if (lastFocusedElement) lastFocusedElement.focus();
  document.body.style.overflow = '';
};

// Attach closeModal function to all close buttons
const closeButtons = document.querySelectorAll("[data-close-modal]");
closeButtons.forEach(button => {
  button.addEventListener("click", closeModal);
});

openButton.addEventListener("click", () => {
  lastFocusedElement = document.activeElement;
  modal.showModal();
  document.body.style.overflow = 'hidden';
  updateFocusableElements();
  firstFocusableElement.focus();
});

// Global keydown listener for trapping focus
document.addEventListener('keydown', (e) => {
  if (modal.hasAttribute('open')) {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === 'Tab') {
      
      // Shift + Tab and Tab controls
      if (e.shiftKey) { 
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else { 
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  }
});
