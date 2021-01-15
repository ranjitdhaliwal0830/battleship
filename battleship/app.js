// set the root --perRow in js to a higher number 
let perRow = 3;
let gameboard = document.getElementById('gameboard')
let playerPosition;
let computerPosition;
let gameover = false;

for (let i = 0; i < perRow * perRow; i++) {
    let tile = document.createElement('div')
    tile.classList.add('tile', `tile${i}`);
    tile.addEventListener('click', setPlayer);
    gameboard.appendChild(tile);
}

function setPlayer(event) {
    // X need to be able set our ship on gameboard
    playerPosition = event.target;
    if(confirm('Is this your final choice?')) {
        playerPosition.classList.add('battleship')
        let tiles = document.querySelectorAll('.tile');
        // x need for the ai to set its ship gameboard
        computerPosition = tiles[getRandomInt(tiles.length)];
        tiles.forEach((tile) => {
            tile.removeEventListener('click', setPlayer);
            tile.addEventListener('click', play);
        });
    }
}

function play(event) {
        if(!gameover) {
            let tile = event.target;
            // need tp be able to click on tiles and mark as used
            tile.classList.add('shot')
            // check if tile is the ai
        if (tile == computerPosition) {
            // if true win
            message.prepend('<p>You win!</p>');
            gameover = !gameover;    
        } else {
            addMessage('You missed!');
            let tiles = document.querySelectorAll('.tile');
                // else ai fires a shot
            let shot = tiles[getRandomInt(tiles.length)];
            console.log(shot);
            // if ai gets player tile ai wins
            if (shot == playerPosition) {
                message.innerHTML += '<p>computer wins</p>';
                gameover =!gameover;
            }   else {
                message.innerHTML += '<p>computer missed!</p>';
            }
            // else players turn
        }

        if (gameover) {
            computerPosition.classList.add('battleship');
        }
    }
}


function addMessage(message) {
    let messageBoard = document.getElementById('message');
    let messageContainer = document.createElement('p');
    messageContainer.innerText = message;
    messageBoard.prepend(messageContainer)
}

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));    
}
