let player = {
  name: "Cash",
  chips: 0,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.chips + "$";
function renderGame() {
  cardsEl.textContent = "Cards: ";
  console.log(cardsEl.textContent);
  console.log(cards.length);
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function startGame() {
  message = "";
  cards = [];
  isAlive = true;
  hasBlackJack = false;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;
  if (isAlive == true) {
    renderGame();
  } else {
    message = "You're out of the game!";
  }
}

function randomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card === 1) {
    return 11;
  } else if (card > 10) {
    return 10;
  } else {
    return card;
  }
}

function newCard() {
  if (isAlive && hasBlackJack != true) {
    let currentCard = randomCard();
    cards.push(currentCard);
    sum += currentCard;
    renderGame();
  }
}
