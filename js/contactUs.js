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

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

const user = firebase.auth().currentUser;

// // Get references to the form elements
// var nameInput = document.getElementById("name");
// var serviceInput = document.getElementById("service");
// var phoneInput = document.getElementById("phone");
// var emailInput = document.getElementById("email");
// var messageInput = document.getElementById("message");
// var submitButton = document.querySelector("button[type='submit']");

// // Add an event listener to the submit button
// submitButton.addEventListener("click", function (event) {
//   // Prevent the form from submitting
//   event.preventDefault();

//   // Get the values from the form elements
//   var name = nameInput.value;
//   var service = serviceInput.value;
//   var phone = phoneInput.value;
//   var email = emailInput.value;
//   var message = messageInput.value;

//   /*|| validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false */
//   if (validate_field(name) == false || validate_field(phone) == false || validate_field(service) == false || validate_field(email) == false || validate_field(message) == false) {
//     alert('One or More Extra Fields is Outta Line!!');
//     return;
//   }

//   // Create a new object with the values
//   var newContact = {
//     name: name,
//     service: service,
//     phone: phone,
//     email: email,
//     message: message
//   };

//   // Add the new object to the database
//   database.ref("ContactMessage").push(newContact);

//   // Clear the form inputs
//   nameInput.value = "";
//   serviceInput.value = "";
//   phoneInput.value = "";
//   emailInput.value = "";
//   messageInput.value = "";

//   alert('Message Sent!');
// });

// function validate_field(field) {
//   if (field == null) {
//     return false
//   }

//   if (field.length <= 0) {
//     return false
//   } else {
//     return true
//   }
// }

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  // get form input values
  const nameInput = document.getElementById("name").value;
  const serviceInput = document.getElementById("service").value;
  const phoneInput = document.getElementById("phone").value;
  const emailInput = document.getElementById("email").value;
  const messageInput = document.getElementById("message").value;

  if (nameInput == "" || serviceInput == "" || phoneInput == "" || emailInput == "" || messageInput == "") {
    alert('Please fill in all the details!');
    return
  }


  // create a new "Reservation" object with the input values
  var newContact = {
    name: nameInput,
    service: serviceInput,
    phone: phoneInput,
    email: emailInput,
    message: messageInput
  };

  // add the reservation data to the "Reservation" collection in the database
  database.ref('ContactMessage').push(newContact)
    .then(() => {

      // Initialize service id and template id from EmailJS
      const serviceID = "service_hbm7xbi";

      const templateID = "template_uw40a18";

      // Declare template input id
      var params = {
        nameInput: document.getElementById("name").value,
        emailInput: document.getElementById("email").value,
        phoneInput: document.getElementById("phone").value,
        serviceInput: document.getElementById("service").value,
        messageInput: document.getElementById("message").value,
      };

      // Send message
      emailjs.send(serviceID, templateID, params)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          // alert("Confirmation email sent! Check your email.");
        }, function (error) {
          console.log('FAILED...', error);
          alert("Failed to send confirmation email....");
        });

      // reset the form
      form.reset();
      console.log('Message send successfully!');
      alert('Message Sent!');
      location.reload();
    })
    .catch((error) => {
      console.error('Error adding message: ', error);
    });

});