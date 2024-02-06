document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.hc-checkboxes input[type="checkbox"]');
  const errorElement = document.getElementById('fieldset-error-example-1');
  
  // Function to check if any checkbox is checked
  function validateCheckboxes() {
    const isChecked = document.querySelector('.hc-checkboxes input[type="checkbox"]:checked');
    if (!isChecked) {
      errorElement.style.display = 'block';
    } else {
      errorElement.style.display = 'none';
    }
  }

  // Add change event listener to all checkboxes
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', validateCheckboxes);

    // If it's the last checkbox, add a 'blur' event listener
    if (index === checkboxes.length - 1) {
      checkbox.addEventListener('blur', validateCheckboxes);
    }
  });

  // Validate on form submit as well
  document.querySelector('form').addEventListener('submit', function(event) {
    const isChecked = document.querySelector('.hc-checkboxes input[type="checkbox"]:checked');
    if (!isChecked) {
      event.preventDefault(); // Prevent form submission
      errorElement.style.display = 'block'; // Show error message
    }
  });
});