let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {

    let guess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");

    attempts++;

    if (guess < secretNumber) {
        result.innerHTML = "📉 Too Low";
    }

    else if (guess > secretNumber) {
        result.innerHTML = "📈 Too High";
    }

    else {
        result.innerHTML = "🎉 Correct! Attempts: " + attempts;
    }
}