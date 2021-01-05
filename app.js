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

function resetVariables() {
  cardsFlipped = [];
  pairsOpened = 0;
  flipNum = 0;
  numOfAttempts = 0;
};

function createBoard() {
  let cardsFrontArr = Array.apply(this, Array(CARDS_LENGTH)).map(() => "images/front_card.png");
  let cardBoard = document.querySelector(".card_board");
    for (let i = 0; i < CARDS_LENGTH; i++){
        let cardInner = document.createElement("div");
      cardInner.setAttribute("class", "card_inner");
        cardInner.innerHTML = `<img src="${cardsFrontArr[i]}" class="card_face_front" alt=" ">
            <img src="${CARDS_BACK_ARR[i]}" class="card_face_back" alt=" ">`;
        cardBoard.appendChild(cardInner);
        
    }
}

function flipCard(e) {
  numOfAttempts++;
  //console.log(numOfAttempts);
    const ELEMENT = e.target.parentElement;
  cardsFlipped.push(ELEMENT);
  if (!ELEMENT.classList.contains("is-shown")) {
    ELEMENT.classList.add('is-flipped');
    flipNum++;
  } else {
    flipNum;
  }
  if (cardsFlipped.length === 2) {
    isMatch();
  }
};



function isMatch() {
    let firstCard = cardsFlipped[0].lastElementChild.getAttribute("src");
    let secondCard = cardsFlipped[1].lastElementChild.getAttribute("src");
  if (firstCard === secondCard && cardsFlipped[0] !== cardsFlipped[1]) {
    console.log("match");
    pairsOpened++;
    setTimeout(showImg, 500);
    
  }else {
      console.log("oh, no");
      setTimeout(removeFlip, 800);
    }
  wonGame();
}


setTimeout(() => {
    (Array.from(document.querySelectorAll(".card_inner")).forEach(card => card.addEventListener('click', flipCard)));
}, 500);

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
      
    }, 600);
  
    cardsFlipped = [];
    flipNum = 0;
  });
 
}

function wonGame() {
  if (pairsOpened === CARDS_LENGTH/2) {
    setTimeout(() => { alert(`You've found all the matches and used ${numOfAttempts/2} attempts.`) }, 1000);
  setTimeout(resetGame,1200);
  } else {
    return;
  }
}

function resetGame() {
  resetVariables();
  window.removeEventListener("load", createBoard);
  (Array.from(document.querySelectorAll(".card_inner"))).forEach(card => card.classList.remove("is-flipped"));
  (Array.from(document.querySelectorAll(".card_inner"))).forEach(card => card.classList.remove("is-shown"));
 
};


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
// theme button
let theme = document.querySelector(".theme");
theme.addEventListener("click", changeTheme);
function changeTheme() {
  let bodyBack = document.querySelector(".back_div");
  bodyBack.classList.toggle("switch");
}
