document.getElementById("save-button").addEventListener("click", function () {
    const characterName = document.getElementById("character-name").value;

    if (characterName) {
        const characterNameElement = document.createElement("h2");
        characterNameElement.textContent = "Nome do Personagem: " + characterName;
        document.getElementById("character-container").appendChild(characterNameElement);
    } else {
        alert("Por favor, insira um nome para o seu personagem.");
    }
});

const personagem = document.querySelector('#character-name');

document.querySelector('#save-button').addEventListener('click', () => {
    localStorage.setItem('nome', personagem.value);
});