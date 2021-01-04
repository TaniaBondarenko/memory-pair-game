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
    "images/snowball.png"];
        
window.addEventListener("load", createBoard);  
//shuffle(CARDS_BACK_ARR);
//const cards = document.querySelectorAll(".card_inner");
const CARDS_LENGTH = 16;
let cardsFrontArr = Array.apply(this, Array(CARDS_LENGTH)).map(el=> "images/front_card.png"); 
let cardBoard = document.querySelector(".card_board");

function createBoard() {
    for (let i = 0; i < CARDS_LENGTH; i++){
        let cardInner = document.createElement("div");
      cardInner.setAttribute("class", "card_inner");
      cardInner.setAttribute("id", `${i}`);
        //shuffle(CARDS_BACK_ARR);
        cardInner.innerHTML = `<img src="${cardsFrontArr[i]}" class="card_face_front" alt=" ">
            <img src="${CARDS_BACK_ARR[i]}" class="card_face_back" alt=" ">`;
        cardBoard.appendChild(cardInner);
        
    }
}
let cardsFlipped = [];
let cardOpened = [];
let flipNum = 0;
let numOfAttempts = 0;
let firstCard;
let secondCard;

function flipCard(e) {
  numOfAttempts++;
    const ELEMENT = e.target.parentElement;
  cardsFlipped.push(ELEMENT);
  if (!ELEMENT.classList.contains("is-shown")) {
    ELEMENT.classList.add('is-flipped');
    flipNum++;
  } else {
    flipNum;
  }
  if (flipNum === 2) {
    isMatch();
  }
};

function isMatch() {
    let firstCard = cardsFlipped[0].lastElementChild.getAttribute("src");
    let secondCard = cardsFlipped[1].lastElementChild.getAttribute("src");
    if (firstCard === secondCard&&cardsFlipped[0]!==cardsFlipped[1]) {
      console.log("match");
      
      setTimeout(showImg,500);
      wonGame();
    } else {
      console.log("oh, no");
      setTimeout(removeFlip, 700);
    }
  
}


setTimeout(() => {
    (Array.from(document.querySelectorAll(".card_inner")).forEach(card => card.addEventListener('click', flipCard)));
}, 1000);

function removeFlip() {
  cardsFlipped.forEach(card => {
    card.classList.remove("is-flipped");
    cardsFlipped = [];
      flipNum = 0;
  });
}
function showImg() {
  cardsFlipped.forEach(card => {
    setTimeout(() => {
      card.classList.add("is-shown");
      
    }, 800);
    cardsFlipped = [];
    flipNum = 0;
  });
  console.log(cardOpened);
}

function wonGame() {
  if (cardOpened.length === CARDS_LENGTH) {
    setTimeout(() => { alert(`you won. Atempts ${numOfAttempts/2}`) }, 1500);
    resetGame();
  } else {
    return;
  }
}

function resetGame() {
 
 
}


function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle…
  while (currentIndex!==0) {

    // Pick a remaining element…
    randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
}
/*
function init() {
  createBoard;
  shuffle(CARDS_BACK_ARR);
}*/
