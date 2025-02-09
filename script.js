let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitBtn').addEventListener('click', function() {
    let guess = Number(document.getElementById('guessInput').value);
    attempts++;
    
    if (guess < targetNumber) {
        document.getElementById('feedback').textContent = "Tente um número maior!";
    } else if (guess > targetNumber) {
        document.getElementById('feedback').textContent = "Tente um número menor!";
    } else {
        document.getElementById('feedback').textContent = `Parabéns! Você acertou em ${attempts} tentativas!`;
    }
    
    document.getElementById('attempts').textContent = `Tentativas: ${attempts}`;
});
