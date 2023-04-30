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
const emailField = document.getElementById('exampleInputEmail3');
const passwordField = document.getElementById('exampleInputPassword3');

// Example starter JavaScript for disabling form submissions if there are invalid fields
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


function register() {
    const email = emailField.value;
    const password = passwordField.value;

    // Check that email and password fields are not empty
    // if (!email || !password) {
    //     alert('Please enter your email and password.');
    //     return;
    // }

    // // Check that email is in a valid format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Create a new user account using Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User account created successfully
            const user = userCredential.user;
            console.log('User account created:', user);
            alert('User Created!');
            window.location.assign("/html/login.html");
            // TODO: You can add any further actions you want to take after a user account is created
        })
        .catch((error) => {
            // Handle errors that occurred during account creation
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error creating user account:', errorCode, errorMessage);
            // TODO: You can add any further error handling you want to do here
        });
}