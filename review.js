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

document.getElementById("submitBtn").addEventListener("click", function() {
    let firstName = document.querySelector('input[name="firstName"]').value;
    let lastName = document.querySelector('input[name="lastName"]').value;
    let foodName = document.querySelector('input[name="foodName"]').value;
    let desc = document.querySelector('input[name="foodName"]').value;
    
    let ul = document.createElement("ul");
    ul.className = "user-review"; 
    ul.innerHTML = `
        <li>${firstName}</li>
        <li>${lastName}</li>
        <li>Vad åt du? ${foodName}</li>
        <li>${desc}</li>
    `;
    document.body.appendChild(ul);


    document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
});

