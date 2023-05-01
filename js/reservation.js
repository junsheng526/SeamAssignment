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

const database = firebase.database();

// select the form element
const form = document.querySelector('form');

// listen for form submission event
form.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  // get form input values
  const name = document.querySelector('#custName').value.trim();
  const phoneNo = document.querySelector('#custPhoneNo').value.trim();
  const date = document.querySelector('#reserveDate').value.trim();
  const time = document.querySelector('#reserveTime').value.trim();
  const pax = document.querySelector('#pax').value.trim();

  if (name == "" || phoneNo == "" || date == "" || time == "" || pax == "") {
    alert('Please fill in all the details!');
    return
  }


  // create a new "Reservation" object with the input values
  const reservation = {
    name: name,
    phoneNo: phoneNo,
    date: date,
    time: time,
    pax: pax
  };

  // add the reservation data to the "Reservation" collection in the database
  database.ref('Reservation').push(reservation)
    .then(() => {
      // reset the form
      form.reset();
      console.log('Reservation data added successfully!');
      alert('Reservation Created!');
      location.reload();
    })
    .catch((error) => {
      console.error('Error adding reservation data: ', error);
    });

});