// Function for login form and register form to swipe
function login() {
    const loginForm = document.getElementById("loginform");
    const registerForm = document.getElementById("registerform");
    const loginbtn = document.getElementById('login');
    const registerbtn = document.getElementById('register');

    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    loginbtn.style.color = "#13E2DA";
    registerbtn.style.color = "white";
}

function register() {
    const loginForm = document.getElementById("loginform");
    const registerForm = document.getElementById("registerform");
    const loginbtn = document.getElementById('login');
    const registerbtn = document.getElementById('register');

    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    registerbtn.style.color = "#13E2DA";
    loginbtn.style.color = "white";

}

// Function for popupform
function openForm() {
    document.getElementById("feedbackform");
    document.getElementById("popupform");

    if(popupform.style.display === "block"){
        popupform.style.display = "none";
    }else{
        popupform.style.display = "block";
        feedbackform.style.display = "none";
    }

}

