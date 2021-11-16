window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (i = 0; i < reveals.length; i++) {
        const windowinner = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 150;

        if (revealTop < windowinner - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}