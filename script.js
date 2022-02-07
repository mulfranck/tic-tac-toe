const gameBoard = (() => {
    let _board = ["", "", "", "", "", "", "", "", ""];
    let $game_board = document.querySelector(".game_board");

    //   Get the exact location on the board to add a selected
    const _getField = (e) => {
        let entered_pos = Number(e.target.attributes["data-id"].value);
        _board[entered_pos] = "Y";
        e.target.textContent = "Y"; //update the dom with the players key
        e.target.classList.remove("btn"); //remove class button so it get no hover effect
    };

    const setBoard = () => {
        $game_board.addEventListener("click", _getField);
    };

    const _rest_board = () => {
        for (val in _board) {
            _board[val] = "";
            $game_board.children[`${val}`].textContent = null;
        }
        // console.log(typeof $game_board.children);
        console.log($game_board.children["4"]);
        // console.log(_board);
    };

    let $restart_btn = document.querySelector("#restart");
    $restart_btn.addEventListener("click", _rest_board);
    return {
        setBoard,
    };
})();

// const PlayerFactory = (name) => {
//   _name = "";
//   _scores = 0;
//   const _setScores = (score) => (_scores = score);
//   const _setName = () => (_name = name);

//   //   what can player do? player can set his name, have a score of wins, wait for the other player,
// };
gameBoard.setBoard();
