import { Board, DeadZone } from "./Board";
import { Player, PlayerType } from "./Player";

export class Game {
    readonly board = new Board()
    readonly upperPlayer = new Player(PlayerType.UPPER);
    readonly lowerPlayer = new Player(PlayerType.LOWER);

    readonly upperDeadZone = new DeadZone(PlayerType.UPPER);
    readonly lowerDeadZone = new DeadZone(PlayerType.LOWER);

    constructor() {
        const boardContainer = document.querySelector('.board-container');

        boardContainer?.firstChild?.remove();
        boardContainer?.appendChild(this.board._el)
    }
};

export default Game;