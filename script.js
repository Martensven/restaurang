/* Popup rutan för information */
window.onload = function () { //När fönstret laddas så skapar vi en funktion
    console.log("Sidan har laddats!"); //Vi consol-loggar att sidan har laddat klart
    const infoPopUp = document.getElementById('infopopup'); //Vi skapar en variabel som tar värdet från element med id infopopup
    infoPopUp.style.display = 'flex'; //Vi sätter elementets display-egenskap till flex så att elementet blir synligt
};

document.addEventListener("DOMContentLoaded", function () { //Vi sätter en eventlistener på dokumentet som väntar på att dokumentet ska laddas klart
    var closeButton = document.getElementById('Jagfortstorbutton'); //Vi skapar en variabel som tar värdet från element med id Jagfortstorbutton

    closeButton.addEventListener('click', function () { //Vi använder variabeln för att lägga till en eventlistener på knappen som aktiveras när man klickar på den och skapar en funktion
        console.log("Knappen klickades!");  //Vi consol-loggar att knappen klickades
        document.getElementById('infopopup').style.display = 'none'; //Vi sätter elementets display-egenskap till none så att elementet blir osynligt
    })
});

console.log(dbd); //Vi consolloggar ut objektet som innehåller alla maträtter för att enklare kunna navigera i denna

function populateMenu(data, menuElementId) { //vi skapar en funktion för att skapa en meny med flera element
    const menuElement = document.getElementById(menuElementId); //Skapar en variabel med värde från menuElementId
    Object.values(data).forEach(dish => { //Vi omvandlar objektet till en array och hämtar datan. För varje item(dish) i arrayen så kör vi en iteration 
        const aside = document.createElement("aside"); //Vi skapar ett element med aside-tag
        aside.className = "dish"; //Vi sätter klassnamn till dish
        //Nedan skapar vi elementen som ska ligga i vår aside, vi hämtar även data från respektive fält i arrayen för att populera elementen
        aside.innerHTML = ` 
            <img src="${dish.img}" alt="${dish.name}">
            <section class="dishText">
                <h2>${dish.name}</h2>
                <p>${dish.dsc}</p>
                <p>Pris: ${dish.price}:-</p>
                <button class="itemBtn" id="${dish.id}" value="${dish.name}, pris: ${dish.price} kr">Lägg till</button>
            </section>
        `;
        menuElement.appendChild(aside); //Vi använder append så att elementen läggs till i dokumentet
    });
}

//Vi använder funktionen populateMenu på ett sätt för varje kategori av rätter som vi använder. Där dbd.bbqs till exempel motsvarar data och "bbqMenu" motsvarar menuElementId
populateMenu(dbd.bbqs, "bbqMenu");
populateMenu(dbd.burgers, "burgerMenu");
populateMenu(dbd.drinks, "drinkMenu");
populateMenu(dbd.desserts, "dessertMenu");

let orderList = []; //Vi skapar en array som vi sedan lägger till maträtter i

// Funktion för att hantera knapptryck och lägga till i orderlistan
document.addEventListener("click", (event) => { //Vi lägger till en eventlistener som väntar på ett klickevent
    if (event.target.classList.contains("itemBtn")) { //Om knappen som klickas har klassen "itemBtn"
        const [name, priceInfo] = event.target.value.split(", pris: "); //Då delar vi upp namn och pris till olika variabler
        const price = parseFloat(priceInfo.replace(" kr", "")); //Vi omvandlar pris till ett nummer

        // Kontrollera om objektet redan finns i beställningen
        const existingItem = orderList.find(item => item.name === name); //Vi skapar en variabel som tar värdet från listan och kontrollerar om ett item redan finns i listan, genom att jämföra namn på det som läggs till och det som redan finns

        if (existingItem) { //Om variabeln existingItem uppfylls 
            existingItem.quantity += 1; // Öka kvantiteten med 1
        } else { //annars
            orderList.push({ name, price, quantity: 1 }); //Lägger vi till nytt item i listan
        }

        updateOrderSummary(); //Vi kör funktionen 
    }
});


// Funktion för att uppdatera orderöversikten

function updateOrderSummary() { //Vi skapar en funktion
    const orderSummary = document.getElementById("orderSummary"); //Vi skapar en variabel med värdet från orderSummary
    orderSummary.innerHTML = ""; //Vi tömmer listan så att vi kan fylla på den på nytt

    let totalPrice = 0; //Vi sätter det totala priset till 0

    orderList.forEach((item, index) => { //Vi skapar en forEach loop som kör en gång per item i listan. Vi ser även till att hålla koll på index
        const itemTotal = item.quantity * item.price; //Vi skapar en variabel som räknar ut priset på en maträtt multiplicerat med kvantiteten av maträtten 
        totalPrice += itemTotal; //Vi adderar varje maträtts totalpris till beställningens totalpris

        const li = document.createElement("li"); //Vi skapar ett listelement (per iteration)
        li.classList = 'liOrderList'; //Varje li-element får samma klass
        //Nedan skapar vi elementen som ska ligga i vår li, vi hämtar även data från respektive fält i arrayen för att populera elementen
        li.innerHTML = `
            <section class="namePrice">
            ${item.name} ${itemTotal.toFixed(2)} kr
            </section>
            <section class="quant">
            <button class="quantityDown addRemove" data-index="${index}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
            <input type="number" min="1" value="${item.quantity}" class="quantity" disabled>
            <button class="quantityUp addRemove" data-index="${index}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></button>
            </section>
            `;

        const removeBtn = document.createElement("button"); //Vi skapar en knapp
        removeBtn.classList = 'removeBtn'; //Knappen får en klass
        removeBtn.innerHTML = `<strong>X</strong>` //Ett X ligger mitt i rutan
        removeBtn.dataset.index = index; //Vi sparar index som data-attribute
        removeBtn.addEventListener("click", () => { //Vi lägger till en evenlistener som väntar på ett klick som kör nedan funktion
            removeItem(index); // Kör funktionen removeItem när knappen klickas
        });

        li.appendChild(removeBtn); //Vi lägger till knappen i li-elementet
        orderSummary.appendChild(li); //Vi lägger till själva li-elementet i listan
    });


    const showBtn = document.getElementById("showBtn"); //Vi skapar en variabel som tar värdet från showBtn, denna ligger med display: none;

    if (orderSummary.getElementsByTagName("li").length > 0) { //Om vår ul är längre än 0
        showBtn.style.display = 'flex'; //Vi sätter elementets display-egenskap till flex så att elementet blir synligt
    } else { //Annars 
        showBtn.style.display = 'none'; //Vi sätter elementets display-egenskap till none så att elementet blir osynligt
    }

    // Lägg till totala priset
    const totalP = document.createElement("p"); //Vi skapar ett p-element
    totalP.classList = 'kundVagn'; //Vi lägger till en klass
    totalP.textContent = `Totalt: ${totalPrice.toFixed(2)} kr`; //Vi populerar elementet med ny text där vi skriver ut totalpriset
    orderSummary.appendChild(totalP); //Vi lägger till elementet

    // Funktion för att ta bort en vara från orderlistan
    function removeItem(index) {
        orderList.splice(index, 1); // Ta bort objektet från arrayen
        updateOrderSummary(); // Uppdatera översikten
    }

    // Funktion för att ta bort en vara från orderlistan

function lessItem(index) {
    const item = orderList[index]; // Vi hämtar varan från listan baserat på index
    
    if (item.quantity > 1) {
        item.quantity -= 1; // Minska kvantiteten med 1
    } else {
        item.quantity == 1;
    }
//funktion för att öka kvantitet av en vara
function addQuantity (index) {
    const item = orderList[index]; // Vi hämtar varan från listan baserat på index
    item.quantity += 1;

    // Lägg till event listeners för "+" och "-" knappar
    document.querySelectorAll(".quantityUp").forEach(button => {
        button.addEventListener("click", () => {
            const index = parseInt(button.dataset.index, 10); // Få index från data-attribute
            addQuantity(index); // Öka kvantiteten
            updateOrderSummary(); // Uppdatera översikten efter ändring
        });
    });

    document.querySelectorAll(".quantityDown").forEach(button => {
        button.addEventListener("click", () => {
            const index = parseInt(button.dataset.index, 10); // Få index från data-attribute
            lessItem(index); // Minska kvantiteten
        });
    });
}

// Funktion för att visa orderlist
function showOrder() {
    const sidebar = document.querySelector('#orderList'); //Vi hittar sidan där orderlistan ska visas
    sidebar.style.display = 'flex'; // Vi använder display element flex för att visa orderlistan.
}

//Funktion för att dölja orderlistan
function hideOrder() {
    const sidebar = document.querySelector('#orderList'); //Vi hittar sidan där orderlistan ska visas
    sidebar.style.display = 'none'; // Vi använder displat element till none för att dölja orderlistan
}

//knappar för att visa och dölja orderlistan
const showOrderList = document.getElementById('showBtn') 
const hideOrderList = document.getElementById('hideBtn')

//Vi la till event listeners för hantering gällande visning och döljning av orderlistan
showOrderList.addEventListener('click', showOrder)
hideOrderList.addEventListener('click', hideOrder)

// Visa Se beställning popupen
showBtn.addEventListener("click", () => {
    orderList.style.display = "flex"; // Vi ändrar display element till flex för att visa popupen
});

// Döljer Se beställning popupen
hideBtn.addEventListener("click", () => {
    orderList.style.display = "none"; // Döljer beställningslistan med display element none
});

//betalning popup
let paymentPopup; //Variabel som hanterar popup fönstret

const placeOrderBtn = document.getElementById("placeOrder"); //hämta knapp för lägg beställning

// Visa betalning popup när Lägg beställning klickas
placeOrderBtn.addEventListener("click", () => {
    // Skapa betalning popup
    paymentPopup = document.createElement("div"); //Vi skapande en div för popup
    paymentPopup.id = "paymentPopup"; //Vi gav en ID för att kunna identifiera popupen
    
    // Vi gav den innehållet för själva popupen som HTML
    paymentPopup.innerHTML = `
         <div class="popup-content">
            <span id="closePaymentPopup" class="stang-popup">&times;</span>
            <h2>Betalningsinformation</h2>
            <p>Vänligen fyll i din betalningsinformation nedan:</p>
            <form>
                <label for="kortnummer">Kortnummer:</label><br>
                <input type="text" id="kortnummer" name="kortnummer" placeholder="1234 5678 9012 3456" required><br><br>
                <label for="kortdatum">Utgångsdatum:</label><br>
                <input type="text" id="kortdatum" name="kortdatum" placeholder="MM/ÅÅ" required><br><br>
                <label for="cvc">CVC:</label><br>
                <input type="text" id="cvc" name="cvc" placeholder="123" required><br><br>
                <div class="button-container">
                    <button type="submit" id="payNow">Betala nu</button>
                    <button type="button" id="goBack">Tillbaka</button>
                </div>
            </form>
        </div>
    `;
    paymentPopup.className = "popup"; // Vi tilldela en klass för styling
    document.body.appendChild(paymentPopup);

    // Visa betalning popup
    paymentPopup.style.display = "block";

    // Hantera stängning av betalnings popup
    const closePaymentPopup = document.getElementById("closePaymentPopup");
    closePaymentPopup.addEventListener("click", () => {
        paymentPopup.style.display = "none"; //döljer popupen
        document.body.removeChild(paymentPopup); // Tar bort popupen från DOM
    });

    // Hantera Tillbaka knappen
    const goBackButton = document.getElementById("goBack");
    goBackButton.addEventListener("click", () => {
        paymentPopup.style.display = "none"; //döljer popupen
        document.body.removeChild(paymentPopup); // Stäng popupen
    });

    // Döljer betalning popupen om besökaren klickar utanför innehållet
    paymentPopup.addEventListener("click", (event) => {
        if (event.target === paymentPopup) { //Kollar ifall besökaren klickar utanför popupen
            paymentPopup.style.display = "none";
            document.body.removeChild(paymentPopup);
        }
    });
});
}};
