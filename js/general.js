// Function for click on the button to scroll to the top of the page
function scrollFunction(){
    const topBtn = document.getElementById("top-btn");
    window.onscroll = function(){scrollFunction()};
    if(document.documentElement.scrollTop > 20){
        topBtn.style.display = "flex";
    }else{
        topBtn.style.display = "none";
    }
}
function topFunction(){
    const topBtn = document.getElementById("top-btn");
window.onscroll = function(){scrollFunction()};
    document.documentElement.scrollTop = 0;
}