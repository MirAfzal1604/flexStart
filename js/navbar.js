"use static"

const mybutton = document.getElementById("myBtn");
const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(".nav_links .main_nav li");

window.onscroll = function() {
    scrollDown();
    animationId();
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

function animationId() {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 180) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
}