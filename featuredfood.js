// featuredFood.js

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


