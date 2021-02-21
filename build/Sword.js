import { Projectile } from "./Projectiles.js";
import { SpriteLoader, AudioLoader, Direction } from "./AbstractClasses.js";
import { Collisions } from "./functions.js";
export class Sword {
    constructor(game) {
        this.sprites = [];
        this.Game = game;
        this.swordWidth = 64;
        this.swordHeight = 28;
        this.swordHandleWidth = 16;
        this.sprites[Direction.Up] = SpriteLoader.load("./sprites/png/sword-up.png");
        this.sprites[Direction.Right] = SpriteLoader.load("./sprites/png/sword-right.png");
        this.sprites[Direction.Down] = SpriteLoader.load("./sprites/png/sword-down.png");
        this.sprites[Direction.Left] = SpriteLoader.load("./sprites/png/sword-left.png");
        this.slashSound = AudioLoader.load("./sounds/effect/Sword_Slash.wav");
        this.flyingSound = AudioLoader.load("./sounds/effect/Sword_Shoot.wav");
        this.isFlying = false;
    }
    get direction() {
        return this.Game.Player.direction;
    }
    get x() {
        if (this.direction === Direction.Up) {
            return this.Game.Player.x + (this.Game.Player.width - this.swordHeight) / 2;
        }
        else if (this.direction === Direction.Down) {
            return this.Game.Player.x + (this.Game.Player.width - this.swordHeight) / 2;
        }
        else if (this.direction === Direction.Left) {
            return this.Game.Player.x - this.swordWidth + this.swordHandleWidth;
        }
        else if (this.direction === Direction.Right) {
            return this.Game.Player.x + this.Game.Player.width - this.swordHandleWidth;
        }
    }
    get y() {
        if (this.direction === Direction.Up) {
            return this.Game.Player.y - this.swordWidth + this.swordHandleWidth;
        }
        else if (this.direction === Direction.Down) {
            return this.Game.Player.y + this.Game.Player.width - this.swordHandleWidth;
        }
        else if (this.direction === Direction.Left) {
            return this.Game.Player.y + (this.Game.Player.height - this.swordHeight) / 2;
        }
        else if (this.direction === Direction.Right) {
            return this.Game.Player.y + (this.Game.Player.height - this.swordHeight) / 2;
        }
    }
    get width() {
        if (this.direction === Direction.Up || this.direction === Direction.Down) {
            return this.swordHeight;
        }
        else if (this.direction === Direction.Left || this.direction === Direction.Right) {
            return this.swordWidth;
        }
    }
    get height() {
        if (this.direction === Direction.Up || this.direction === Direction.Down) {
            return this.swordWidth;
        }
        else if (this.direction === Direction.Left || this.direction === Direction.Right) {
            return this.swordHeight;
        }
    }
    draw() {
        if (this.Game.Player.isAttackObserver.get()) {
            this.Game.Viewport.drawImage(this.sprites[this.direction], this.x, this.y, this.width, this.height);
        }
    }
    drawWin() {
        this.Game.Viewport.drawImage(this.sprites[Direction.Up], this.Game.Player.x, this.Game.Player.y - this.swordWidth, this.swordHeight, this.swordWidth);
    }
    collisions() {
        if (this.Game.Player.isAttackObserver.get()) {
            this.Game.EnemyManager.loopEnemies((enemy) => {
                if (Collisions.simpleMovingBox(enemy, this)) {
                    enemy.takeDamage(1);
                }
            });
        }
    }
    listenEvents() {
        if (this.Game.Player.isAttackObserver.get() && this.Game.Player.isAttackObserver.isFirstFrame) {
            this.slashSound.play();
        }
        if (!this.isFlying
            && this.Game.Player.isAttackObserver.getLastFrame()
            && !this.Game.Player.isAttackObserver.get()
            && this.Game.Player.isFullLife) {
            this.flyingSound.play();
            this.isFlying = true;
            this.Game.ProjectileManager.addProjectile(new Projectile(this.Game, this.x, this.y, this.width, this.height, this.Game.Player.speed * 2, this.direction, this.sprites[this.direction], false, // Disable collision on Player
            false, null, true, // Enable collisions on Enemies
            (enemy) => enemy.takeDamage(1), () => this.isFlying = false));
        }
    }
}