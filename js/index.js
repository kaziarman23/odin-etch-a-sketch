let popup_btn = document.querySelector("#popup");
let board = document.querySelector(".contener");
let message = document.querySelector("#message");
let color = "black";

document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);

    popup_btn.addEventListener("click", function () {
        let size = getSize();
        createBoard(size);
    });
}); // this event called DOMContentLoaded is for, run when the dom content is loaded;

function createBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;
    for (let i = 0; i < numDiv; i++) {
        let div = document.createElement("div");
        board.appendChild(div);
        div.addEventListener("mouseover", colorDiv); // we can click eventListener or others event
    }
}

function getSize() {
    let input = prompt("what will be the size of the board");

    if (input === "") {
        message.innerText = "please provide a number";
    } else if (input < 0 || input > 100) {
        message.innerText = "please provide a number between 1 and 100";
    } else {
        message.innerText = "Now you can play";
        return input;
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function colorDiv() {
    if (color === "Random") {
        this.style.backgroundColor = `hsl(${Math.floor(
            Math.random() * 360
        )}, 100%, 50%)`;
    } else if (color === "Green") {
        this.style.backgroundColor = "green";
    } else if (color === "Blue") {
        this.style.backgroundColor = "royalblue";
    } else {
        this.style.backgroundColor = "black";
    }
}

function resetBoard() {
    window.location.reload();
    // let divs = document.querySelectorAll("div"); // loop divs are called
    // divs.forEach((div) => (div.style.backgroundColor = "white"));
}
