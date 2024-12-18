//Hämtar alla stjärn element
let stars = document.querySelectorAll(".stars span");
let output = document.getElementById("output");
let selectedStars = 0; 

function gfg(n) {
    remove();//tar bort tidigare val av stjärnor
    selectedStars = n; //uppdaterar antalet stjänor 
    for (let i = 0; i < n; i++) {
        stars[i].classList.add("selected");// klass för valda stjärnor
    }
}
//funktion för att ta bort valda stjänor
function remove() {
    stars.forEach(star => {
        star.className = "star";//återställer till sin ursprunliga klass
    });
}
/* Lägg till en händelselyssnare på submit-knappen för att skapa en recension, 
  när knappen trycks, hämtas värdena från textfälten och stjärnorna.
 */
document.getElementById("submitBtn").addEventListener("click", function() {
    let firstName = document.querySelector('input[name="firstName"]').value;
    let lastName = document.querySelector('input[name="lastName"]').value;
    let foodName = document.querySelector('input[name="foodName"]').value;
    let desc = document.querySelector('input[name="desc"]').value;

  // Skapar en HTML-sträng med stjärnbetyg baserat på antalet valda stjärnor.
    function createStars(n) {
        let starsHTML = "<span class='review-stars'>";
        for (let i = 0; i < n; i++) {
            starsHTML += "★";
        }
        for (let i = n; i < 5; i++) {
            starsHTML += "☆";
        }
        starsHTML += "</span>";
        return starsHTML;
    }
//skapar en ny ul lista för att visa upp recensionen
    let ul = document.createElement("ul");
    ul.className = "user-review";//styling klass
    ul.innerHTML = `
        <li>${firstName}</li>
        <li>${lastName}</li>
        <li>Vad åt du? ${foodName}</li>
        <li>${desc}</li>
        <li>${createStars(selectedStars)}</li> 
    `;
    document.body.appendChild(ul); //lägg till ul listan i dokument

    //rensar rutorna efter att recensionen lagts till
    document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');

    //rensar stjärnonra
    remove();
    selectedStars = 0;
});

