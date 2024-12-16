import db from '/db.js';

console.log(db.bbqs);

const dishes = db["bbqs"]; // Ändra till korrekt nyckel
const menu = document.getElementById("menu"); // Kontrollera att elementet finns

Object.values(dishes).forEach(dish => {
    const section = document.createElement("section"); // Skapa ett element för varje rätt
    section.className = "dish"; // Varje section får ett klassnamn, detta kan vi använda för styling

    section.innerHTML = `
        <img src="${dish.img}" alt="${dish.name}">
        <h2>${dish.name}</h2>
        <p>${dish.dsc}</p>
        <p>Pris: ${dish.price}:-</p>
    `; // Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    menu.appendChild(section); // Vi använder append för att sedan lägga till section-elementen.
});