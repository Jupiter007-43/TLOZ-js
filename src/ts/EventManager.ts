import { Game, GameState } from "./Game.js";

export class EventManager {
    Game: Game;

    isRightPressed = false;
    isLeftPressed = false;
    isUpPressed = false;
    isDownPressed = false;
    isAttackPressed = false;
    isEnterPressed = false;

    currentAttackFrame = 0;
    attackDuration = 10;

    constructor(game: Game) {
        this.Game = game;

        document.addEventListener("keydown", e => this.keyEvent(e, true));
        document.addEventListener("keyup", e => this.keyEvent(e, false));
        document.addEventListener("visibilitychange", e => this.visibilityEvent(e), false);
    }

    keyEvent(e, keydown): void {
        if (e.repeat){
            e.preventDefault();
            return;
        };

        switch (e.key) {
            case "ArrowRight":
                this.isRightPressed = keydown;
                break;
            case "ArrowLeft":
                this.isLeftPressed = keydown;
                break;
            case "ArrowUp":
                this.isUpPressed = keydown;
                break;
            case "ArrowDown":
                this.isDownPressed = keydown;
                break;
            case "Enter":
                this.isEnterPressed = keydown;
                break;
            case "q":
            case "Q":
                if (keydown) {
                    this.isAttackPressed = true;
                }
                break;
            case "p":
            case "P":
                if (keydown && this.Game.state.isIn(GameState.Run, GameState.Stopped)) {
                    this.Game.state.setNextState(this.Game.state.is(GameState.Run)
                                     ? GameState.Stopped
                                     : GameState.Run);
                }
                break;
        }

        e.preventDefault();
    }

    visibilityEvent(e): void {
        if (document["hidden"] && this.Game.state.is(GameState.Run)) this.Game.state.setNextState(GameState.Stopped);
    }

    newFrame(): void {
        if (this.isAttackPressed) {
            this.currentAttackFrame += this.Game.dt;

            if (this.currentAttackFrame >= this.attackDuration) {
                this.isAttackPressed = false;
            }

            return;
        }

        this.currentAttackFrame = 0;
    }
}