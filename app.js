    const cardsBackArr = [
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
window.addEventListener("load", createBoard);  
//const cards = Array.from(document.querySelectorAll("div.card_inner"));
let cardsFrontArr = Array.apply(this, Array(16)).map(el=> "images/front_card.png"); 
let cardBoard = document.querySelector(".card_board");

function createBoard() {
    for (let i = 0; i < 16; i++){
        let cardInner = document.createElement("div");
        cardInner.setAttribute("class", "card_inner");
        cardInner.innerHTML = `<img src="${cardsFrontArr[i]}" class="card_face card_face_front alt=" ">
            <img src="${cardsBackArr[i].img}" class="card_face card_face_back" alt=" " >`;
        cardBoard.appendChild(cardInner);
        
    }
}


    
/*document.addEventListener("click", myFunction);

function myFunction() {
  document.querySelectorAll(".card_inner").forEach(element => {
      element.classList.toggle("clicked");
  });
}*/

function flipCard() {
  this.classList.toggle('is-flipped');
}

setTimeout(() => {
    (Array.from(document.querySelectorAll(".card_inner")).forEach(card => card.addEventListener('click', flipCard)));
}, 1000);





