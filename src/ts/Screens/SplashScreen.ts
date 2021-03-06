import { Game, GameState } from "../Game.js";

import { StateObserver } from "../Libraries/Observers.js";
import { AudioLoader } from "../Libraries/Loaders.js";

import { AbstractScreen } from "./AbstractScreen.js";

enum SplashScreenState {BlackScreen}

export class SplashScreen extends AbstractScreen {
    music: HTMLAudioElement;

    constructor(game: Game) {
        super(
            game,
            new StateObserver(SplashScreenState.BlackScreen),
            "#000",
            "TLOZ-JS GAME",
            "press enter to start",
            150
        );

        this.music = AudioLoader.load("./sounds/music/intro.mp3", true);
    }

    draw(): void {
        switch (this.state.get()) {
            case SplashScreenState.BlackScreen:
                if (this.state.isFirstFrame) this.music.play();

                super.draw();

                if (this.state.currentFrame > this.showMessageAfter) {
                    if (this.Game.EventManager.isEnterPressed) {
                        this.music.pause();
                        this.Game.state.setNextState(GameState.Run);
                    }
                }
                break;
        }

        super.updateObservers();
    }
}
