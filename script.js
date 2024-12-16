import db from '/db.js';

console.log(db.bbqs);

const dishes = db["burgers"]; // Ändra till korrekt nyckel
const menu = document.getElementById("menu"); // Kontrollera att elementet finns

Object.values(dishes).forEach(dish => {
    const aside = document.createElement("aside"); // Skapa ett element för varje rätt
    aside.className = "dish"; // Varje section får ett klassnamn, detta kan vi använda för styling

    aside.innerHTML = `
        <img src="${dish.img}" alt="${dish.name}">
        <section>
        <h2>${dish.name}</h2>   
        <p>${dish.dsc}</p>
        <p>Pris: ${dish.price}:-</p>
        </section>
    `; // Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    menu.appendChild(aside); // Vi använder append för att sedan lägga till section-elementen.
});

const drinks = db["drinks"]; // Ändra till korrekt nyckel
const drinkMenu = document.getElementById("drinkMenu"); // Kontrollera att elementet finns

Object.values(drinks).forEach(drink => {
    const aside2 = document.createElement("aside"); // Skapa ett element för varje rätt
    aside2.className = "dish"; // Varje section får ett klassnamn, detta kan vi använda för styling

    aside2.innerHTML = `
        <img src="${drink.img}" alt="${drink.name}">
        <section>
        <h2>${drink.name}</h2>   
        <p>${drink.dsc}</p>
        <p>Pris: ${drink.price}:-</p>
        </section>
    `; // Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    drinkMenu.append(aside2); // Vi använder append för att sedan lägga till section-elementen.
});

const desserts = db["desserts"]; // Ändra till korrekt nyckel
const dessertMenu = document.getElementById("desserts"); // Kontrollera att elementet finns

Object.values(desserts).forEach(dessert => {
    const aside3 = document.createElement("aside"); // Skapa ett element för varje rätt
    aside3.className = "dish"; // Varje section får ett klassnamn, detta kan vi använda för styling

    aside3.innerHTML = `
        <img src="${dessert.img}" alt="${dessert.name}">
        <section>
        <h2>${dessert.name}</h2>   
        <p>${dessert.dsc}</p>
        <p>Pris: ${dessert.price}:-</p>
        </section>
    `; // Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    dessertMenu.append(aside3); // Vi använder append för att sedan lägga till section-elementen.
});

