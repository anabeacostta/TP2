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

//Junte essas 5 frases em um só parágrafo:  
Você caminha pelas ruas desoladas de um mundo distópico, onde o fio da esperança parece desgastado.                                                                  
Você vagueia pelos escombros de um mundo distópico, onde a esperança é uma comodidade escassa e cada sombra parece esconder um segredo.
Você perambula pelas ruas empoeiradas de um mundo distópico, onde a desesperança se mistura com o ar rarefeito.                              
Você vagueia por entre as sombras de um mundo distópico, onde cada suspiro parece carregar o peso de um futuro incerto.


Faça com que isso se torne um parágrafo e não fique redundante:

Você caminha pelas ruas desoladas de um mundo distópico, onde o fio da esperança parece desgastado.                                                                  
Você vagueia pelos escombros de um mundo distópico, onde a esperança é uma comodidade escassa e cada sombra parece esconder um segredo.
Você perambula pelas ruas empoeiradas de um mundo distópico, onde a desesperança se mistura com o ar rarefeito.                              
Você vagueia por entre as sombras de um mundo distópico, onde cada suspiro parece carregar o peso de um futuro incerto.

Você percorre as ruas desoladas de um mundo distópico, onde o fio da esperança parece desgastado. Entre os escombros, a esperança é uma comodidade escassa, e cada sombra esconde um segredo.Cada suspiro carrega o peso de um futuro incerto.

// Escolha da 30

Num reino mágico chamado Elyrian, onde fadas dançavam sob a luz da lua e seres encantados iluminavam os bosques com sua magia, você emergiu como uma figura única.
Num reino mágico, onde fadas e seres encantados dançavam sob a luz da lua, você,
Num reino encantado chamado Feyland, onde fadas dançavam sob a luz das estrelas e criaturas mágicas iluminavam os bosques com seu resplendor, você surgiu como uma figura única.
Num reino mágico chamado Etherealis, onde fadas dançavam sob a luz das estrelas e cintilavam nas noites estreladas, onde seres encantados enchiam os bosques com seus murmúrios suaves e suas auras misteriosa, você emergiu como uma figura única.

// Faça a introdução de um parágrafo com o tema: Um lugar misterioso onde assassinatos acontecem frequentemente

1)Em um canto esquecido do mundo, existe um lugar envolto em mistério e medo, onde assassinatos ocorrem com uma frequência alarmante. As ruas silenciosas e sombrias ecoam com histórias não contadas de vidas abruptamente interrompidas, e cada esquina parece guardar segredos sombrios. Este lugar, seu lar, conhecido apenas por poucos corajosos, inclusive você, é um lembrete constante da fragilidade da vida e da presença persistente da morte.

2) Num lugar misterioso e sombrio, assassinatos frequentes criam uma atmosfera de incerteza e intriga. Sob a névoa que envolve as ruas, segredos sombrios e tragédias silenciosas se entrelaçam, transformando cada esquina em um potencial cenário de crime.

// melhor amigo

Seu/Sua amiga é Dolores Umbridge, uma figura conhecida por sua aura austera e, muitas vezes, questionável moralidade. Apesar das aparências e da reputação sinistra que a envolve, a relação entre vocês floresce em uma amizade peculiar. Dolores, com seu conhecimento peculiar e recursos incomuns, torna-se uma fonte valiosa de informações e apoio para você.



//
faça a continuação deste parágrafo onde o personagem Locke do livro Principe Cruel é amigo da protagonista
Num lugar misterioso e sombrio, assassinatos frequentes criam uma atmosfera de incerteza e intriga. Sob a névoa que envolve as ruas, segredos sombrios e tragédias silenciosas se entrelaçam, transformando cada esquina em um potencial cenário de crime.

