const CARDS_BACK_ARR = [
  "images/bear.png",
  "images/bear.png",
  "images/bell.png",
  "images/bell.png",
  "images/gingerman.png",
  "images/gingerman.png",
  "images/penguin.png",
  "images/penguin.png",
  "images/reindeer.png",
  "images/reindeer.png",
  "images/ribbon.png",
  "images/ribbon.png",
  "images/rudolf.png",
  "images/rudolf.png",
  "images/snowball.png",
  "images/snowball.png"
];
        
const CARDS_LENGTH = 16;
const DELAY = 1600;
const DELAY_REMOVE_FLIP = 800;
const DELAY_SHOW_CARD = 400;
const FRONT_CARD_PATH = '<img src="images/front_card.png" class="card_front" alt=" "></img>';
const CARD_BOARD = document.querySelector(".card_board");
let cardsFlipped;
let pairsOpened;
let numOfAttempts;

window.addEventListener("load", createBoard);  

function createBoard() {
  resetVariables();
  shuffle(CARDS_BACK_ARR);
  for (let i = 0; i < CARDS_LENGTH; i++) {
    let cardInner = document.createElement("div");
    cardInner.setAttribute("class", "card_inner");
    cardInner.innerHTML = `${FRONT_CARD_PATH} <img src="${CARDS_BACK_ARR[i]}" class="card_back" alt=" ">`;
    CARD_BOARD.appendChild(cardInner);
  }
};

function resetVariables() {
  cardsFlipped = [];
  pairsOpened = 0;
  numOfAttempts = 0;
};

function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;
  while (currentIndex!==0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  };
};

setTimeout(() => {
    CARD_BOARD.addEventListener('click', flipCard);
}, DELAY);

function flipCard({ target }) {
  const cardInner = target.parentElement;
  if (!target.className === "card_inner") return;
  cardInner.classList.add('is-flipped');
  cardsFlipped.push(cardInner); 
  if (cardsFlipped.length === 2) {
    isMatch();
  } 
};

function isMatch() {
  numOfAttempts++;
  let firstCard = cardsFlipped[0].lastElementChild.getAttribute("src");
  let secondCard = cardsFlipped[1].lastElementChild.getAttribute("src");
  if (firstCard === secondCard && cardsFlipped[0] != cardsFlipped[1]) {
    setTimeout(showImg, DELAY_SHOW_CARD); 
    pairsOpened++;
  } 
  else {
    setTimeout(removeFlip, DELAY_REMOVE_FLIP);
  }
  wonGame();
};

function showImg() {
  cardsFlipped.forEach(card => {
    card.classList.remove("is-flipped");
     card.classList.add("is-shown");
  });
  cardsFlipped = [];
};

function removeFlip() {
  cardsFlipped.forEach(card => {
    card.classList.remove("is-flipped");
  });
  cardsFlipped = [];
};

function wonGame() {
  if (pairsOpened === CARDS_LENGTH / 2) {
    setTimeout(() => {
      askPlayer();
    }, DELAY);
   }
};

function askPlayer() {
  if (window.confirm(`You've found all the matches and used ${numOfAttempts} attempts.\n Play one more game`)) {
        document.location.reload();
      } else {
        resetVariables();
        window.removeEventListener("load", createBoard);
        mode.removeEventListener("click", changeMode);
      };
};

let mode = document.querySelector(".mode");
mode.addEventListener("click", changeMode);

function changeMode() {
  document.querySelector(".background").classList.toggle("switch");
};
