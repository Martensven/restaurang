/* Popup rutan för information */
window.onload = function () {
    console.log("Sidan har laddats!");
    const infoPopUp = document.getElementById('infopopup');
    infoPopUp.style.display = 'flex';
};

document.addEventListener("DOMContentLoaded", function () {
    var closeButton = document.getElementById('Jagfortstorbutton');

    closeButton.addEventListener('click', function () {
        console.log("Knappen klickades!");  // Testa om klicket registreras
        document.getElementById('infopopup').style.display = 'none';
    })
});

console.log(dbd);

function populateMenu(data, menuElementId) {
    const menuElement = document.getElementById(menuElementId);
    Object.values(data).forEach(dish => {
        const aside = document.createElement("aside");
        aside.className = "dish";
        aside.innerHTML = `
            <img src="${dish.img}" alt="${dish.name}">
            <section class="dishText">
                <h2>${dish.name}</h2>
                <p>${dish.dsc}</p>
                <p>Pris: ${dish.price}:-</p>
                <button class="itemBtn" id="${dish.id}" value="${dish.name}, pris: ${dish.price} kr">Lägg till</button>
            </section>
        `;
        menuElement.appendChild(aside);
    });
}

// Använd funktionen för att skapa alla menyer:
populateMenu(dbd.bbqs, "bbqMenu");
populateMenu(dbd.burgers, "burgerMenu");
populateMenu(dbd.drinks, "drinkMenu");
populateMenu(dbd.desserts, "dessertMenu");

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

    orderList.forEach((item, index) => { // Lägg till index för att hitta rätt element
        const itemTotal = item.quantity * item.price;
        totalPrice += itemTotal;

        // Skapa en listpunkt för varje vara
        const li = document.createElement("li");
        li.classList = 'liOrderList'
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

        const removeBtn = document.createElement("button");
        removeBtn.classList = 'removeBtn';
        removeBtn.innerHTML = `<strong>X</strong>`
        removeBtn.dataset.index = index; // Spara index som data-attribute
        removeBtn.addEventListener("click", () => {
            removeItem(index); // Kör funktionen removeItem när knappen klickas
        });

        li.appendChild(removeBtn); // Lägg till "Ta bort"-knappen i listpunkten
        orderSummary.appendChild(li); // Lägg till listpunkten i översikten
    });


    const showBtn = document.getElementById("showBtn");

    if (orderSummary.getElementsByTagName("li").length > 0) {
        showBtn.style.display = 'flex'; // Visa knappen om det finns li-element
    } else {
        showBtn.style.display = 'none'; // Dölja knappen om det inte finns li-element
    }
    
    // Lägg till totala priset
    const totalP = document.createElement("p");
    totalP.classList = 'kundVagn';
    totalP.textContent = `Totalt: ${totalPrice.toFixed(2)} kr`;
    orderSummary.appendChild(totalP);

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
    
    updateOrderSummary(); // Uppdatera översikten
}

//funktion för att öka kvantitet av en vara
function addQuantity (index) {
    const item = orderList[index]; // Vi hämtar varan från listan baserat på index
    item.quantity += 1;
}

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
