var firebaseConfig = {
  apiKey: "AIzaSyD3RSWM_wDt8uq9mgHQfXn27ny5gXOf8og",
  authDomain: "moonstreet-c0100.firebaseapp.com",
  databaseURL: "https://moonstreet-c0100-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "moonstreet-c0100",
  storageBucket: "moonstreet-c0100.appspot.com",
  messagingSenderId: "872723654241",
  appId: "1:872723654241:web:f9f693c7c18d6d31e2ac20"
};

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()

// select the form element
const form = document.querySelector('form');

// listen for form submission event
form.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  email = document.getElementById('email').value

  if (validate_email(email) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      alert('Password Reset Link sent to', email);
      window.location.assign("/html/login.html");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert(errorMessage);
    });

});

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}