//Vi skapar först ett objekt för varje rätt som innehåller information om respektive rätt.
let bolognese = {
    name: "Spaghetti Bolognese",
    desc: 'Spaghetti från den italienska landsbygden med en generös mängd sås bolognese',
    price: 110,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Healthy_Spaghetti_bolognese_-_49859910097.jpg/640px-Healthy_Spaghetti_bolognese_-_49859910097.jpg",
};

let carbonara = {
    name: "Pasta Carbonara",
    desc: 'Rigatoni från Sicilien i en symphoni av Pecorino Romano och guanciale',
    price: 115,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/640px-Espaguetis_carbonara.jpg",
};

let lasagne = {
    name: "Lasagne",
    desc: 'Lager av pasta och sås, finns det något bättre',
    price: 120,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Meaty_Lasagna_8of8_%288736299782%29.jpg/640px-Meaty_Lasagna_8of8_%288736299782%29.jpg",
};

//Vi sätter sedan rätterna i ett nytt objekt
const dishes = {
    bolognese,
    carbonara,
    lasagne,
};

const menu = document.getElementById("menu");

// Konvertera objekten till en array och använd forEach
Object.values(dishes).forEach(dish => {
    // Skapa ett element för varje rätt
    const section = document.createElement("section");
    section.className = "dish";

    section.innerHTML = `<img src="${dish.image}" alt="${dish.name}"><h2>${dish.name}</h2><p>${dish.desc}</p><p>Pris: ${dish.price}</p>`;

    // Lägg till sektionen i menu-container
    menu.appendChild(section);
        });




