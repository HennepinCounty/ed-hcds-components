function validateForm() {
    const firstNameInput = document.getElementById("hc-id1");
    const commentInput = document.getElementById("hc-id2");
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const radioButton = document.getElementById("radiobutton1");
    const inputDate = document.getElementById("inputDate");

    const firstNameError = document.getElementById("firstNameError");
    const commentError = document.getElementById("commentError");
    const checkboxErrors = document.getElementById("checkboxErrors");
    const radioError = document.getElementById("radioError");
    const dateError = document.getElementById("dateError");

    const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    const userSelectedDate = new Date(inputDate.value);
    const currentDate = new Date();

    // First name validation
    if (!firstNameInput.value) {
        firstNameError.innerHTML = "This field cannot be empty";
    } else {
        firstNameError.innerHTML = "";
    }

    // Comment validation
    if (commentInput.value.length > 50) {
        commentError.innerHTML = "More than 50 characters";
    } else {
        commentError.innerHTML = "";
    }

    // Checkbox validation
    if (checkedCheckboxes.length < 2) {
        checkboxErrors.innerHTML = "Must select at least two options";
    } else {
        checkboxErrors.innerHTML = "";
    }

    // Radio button validation
    if (!radioButton.checked) {
        radioError.innerHTML = "This field is required";
    } else {
        radioError.innerHTML = "";
    }

    // Date validation
    if (userSelectedDate > currentDate) {
        dateError.innerHTML = "Selected birth date cannot be greater than today";
    } else {
        dateError.innerHTML = "";
    }

    // Return true if all validations pass, or false if there are errors
    return !(firstNameError.innerHTML || commentError.innerHTML || checkboxErrors.innerHTML || radioError.innerHTML || dateError.innerHTML);
}
