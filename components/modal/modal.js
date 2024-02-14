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


// return focus to element that triggered modal to open
// restores page scroll behavior
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


// Listen for click events on the open modal button
openButton.addEventListener("click", () => {

  // Save the last focused element to return focus back to it when the modal closes
  lastFocusedElement = document.activeElement;
  modal.showModal();

  // Prevent scrolling on the main document body while the modal is open to enhance user experience
  document.body.style.overflow = 'hidden';

  // Update the list of focusable elements within the modal for focus trapping
  // Immediately move focus to the first focusable element in the modal
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
