// Array van afbeelding van vlaggen, verwijzing naar de img en het juiste antwoord erbij
// Bron afbeeldingen: Wikipedia
const flags = [
  { src: "images/duitsland.png", name: "Duitsland" },
  { src: "images/noorwegen.png", name: "Noorwegen" },
  { src: "images/nederland.png", name: "Nederland" },
  { src: "images/spanje.png", name: "Spanje" },
  { src: "images/finland.png", name: "Finland" },
  { src: "images/ijsland.png", name: "Ijsland" },
  { src: "images/oostenrijk.png", name: "Oostenrijk" },
];

// Controleert juiste antwoord
let currentFlagIndex = 0;

// Variabelen gekoppeld aan html
const flagElement = document.getElementById("flag");
const feedbackElement = document.getElementById("feedback");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const correctSound = new Audio("sounds/goed.mp3");
const incorrectSound = new Audio("sounds/fout.mp3");

// Random vlag uit de array kiezen
function getRandomFlag() {
  return Math.floor(Math.random() * flags.length);
}

// Antwoord checken
function checkAnswer() {
  // Antwoord ophalen
  const userAnswer = answerInput.value.trim();
  // Antwoord ophalen voor vlag die wordt getoond
  const correctAnswer = flags[currentFlagIndex].name;

  // Feedback goed antwoord
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Goed bezig!";
    correctSound.play();
    // Timer (hulp van Lucas)
    setTimeout(() => {
      // Kiest random vlag
      currentFlagIndex = getRandomFlag();
      // Nieuwe vlag
      flagElement.src = flags[currentFlagIndex].src;
      // Invoerveld leegmaken
      answerInput.value = "";
      // Feedback weghalen
      feedbackElement.textContent = ""; 
    }, 2000);
  } else {
    // Feedback fout antwoord
    feedbackElement.textContent = "Helaas, probeer het opnieuw.";
    incorrectSound.play();
  }
}

// Eventlistener op submitknop om antwoord te controleren 
submitBtn.addEventListener("click", checkAnswer);