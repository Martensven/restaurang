// featuredFood.js

// Vi gjorde en lista med veckodagarna
function getDayName() {
  const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
  const today = new Date(); // Vi hämtar dagens datum och tid
  return days[today.getDay()]; // Vi lämnar tillbaka namnet på dagen baserat på dagens index
}

// Visar om det är lunch eller middag
function getMealTime() {
  const now = new Date(); //Hämtar den aktuella tiden
  const time = now.getHours() * 60 + now.getMinutes(); //konverterar allt till minuter
  return time < 930 ? "Dagens lunch:" : "Dagens middag:"; // Till 15.30 är det lunch och efter blir det middag
}

// Väljer en slumpmässig maträtt
function getRandomDish() {
    //kontrollerar ifall dbd existerar
  if (typeof dbd !== "undefined" && dbd.bbqs) {
      const dishes = dbd.bbqs; //hämtar listan med maträtter från dbd.bbqs
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  } else {
      console.error("Kunde inte hitta dbd.bbqs!");
      return null;
  }
}

// Renderar utvald maträtt
function renderFeaturedFood() {
  const dayName = getDayName(); //visar vilken dag det är
  const mealTime = getMealTime(); //Visar om det är lunch eller middag
  const food = getRandomDish(); //Hämtar en maträtt

  if (food) {
    // Hittas det en maträtt så skrivs innehåll som maträttens namn, pris, beskriving osv
      document.getElementById("dagens-namn").textContent = `${mealTime} ${dayName}`;
      document.getElementById("mat-bild").src = food.img;
      document.getElementById("mat-bild").alt = food.name;
      document.getElementById("mat-namn").textContent = food.name;
      document.getElementById("mat-beskrivning").textContent = food.dsc;
      document.getElementById("mat-pris").textContent = `${food.price.toFixed(2)} kr`;
      document.getElementById("mat-land").textContent = food.country;
  } else {
      console.error("Ingen maträtt hittades att rendera!"); //Hittas ingen maträtt, loggas det ett fel
  }
}

// Kör koden när sidan laddas
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedFood(); //Visar maträtt direkt när sidan laddas
  setInterval(renderFeaturedFood, 10000); //Uppdaterar bild varje 10 sekunder
});


