// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD3RSWM_wDt8uq9mgHQfXn27ny5gXOf8og",
    authDomain: "moonstreet-c0100.firebaseapp.com",
    databaseURL: "https://moonstreet-c0100-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "moonstreet-c0100",
    storageBucket: "moonstreet-c0100.appspot.com",
    messagingSenderId: "872723654241",
    appId: "1:872723654241:web:f9f693c7c18d6d31e2ac20"
};
    
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();

// Set up our login function
function login () {
    // Get all our input fields
    email = document.getElementById('exampleInputEmail1').value;
    password = document.getElementById('exampleInputPassword1').value;
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!');
      return;
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
  
      // DOne
      window.location.assign("/index.html");
      alert('User Logged In!!');
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;
  
      alert(error_message);
    })
  
  }

   // Validate Functions
function validate_email(email) {
expression = /^[^@]+@\w+(\.\w+)+\w$/;
if (expression.test(email) == true) {
  // Email is good
  return true;
} else {
  // Email is not good
  return false;
}
}

function validate_password(password) {
// Firebase only accepts lengths greater than 6
if (password < 6) {
  return false;
} else {
  return true;
}
}
