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


  ],
  "drinks": [
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
          "id": "chickpea-chiller-kit-for-6",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106484/chickpea-chiller-kit-for-6.4310765c71ba524b5462ea9330d32446.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "The Hummus & Pita Co.",
          "dsc": "Chickpea Chiller Kit for 6",
          "price": 89,
          "rate": 4,
          "country": "New York, NY"
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
          "id": "sea-salted-caramel-swirl-cheesecake",
          "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          "name": "Cotton Blues Cheesecake Company",
          "dsc": "Sea-Salted Caramel Swirl Cheesecake",
          "price": 65,
          "rate": 4,
          "country": "Hattiesburg, MS"
      },
 
  ]
};

// Hämtar dagens namn
function getDayName() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  return days[today.getDay()];
}

// Visar om det är lunch eller middag
function getMealTime() {
  const now = new Date();
  const time = now.getHours() * 60 + now.getMinutes(); // Total tid i minuter

  // Lunch: 00.00 till 15.30, Middag: 15.30 till 23.59
  return time < 930 ? "Today's lunch:" : "Today's dinner:";
}

// Väljer en slumpmässig maträtt från gruppens dbd.bbqs
function getRandomDish() {
  if (typeof dbd !== "undefined" && dbd.bbqs) { // Kontrollera att dbd finns
      const dishes = dbd.bbqs;
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  } else {
      console.error("Kunde inte hitta dbd.bbqs! Kontrollera att db.js är korrekt inkluderat.");
      return null;
  }
}

// Renderar utvald maträtt
function renderFeaturedFood() {
  const dayName = getDayName();
  const mealTime = getMealTime();
  const food = getRandomDish();

  // Kontrollera att alla HTML-element finns och att en rätt hittades
  if (food) {
      document.getElementById("day-name").textContent = `${mealTime} ${dayName}`;
      document.getElementById("food-img").src = food.img;
      document.getElementById("food-img").alt = food.name;
      document.getElementById("food-name").textContent = food.name;
      document.getElementById("food-desc").textContent = food.dsc;
      document.getElementById("food-price").textContent = `${food.price.toFixed(2)} kr`;
      document.getElementById("food-country").textContent = food.country;
  } else {
      console.error("Ingen maträtt hittades att rendera!");
  }
}

// Säkerställ att koden körs när sidan har laddats
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedFood(); // Kör första gången
  setInterval(renderFeaturedFood, 10000); // Uppdatera var 10:e sekund
});
