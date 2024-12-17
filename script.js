/* Popup rutan för information */
window.onload = function() {
    console.log("Sidan har laddats!");
    document.getElementById('infopopup').style.display = 'flex';
};

document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.getElementById('Jagfortstorbutton');
    
        closeButton.addEventListener('click', function() {
            console.log("Knappen klickades!");  // Testa om klicket registreras
            document.getElementById('infopopup').style.display = 'none';
        }) 
});

const dbd = {
    "burgers": [
        {
            "id": "the-gramercy-tavern-burger-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Gramercy Tavern",
            "dsc": "The Gramercy Tavern Burger - 4 Pack",
            "price": 99,
            "rate": 5,
            "country": "New York, NY"
        },
        {
            "id": "shake-shack-shackburger-8-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Shake Shack",
            "dsc": "Shake Shack ShackBurger® – 8 Pack",
            "price": 49,
            "rate": 5,
            "country": "New York, NY"
        },
        {
            "id": "vegan-burger-grill-kit-for-4",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105946/vegan-burger-grill-kit-for-4.1450ccef8c44f7394c93f58450ce67b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Lekka Burger",
            "dsc": "Vegan Burger Grill Kit for 4",
            "price": 79,
            "rate": 4,
            "country": "New York, NY"
        },

    ],
    "bbqs": [
        {
            "id": "mini-trinity-bbq-combo-brisket-ribs-and-links",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90406/mini-trinity-bbq-combo-brisket-ribs-and-links.245582f593bf64b23b57dfca2be18cfd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Bludso's BBQ",
            "dsc": "Mini Trinity BBQ Combo - Brisket, Ribs & Links",
            "price": 139,
            "rate": 4,
            "country": "Los Angeles, CA"
        },
        {
            "id": "the-big-ugly-bbq-dinner-for-6",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132122/the-big-ugly-bbq-dinner-for-6.2dfae7818811adddce85cc1a910881a0.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Ugly Drum",
            "dsc": "The Big Ugly BBQ Dinner for 6",
            "price": 229,
            "rate": 5,
            "country": "Los Angeles, CA"
        },
        {
            "id": "bbq-pork-spare-ribs-2-racks",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91839/texas-sized-bbq-ribs-2-racks.317434b983d87ea730139222ae983774.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Snow's BBQ",
            "dsc": "Texas Sized BBQ Ribs - 2 Racks",
            "price": 139,
            "rate": 5,
            "country": "Lexington, TX"
        },
        {
            "id": "guys-bbq-trash-can-nachos-caliente-margaritas",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134759/guys-bbq-trash-can-nachos-caliente-margaritas.8e15c70f4f0aef2bc3643274bd29459a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Guy Fieri",
            "dsc": "Guy's BBQ Trash Can Nachos + Caliente Margaritas",
            "price": 95,
            "rate": 5,
            "country": "Flavortown, USA"
        },
        {
            "id": "ribs-and-chicken-combo-pack-serves-6-8",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133206/ribs-and-chicken-combo-pack-serves-6-8.cef1f90b5c3193c06e1c4b4cc9cff611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Dinosaur BBQ",
            "dsc": "Ribs & Chicken Combo Pack - Serves 6-8",
            "price": 129,
            "rate": 5,
            "country": "Syracuse, NY"
        },
        {
            "id": "bbq-meat-and-sides-feast-serves-15",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96632/bbq-meat-and-sides-feast.e330bee9ac3a6e322500b411094b3ca4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Micklethwait Craft Meats",
            "dsc": "BBQ Meat and Sides Feast",
            "price": 159,
            "rate": 4,
            "country": "Austin, TX"
        },
        {
            "id": "mesquite-smoked-peppered-beef-tenderloin",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99462/mesquite-smoked-peppered-beef-tenderloin.5c314418a1f75c7057eed686e2fad46f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Perini Ranch Steakhouse",
            "dsc": "Mesquite Smoked Peppered Beef Tenderloin",
            "price": 165,
            "rate": 4,
            "country": "Buffalo Gap, TX"
        },
        {
            "id": "original-texas-smoked-sausage",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101114/original-texas-smoked-sausage.a298e25643030c5500e225c7996fb153.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Terry Black's Barbecue",
            "dsc": "Original Texas Smoked Sausage",
            "price": 89,
            "rate": 4,
            "country": "Austin, TX"
        },

    ],
    "drinks": [
        {
            "id": "hong-kong-boba-tea-kit-for-6",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "New Territories",
            "dsc": "Hong Kong Boba Tea Kit for 6",
            "price": 59,
            "rate": 4,
            "country": "New York, NY"
        },
        {
            "id": "guys-caliente-margaritas-for-12",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Guy Fieri",
            "dsc": "Guy's Caliente Margaritas for 12",
            "price": 69,
            "rate": 5,
            "country": "Flavortown, USA"
        },
        {
            "id": "woodford-reserve-mint-julep-syrup",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Woodford Reserve",
            "dsc": "Woodford Reserve Mint Julep Syrup",
            "price": 39,
            "rate": 4,
            "country": "Louisville, KY"
        },
        {
            "id": "new-orleans-hurricane-mix",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Franco's Hurricane Mix",
            "dsc": "New Orleans Hurricane Mix",
            "price": 39,
            "rate": 5,
            "country": "Natchitoches, LA"
        },
        {
            "id": "papaya-king-tropical-drink",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Papaya King",
            "dsc": "Papaya King - Tropical Drink",
            "price": 69,
            "rate": 4,
            "country": "New York, NY"
        },
        {
            "id": "unicorn-parade-milkshake-kit-for-8",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132626/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "New Territories",
            "dsc": "Unicorn Parade Milkshake Kit for 8",
            "price": 109,
            "rate": 5,
            "country": "New York, NY"
        },
        {
            "id": "chickpea-chiller-kit-for-6",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106484/chickpea-chiller-kit-for-6.4310765c71ba524b5462ea9330d32446.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "The Hummus & Pita Co.",
            "dsc": "Chickpea Chiller Kit for 6",
            "price": 89,
            "rate": 4,
            "country": "New York, NY"
        },
        {
            "id": "iggys-soda-4-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136853/Iggys-Soda-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Iggy's",
            "dsc": "Iggy's Soda - 4 Pack",
            "price": 11,
            "rate": 4,
            "country": "Warwick, RI"
        },
    ],
    "desserts": [
        {
            "id": "15259-german-chocolate-killer-brownie-tin-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Killer Brownie®",
            "dsc": "German Chocolate Killer Brownie®",
            "price": 39.99,
            "rate": 4,
            "country": "Dayton, OH"
        },
        {
            "id": "luigis-original-cannoli-pie",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "The Cannoli Pie Company",
            "dsc": "Original Cannoli Pie",
            "price": 69,
            "rate": 4,
            "country": "Bridgeport, CT"
        },
        {
            "id": "sea-salted-caramel-swirl-cheesecake",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Cotton Blues Cheesecake Company",
            "dsc": "Sea-Salted Caramel Swirl Cheesecake",
            "price": 65,
            "rate": 4,
            "country": "Hattiesburg, MS"
        },
        {
            "id": "best-seller-cupcake-dozen",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/94478/best-seller-cupcake-dozen.f93b21993f6a2da11c975d45b9b0d08f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Crave Cupcakes",
            "dsc": "Best Seller Cupcake Dozen",
            "price": 89,
            "rate": 4,
            "country": "Houston, TX"
        },
        {
            "id": "23595-best-sellers-ice-cream-sandwich-8-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132372/best-sellers-ice-cream-sandwiches-8-pack.d30351bef255e98e3ca8fa4118c997fa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Nye's Cream Sandwiches",
            "dsc": "Best Sellers Ice Cream Sandwiches - 8 Pack",
            "price": 74,
            "rate": 4,
            "country": "Wilmington, NC"
        },
    ]
};

console.log(dbd);

const bbq = dbd["bbqs"]; // Ändra till korrekt nyckel
const bbqMenu = document.getElementById("bbqMenu"); //Kontrollera att elementet finns

Object.values(bbq).forEach(dish => {
    const aside = document.createElement("aside"); //Skapa ett element för varje rätt
    aside.className = "dish"; // Varje section får ett klassnamn, detta kan vi använda för styling

    aside.innerHTML = `
        <img src="${dish.img}" alt="${dish.name}">
        <section>
        <h2>${dish.name}</h2>   
        <p>${dish.dsc}</p>
        <p>Pris: ${dish.price}:-</p>
        <button class="itemBtn" id="${dish.id}" value="${dish.name}, pris: ${dish.price} kr">Lägg till</button>
        </section>
    `; //Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    bbqMenu.appendChild(aside); //Vi använder append för att sedan lägga till section-elementen.
});

const burgers = dbd["burgers"]; //Ändra till korrekt nyckel
const burgerMenu = document.getElementById("burgerMenu"); // Kontrollera att elementet finns

Object.values(burgers).forEach(dish => {
    const aside = document.createElement("aside"); // Skapa ett element för varje rätt
    aside.className = "dish"; //Varje section får ett klassnamn, detta kan vi använda för styling

    aside.innerHTML = `
        <img src="${dish.img}" alt="${dish.name}">
        <section>
        <h2>${dish.name}</h2>   
        <p>${dish.dsc}</p>
        <p>Pris: ${dish.price}:-</p>
        <button class="itemBtn" id="${dish.id}" value="${dish.name}, pris: ${dish.price} kr">Lägg till</button>
        </section>
    `; // Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    burgerMenu.appendChild(aside); //Vi använder append för att sedan lägga till section-elementen.
});

const drinks = dbd["drinks"]; //Ändra till korrekt nyckel
const drinkMenu = document.getElementById("drinkMenu"); // Kontrollera att elementet finns

Object.values(drinks).forEach(drink => {
    const aside = document.createElement("aside"); // Skapa ett element för varje rätt
    aside.className = "dish"; //Varje section får ett klassnamn, detta kan vi använda för styling

    aside.innerHTML = `
        <img src="${drink.img}" alt="${drink.name}">
        <section>
        <h2>${drink.name}</h2>   
        <p>${drink.dsc}</p>
        <p>Pris: ${drink.price}:-</p>
        <button class="itemBtn" id="${drink.id}" value="${drink.name}, pris: ${drink.price} kr">Lägg till</button>
        </section>
    `; // Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    drinkMenu.appendChild(aside); //Vi använder append för att sedan lägga till section-elementen.
});

const desserts = dbd["desserts"]; //Ändra till korrekt nyckel
const dessertMenu = document.getElementById("dessertMenu"); // Kontrollera att elementet finns

Object.values(desserts).forEach(dessert => {
    const aside = document.createElement("aside"); // Skapa ett element för varje rätt
    aside.className = "dish"; //Varje section får ett klassnamn, detta kan vi använda för styling

    aside.innerHTML = `
        <img src="${dessert.img}" alt="${dessert.name}">
        <section>
        <h2>${dessert.name}</h2>   
        <p>${dessert.dsc}</p>
        <p>Pris: ${dessert.price}:-</p>
        <button class="itemBtn" id="${dessert.id}" value="${dessert.name}, pris: ${dessert.price} kr">Lägg till</button>
        </section>  
    `; //Allt efter '=' är vad vi vill att våra sektioner ska fyllas med

    dessertMenu.appendChild(aside); //Vi använder append för att sedan lägga till section-elementen.
});


let orderList = []; //Array för beställningar

// Funktion för att hantera knapptryck och lägga till i orderlistan
document.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("itemBtn")) {
        const [name, priceInfo] = event.target.value.split(", pris: ");
        const price = parseFloat(priceInfo.replace(" kr", "")); // Omvandla pris till ett nummer

        // Kontrollera om objektet redan finns i beställningen
        const existingItem = orderList.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1; // Öka kvantiteten om den redan finns
        } else {
            orderList.push({ name, price, quantity: 1 }); // Lägg till ny vara
        }

        updateOrderSummary(); // Uppdatera sammanfattningen av beställningen
    }
});

// Funktion för att uppdatera orderöversikten
function updateOrderSummary() {
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = ""; // Töm orderöversikten innan den fylls på nytt

    let totalPrice = 0;

    orderList.forEach(item => {
        const itemTotal = item.quantity * item.price;
        totalPrice += itemTotal;

        // Lägg till varje vara i orderöversikten
        const li = document.createElement("li");
        li.textContent = `${item.quantity} x ${item.name} ${itemTotal.toFixed(2)} kr`;
        orderSummary.appendChild(li);
    });

    // Lägg till totalpris
    const totalP = document.createElement("p");
    totalP.classList = 'kundVagn';
    totalP.textContent = `Totalt: ${totalPrice.toFixed(2)} kr`;
    orderSummary.appendChild(totalP);
}

function showOrder() {
    const sidebar = document.querySelector('#orderList');
    sidebar.style.display = 'flex';
}

function hideOrder() {
    const sidebar = document.querySelector('#orderList');
    sidebar.style.display = 'none';
}

const showOrderList = document.getElementById('showBtn')
const hideOrderList = document.getElementById('hideBtn')

showOrderList.addEventListener('click', showOrder)
hideOrderList.addEventListener('click', hideOrder)

document.addEventListener('DOMContentLoaded', () => {
    const showBtn = document.getElementById('showBtn');
    const hideBtn = document.getElementById('hideBtn');
    const orderList = document.getElementById('orderList');
    const backgroundBlur = document.getElementById('backgroundBlur');

    showBtn.addEventListener('click', () => {
        orderList.style.display = 'flex'; // Visar modalen
        backgroundBlur.style.display = 'block'; // Visar den blurrade bakgrunden
    });

    hideBtn.addEventListener('click', () => {
        orderList.style.display = 'none'; // Gömmer modalen
        backgroundBlur.style.display = 'none'; // Gömmer den blurrade bakgrunden
    });

    // Klick utanför modal för att stänga modal och bakgrund
    backgroundBlur.addEventListener('click', () => {
        orderList.style.display = 'none'; // Gömmer modalen
        backgroundBlur.style.display = 'none'; // Gömmer den blurrade bakgrunden
    });
});




  