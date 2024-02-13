const openButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
let lastFocusedElement;

// Selects all elements that can close the modal
const closeButtons = document.querySelectorAll("[data-close-modal]");


// when modal opens, focus is saved on element that opened modal
// and scrolling prevented in background
openButton.addEventListener("click", () => {
  lastFocusedElement = document.activeElement; 
  modal.showModal();
  document.body.style.overflow = 'hidden'; 
});


// when modal closes, focus is on element that opened modal
// restores scrolling on background
const closeModal = () => {
  modal.close();
  if (lastFocusedElement) lastFocusedElement.focus(); 
  document.body.style.overflow = ''; 
};


// Attach the closeModal function to all close buttons
closeButtons.forEach(button => {
  button.addEventListener("click", closeModal);
});


// Handle the Escape key to close the modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.hasAttribute('open')) {
    closeModal();
  }
});
