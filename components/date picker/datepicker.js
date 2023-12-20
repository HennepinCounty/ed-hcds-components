function setInputFilter(textbox, inputFilter, errMsg) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
    "focusout",
  ].forEach(function (event) {
    textbox.addEventListener(event, function (e) {
      if (inputFilter(this.value)) {
        // Accepted value.
        if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
          this.classList.remove("hc-input-error");
          this.setCustomValidity("");
        }

        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value: restore the previous one.
        this.classList.add("hc-input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value: nothing to restore.
        this.value = "";
      }
    });
  });
}

setInputFilter(
  document.getElementById("year"),
  function (value) {
    return /^-?\d*$/.test(value);
  },
  "Value must be numeric ex.2022"
);

setInputFilter(
  document.getElementById("day"),
  function (value) {
    return /^-?\d*$/.test(value);
  },
  "Value must be numeric within 1 - 31"
);

setInputFilter(
  document.getElementById("month"),
  function (value) {
    return /^-?\d*$/.test(value);
  },
  "Value must be numeric within 1 - 12"
);

function checkInput(ev) {
  let input = parseInt(document.querySelector(ev).value);
  let errMsg = document.querySelector("#err");
  errMsg.innerHTML = "";
  let id = document.querySelector(ev).id;
  if (id) {
    try {
      input = this.checkDay(input, id, errMsg);
      document.querySelector(ev).value = input.toString();
      errMsg.innerHTML;
      document.querySelector(ev).focus();
    } catch (Exception) {}
  }
}

function checkDOBirth() {
  let day = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;
  let date = document.querySelector("#date");
  date.innerHTML = "";

  let dob = month + "/" + day + "/" + year;
  let valDate = new Date(dob);
  date.innerHTML = valDate;
  //console.log(date);
}

function checkDay(input, id, errMsg) {
  let date = document.querySelector("#date");
  date.innerHTML = "";
  if (id === "day") {
    if (input > 31 || input < 1) {
      errMsg.innerHTML = id + " should be between 1 - 31";
      return "";
    }
  }
  if (id === "month") {
    if (input > 12 || input < 1) {
      errMsg.innerHTML = id + " should be between 1 - 12";
      return "";
    }
  }
}
