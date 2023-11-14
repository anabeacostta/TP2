const questions = [
    {
        question: "Qual mundo é mais atraente para você?",
        options: ["Um universo de fadas e seres mágicos, bonitos e misteriosos", "Um mundo utópico problemático, a espera de alguém para liderar uma revolução", "Um lugar misterioso onde assasinatos acontecem frequentemente"],

    },
    {
        question: "Quais caracteristicas você admira em um amigo?",
        options: ["Organizada, Eficiente, Leal, Determinada", "Charmoso, Boa comunicação, Miss simpátia", "Aparece nos momentos certos, Gosta de crianças, Atrativo", "Saturn"],
    
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const question = questions[currentQuestion];

    questionContainer.innerHTML = `<p>${question.question}</p>`;

    optionsContainer.innerHTML = question.options.map((option, index) => `
        <button onclick="checkAnswer(${index})">${option}</button>
    `).join('');
}

function checkAnswer(index) {
    const question = questions[currentQuestion];
    const selectedOption = question.options[index];

    if (selectedOption === question.correctAnswer) {
        score++;
    }

    if (currentQuestion === questions.length - 1) {
        displayResult();
    } else {
        currentQuestion++;
        displayQuestion();
    }
}

function displayResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.textContent = `Your score is ${score}/${questions.length}.`;
}

function nextQuestion() {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = '';

    if (currentQuestion < questions.length) {
        displayQuestion();
    }
}

// Display the first question on page load
window.onload = displayQuestion;