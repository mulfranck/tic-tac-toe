# Tic Tac Toe
Using Module pattern and Factory function to implement Tic tac toe game
This is very challenging using module pattern for the first time.

## Module pattern IIFE
### gameBoard
gameBoard should contain the following state and methods
- _board array
- set clickable spot to enter player's character defined
- prevent overwrite of spot
- reset the board, the dom and the _board array

### Players factory
The factory should create player with the following
- _name and _score and _sign: these the states and props for the player
- the getter and setter methods of the above states and props

### gameController
The game controller seems to be the main thing in this whole setup
- Should have a flip_player method to change players.
- should have win checkers, which adds to player a win score and a break of game.
    - row wins,
    - col wins,
    - diagonal wins, and
    - ties.
-