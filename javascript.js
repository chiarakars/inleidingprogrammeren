// Array van afbeelding van vlaggen, verwijzing naar de img en het juiste antwoord erbij
// bron afbeeldingen: wikipedia
const flags = [
  { src: "images/duitsland.png", name: "Duitsland" },
  { src: "images/noorwegen.png", name: "Noorwegen" },
  { src: "images/nederland.png", name: "Nederland" },
  { src: "images/spanje.png", name: "Spanje" },
  { src: "images/finland.png", name: "Finland" },
  { src: "images/ijsland.png", name: "Ijsland" },
  { src: "images/oostenrijk.png", name: "Oostenrijk" },
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
  // Haal het antwoord van de gebruiker op
  const userAnswer = answerInput.value.trim();
  // Haal het juiste antwoord voor de huidige vlag op
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