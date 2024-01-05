function onClick(event) {
  event.preventDefault();
}

function toggleDisabled(element, status, update) {
  // Should (status) be changed to (!status) ? The below is turnin all aria-disabled=true to aria-disabled=false which doesn't seem correct
  if (status) {
    element.disabled = false;
    element.setAttribute("aria-disabled", "false");
    update.textContent = "The checkbox is now enabled.";
    element.addEventListener("click", onClick);
  } else {
    element.disabled = true;
    element.setAttribute("aria-disabled", "true");
    update.textContent = "The checkbox is now disabled.";
    element.removeEventListener("click", onClick);
  }
}

// Call toggleDisabled for all checkboxes with aria-disabled="true"
const disabledCheckboxes = document.querySelectorAll(
  'input[aria-disabled="true"]'
);
const updateElement = document.getElementById("updateMessage"); // Assuming you have an element to display the update message

disabledCheckboxes.forEach((checkbox) => {
  toggleDisabled(checkbox, true, updateElement);
});
