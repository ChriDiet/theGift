let pairs = [];
let revealedCards = [];
let matchedCards = 0;
let timeLeft = 60;
let timer = null;
let gameStarted = false;

const letters = ['T', 'R', 'A', 'M', 'P', 'O', 'L', 'I', 'N', 'E'];
const gameContainer = document.getElementById('game-container');
const timerElement = document.getElementById('timer');
const statusElement = document.getElementById('status');
const startButton = document.getElementById('start-btn');
const tryAgainButton = document.getElementById('try-again-btn');

// Funksjon for å lage og stokke kortene
function createCards() {
    pairs = [...letters, ...letters];
    pairs = pairs.sort(() => Math.random() - 0.5); // Stokk kortene
    gameContainer.innerHTML = ''; // Fjern tidligere kort

    pairs.forEach((letter, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.letter = letter;
        card.dataset.index = index;
        card.addEventListener('click', handleCardClick);
        gameContainer.appendChild(card);
    });
}

// Håndter klikk på kort
function handleCardClick(event) {
    const card = event.target;

    if (card.classList.contains('revealed') || revealedCards.length === 2) return;

    card.textContent = card.dataset.letter;
    card.classList.add('revealed');
    revealedCards.push(card);

    if (revealedCards.length === 2) {
        checkForMatch();
    }
}

// Sjekk om kortene matcher
function checkForMatch() {
    const [first, second] = revealedCards;

    if (first.dataset.letter === second.dataset.letter) {
        matchedCards += 2;
        revealedCards = [];

        if (matchedCards === pairs.length) {
            endGame(true);
        }
    } else {
        setTimeout(() => {
            first.textContent = '';
            second.textContent = '';
            first.classList.remove('revealed');
            second.classList.remove('revealed');
            revealedCards = [];
        }, 1000);
    }
}

// Start tidtakeren
function startTimer() {
    // Sørg for at ingen tidligere timer kjører
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // Start en ny timer
    timer = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            timeLeft = 0; // Sikre at tiden ikke går under null
            clearInterval(timer); // Stopp tidtakeren
            timer = null; // Nullstill timeren
            endGame(false); // Spilleren taper
        }

        // Oppdater visningen
        timerElement.textContent = `Time Left: ${timeLeft}s`;
    }, 1000);
}

// Avslutt spillet
function endGame(won) {
    if (timer) {
        clearInterval(timer); // Stopp tidtakeren
        timer = null; // Nullstill timeren
    }

    statusElement.textContent = won ? "Grattis!" : "Tiden er ute, du får prøve igjen!";
    gameContainer.style.pointerEvents = 'none'; // Deaktiver videre klikk
    startButton.classList.add('hidden');
    tryAgainButton.classList.remove('hidden');
}

// Tilbakestill spillet
function resetGame() {
    // Sørg for at timeren stopper før reset
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // Tilbakestill spilltilstand
    timeLeft = 60;
    matchedCards = 0;
    revealedCards = [];
    gameContainer.style.pointerEvents = 'auto'; // Tillat klikk på kort
    createCards(); // Lag nye kort
    startTimer(); // Start ny timer

    // Oppdater UI
    statusElement.textContent = '';
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    startButton.classList.add('hidden');
    tryAgainButton.classList.remove('hidden');
}

// Start spillet
function startGame() {
    if (gameStarted) return; // Forhindre dobbelstart
    gameStarted = true; // Marker spillet som startet
    resetGame();
}

// Event Listeners for knappene
startButton.addEventListener('click', () => {
    startGame();
});

tryAgainButton.addEventListener('click', () => {
    gameStarted = false; // Tillat ny start
    resetGame();
});
