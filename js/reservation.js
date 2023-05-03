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

var db = firebase.database();

const reservationRef = db.ref('Reservation');

// select the form element
const form = document.querySelector('form');
const pattern = /^01[0-9]{1}[0-9]{7}$/;
let tableBody = document.querySelector("tbody");


// Read and Display food Data in table
reservationRef.on('value', (snapshot) => {
  const reservations = snapshot.val();

  tableBody.innerHTML = "";

  let i = 1;

  for (reservation in reservations) {
    let tr = `
    <tr data-id = ${reservation} >
        <th scope="row">${i}</td>
        <td>${reservations[reservation].date}</td>
        <td>${reservations[reservation].time}</td>
        <td>${reservations[reservation].pax}</td>
    </tr>
    `
    tableBody.innerHTML += tr;
    i++;
  }
});

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

  if (!pattern.test(phoneNo)) {
    console.log("Phone number is invalid");
    alert("Phone number is invalid");
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