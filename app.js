
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

    const game_board = document.querySelector(".game_board");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsGuessed = [];
    let attempts = 0;
   
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
        cardFront.setAttribute("data-id", i);
        cardFront.src = "images/front_card.png";
        game_board.appendChild(cardFront);
        cardFront.addEventListener("click", flipCard);
    }
}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(card_obj[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", card_obj[cardId].img);
    this.classList.add(".clicked");
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
        }
        
    function checkForMatch() {
            let cardsAll = document.querySelectorAll("img");
            const firstCardId = cardsChosenId[0];
            const secondCardId = cardsChosenId[1];
        if ((cardsChosen[0] === cardsChosen[1])&&(firstCardId !== secondCardId) ){
            cardsAll[firstCardId].setAttribute("src", "images/just-card.png");
            cardsAll[firstCardId].setAttribute("class", "glass");
            cardsAll[secondCardId].setAttribute("src", "images/just-card.png");
            cardsAll[secondCardId].setAttribute("class", "glass");
            cardsGuessed.push(cardsChosen);
            attempts += 1;
        } else  {
            cardsAll[firstCardId].setAttribute("src", "images/front_card.png");
            cardsAll[secondCardId].setAttribute("src", "images/front_card.png");
            attempts += 1;
        }

        cardsChosen = [];
        cardsChosenId = [];
        removeClick();
        showGameResult();
    }
    
    function removeClick() {
        let allClicked = document.getElementsByClassName(".clicked");
        Array.from(allClicked).forEach((item) => item.classList.remove(".clicked"));
    }
    
    function showGameResult() {
        const resultDisplay = document.querySelector(".result");
        resultDisplay.textContent = `Pairs guessed: ${cardsGuessed.length}`;
        if (cardsGuessed.length === card_obj.length / 2) {
            resultDisplay.textContent = `Good job! Your number of attempts ${attempts}`;
            }
    }

        
};

function init() {
    createBoard();
    shuffle();
}

