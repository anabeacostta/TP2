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

    // Redireciona para uma nova página com base na opção selecionada
    switch(selectedOption) {
        case "Um universo de fadas e seres mágicos, bonitos e misteriosos":
            window.location.href = "pagina1.html";
            break;
        case "Um mundo utópico problemático, a espera de alguém para liderar uma revolução":
            window.location.href = "pagina2.html";
            break;
        case "Um lugar misterioso onde assasinatos acontecem frequentemente":
            window.location.href = "pagina3.html";
            break;
        // Adicione mais casos conforme necessário
    }
}

//quiz.js

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
        options: [" Expor o amante do companheiro da pessoa", "Tirar do armário em rede nacional", "Ameaçar com rosas."],
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

    alert(selectedOption)
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
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    }
    checkAnswer();
}

window.onload = displayQuestion;

//aqui estamos direcionando as páginas para um trecho da história
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

    // Redireciona para uma nova página com base na opção selecionada
    switch(selectedOption) {
        case "Um universo de fadas e seres mágicos, bonitos e misteriosos":
            window.location.href = "resultado30.html";
            break;
        case "Um mundo utópico problemático, a espera de alguém para liderar uma revolução":
            window.location.href = "resultado31.html";
            break;
        case "Um lugar misterioso onde assasinatos acontecem frequentemente":
            window.location.href = "resultado32.html";
            break;
        
    }
    switch(selectedOption) {
        case "Organizada, Eficiente, Leal, Determinada":
            window.location.href = "resultado21.html";
            break;
        case "Charmoso, Boa comunicação, Miss simpátia":
            window.location.href = "resultado22.html";
            break;
        case "Aparece nos momentos certos, Gosta de crianças, Atrativo":
            window.location.href = "resultado23.html";
            break;
        case "Medico, bonito, rico, forte, inteligente, bom de lábia": 
            window.location.href = "resultado24.html";
            break;   
        
    }

    switch(selectedOption) {
        case "Mestre dos Assassinos, esperto, carismatico":
            window.location.href = "resultado1.html";
            break;
        case "Um presidente altamente inteligente e estrategista, disciplinado e sofisticado":
            window.location.href = "resultado2.html";
            break;
        case "Um bruxo poderoso, incrivelmente inteligente e habilidoso que é capaz de reunir seguidores fervorosos e inspirar lealdade":
            window.location.href = "resultado3.html";
            break;
        case "Um ser sobrenatural e imortal, que possui uma presença magnética e charmosa": 
            window.location.href = "resultado4.html";
            break;   
    }

    //Expor o amante do companheiro da pessoa", "Tirar do armário em rede nacional", "Ameaçar com rosas.","Um presidente altamente inteligente e estrategista, disciplinado e sofisticado" , "Um bruxo poderoso, incrivelmente inteligente e habilidoso que é capaz de reunir seguidores fervorosos e inspirar lealdade", "Um ser sobrenatural e imortal, que possui uma presença magnética e charmosa"


    switch(selectedOption) {
        case "Expor o amante do companheiro da pessoa":
            window.location.href = "resultado25.html";
            break;
        case "Tirar do armário em rede nacional":
            window.location.href = "resultado26.html";
            break;
        case "Ameaçar com rosas.":
            window.location.href = "resultado27.html";
            break;   
    }

    //Se tornaria um criminoso", "Jogue terra na comida dela(e)", "abrigar ela(e)", "Seja comunista


    switch(selectedOption) {
        case "Se tornaria um criminoso":
            window.location.href = "resultado6.html";
            break;
        case "Jogue terra na comida dela(e)":
            window.location.href = "resultado10.html";
            break;
        case "abrigar ela(e)":
            window.location.href = "resultado12.html";
            break;
        case "Seja comunista":
            window.location.href = "resultado14.html";
            break;       
    }


    //"Um bruxo teimoso e impulsivo", "Um principe herdeiro indeciso", "Uma jogadora voraz habilidoza e teimosa"],



    switch(selectedOption) {
        case "Um bruxo teimoso e impulsivo":
            window.location.href = "resultado15.html";
            break;
        case "Um principe herdeiro indeciso":
            window.location.href = "resultado16.html";
            break;
        case "Uma jogadora voraz habilidoza e teimosa":
            window.location.href = "resultado17.html";
            break;   
    }


}

// quz.js

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
        options: [" Expor o amante do companheiro da pessoa", "Tirar do armário em rede nacional", "Ameaçar com rosas."],
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

    alert(selectedOption)
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
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    }
    checkAnswer();
}

window.onload = displayQuestion;

//aqui estamos direcionando as páginas para um trecho da história
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

    // Redireciona para uma nova página com base na opção selecionada
    switch(selectedOption) {
        case "Um universo de fadas e seres mágicos, bonitos e misteriosos":
            window.location.href = "resultado30.html";
            break;
        case "Um mundo utópico problemático, a espera de alguém para liderar uma revolução":
            window.location.href = "resultado31.html";
            break;
        case "Um lugar misterioso onde assasinatos acontecem frequentemente":
            window.location.href = "resultado32.html";
            break;
        
    }
    switch(selectedOption) {
        case "Organizada, Eficiente, Leal, Determinada":
            window.location.href = "resultado21.html";
            break;
        case "Charmoso, Boa comunicação, Miss simpátia":
            window.location.href = "resultado22.html";
            break;
        case "Aparece nos momentos certos, Gosta de crianças, Atrativo":
            window.location.href = "resultado23.html";
            break;
        case "Medico, bonito, rico, forte, inteligente, bom de lábia": 
            window.location.href = "resultado24.html";
            break;   
        
    }

    switch(selectedOption) {
        case "Mestre dos Assassinos, esperto, carismatico":
            window.location.href = "resultado1.html";
            break;
        case "Um presidente altamente inteligente e estrategista, disciplinado e sofisticado":
            window.location.href = "resultado2.html";
            break;
        case "Um bruxo poderoso, incrivelmente inteligente e habilidoso que é capaz de reunir seguidores fervorosos e inspirar lealdade":
            window.location.href = "resultado3.html";
            break;
        case "Um ser sobrenatural e imortal, que possui uma presença magnética e charmosa": 
            window.location.href = "resultado4.html";
            break;   
    }

    //Expor o amante do companheiro da pessoa", "Tirar do armário em rede nacional", "Ameaçar com rosas.","Um presidente altamente inteligente e estrategista, disciplinado e sofisticado" , "Um bruxo poderoso, incrivelmente inteligente e habilidoso que é capaz de reunir seguidores fervorosos e inspirar lealdade", "Um ser sobrenatural e imortal, que possui uma presença magnética e charmosa"


    switch(selectedOption) {
        case "Expor o amante do companheiro da pessoa":
            window.location.href = "resultado25.html";
            break;
        case "Tirar do armário em rede nacional":
            window.location.href = "resultado26.html";
            break;
        case "Ameaçar com rosas.":
            window.location.href = "resultado27.html";
            break;   
    }

    //Se tornaria um criminoso", "Jogue terra na comida dela(e)", "abrigar ela(e)", "Seja comunista


    switch(selectedOption) {
        case "Se tornaria um criminoso":
            window.location.href = "resultado6.html";
            break;
        case "Jogue terra na comida dela(e)":
            window.location.href = "resultado10.html";
            break;
        case "abrigar ela(e)":
            window.location.href = "resultado12.html";
            break;
        case "Seja comunista":
            window.location.href = "resultado14.html";
            break;       
    }


    //"Um bruxo teimoso e impulsivo", "Um principe herdeiro indeciso", "Uma jogadora voraz habilidoza e teimosa"],



    switch(selectedOption) {
        case "Um bruxo teimoso e impulsivo":
            window.location.href = "resultado15.html";
            break;
        case "Um principe herdeiro indeciso":
            window.location.href = "resultado16.html";
            break;
        case "Uma jogadora voraz habilidoza e teimosa":
            window.location.href = "resultado17.html";
            break;   
    }


}

