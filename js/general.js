// Function for click on the button to scroll to the top of the page
function scrollFunction() {
    const topBtn = document.getElementById("top-btn");
    window.onscroll = function () { scrollFunction() };
    if (document.documentElement.scrollTop > 20) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
}
function topFunction() {
    const topBtn = document.getElementById("top-btn");
    window.onscroll = function () { scrollFunction() };
    document.documentElement.scrollTop = 0;
}

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