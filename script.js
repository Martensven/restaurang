    //Vi skapar först ett objekt för varje rätt som innehåller information om respektive rätt.
    let bolognese = {
        name: "Spaghetti Bolognese",
        desc: 'Spaghetti från den italienska landsbygden med en generös mängd sås bolognese', 
        price: 110 + " kr",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Healthy_Spaghetti_bolognese_-_49859910097.jpg/640px-Healthy_Spaghetti_bolognese_-_49859910097.jpg",
    };

    let carbonara = {
        name: "Pasta Carbonara",
        desc: 'Rigatoni från Sicilien i en symphoni av Pecorino Romano och guanciale', 
        price: 115 + " kr",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/640px-Espaguetis_carbonara.jpg",
    };
    //Vi sätter sedan rätterna i ett nytt objekt
    const dishes = {
        bolognese,
        carbonara,
    };

    // Lägg till event listener för alla knappar
    const buttons = document.querySelectorAll('.knapp'); //Vi väljer alla knappar med klassen "knapp"
    buttons.forEach(button => { //För varje knapp
        button.addEventListener('click', (event) => { //Så skapar vi en eventlistener
            const btnPress = event.target.value; // Vi hämtar knappens förinställda värde och sparar i en variabel som heter btnPress
            const dish = dishes[btnPress]; // Vi hämtar objekt baserat på värdet på den knapp som vi har tryckt på
            if (dish) { //om knappen som vi har tryckt på har ett värde så händer följande
                const bild = document.getElementById('bild'); //Vi hämtar img-elementet med hjälp av id 
                bild.src = dish.image; // och vi ändrar källan för img-elementet för att visa bild på respektive rätt
                console.log(`Knapp tryckt: ${btnPress}`);
            }
        });
    });





