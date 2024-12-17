let stars = document.querySelectorAll(".stars span");
let output = document.getElementById("output");

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        stars[i].classList.add(getClassName(n));
    }
   
}

function remove() {
    stars.forEach(star => {
        star.className = "star";
    });
}

function getClassName(n) {
    switch(n) {
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        default: return "";
    }
}
