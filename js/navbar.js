var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollDown()
};

function scrollDown() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").className = "scrollDown";
        mybutton.style.display = "block";
    } else {
        document.getElementById("navbar").className = "";
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}