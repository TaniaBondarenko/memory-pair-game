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
const DELAY_HIDE_CARD = 600;
const CARD_BOARD = document.querySelector(".card_board");
let cards;
let firstCard;
let secondCard;
let pairsOpened;
let numOfAttempts;

window.addEventListener("load", createBoard);  

function createBoard() {
  resetVariables();
  shuffle(CARDS_BACK_ARR);
  const frontCardPath = '<img src="images/front_card.png" class="card_front" alt=" "></img>';
  for (let i = 0; i < CARDS_LENGTH; i++) {
    let cardInner = document.createElement("div");
    cardInner.setAttribute("class", "card_inner");
    cardInner.innerHTML = `${frontCardPath} <img src="${CARDS_BACK_ARR[i]}" class="card_back" alt=" ">`;
    CARD_BOARD.appendChild(cardInner);
  }
  cards = Array.from(document.querySelectorAll(".card_inner"));
};

function resetVariables() {
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


    CARD_BOARD.addEventListener('click', flipCard);


let isFlipped = false;
let numOpenCards = 0;

function flipCard({ target }) {
  const cardInner = target.parentElement;
  if (!target.className === "card_inner") return;
  if (!cardInner.classList.contains("is-flipped")) {
    cardInner.classList.add('is-flipped');
    if (!isFlipped) {
      firstCard = cardInner;
      isFlipped = true;
      numOpenCards++;
    } else {
      secondCard = cardInner;
      isFlipped = false;
      numOpenCards++;
    }
    if (numOpenCards === 2) {
      isMatch();
      numOpenCards = 0;
    }
    else {
      return;
    }
  }
};

function isMatch() {
  numOfAttempts++;
  let firstSrc=firstCard.lastElementChild.getAttribute("src");
  let secondSrc=secondCard.lastElementChild.getAttribute("src");
  if (firstSrc === secondSrc && firstCard != secondCard) {
    setTimeout(hideImg, DELAY_HIDE_CARD); 
    pairsOpened++;
  } 
  else {
    setTimeout(removeFlip, DELAY_REMOVE_FLIP);
  }
  wonGame();
};

function hideImg() {
  removeFlip();
  firstCard.classList.add("is-hidden");
  secondCard.classList.add("is-hidden");
};

function removeFlip() {
  cards.forEach(card => {
    card.classList.remove("is-flipped");
  });
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
