'use strict'


const OPEN_SPACE = '';
const MINE = '💣'
const FLAG = '#'
const NUM1 = '1'
const NUM2 = '2'
const NUM3 = '3'



var gBoard = buildBoard(8)
renderBoard(gBoard)



function renderBoard(board) {
    var strHtml = ''
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < board[i].length; j++) {
            var cell = board[i][j].minesAroundCount
            // console.log(cell)
            // can try to do this later with a function and not repeat it
            board[getRandomIntInclusive(0,board.length - 1)][getRandomIntInclusive(0,board[i].length - 1)].minesAroundCount = MINE
            board[getRandomIntInclusive(0,board.length - 1)][getRandomIntInclusive(0,board[i].length - 1)].minesAroundCount = NUM1
            board[getRandomIntInclusive(0,board.length - 1)][getRandomIntInclusive(0,board[i].length - 1)].minesAroundCount = NUM2
            board[getRandomIntInclusive(0,board.length - 1)][getRandomIntInclusive(0,board[i].length - 1)].minesAroundCount = NUM3
            strHtml += `<td class="cell" onclick="cellClicked(this)"> ${cell} </td>`
        }
        strHtml += '</tr>'
        // console.log(strHtml);

    }
    var elTbody = document.querySelector('.board');
    elTbody.innerHTML = strHtml;
    // console.log(elTbody);

}

function setMyNegsCount(){
    

}



/*
function buildBoard()
this function set by the size and gives me the board i need
*/
console.table(buildBoard(4));


function buildBoard(size) {
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: true,
                isMine: false,
                isMarked: false,
            }
        }
    }
    // board[2][3] = MINE
    // board[1][2] = MINE
    return board
}








/*
initGame()
function that calls when the page load
*/

/*
setMinesNegsCount(board)
Count mines around each cell and set the cell's minesAroundCount.
*/

/*
renderBoard(board)
Render the board as a <table> to the page
*/


/*
cellClicked(elCell, i, j)
Called when a cell (td) is clicked
*/

/*
cellMarked(elCell)
Called on right click to mark a cell (suspected to be a mine) Search the web (and implement) how to hide the context menu on right click
*/


/*
checkGameOver()
Game ends when all mines are marked, and all the other cells are shown
*/

