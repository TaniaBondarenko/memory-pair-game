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
        
window.addEventListener("load", createBoard);  
//shuffle(CARDS_BACK_ARR);

const CARDS_LENGTH = 16;
let cardsFlipped;
let pairsOpened;
let flipNum;
let numOfAttempts;
resetVariables();
let cards;

function resetVariables() {
  cardsFlipped = [];
  pairsOpened = 0;
  flipNum = 0;
  numOfAttempts = 0;
};

function createBoard() {
  shuffle(CARDS_BACK_ARR); 
  let cardsFrontArr = Array.apply(this, Array(CARDS_LENGTH)).map(() => "images/front_card.png");
  let cardBoard = document.querySelector(".card_board");
    for (let i = 0; i < CARDS_LENGTH; i++){
        let cardInner = document.createElement("div");
      cardInner.setAttribute("class", "card_inner");
        cardInner.innerHTML = `<img src="${cardsFrontArr[i]}" class="card_face_front" alt=" ">
            <img src="${CARDS_BACK_ARR[i]}" class="card_face_back" alt=" ">`;
        cardBoard.appendChild(cardInner);
        
  }
  cards = Array.from(document.querySelectorAll(".card_inner"));
  
}

setTimeout(() => {
    cards.forEach(card => card.addEventListener('click', flipCard));
}, 500);

function flipCard(e) {
 
const CARD_INNER = e.target.parentElement;
  if (!CARD_INNER.classList.contains("is-shown")) {
    CARD_INNER.classList.add('is-flipped');
    cardsFlipped.push(CARD_INNER);
  } 
  if (cardsFlipped.length === 2) {
    isMatch();
  } else {
    cardsFlipped;
  }
}

function isMatch() {
  let firstCard = cardsFlipped[0].lastElementChild.getAttribute("src");
  let secondCard = cardsFlipped[1].lastElementChild.getAttribute("src");
  if (firstCard === secondCard && cardsFlipped[0] != cardsFlipped[1]) {
    setTimeout(showImg, 500); 
    pairsOpened++;
  } 
  else {
    setTimeout(removeFlip, 800);
  }
  wonGame();
}

function removeFlip() {
  cardsFlipped.forEach(card => {
    card.classList.remove("is-flipped");
    cardsFlipped = [];
      flipNum = 0;
  });
   numOfAttempts++;
}
function showImg() {
  cardsFlipped.forEach(card => {
    card.classList.add("is-shown");
    card.classList.remove("is-flipped");  })
    cardsFlipped = [];
    flipNum = 0;
  numOfAttempts++;
}

function wonGame() {
  if (pairsOpened === CARDS_LENGTH / 2) {
    setTimeout(() => {
      if (window.confirm(`You've found all the matches and used ${numOfAttempts} attempts.\n Play one more game`)) {
        document.location.reload();
      } else {
        resetVariables();
        window.removeEventListener("load", createBoard);
      };
    }, 1000);
  } else {
    return;
  }
  }


function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;
  while (currentIndex!==0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
}

let mode = document.querySelector(".mode");
mode.addEventListener("click", changeMode);
function changeMode() {
  let bodyBack = document.querySelector(".back_div");
  bodyBack.classList.toggle("switch");
}
