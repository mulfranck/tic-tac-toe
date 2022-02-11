let player1 = "A";
let player2 = "V";

let currentPlayer = player1;
const gameBoard = (() => {
    let _spots = ["", "", "", "", "", "", "", "", ""];

    // insert the player's mark or sign in the given position
    // pos depending on the id of the html element clicked.
    const insertMark = (pos, mark) => {
        _spots[pos] = mark;
    };
    const getBoard = () => _spots;
    const clear = () => {
        for (ind in _spots) {
            _spots[ind] = "";
        }

        console.log(_spots);
    };
    // send to global scope
    return {
        getBoard,
        insertMark,
        clear,
    };
})();

const gameControl = (() => {
    let _$reset = document.querySelector("#restart");
    let _$board = document.querySelector(".game-board");

    const _playAgame = (e) => {
        const id = e.target.id;
        const boardStatus = gameBoard.getBoard();

        // check first if the click location on the board is valid and
        // if it is still an empty spot.
        if (id && boardStatus[id] === "") {
            // go into the gameBoard and insert the players' sign
            gameBoard.insertMark(id, currentPlayer);
            e.target.innerText = currentPlayer; // update the dom with current players sign

            if (_checkWinner()) {
                console.log(`${currentPlayer}'s wins`);
                endGames(currentPlayer);
            }
            if (_checkDraw()) {
                console.log(`its a draw`);
                endGames();
            }
            // After adding to the dom and to the spots, flip the signs
            _flipPlayers(currentPlayer);
        } else {
            console.log("heloo!");
        }
    };

    // take in the current players sign and compare it with player's sign
    // if sign is player1's change sign to player2's sign
    const _flipPlayers = (curentplayer) => {
        currentPlayer = curentplayer === player1 ? player2 : player1;
    };

    const _resetGame = () => {
        for (let i = 0; i <= 8; i++) {
            _$board.children[i].innerText = null;
        }
        gameBoard.clear();
    };

    const _checkWinner = () => {
        let spots = gameBoard.getBoard();
        if (spots[0] === currentPlayer) {
            if (spots[4] === currentPlayer && spots[8] === currentPlayer) {
                return true;
            }
            if (spots[1] === currentPlayer && spots[2] === currentPlayer) {
                return true;
            }
            if (spots[3] === currentPlayer && spots[6] === currentPlayer) {
                return true;
            }
        }

        if (spots[4] === currentPlayer) {
            if (spots[2] === currentPlayer && spots[6] === currentPlayer) {
                return true;
            }
            if (spots[3] === currentPlayer && spots[5] === currentPlayer) {
                return true;
            }
            if (spots[1] === currentPlayer && spots[7] === currentPlayer) {
                return true;
            }
        }

        if (spots[8] === currentPlayer) {
            if (spots[2] === currentPlayer && spots[5] === currentPlayer) {
                return true;
            }
            if (spots[6] === currentPlayer && spots[7] === currentPlayer) {
                return true;
            }
        }
    };

    const _checkDraw = () => {
        let spots = gameBoard.getBoard();
        let ind = 0;
        spots.forEach((spot, index) => {
            if (spots[index] !== "") {
                ind++;
                console.log(ind);
            }
        });
        console.log(spots);
        if (ind == 9) {
            return true;
        }
    };
    // display the end winner;
    const endGames = (winner) => {
        winner = winner || null; // if winner is passed use it else give winner null
        let $main = document.querySelector("main");
        const $announcer = document.createElement("section");
        $announcer.classList.add("announcer");
        $announcer.addEventListener("click", () => {
            $announcer.classList.remove("announcer");
            $announcer.remove();
            _$board.ariaDisabled;
        });

        if (winner == null) {
            $announcer.textContent = `Its a Draw! ;(`;
        } else {
            $announcer.textContent = `${winner}'s Won!`;
        }
        _resetGame();
        $main.insertBefore($announcer, _$board);
    };

    const start = () => {
        _$board.addEventListener("click", _playAgame);
        _$reset.addEventListener("click", _resetGame);
    };
    return {
        start,
    };
})();

gameControl.start();
