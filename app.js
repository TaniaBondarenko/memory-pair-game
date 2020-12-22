
    const card_obj = [
        {
            name: "bear",
            img: "images/bear.png"
        },
        {
            name: "bear",
            img: "images/bear.png"
        },
        {
            name: "bell",
            img: "images/bell.png"
        },
        {
            name: "bell",
            img: "images/bell.png"
        },
        {
            name: "gingerman",
            img: "images/gingerman.png"
        },
        {
            name: "gingerman",
            img: "images/gingerman.png"
        },
        {
            name: "penguin",
            img: "images/penguin.png"
        },
        {
            name: "penguin",
            img: "images/penguin.png"
        },
        {
            name: "reindeer",
            img: "images/reindeer.png"
        },
        {
            name: "reindeer",
            img: "images/reindeer.png"
        },
        {
            name: "ribbon",
            img: "images/ribbon.png"
        },
        {
            name: "ribbon",
            img: "images/ribbon.png"
        },
        {
            name: "rudolf",
            img: "images/rudolf.png"
        },
        {
            name: "rudolf",
            img: "images/rudolf.png"
        },
        {
            name: "snowball",
            img: "images/snowball.png"
        },
        {
            name: "snowball",
            img: "images/snowball.png"
        }
    ];

window.addEventListener("load", init);
    const main_image = "images/bg_card.png";
    const game_board = document.querySelector(".game_board");
    const resultDisplay = document.querySelector(".result");
    let attempts = 0;
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsGuessed = [];

    function shuffle() {
        for (i = card_obj.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i);
            k = card_obj[i];
            card_obj[i] = card_obj[j];
            card_obj[j] = k;
        }
    }
        
function createBoard() {
    for (let i = 0; i < card_obj.length; i++) {
        let cardFront = document.createElement("img");
        cardFront.className = "card_front";
        cardFront.setAttribute("alt", "x-mas icon");
        cardFront.setAttribute("data-id", i);
        cardFront.src = main_image;
        game_board.appendChild(cardFront);
        cardFront.addEventListener("click", flipCard);
    }
}

function flipCard() {
    console.log("flipCard");
    let cardId = this.getAttribute("data-id");
        cardsChosen.push(card_obj[cardId].name);
        cardsChosenId.push(cardId);
    this.setAttribute("src", card_obj[cardId].img);
    this.classList.add(".clicked");
        //console.log("this", this);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
        }
        
    function checkForMatch() {
            console.log("check4match");
            let cards = document.querySelectorAll("img");
            const firstCardId = cardsChosenId[0];
            const secondCardId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[firstCardId].setAttribute("src", "images/bg_card2.png");
            cards[firstCardId].setAttribute("class", "glass");
            cards[secondCardId].setAttribute("src", "images/bg_card2.png");
            cards[secondCardId].setAttribute("class", "glass");
            cardsGuessed.push(cardsChosen);
            attempts += 1;
        } else {
            cards[firstCardId].setAttribute("src", main_image);
            cards[secondCardId].setAttribute("src", main_image);
            attempts += 1;
        }
        cardsChosen = [];
        cardsChosenId = [];
    let allclicked = document.getElementsByClassName(".clicked");
    Array.from(allclicked).forEach((item) => item.classList.remove(".clicked"));
        resultDisplay.textContent = cardsGuessed.length;
        if (cardsGuessed.length === card_obj.length / 2) {
            resultDisplay.textContent = `Good job! Your number of attempts ${attempts}`;
        
            }
        }
        
        
};

function init() {
    createBoard();
    shuffle();
  
}

