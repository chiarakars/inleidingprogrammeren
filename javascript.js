// Array van afbeelding van vlaggen, verwijzing naar de img en het juiste antwoord erbij
const flags = [
  { src: "images/duitsland.png", name: "Duitsland" },
  { src: "images/noorwegen.png", name: "Noorwegen" },
  { src: "images/nederland.png", name: "Nederland" },
  { src: "images/spanje.png", name: "Spanje" },
];

// Variabele om de huidige vlag index bij te houden
let currentFlagIndex = 0;

// Referenties naar de HTML elementen
const flagElement = document.getElementById("flag");
const feedbackElement = document.getElementById("feedback");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const correctSound = new Audio("sounds/goed.mp3");
const incorrectSound = new Audio("sounds/fout.mp3");

// Functie om een nieuwe willekeurige vlag te kiezen
function getRandomFlag() {
  return Math.floor(Math.random() * flags.length);
}

// Functie om het antwoord van de gebruiker te controleren
function checkAnswer() {
  // Haal het antwoord van de gebruiker op en zet het om naar kleine letters
  const userAnswer = answerInput.value.trim();
  // Haal het juiste antwoord voor de huidige vlag op en zet het om naar kleine letters
  const correctAnswer = flags[currentFlagIndex].name;

  // Controleer of het antwoord van de gebruiker correct is
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Goed bezig!";
    correctSound.play();

    // Timer van 2 seconden voordat de volgende vlag wordt getoond
    setTimeout(() => {
      // Kies een nieuwe willekeurige vlag
      currentFlagIndex = getRandomFlag();
      // Update de vlag afbeelding
      flagElement.src = flags[currentFlagIndex].src;
      // Maak het invoerveld leeg
      answerInput.value = "";
      feedbackElement.textContent = ""; // Reset de feedback
    }, 2000);
  } else {
    // Als het antwoord onjuist is, geef feedback aan de gebruiker
    feedbackElement.textContent = "Helaas, probeer het opnieuw.";
    incorrectSound.play();
  }
}

// Voeg een event listener toe aan de submit knop om de checkAnswer functie aan te roepen wanneer er op geklikt wordt
submitBtn.addEventListener("click", checkAnswer);

// // Array of flag objects, each with a source URL and the name of the country
// const flags = [
//     { src: 'images/duitsland.png', name: 'Duitsland' },
//     { src: 'images/noorwegen.png', name: 'Noorwegen' },
//     { src: 'images/nederland.png', name: 'Nederland' },
//     { src: 'images/spanje.png', name: 'Spanje' }
// ];

// // Variable to keep track of the current flag index
// let currentFlagIndex = 0;

// // Get references to the HTML elements
// const flagElement = document.getElementById('flag');
// const feedbackElement = document.getElementById('feedback');
// const answerInput = document.getElementById('answerInput');
// const submitBtn = document.getElementById('submitBtn');

// // Function to check the user's answer
// function checkAnswer() {
//     // Get the user's answer and convert it to lowercase
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     // Get the correct answer for the current flag and convert it to lowercase
//     const correctAnswer = flags[currentFlagIndex].name.toLowerCase();

//     // Check if the user's answer is correct
//     if (userAnswer === correctAnswer) {
//         feedbackElement.textContent = "Goed bezig!";
//         correctSound.play();
//         // Door naar afbeelding van volgende vlag (chatGPT)
//         currentFlagIndex++;
//         if (currentFlagIndex < flags.length) {
//             // Update the flag image source
//             flagElement.src = flags[currentFlagIndex].src;
//             // Clear the input field
//             answerInput.value = '';
//         } else {
//             // If all flags are guessed, congratulate the user and disable input
//             feedbackElement.textContent = "Gefeliciteerd! Je hebt alle vlaggen geraden.";
//             submitBtn.disabled = true;
//             answerInput.disabled = true;
//         }
//     } else {
//         // If the answer is incorrect, give feedback to the user
//         feedbackElement.textContent = "Helaas, probeer het opnieuw.";
//         incorrectSound.play();
//     }
// }

// // Add an event listener to the submit button to call checkAnswer function when clicked
// submitBtn.addEventListener('click', checkAnswer);

// // audio toevoegen als je op verzenden klikt krijg je een sound te horen afhankelijk of het goed of fout antwoord is>
// let play = document.getElementById("play");

// function playMusic() {
//   let audio = new Audio("sounds/goed.mp3");
//   audio.play();
// }
// play.addEventListener("click", playMusic);

// let vlag = document.querySelector('#duitsland');
// let vlagStatus = true;
// let verzendenKnop = ("#submitKnop");

// function vlagKnop(){
//     if (vlagStatus == true){
//         vlag.src = "images/noorwegen.png";
//         vlagStatus = false;
//     } else {
//         vlag.src = "images/spanje.png"
//         vlagStatus = true;
//     }
// }

// vlag.addEventListener('click', vlagKnop);

// // Het juiste antwoord per vlag
// const correctDuitsland = "Duitsland";
// const correctNederland = "Nederland";
// const correctNoorwegen = "Noorwegen";
// const correctPortugal = "Portugal";
// const correctSpanje = "Spanje";

// // Haal het antwoord van de gebruiker op en verwijder eventuele witruimte
// const userAnswer = document.getElementById("answerInput").value.trim();

// const feedbackElement = document.getElementById("feedback");
// const correctSound = document.getElementById("correctSound");
// const incorrectSound = document.getElementById("incorrectSound");

// // array met de images van verschillende vlaggen uit het mapje images
// const positivefeedback = ['goed gedaan', 'lekker bezig', 'wauwie', 'slayyyy'];

// timer

// // Duitsland
// if (userAnswer === correctDuitsland) {
//   feedbackElement.textContent = "Lekker bezig!";
//   correctSound.play(); // Speel correct geluid af
// } else {
//   feedbackElement.textContent = "Fout. Probeer het opnieuw.";
//   incorrectSound.play(); // Speel incorrect geluid af
// }

//   }

// const flags = [
//   { src: "images/nederland.png", name: "Nederland" },
//   { src: "images/duitsland.png", name: "Duitsland" },
//   { src: "images/noorwegen.png", name: "Noorwegen" },
//   { src: "images/portugal.png", name: "Portugal" },
//   { src: "images/spanje.png", name: "Spanje" },
// ];

// let currentFlagIndex;
// const feedbackElement = document.getElementById("feedback");
// const correctSound = document.getElementById("correctSound");
// const incorrectSound = document.getElementById("incorrectSound");

// function pickRandomFlag() {
//   currentFlagIndex = Math.floor(Math.random() * flags.length);
//   document.getElementById("flag").src = flags[currentFlagIndex].src;
// }

// function checkAnswer() {
//   const userAnswer = document
//     .getElementById("answerInput")
//     .value.trim()
//     .toLowerCase();
//   const correctAnswer = flags[currentFlagIndex].name.toLowerCase();

//   // Kies een nieuwe willekeurige vlag
//   pickRandomFlag();
//   document.getElementById("answerInput").value = ""; // Maak het invoerveld leeg
// }

// // Voeg een event listener toe aan de submit knop
// document.getElementById("submitBtn").addEventListener("click", checkAnswer);

// // Kies een eerste vlag bij het laden van de pagina
// window.onload = pickRandomFlag;
