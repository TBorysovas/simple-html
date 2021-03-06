// Powershell icon change
function icone(type) {
    arquivo = "_img/" + type + ".png";
    document.getElementById("icon").src = arquivo;
}

//Disable top button on window load
function myBtnHide() {
    document.getElementById("myBtn").style.display = "none";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
