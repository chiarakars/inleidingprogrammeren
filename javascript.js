console.log("log check");

document.getElementById('answerVeld').addEventListener('submit', function (event) {
    event.preventDefault(); // Voorkom dat het formulier verzonden wordt

// Array met de paden naar de vlaggenafbeeldingen
const flags = [
    'images/nederland.png',
    'images/belgie.png',
    'images/duitsland.png',
    'images/frankrijk.png',
    'images/spanje.png'
];

// Functie om een willekeurige vlag te kiezen en in te stellen
function setRandomFlag() {
    const randomIndex = Math.floor(Math.random() * flags.length);
    const randomFlag = flags[randomIndex];
    document.getElementById('flagImage').src = randomFlag;
}

// Zorg ervoor dat de functie wordt aangeroepen als de pagina is geladen
window.onload = setRandomFlag;

    // Het juiste antwoord
    const correctAnswer = "Duitsland"; 
    // Haal het antwoord van de gebruiker op en verwijder eventuele witruimte
    const userAnswer = document.getElementById('answerInput').value.trim(); 

    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Lekker bezig!";
    } else {
        feedbackElement.textContent = "Fout. Probeer het opnieuw.";
    }

    // feedbackElement.style.display = "block"; // Toon het feedbackelement
});

// audio toevoegen als je op verzenden klikt krijg je een sound te horen afhankelijk of het goed of fout antwoord is>
    let play = document.getElementById("play");

function playMusic() {
    let audio = new Audio("sounds/goed.mp3");
    audio.play()
}
play.addEventListener("click", playMusic);


// !!!!! bronvermelding

// const btnNieuwShirt = document.querySelector("button");

// function veranderShirt() {
//     let shirt = "roze shirt";
//     document.querySelector('p').textContent = shirt;
//     console.log("Je hebt het roze shirt geselecteerd");
// }

// btnNieuwShirt.addEventListener('click', veranderShirt);


// const broekKnop = document.querySelector("#broek");

// volgorde:
// - let
// - functions
// - event listeners
// overal commentaar