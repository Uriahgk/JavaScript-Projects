function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Must enter first name to continue.");
      return false;
    }
  }