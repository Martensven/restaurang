//Vi skapar först ett objekt för varje rätt som innehåller information om respektive rätt.
let bolognese = {
    name: "Spaghetti Bolognese",
    desc: 'Spaghetti från den italienska landsbygden med en onyttig mängd sås',
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
    desc: 'Lager av pasta och sås, finns det något bättre?',
    price: 120,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Meaty_Lasagna_8of8_%288736299782%29.jpg/640px-Meaty_Lasagna_8of8_%288736299782%29.jpg",
};

let alfredo = {
    name: "Pasta Alfredo",
    desc: 'Krämig, ostig pasta serverad med grillat kycklingbröst',
    price: 105,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fettucine_Alfredo_with_Chicken_at_Sodinis_Bertoluccis_%288566239253%29.jpg/640px-Fettucine_Alfredo_with_Chicken_at_Sodinis_Bertoluccis_%288566239253%29.jpg",
};

//Vi sätter sedan rätterna i ett nytt objekt
const dishes = {
    bolognese,
    carbonara,
    lasagne,
    alfredo,
};

const menu = document.getElementById("menu"); //Vi deklarerar en variabel för att sedan kunna skapa HTML-element där

Object.values(dishes).forEach(dish => { //Vi konverterar objekten till en array och använder en forEach-loop för att se till att nedan kod körs en gång per item i vår array.
    const section = document.createElement("section"); // Skapa ett element för varje rätt
    section.className = "dish"; //Varje section får ett klassnamn, detta kan vi använda för styling

    section.innerHTML = `<img src="${dish.image}" alt="${dish.name}"><h2>${dish.name}</h2><p>${dish.desc}</p><p>Pris: ${dish.price}:-</p>`; //Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    menu.appendChild(section); //Vi använder append för att sedan lägga till section-elementen.
});




