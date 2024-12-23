// Hämta alla stjärn element
let stars = document.querySelectorAll(".stars span");
let selectedStars = 0; //variabel för att lagra antalet stjärnor

//funktion för att välja stjärnor
function gfg(n) {
    remove(); //tar bort tidigare val av stjärnor
    selectedStars = n; // Uppdaterar antalet valda stjärnor
    // klass för valda stjärnor
    for (let i = 0; i < n; i++) {
        stars[i].classList.add("selected"); 
    }
}

//funktion för att ta bort valda stjänor
function remove() {
    //återställer till sin ursprunliga klass
    stars.forEach(star => {
       star.className = "star"; 
    });
}


document.getElementById("submitBtn").addEventListener("click", function() {//lägger till eventlistener för submit knappen
    // Hämta värden från textfälten
    let firstName = document.querySelector('input[name="firstName"]').value;
    let lastName = document.querySelector('input[name="lastName"]').value;
    let foodName = document.querySelector('input[name="foodName"]').value;
    let desc = document.querySelector('input[name="desc"]').value;

    // skapa en ny section för att visa recensionen
    let section = document.createElement("section");
    section.className = "user-review"; // klassen för styling

    // skapar och lägg till listobjekt för varje fält
    let ul = document.createElement("ul");
    ul.innerHTML = `
        <li class="names">${firstName} ${lastName}</li>
        <li>Vad åt du? ${foodName}</li>
        <li>${desc}</li>
        <li>${createStars(selectedStars)}</li>
    `;
    section.appendChild(ul); //lägger till ul-listan i sektionen

    // lägger till sektionen i recensioncontainern
    document.getElementById("reviewsContainer").appendChild(section);

    // rensar text boxarna efter att recensionen har lagts till
    document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');

    //rensa valda stjärnorna
    remove();
    selectedStars = 0;
});

  // Skapar en HTML-sträng med stjärnbetyg baserat på antalet valda stjärnor.
function createStars(n) {
    let starsHTML = "<span class='review-stars'>"; //starta html string med span för stjärnbetyg
    for (let i = 0; i < n; i++) {
        //lägg till stjänor som är valda
        starsHTML += "★"; 
    }
    for (let i = n; i < 5; i++) {
       // lägger till ej valda stjärnor
        starsHTML += "☆"; 
    }
    //stänger span tagg
    starsHTML += "</span>";
    //returnera html string med star review
    return starsHTML; 
}
