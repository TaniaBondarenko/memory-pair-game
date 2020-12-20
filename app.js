const back_img_path = [
    "images/bear.png", "images/bell.png", "images/gingerman.png", "images/penguin.png",
    "images/reindeer.png", "images/ribbon.png", "images/rudolf.png", "images/snowball.png",
    "images/bear.png", "images/bell.png", "images/gingerman.png", "images/penguin.png",
    "images/reindeer.png", "images/ribbon.png", "images/rudolf.png", "images/snowball.png"
];

const front_img = "images/bg_card.png";

const front_container = document.querySelector(".front");
const back_container = document.querySelector(".back");
let imgTagF; let imgTagB;
window.addEventListener("load", init);

function addContentFront() {
    for (let i = 0; i < 16; i++) {    
        imgTagF = document.createElement("img");
        imgTagF.className = "front_img";
        imgTagF.setAttribute("alt", "x-mas icon");
        imgTagF.src = front_img;
        front_container.appendChild(imgTagF);
    }
};

function addContentBack() {
    for (let i = 0; i < 16; i++) {    
        imgTagB = document.createElement("img");
        imgTagB.className = "back_img";
        imgTagB.setAttribute("alt", "x-mas icon");
        imgTagB.src = back_img_path[i];
        back_container.appendChild(imgTagB);
    }
};

function init() {
    addContentFront();
    addContentBack()
}

