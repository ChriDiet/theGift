let pairs = [];
let revealedCards = [];
let matchedCards = 0;
let timeLeft = 40;
let timer = null;
let gameStarted = false;

const letters = ['T', 'R', 'A', 'M', 'P', 'O', 'L', 'I', 'N', 'E'];
const gameContainer = document.getElementById('game-container');
const timerElement = document.getElementById('timer');
const statusElement = document.getElementById('status');
const startButton = document.getElementById('start-btn');
const tryAgainButton = document.getElementById('try-again-btn');

function createCards() {
   pairs = [...letters, ...letters];
   pairs = pairs.sort(() => Math.random() - 0.5);
   gameContainer.innerHTML = '';

   pairs.forEach((letter, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.letter = letter;
      card.dataset.index = index;
      card.addEventListener('click', handleCardClick);
      gameContainer.appendChild(card);
   });
}


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


function startTimer() {

   if (timer) {
      clearInterval(timer);
      timer = null;
   }


   timer = setInterval(() => {
      timeLeft--;

      if (timeLeft <= 0) {
            timeLeft = 0; 
            clearInterval(timer); 
            timer = null; 
            endGame(false); 
      }
      timerElement.textContent = `Time Left: ${timeLeft}s`;
   }, 1000);
}


function endGame(won) {
   if (timer) {
      clearInterval(timer);
      timer = null; 
   }

   statusElement.textContent = won ? "Grattis!" : "Tiden er ute, du får prøve igjen!";
   gameContainer.style.pointerEvents = 'none'; 
   startButton.classList.add('hidden');
   tryAgainButton.classList.remove('hidden');
}

function resetGame() {
   if (timer) {
      clearInterval(timer);
      timer = null;
   }


   timeLeft = 40;
   matchedCards = 0;
   revealedCards = [];
   gameContainer.style.pointerEvents = 'auto'; 
   createCards(); 
   startTimer();


   statusElement.textContent = '';
   timerElement.textContent = `Time Left: ${timeLeft}s`;
   startButton.classList.add('hidden');
   tryAgainButton.classList.remove('hidden');
}


function startGame() {
   if (gameStarted) return; 
   gameStarted = true; 
   resetGame();
}


startButton.addEventListener('click', () => {
   startGame();
});

tryAgainButton.addEventListener('click', () => {
   gameStarted = false; 
   resetGame();
});
