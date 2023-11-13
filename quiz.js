const questions = [
    {
        question: "Qual mundo é mai atraente para você?",
        options: ["Um univers de fada e sere mágicos, bonitos e misteriosos", "", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
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