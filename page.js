

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email);
  }

  // Check if an element has a specific className
  function hasClass(element, className) {
    return element.classList.contains(className);
  }

  document.addEventListener("DOMContentLoaded", function() {
    
    // Target email input for validation css
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const message = document.getElementById("message");

    email.addEventListener("input", () => {
    const value = email.value;
    console.log(value);
    if (validateEmail(value)) {
        email.classList.remove("invalid");
        email.classList.add("valid");
    } else {
        email.classList.remove("valid");
        email.classList.add("invalid");
    }
    });

    // Add classes on submit for success message (click event for example purposes)
    const submit = document.getElementById("submit");
    const success = document.getElementById("success-message");
    const form = document.getElementById("form-wrapper");
    
    submit.addEventListener("click", (event) => {
        event.preventDefault();
            
        if(hasClass(email, "valid")){
            success.classList.add("submitted");
            form.classList.add("submitted")
        }

    });

    // Close success message
    const successButton = document.getElementById("success-button")
    successButton.addEventListener("click", () => {
        success.classList.remove("submitted");
        form.classList.remove("submitted")
        email.value = "";
        name.value = "";
        message.value = "";
    });


  });