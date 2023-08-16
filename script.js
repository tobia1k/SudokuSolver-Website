var numSelected = null;
var tileSelected = null;


// index -> { row, col }
function i2rc(index) {
    return { row: Math.floor(index / 9), col: index % 9};
}

// {row, col } -> index
function rc2i(row, col) {
    return row * 9 + col;
}

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c=0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            //tile.innerText = board[r][c];
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
    let clear = document.createElement("div");
    clear.innerText = "CLR";
    clear.addEventListener("click", selectNumber);
    clear.classList.add("number");
    document.getElementById("delete").appendChild(clear);
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        this.innerText = numSelected.id;
    }
    else {
        this.innerText = "";
    }
    tileSelected = this;
    tileSelected.classList.add("tile-selected");
}

function clearTile() {
    if (tileSelected) {
        tileSelected.innerText = "";
    }
}