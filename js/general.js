// Function for click on the button to scroll to the top of the page
function scrollFunction(){
    const topBtn = document.getElementById("top-btn");
    window.onscroll = function(){scrollFunction()};
    if(document.documentElement.scrollTop > 20){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
}
function topFunction(){
    const topBtn = document.getElementById("top-btn");
window.onscroll = function(){scrollFunction()};
    document.documentElement.scrollTop = 0;
}

// Function for live chat box
const livechatBtn = document.getElementById("live-chat");
const chatBox = document.querySelector("iframe");
// livechatBtn.addEventListener("click",openChatBox);
function openChatBox(){
    if(chatBox.style.display === "block"){
        chatBox.style.display = "none";
    }else{
        chatBox.style.display = "block";
    }
}