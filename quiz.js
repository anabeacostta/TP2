const questions = [
    {
        question: "Qual mundo é mais atraente para você?",
        options: ["Um universo de fadas e seres mágicos, bonitos e misteriosos", "Um mundo utópico problemático, a espera de alguém para liderar uma revolução", "Um lugar misterioso onde assasinatos acontecem frequentemente"],

    },
    {
        question: "Quais caracteristicas você admira em um amigo?",
        options: ["Organizada, Eficiente, Leal, Determinada", "Charmoso, Boa comunicação, Miss simpátia", "Aparece nos momentos certos, Gosta de crianças, Atrativo","Medico, bonito, rico, forte, inteligente, bom de lábia"],
    
    },
    {
        question: "Escolha seu pai",
        options: ["Mestre dos Assassinos, esperto, carismatico", "Um presidente altamente inteligente e estrategista, disciplinado e sofisticado", "Um bruxo poderoso, incrivelmente inteligente e habilidoso que é capaz de reunir seguidores fervorosos e inspirar lealdade", "Um ser sobrenatural e imortal, que possui uma presença magnética e charmosa"],
    },
    {
        question: "O que você faria para ameaçar alguém?",
        options: [" Expor o amante do companheiro da pessoa", "Tirar do armário em rede nacional", "Ameaçar com rosas.","Um presidente altamente inteligente e estrategista, disciplinado e sofisticado" , "Um bruxo poderoso, incrivelmente inteligente e habilidoso que é capaz de reunir seguidores fervorosos e inspirar lealdade", "Um ser sobrenatural e imortal, que possui uma presença magnética e charmosa"],
    },
    {
        question: "Como você conquistaria seu par romântico ?",
        options: ["Se tornaria um criminoso", "Jogue terra na comida dela(e)", "abrigar ela(e)", "Seja comunista"],
    
    },
    {
        question: "Escolha u inimigo",
        options: ["Um bruxo teimoso e impulsivo", "Um principe herdeiro indeciso", "Uma jogadora voraz habilidoza e teimosa"],
    
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