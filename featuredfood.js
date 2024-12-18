// featuredFood.js

const dbd = {
  "burgers": [
      {
          "id": "the-gramercy-tavern-burger-4-pack",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Gramercy Tavern",
          "dsc": "The Gramercy Tavern Burger - 4 Pack",
          "price": 99,
          "rate": 5,
          "country": "Stockholm kungenskurva 5a"
      },
      {
          "id": "vegan-burger-grill-kit-for-4",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105946/vegan-burger-grill-kit-for-4.1450ccef8c44f7394c93f58450ce67b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Lekka Burger",
          "dsc": "Vegan Burger Grill Kit for 4",
          "price": 79,
          "rate": 4,
          "country": "Stockholm kungenskurva 5a"
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
          "country": "Stockholm kungenskurva 5a"
      },
      {
          "id": "bbq-pork-spare-ribs-2-racks",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91839/texas-sized-bbq-ribs-2-racks.317434b983d87ea730139222ae983774.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Snow's BBQ",
          "dsc": "Texas Sized BBQ Ribs - 2 Racks",
          "price": 139,
          "rate": 5,
          "country": "Stockholm kungenskurva 5a"
      },
      {
          "id": "guys-bbq-trash-can-nachos-caliente-margaritas",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134759/guys-bbq-trash-can-nachos-caliente-margaritas.8e15c70f4f0aef2bc3643274bd29459a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Guy Fieri",
          "dsc": "Guy's BBQ Trash Can Nachos + Caliente Margaritas",
          "price": 95,
          "rate": 5,
          "country": "Stockholm kungenskurva 5a"
      },
  ],
  "drinks": [
      {
          "id": "new-orleans-hurricane-mix",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Franco's Hurricane Mix",
          "dsc": "New Orleans Hurricane Mix",
          "price": 39,
          "rate": 5,
          "country": "Stockholm kungenskurva 5a"
      },
      {
          "id": "chickpea-chiller-kit-for-6",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106484/chickpea-chiller-kit-for-6.4310765c71ba524b5462ea9330d32446.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "The Hummus & Pita Co.",
          "dsc": "Chickpea Chiller Kit for 6",
          "price": 89,
          "rate": 4,
          "country": "Stockholm kungenskurva 5a"
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
          "country": "Stockholm kungenskurva 5a"
      },
      {
          "id": "sea-salted-caramel-swirl-cheesecake",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Cotton Blues Cheesecake Company",
          "dsc": "Sea-Salted Caramel Swirl Cheesecake",
          "price": 65,
          "rate": 4,
          "country": "Stockholm kungenskurva 5a"
      },
  ]
};

// Hämtar dagens namn
function getDayName() {
  const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
  const today = new Date();
  return days[today.getDay()];
}

// Visar om det är lunch eller middag
function getMealTime() {
  const now = new Date();
  const time = now.getHours() * 60 + now.getMinutes();
  return time < 930 ? "Dagens lunch:" : "Dagens middag:";
}

// Väljer en slumpmässig maträtt
function getRandomDish() {
  if (typeof dbd !== "undefined" && dbd.bbqs) {
      const dishes = dbd.bbqs;
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  } else {
      console.error("Kunde inte hitta dbd.bbqs!");
      return null;
  }
}

// Renderar utvald maträtt
function renderFeaturedFood() {
  const dayName = getDayName();
  const mealTime = getMealTime();
  const food = getRandomDish();

  if (food) {
      document.getElementById("dagens-namn").textContent = `${mealTime} ${dayName}`;
      document.getElementById("mat-bild").src = food.img;
      document.getElementById("mat-bild").alt = food.name;
      document.getElementById("mat-namn").textContent = food.name;
      document.getElementById("mat-beskrivning").textContent = food.dsc;
      document.getElementById("mat-pris").textContent = `${food.price.toFixed(2)} kr`;
      document.getElementById("mat-land").textContent = food.country;
  } else {
      console.error("Ingen maträtt hittades att rendera!");
  }
}

// Kör koden när sidan laddas
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedFood();
  setInterval(renderFeaturedFood, 10000);
});

// Hämta element
const backgroundBlur = document.getElementById("backgroundBlur");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");
const orderList = document.getElementById("orderList");
const placeOrderBtn = document.getElementById("placeOrder");

//betalning popup
let paymentPopup;

// Visa Se beställning popupen
showBtn.addEventListener("click", () => {
    orderList.style.display = "block"; // Visa beställningslistan
    backgroundBlur.style.display = "block"; // Visa suddig bakgrund
});

// Döljer Se beställning popupen
hideBtn.addEventListener("click", () => {
    orderList.style.display = "none"; // Döljer beställningslistan
    backgroundBlur.style.display = "none"; // Döljer suddig bakgrund
});

// Visa betalning popup när "Lägg beställning" klickas
placeOrderBtn.addEventListener("click", () => {
    // Skapa betalning popup
    paymentPopup = document.createElement("div");
    paymentPopup.id = "paymentPopup";
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
                <button type="submit">Betala nu</button>
            </form>
        </div>
    `;
    paymentPopup.className = "popup";
    document.body.appendChild(paymentPopup);

    // Visa betalning popup
    paymentPopup.style.display = "block";

    // Hantera stängning av betalnings-popup
    const closePaymentPopup = document.getElementById("closePaymentPopup");
    closePaymentPopup.addEventListener("click", () => {
        paymentPopup.style.display = "none";
        document.body.removeChild(paymentPopup); // Ta bort popupen från DOM
    });

    // Dölj betalning popup om användaren klickar utanför innehållet
    paymentPopup.addEventListener("click", (event) => {
        if (event.target === paymentPopup) {
            paymentPopup.style.display = "none";
            document.body.removeChild(paymentPopup);
        }
    });
});
