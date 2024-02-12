//open and close modal
//sets focus within the modal
//prevent scrolling outside of modal

const openButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
let lastFocusedElement;

// Selects all elements that can close the modal
const closeButtons = document.querySelectorAll("[data-close-modal]");

openButton.addEventListener("click", () => {

  // Save the current focus before opening the modal
  lastFocusedElement = document.activeElement; 
  modal.showModal();

  // Optionally, set focus to a specific element within the modal here
  // Prevent scrolling on the background
  document.body.style.overflow = 'hidden'; 
});

const closeModal = () => {
  modal.close();
  if (lastFocusedElement) lastFocusedElement.focus(); // Restore focus to the element that opened the modal
  document.body.style.overflow = ''; // Restore scrolling on the background
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
