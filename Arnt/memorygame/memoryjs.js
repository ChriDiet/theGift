let pairs = [];
let revealedCards = [];
let matchedCards = 0;
let timeLeft = 40;
let timer;
let gameStarted = false;

const letters = ['T', 'R', 'A', 'M', 'P', 'O', 'L', 'I', 'N', 'E'];
const gameContainer = document.getElementById('game-container');
const timerElement = document.getElementById('timer');
const statusElement = document.getElementById('status');
const startButton = document.getElementById('start-btn');
const tryAgainButton = document.getElementById('try-again-btn');

// Create and shuffle pairs
   function createCards() {
   pairs = [...letters, ...letters];
   pairs = pairs.sort(() => Math.random() - 0.5); // Shuffle the pairs
   gameContainer.innerHTML = ''; // Clear previous game
   pairs.forEach((letter, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.letter = letter;
      card.dataset.index = index;
      card.addEventListener('click', handleCardClick);
      gameContainer.appendChild(card);
   });
   }

   // Handle card click
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

   // Check if the two revealed cards match
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

   // Start the timer
   function startTimer() {
   timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft === 0) {
         endGame(false);
      }
   }, 1000);
   }

   // End the game
   function endGame(won) {
   clearInterval(timer);
   statusElement.textContent = won ? "Grattis!" : "Tiden er ute, du får prøve igjen!";
   gameContainer.style.pointerEvents = 'none'; // Disable further clicks
   startButton.classList.add('hidden');
   tryAgainButton.classList.remove('hidden');
   }

   // Reset the game
   function resetGame() {
   timeLeft = 40;
   matchedCards = 0;
   revealedCards = [];
   gameContainer.style.pointerEvents = 'auto'; // Enable card clicks
   createCards();
   startTimer();
   startButton.classList.add('hidden');
   tryAgainButton.classList.remove('hidden');
   statusElement.textContent = '';
   timerElement.textContent = `Time Left: 40s`;
   }

   // Start the game
   function startGame() {
   gameStarted = true;
   createCards();
   startTimer();
   startButton.classList.add('hidden');
   tryAgainButton.classList.remove('hidden');
   }

   // Event Listeners for buttons
   startButton.addEventListener('click', startGame);
   tryAgainButton.addEventListener('click', resetGame);
