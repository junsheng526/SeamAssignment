function feedback() {
    let popupform = document.getElementById("feedbackform")
    
    if(popupform.style.display === "block"){
        popupform.style.display = "none";
    }else{
        popupform.style.display = "block"; 
    }
}

function myFunction(rating) {
    document.querySelectorAll('input').forEach(cb => cb.classList.remove('highlight'))
    for (let i = Number(rating); i > 0; i--) {
        document.querySelector(`input[value="${i}"]`).classList.add('highlight')
    }
}

function sendOpinion(){
    alert("Thank you for your feedback!😊");
}
