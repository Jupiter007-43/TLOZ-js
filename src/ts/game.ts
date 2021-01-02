enum GameState {Splash, Run, Stopped, SlideScene, GameOver, Win};

class Game {
    Canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    World: World;
    Viewport: Viewport;
    Player: Player;
    Sword: Sword;
    Enemies: Enemies;
    Projectiles: Projectiles;
    Items: Items;
    EventManager: EventManager;
    Hud: Hud;
    SplashScreen: SplashScreen;
    GameOverScreen: GameOverScreen;
    WinScreen: WinScreen;

    state: StateObserver;

    constructor(canvas: HTMLCanvasElement) {
        this.Canvas = canvas;
        this.ctx = this.Canvas.getContext("2d");

        this.EventManager = new EventManager(this);
        this.World = new World(this);
        this.Viewport = new Viewport(this);
        this.Player = new Player(this);
        this.Sword = new Sword(this);
        this.Enemies = new Enemies(this);
        this.Projectiles = new Projectiles(this);
        this.Items = new Items(this);
        this.Hud = new Hud(this);
        this.SplashScreen = new SplashScreen(this);
        this.GameOverScreen = new GameOverScreen(this);
        this.WinScreen = new WinScreen(this);

        this.Viewport.y = this.Hud.height;
        this.Hud.width = this.Viewport.width;

        this.Canvas.width = this.Viewport.width;
        this.Canvas.height = this.Viewport.height + this.Hud.height;

        this.Player.x = this.Viewport.cellSize * this.World.spawnCellColl;
        this.Player.y = this.Viewport.cellSize * this.World.spawnCellRow;

        this.World.loopScenes((scene) => {
            if (scene.hasEnemies) {
                this.Player.targetScore++;
            }
        });

        this.state = new StateObserver(GameState.Splash);
    }

    run(): void {
        window.requestAnimationFrame(() => this.run());
        this.loop();
    }

    loop(): void {
        this.ctx.clearRect(0, 0, this.Canvas.width, this.Canvas.height);

        switch (this.state.get()) {
            case GameState.Splash:
                this.splashLoop();
                break;
            case GameState.Run:
                this.runLoop();
                break;
            case GameState.Stopped:
                this.stoppedLoop();
                break;
            case GameState.SlideScene:
                this.slideSceneLoop();
                break;
            case GameState.GameOver:
                this.gameOverLoop();
                break;
            case GameState.Win:
                this.winLoop();
                break;

            default:
                this.runLoop();
                break;
        }

        this.state.update();
    }

    runLoop(): void {
        this.Player.listenEvents();
        this.Sword.listenEvents();
        this.Enemies.listenEvents();

        this.Player.collisions();
        this.Sword.collisions();
        this.Items.collisions();
        this.Enemies.collisions();
        this.Viewport.collisions();
        this.Projectiles.collisions();

        this.Player.move();
        this.Enemies.move();
        this.Projectiles.move();

        this.Viewport.draw();
        this.Projectiles.draw();
        this.Enemies.draw();
        this.Sword.draw();
        this.Player.draw();
        this.Hud.draw();
        this.Items.draw();

        this.Player.updateObservers();

        this.EventManager.newFrame();
    }

    stoppedLoop(): void {
        this.Viewport.draw();
        this.Enemies.draw();
        this.Sword.draw();
        this.Player.draw();
        this.Projectiles.draw();
        this.Hud.draw();
    }

    splashLoop(): void {
        this.SplashScreen.draw();
    }

    gameOverLoop(): void {
        this.GameOverScreen.draw();
    }

    winLoop(): void {
        this.WinScreen.draw();
    }

    slideSceneLoop(): void {
        this.Viewport.slideSceneAnimationMove();
        this.Player.slideSceneAnimationMove();

        this.Viewport.draw();
        this.Enemies.draw();
        this.Sword.draw();
        this.Player.draw();
        this.Projectiles.draw();
        this.Hud.draw();
    }

    drawImage(
        sprite: HTMLImageElement,
        x: number,
        y: number,
        width: number,
        height: number
    ) {
        this.ctx.beginPath();
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(
            sprite,
            x,
            y,
            width,
            height
        );
        this.ctx.closePath();
    }

    fillRect(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string
    ) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            x,
            y,
            width,
            height
        );
        this.ctx.closePath();
    }

    fillText(
        text: string,
        x: number,
        y: number,
        color: string,
        fontSize: string = '16px',
        textAlign: CanvasTextAlign = 'left',
        textBaseline: CanvasTextBaseline = 'alphabetic',
    ) {
        this.ctx.beginPath();
            this.ctx.font = fontSize + ' NES-font';
            this.ctx.fillStyle = color;
            this.ctx.textAlign = textAlign;
            this.ctx.textBaseline = textBaseline;
            this.ctx.fillText(text, x, y);
        this.ctx.closePath();
    }
}
