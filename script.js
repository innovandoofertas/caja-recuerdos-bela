const questions = [
  {
    title: "Candado 1",
    text: "¿Cuál fue el primer apodo que te di?",
    answers: ["estorbo"]
  },
  {
    title: "Candado 2",
    text: "¿Cuál es mi sabor favorito?",
    answers: ["fresa"]
  },
  {
    title: "Candado 3",
    text: "¿Con qué dulce me declaré?",
    answers: ["tutsi pop", "tutsipop", "tutsi"]
  }
];

let current = 0;

const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");
const game = document.getElementById("game");
const final = document.getElementById("final");
const box = document.getElementById("box");

function loadQuestion() {
  questionTitle.textContent = questions[current].title;
  questionText.textContent = questions[current].text;
  answerInput.value = "";
  message.textContent = "";
}

function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function checkAnswer() {
  const userAnswer = normalize(answerInput.value);
  const validAnswers = questions[current].answers.map(normalize);

  if (validAnswers.includes(userAnswer)) {
    current++;
    updateHearts();

    if (current < questions.length) {
      message.style.color = "#d94f7c";
      message.textContent = "Correcto 💗 Se abrió un candado.";
      setTimeout(loadQuestion, 1000);
    } else {
      openBox();
    }
  } else {
    message.style.color = "#9b1c3d";
    message.textContent = "Casi, intenta otra vez. Este recuerdo sí lo conoces 💭";
  }
}

function updateHearts() {
  const filled = "♥ ".repeat(current);
  const empty = "♡ ".repeat(questions.length - current);
  hearts.textContent = filled + empty;
}

function openBox() {
  box.classList.add("open");
  game.classList.add("hidden");
  final.classList.remove("hidden");
  hearts.textContent = "♥ ♥ ♥";
}

loadQuestion();