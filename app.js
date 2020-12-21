
    const card_path = [
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
    const front_img = "images/bg_card.png";
    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector(".result");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function shuffle() {
        for (i = card_path.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i);
            k = card_path[i];
            card_path[i] = card_path[j];
            card_path[j] = k;
        }
    }
        
    function createBoard() {
            for (let i = 0; i < card_path.length; i++) {
                let cardFront = document.createElement("img");
                cardFront.className = "front_img ";
                //cardFront.setAttribute("alt", "x-mas icon");
                cardFront.setAttribute("data-id", i);
                cardFront.src = front_img;
                cardFront.addEventListener("click", flipCard)
                grid.appendChild(cardFront);
        }
    
    }

    function flipCard() {
            let cardId = this.getAttribute("data-id");
            cardsChosen.push(card_path[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute("src", card_path[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        };

    function checkForMatch() {
            let cards = document.querySelectorAll("img");
            const optionOneId = cardsChosenId[0];
            const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
                cards[optionOneId].setAttribute("src", "images/santa.png");
                cards[optionTwoId].setAttribute("src", "images/santa.png");
                cardsWon.push(cardsChosen);
        } else {
                cards[optionOneId].setAttribute("src", front_img);
                cards[optionTwoId].setAttribute("src", front_img);
        }
         cardsChosen = [];
         cardsChosenId = [];
            resultDisplay.textContent = cardsWon.length;
            if (cardsWon.length === card_path.length / 2) {
            resultDisplay.textContent = "Good job!";
         }
        }

function init() {
    createBoard();
    shuffle();
}


