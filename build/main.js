class SpriteLoader {
    static load(src) {
        let sprite = new Image();
        sprite.src = src;
        return sprite;
    }
}
class AudioLoader {
    static load(src, loop = false) {
        let audio = new Audio(src);
        audio.loop = loop;
        return audio;
    }
}
class SimpleBox {
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
;
(function (Direction) {
    function getRandom() {
        switch (getRandomIntInclusive(1, 4)) {
            case 1:
                return Direction.Up;
                break;
            case 2:
                return Direction.Right;
                break;
            case 3:
                return Direction.Down;
                break;
            case 4:
                return Direction.Left;
                break;
        }
    }
    Direction.getRandom = getRandom;
    function getOpposite(direction) {
        switch (direction) {
            case Direction.Up:
                return Direction.Down;
                break;
            case Direction.Down:
                return Direction.Up;
                break;
            case Direction.Left:
                return Direction.Right;
                break;
            case Direction.Right:
                return Direction.Left;
                break;
        }
    }
    Direction.getOpposite = getOpposite;
    function areOpposite(dir1, dir2) {
        if (dir1 === Direction.Up && dir2 === Direction.Down ||
            dir1 === Direction.Down && dir2 === Direction.Up ||
            dir1 === Direction.Right && dir2 === Direction.Left ||
            dir1 === Direction.Left && dir2 === Direction.Right) {
            return true;
        }
        return false;
    }
    Direction.areOpposite = areOpposite;
    function isVertical(direction) {
        switch (direction) {
            case Direction.Up:
            case Direction.Down:
                return true;
                break;
            case Direction.Left:
            case Direction.Right:
                return false;
                break;
        }
    }
    Direction.isVertical = isVertical;
    function isHorizontal(direction) {
        switch (direction) {
            case Direction.Up:
            case Direction.Down:
                return true;
                break;
            case Direction.Left:
            case Direction.Right:
                return false;
                break;
        }
    }
    Direction.isHorizontal = isHorizontal;
})(Direction || (Direction = {}));
class GameMovingBox extends SimpleBox {
    constructor(game) {
        super();
        this._dx = 0;
        this._dy = 0;
        this.Game = game;
    }
    get dx() {
        return this._dx * this.Game.dt;
    }
    get dy() {
        return this._dy * this.Game.dt;
    }
    get realDx() {
        return this._dx;
    }
    get realDy() {
        return this._dy;
    }
    set dx(dx) {
        this._dx = dx;
    }
    set dy(dy) {
        this._dy = dy;
    }
}
class MovingBox extends SimpleBox {
    constructor() {
        super(...arguments);
        this.dx = 0;
        this.dy = 0;
    }
}
class MovingBoxHitBox {
    constructor(box, x, y, width, height) {
        this.Box = box;
        this.hitX = x;
        this.hitY = y;
        this.hitWidth = width;
        this.hitHeight = height;
    }
    get x() {
        return this.Box.x + this.hitX;
    }
    set x(x) {
        this.Box.x = x - this.hitX;
    }
    get y() {
        return this.Box.y + this.hitY;
    }
    set y(y) {
        this.Box.y = y - this.hitY;
    }
    get width() {
        return this.hitWidth;
    }
    get height() {
        return this.hitHeight;
    }
    get dx() {
        return this.Box.dx;
    }
    set dx(dx) {
        this.Box.dx = dx;
    }
    get dy() {
        return this.Box.dy;
    }
    set dy(dy) {
        this.Box.dy = dy;
    }
    get direction() {
        return this.Box.direction;
    }
    set direction(direction) {
        this.Box.direction = direction;
    }
}

class Brick {
    constructor(src, hasCollisions = false) {
        this.sprite = SpriteLoader.load(src);
        this.hasCollisions = hasCollisions;
    }
}
class DefaultBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/default.png");
    }
}
class DefaultGreyBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/default-grey.png");
    }
}
class StairsBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/stairs.png");
    }
}
class TreeBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/tree.png", true);
    }
}
class WhiteTreeBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/white-tree.png", true);
    }
}
class GraveBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/grave.png", true);
    }
}
class WallBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/wall.png", true);
    }
}
class SingleWallBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/single-wall.png", true);
    }
}
class SingleRedWallBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/single-red-wall.png", true);
    }
}
class WallTopBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/wall-top.png", true);
    }
}
class WallTopRightBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/wall-top-right.png", true);
    }
}
class WallTopLeftBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/wall-top-left.png", true);
    }
}
class WallBottomRightBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/wall-bottom-right.png", true);
    }
}
class WallBottomLeftBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/wall-bottom-left.png", true);
    }
}
class WhiteWallBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/white-wall.png", true);
    }
}
class WhiteWallTopBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/white-wall-top.png", true);
    }
}
class WhiteWallTopRightBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/white-wall-top-right.png", true);
    }
}
class WhiteWallTopLeftBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/white-wall-top-left.png", true);
    }
}
class WhiteWallBottomRightBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/white-wall-bottom-right.png", true);
    }
}
class WhiteWallBottomLeftBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/white-wall-bottom-left.png", true);
    }
}
class MonumentTopRightBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/monument-top-right.png", true);
    }
}
class MonumentTopLeftBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/monument-top-left.png", true);
    }
}
class MonumentBottomRightBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/monument-bottom-right.png", true);
    }
}
class MonumentBottomLeftBrick extends Brick {
    constructor() {
        super("./sprites/png/bricks/monument-bottom-left.png", true);
    }
}

var EnemieState;
(function (EnemieState) {
    EnemieState[EnemieState["Moving"] = 0] = "Moving";
    EnemieState[EnemieState["ChangeDirection"] = 1] = "ChangeDirection";
    EnemieState[EnemieState["Wait"] = 2] = "Wait";
    EnemieState[EnemieState["Attack"] = 3] = "Attack";
    EnemieState[EnemieState["Killed"] = 4] = "Killed";
})(EnemieState || (EnemieState = {}));
;
class Enemy extends GameMovingBox {
    constructor(game, x, y, width, height, speed, direction) {
        super(game);
        this.killedSprites = [];
        this.Game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction;
        this.hasPlayerCollision = true;
        this.hasViewportCollision = true;
        this.hasBricksCollisions = true;
        this.killedSprites[1] = SpriteLoader.load("./sprites/png/killed1.png");
        this.killedSprites[2] = SpriteLoader.load("./sprites/png/killed2.png");
        this.isInvincibleObserver = new StateObserver(false);
        this.invincibleDuration = 25;
        this.invincibleAnimation = new AnimationObserver(7, 2);
        this.dieSound = AudioLoader.load("./sounds/effect/Enemy_Die.wav");
        this.hitSound = AudioLoader.load("./sounds/effect/Enemy_Hit.wav");
    }
    aiThinking() { }
    move() {
        this.y += this.dy;
        this.x += this.dx;
        this.dx = 0;
        this.dy = 0;
    }
    draw() { }
    playerCollision() {
        this.Game.Player.takeDamage(this.damage);
    }
    viewportCollision() { }
    bricksCollision() { }
    passBetweenBoxesHelper() { return false; }
    customCollision() { }
    takeDamage(damage) {
        if (this.isInvincibleObserver.is(true) || this.state.is(EnemieState.Killed))
            return;
        this.hp -= damage;
        if (this.hp <= 0) {
            this.dieSound.play();
            this.state.setNextState(EnemieState.Killed);
            return;
        }
        this.getInvicibility();
        this.hitSound.play();
    }
    getInvicibility() {
        this.isInvincibleObserver.setNextState(true);
    }
    dropItem() {
        if (this.Game.Player.hp < this.Game.Player.maxHp && getOneRandom(3)) {
            this.Game.ItemManager.addItem(new Item(this.x + (this.width / 2) - (24 / 2), this.y + (this.height / 2) - (24 / 2), 24, 24, SpriteLoader.load('./sprites/png/full-heart.png'), () => this.Game.Player.recoverHealth(2), AudioLoader.load("./sounds/effect/Get_Heart.wav")));
            return true;
        }
        return false;
    }
}
class SimpleMovingEnemy extends Enemy {
    constructor(game, x, y, width, height, speed, direction) {
        super(game, x, y, width, height, speed, direction);
        this.sprites = [];
        this.state = new StateObserver(EnemieState.ChangeDirection);
        // HalfHitBoxs are used by the passBetweenHelper() function
        // | ** | -- |
        // | ** | -- |
        this.halfLeftHitBox = new MovingBoxHitBox(this, 0, 0, this.width / 2, this.height);
        // | -- | ** |
        // | -- | ** |
        this.halfRightHitBox = new MovingBoxHitBox(this, this.width / 2, 0, this.width / 2, this.height);
        // | ** | ** |
        // | -- | -- |
        this.halfUpHitBox = new MovingBoxHitBox(this, 0, 0, this.width, this.height / 2);
        // | -- | -- |
        // | ** | ** |
        this.halfDownHitBox = new MovingBoxHitBox(this, 0, this.height / 2, this.width, this.height / 2);
    }
    aiThinking() {
        switch (this.state.get()) {
            case EnemieState.Moving:
                if (this.isInvincibleObserver.is(false)) {
                    switch (this.direction) {
                        case Direction.Down:
                            this.dy = this.speed;
                            break;
                        case Direction.Up:
                            this.dy = -this.speed;
                            break;
                        case Direction.Right:
                            this.dx = this.speed;
                            break;
                        case Direction.Left:
                            this.dx = -this.speed;
                            break;
                    }
                }
                if (this.state.currentFrame > 50) {
                    if (getOneRandom(50))
                        this.state.setNextState(EnemieState.Attack);
                    if (getOneRandom(50))
                        this.state.setNextState(EnemieState.ChangeDirection);
                }
                break;
            case EnemieState.ChangeDirection:
                if (this.state.isFirstFrame) {
                    this.direction = Direction.getRandom();
                }
                if (this.state.currentFrame > 30) {
                    this.state.setNextState(EnemieState.Moving);
                }
                break;
            case EnemieState.Attack:
                if (this.state.isFirstFrame) {
                    this.attack();
                }
                if (this.state.currentFrame > 30) {
                    this.state.setNextState(EnemieState.Moving);
                }
                break;
            default:
                break;
        }
    }
    // Helper to pass between two boxes
    passBetweenBoxesHelper() {
        let halfLeftCollision = false;
        let halfRightCollision = false;
        let halfUpCollision = false;
        let halfDownCollision = false;
        this.Game.Viewport.loopCollision((cell, col, row) => {
            if (simpleMovingBoxCollision(this.halfLeftHitBox, cell)) {
                halfLeftCollision = true;
            }
            if (simpleMovingBoxCollision(this.halfRightHitBox, cell)) {
                halfRightCollision = true;
            }
            if (simpleMovingBoxCollision(this.halfUpHitBox, cell)) {
                halfUpCollision = true;
            }
            if (simpleMovingBoxCollision(this.halfDownHitBox, cell)) {
                halfDownCollision = true;
            }
        });
        if (this.direction === Direction.Up || this.direction === Direction.Down) {
            if (halfLeftCollision && !halfRightCollision) {
                this.dx = this.speed;
                return true;
            }
            else if (!halfLeftCollision && halfRightCollision) {
                this.dx = -this.speed;
                return true;
            }
        }
        else if (this.direction === Direction.Left || this.direction === Direction.Right) {
            if (halfUpCollision && !halfDownCollision) {
                this.dy = this.speed;
                return true;
            }
            else if (!halfUpCollision && halfDownCollision) {
                this.dy = -this.speed;
                return true;
            }
        }
        return false;
    }
    viewportCollision() {
        this.changeDirection();
    }
    bricksCollision() {
        this.changeDirection();
    }
    changeDirection() {
        this.state.setNextState(EnemieState.ChangeDirection);
    }
    draw() {
        this.Game.Viewport.currentScene.drawImage(this.sprites[this.direction][this.spritesAnimation.currentAnimationStep], this.x, this.y, this.width, this.height);
    }
    attack() { }
}
class Octorok extends SimpleMovingEnemy {
    constructor(game, x, y, speed, direction) {
        super(game, x, y, 64, 64, speed, direction);
        this.damage = 1;
        this.hp = 1;
        this.sprites[Direction.Up] = [];
        this.sprites[Direction.Up][1] = SpriteLoader.load("./sprites/png/octorok-up1.png");
        this.sprites[Direction.Up][2] = SpriteLoader.load("./sprites/png/octorok-up2.png");
        this.sprites[Direction.Down] = [];
        this.sprites[Direction.Down][1] = SpriteLoader.load("./sprites/png/octorok-down1.png");
        this.sprites[Direction.Down][2] = SpriteLoader.load("./sprites/png/octorok-down2.png");
        this.sprites[Direction.Right] = [];
        this.sprites[Direction.Right][1] = SpriteLoader.load("./sprites/png/octorok-right1.png");
        this.sprites[Direction.Right][2] = SpriteLoader.load("./sprites/png/octorok-right2.png");
        this.sprites[Direction.Left] = [];
        this.sprites[Direction.Left][1] = SpriteLoader.load("./sprites/png/octorok-left1.png");
        this.sprites[Direction.Left][2] = SpriteLoader.load("./sprites/png/octorok-left2.png");
        this.spritesAnimation = new AnimationObserver(20 / speed, 2);
    }
    attack() {
        this.Game.ProjectileManager.addProjectile(new Projectile(this.Game, this.x + (this.width / 2) - (24 / 2), this.y + (this.height / 2) - (30 / 2), 24, 30, 8, this.direction, SpriteLoader.load("./sprites/png/fireball.png"), true, // Enable collision on Player
        true, // Enable shield block
        (player) => player.takeDamage(this.damage), false, // Disable collisions on Enemies
        null, null));
    }
}
class BlueOctorok extends Octorok {
    constructor(game, x, y, speed, direction) {
        super(game, x, y, speed, direction);
        this.damage = 2;
        this.hp = 2;
        this.sprites[Direction.Up] = [];
        this.sprites[Direction.Up][1] = SpriteLoader.load("./sprites/png/blue-octorok-up1.png");
        this.sprites[Direction.Up][2] = SpriteLoader.load("./sprites/png/blue-octorok-up2.png");
        this.sprites[Direction.Down] = [];
        this.sprites[Direction.Down][1] = SpriteLoader.load("./sprites/png/blue-octorok-down1.png");
        this.sprites[Direction.Down][2] = SpriteLoader.load("./sprites/png/blue-octorok-down2.png");
        this.sprites[Direction.Right] = [];
        this.sprites[Direction.Right][1] = SpriteLoader.load("./sprites/png/blue-octorok-right1.png");
        this.sprites[Direction.Right][2] = SpriteLoader.load("./sprites/png/blue-octorok-right2.png");
        this.sprites[Direction.Left] = [];
        this.sprites[Direction.Left][1] = SpriteLoader.load("./sprites/png/blue-octorok-left1.png");
        this.sprites[Direction.Left][2] = SpriteLoader.load("./sprites/png/blue-octorok-left2.png");
    }
    dropItem() {
        if (super.dropItem())
            return true;
        if (getOneRandom(3)) {
            this.Game.ItemManager.addItem(new Item(this.x + (this.width / 2) - (32 / 2), this.y + (this.height / 2) - (32 / 2), 32, 32, SpriteLoader.load('./sprites/png/clock.png'), () => this.Game.Player.getInvicibility(400), AudioLoader.load("./sounds/effect/Get_Item.wav")));
            return true;
        }
        return false;
    }
}
class Moblin extends SimpleMovingEnemy {
    constructor(game, x, y, speed, direction) {
        super(game, x, y, 64, 64, speed, direction);
        this.damage = 1;
        this.hp = 1;
        this.sprites[Direction.Up] = [];
        this.sprites[Direction.Up][1] = SpriteLoader.load("./sprites/png/moblin-up1.png");
        this.sprites[Direction.Up][2] = SpriteLoader.load("./sprites/png/moblin-up2.png");
        this.sprites[Direction.Down] = [];
        this.sprites[Direction.Down][1] = SpriteLoader.load("./sprites/png/moblin-down1.png");
        this.sprites[Direction.Down][2] = SpriteLoader.load("./sprites/png/moblin-down2.png");
        this.sprites[Direction.Right] = [];
        this.sprites[Direction.Right][1] = SpriteLoader.load("./sprites/png/moblin-right1.png");
        this.sprites[Direction.Right][2] = SpriteLoader.load("./sprites/png/moblin-right2.png");
        this.sprites[Direction.Left] = [];
        this.sprites[Direction.Left][1] = SpriteLoader.load("./sprites/png/moblin-left1.png");
        this.sprites[Direction.Left][2] = SpriteLoader.load("./sprites/png/moblin-left2.png");
        this.spritesAnimation = new AnimationObserver(25 / speed, 2);
        this.arrowSprites = [];
        this.arrowSprites[Direction.Up] = SpriteLoader.load("./sprites/png/arrow-up.png");
        this.arrowSprites[Direction.Down] = SpriteLoader.load("./sprites/png/arrow-down.png");
        this.arrowSprites[Direction.Right] = SpriteLoader.load("./sprites/png/arrow-right.png");
        this.arrowSprites[Direction.Left] = SpriteLoader.load("./sprites/png/arrow-left.png");
    }
    attack() {
        let width = (this.direction === Direction.Up || this.direction === Direction.Down) ? 20 : 64;
        let height = (this.direction === Direction.Up || this.direction === Direction.Down) ? 64 : 20;
        this.Game.ProjectileManager.addProjectile(new Projectile(this.Game, this.x + (this.width / 2) - (24 / 2), this.y + (this.height / 2) - (30 / 2), width, height, 8, this.direction, this.arrowSprites[this.direction], true, // Enable collision on Player
        true, // Enable shield block
        (player) => player.takeDamage(this.damage), false, // Disable collisions on Enemies
        null, null));
    }
}
class BlueMoblin extends Moblin {
    constructor(game, x, y, speed, direction) {
        super(game, x, y, speed, direction);
        this.damage = 2;
        this.hp = 2;
        this.sprites[Direction.Up] = [];
        this.sprites[Direction.Up][1] = SpriteLoader.load("./sprites/png/blue-moblin-up1.png");
        this.sprites[Direction.Up][2] = SpriteLoader.load("./sprites/png/blue-moblin-up2.png");
        this.sprites[Direction.Down] = [];
        this.sprites[Direction.Down][1] = SpriteLoader.load("./sprites/png/blue-moblin-down1.png");
        this.sprites[Direction.Down][2] = SpriteLoader.load("./sprites/png/blue-moblin-down2.png");
        this.sprites[Direction.Right] = [];
        this.sprites[Direction.Right][1] = SpriteLoader.load("./sprites/png/blue-moblin-right1.png");
        this.sprites[Direction.Right][2] = SpriteLoader.load("./sprites/png/blue-moblin-right2.png");
        this.sprites[Direction.Left] = [];
        this.sprites[Direction.Left][1] = SpriteLoader.load("./sprites/png/blue-moblin-left1.png");
        this.sprites[Direction.Left][2] = SpriteLoader.load("./sprites/png/blue-moblin-left2.png");
    }
    dropItem() {
        if (super.dropItem())
            return true;
        if (getOneRandom(3)) {
            this.Game.ItemManager.addItem(new Item(this.x + (this.width / 2) - (32 / 2), this.y + (this.height / 2) - (32 / 2), 32, 32, SpriteLoader.load('./sprites/png/clock.png'), () => this.Game.Player.getInvicibility(400), AudioLoader.load("./sounds/effect/Get_Item.wav")));
            return true;
        }
        return false;
    }
}
class Tektite extends Enemy {
    constructor(game, x, y) {
        super(game, x, y, 64, 64, 3, Direction.Down);
        this.damage = 1;
        this.hp = 1;
        // this.hasPlayerCollision = true;
        this.hasViewportCollision = false;
        this.hasBricksCollisions = false;
        this.sprites = [];
        this.sprites[1] = SpriteLoader.load("./sprites/png/tektite1.png");
        this.sprites[2] = SpriteLoader.load("./sprites/png/tektite2.png");
        this.spritesAnimation = new AnimationObserver(20, 2);
        this.state = new StateObserver(EnemieState.Wait);
    }
    aiThinking() {
        switch (this.state.get()) {
            case EnemieState.Moving:
                if (this.state.isFirstFrame) {
                    this.dy = -6;
                    this.dx = this.realDy / 2 * ((getOneRandom(2)) ? -1 : 1);
                }
                else {
                    this.dy = this.realDy + (0.1 * this.Game.dt);
                }
                if ((this.state.currentFrame > 60 && getOneRandom(50)) || this.state.currentFrame > 100)
                    this.state.setNextState(EnemieState.Wait);
                break;
            case EnemieState.Wait:
                this.dx = 0;
                this.dy = 0;
                if ((this.state.currentFrame > 30 && getOneRandom(50)) || this.state.currentFrame > 60)
                    this.state.setNextState(EnemieState.Moving);
                break;
        }
    }
    customCollision() {
        if (movingBoxLineCollision(this, 0, Direction.Up)) {
            this.dy = this.realDy / 2;
        }
        if (movingBoxLineCollision(this, this.Game.Viewport.height, Direction.Down)) {
            this.state.setNextState(EnemieState.Wait);
        }
        if (simpleMovingBoxLineCollision(this, 0, Direction.Left)) {
            this.dx = -this.realDx;
        }
        if (simpleMovingBoxLineCollision(this, this.Game.Viewport.width, Direction.Right)) {
            this.dx = -this.realDx;
        }
    }
    move() {
        if (this.state.is(EnemieState.Killed))
            return;
        this.y += this.dy;
        this.x += this.dx;
    }
    draw() {
        let sprite;
        switch (this.state.get()) {
            case EnemieState.Moving:
                sprite = this.sprites[1];
                break;
            case EnemieState.Wait:
                sprite = this.sprites[this.spritesAnimation.currentAnimationStep];
                break;
            default:
                break;
        }
        this.Game.Viewport.currentScene.drawImage(sprite, this.x, this.y, this.width, this.height);
    }
}
class BlueTektite extends Tektite {
    constructor(game, x, y) {
        super(game, x, y);
        this.damage = 2;
        this.sprites = [];
        this.sprites[1] = SpriteLoader.load("./sprites/png/blue-tektite1.png");
        this.sprites[2] = SpriteLoader.load("./sprites/png/blue-tektite2.png");
    }
    dropItem() {
        if (super.dropItem())
            return true;
        if (getOneRandom(3)) {
            this.Game.ItemManager.addItem(new Item(this.x + (this.width / 2) - (32 / 2), this.y + (this.height / 2) - (32 / 2), 32, 32, SpriteLoader.load('./sprites/png/clock.png'), () => this.Game.Player.getInvicibility(400), AudioLoader.load("./sounds/effect/Get_Item.wav")));
            return true;
        }
        return false;
    }
}

class EnemyManager {
    constructor(game) {
        this.enemies = [];
        this.Game = game;
        if (this.Game.Viewport.currentScene.hasEnemies) {
            this.enemies = this.Game.Viewport.currentScene.enemies;
        }
    }
    loopEnemies(callback) {
        this.enemies.forEach((enemy) => {
            callback(enemy);
        });
    }
    killEnemy(enemy) {
        const enemyIndex = this.enemies.indexOf(enemy);
        if (enemyIndex > -1) {
            this.enemies.splice(enemyIndex, 1);
        }
        if (this.Game.EnemyManager.enemies.length <= 0) {
            this.Game.Player.increaseScore();
        }
        enemy.dropItem();
    }
    aiThinking() {
        this.loopEnemies((enemy) => {
            enemy.aiThinking();
        });
    }
    collisions() {
        this.loopEnemies((enemy) => {
            if (enemy.hasPlayerCollision && movingBoxsCollision(this.Game.Player.hitBox, enemy) && !enemy.state.is(EnemieState.Killed)) {
                enemy.playerCollision();
            }
            if (enemy.hasViewportCollision && movingBoxCanvasCollision(enemy, this.Game.Viewport)) {
                enemy.viewportCollision();
            }
            let helper = enemy.passBetweenBoxesHelper();
            if (enemy.hasBricksCollisions) {
                this.Game.Viewport.loopCollision((cell, col, row) => {
                    if (movingBoxCollision(enemy, cell)) {
                        if (!helper)
                            enemy.bricksCollision();
                    }
                });
            }
            enemy.customCollision();
        });
    }
    move() {
        this.loopEnemies((enemy) => {
            enemy.move();
        });
    }
    draw() {
        this.loopEnemies((enemy) => {
            if (enemy.state.is(EnemieState.Killed)) {
                if (enemy.state.currentFrame <= 10) {
                    this.Game.Viewport.currentScene.drawImage(enemy.killedSprites[1], enemy.x, enemy.y, enemy.width, enemy.height);
                }
                else if (enemy.state.currentFrame <= 20) {
                    this.Game.Viewport.currentScene.drawImage(enemy.killedSprites[2], enemy.x, enemy.y, enemy.width, enemy.height);
                }
                else {
                    this.Game.EnemyManager.killEnemy(enemy);
                }
                return;
            }
            if (enemy.isInvincibleObserver.is(true)) {
                enemy.invincibleAnimation.update(this.Game.dt);
                if (enemy.invincibleAnimation.currentAnimationStep === 2)
                    return;
            }
            enemy.draw();
            if (this.Game.state.is(GameState.Run))
                enemy.spritesAnimation.update(this.Game.dt);
        });
    }
    updateObservers() {
        this.loopEnemies((enemy) => {
            enemy.state.update(this.Game.dt);
            enemy.isInvincibleObserver.update(this.Game.dt);
            if (enemy.isInvincibleObserver.get() && enemy.isInvincibleObserver.currentFrame > enemy.invincibleDuration) {
                enemy.isInvincibleObserver.setNextState(false);
            }
        });
    }
}

class EventManager {
    constructor(game) {
        this.isRightPressed = false;
        this.isLeftPressed = false;
        this.isUpPressed = false;
        this.isDownPressed = false;
        this.isAttackPressed = false;
        this.isEnterPressed = false;
        this.currentAttackFrame = 0;
        this.attackDuration = 10;
        this.Game = game;
        document.addEventListener("keydown", e => this.keyEvent(e, true));
        document.addEventListener("keyup", e => this.keyEvent(e, false));
        document.addEventListener("visibilitychange", e => this.visibilityEvent(e), false);
    }
    keyEvent(e, keydown) {
        if (e.repeat) {
            e.preventDefault();
            return;
        }
        ;
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
                if (keydown) {
                    this.isAttackPressed = true;
                }
                break;
            case "p":
                if (keydown && this.Game.state.isIn(GameState.Run, GameState.Stopped)) {
                    this.Game.state.setNextState(this.Game.state.is(GameState.Run)
                        ? GameState.Stopped
                        : GameState.Run);
                }
                break;
        }
        e.preventDefault();
    }
    visibilityEvent(e) {
        if (document["hidden"])
            this.Game.state.setNextState(GameState.Stopped);
    }
    newFrame() {
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

// **********************
// Random helper function
// **********************
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getOneRandom(number) {
    return getRandomIntInclusive(1, number) === 1;
}
// **************************
// Collision helper functions
// **************************
function simpleBoxCollision(box1, box2) {
    if ((box1.x >= box2.x + box2.width) ||
        (box1.x + box1.width <= box2.x) ||
        (box1.y >= box2.y + box2.height) ||
        (box1.y + box1.height <= box2.y)) {
        return false;
    }
    return true;
}
function simpleMovingBoxCollision(movingBox, box2) {
    if ((movingBox.x + movingBox.dx >= box2.x + box2.width) ||
        (movingBox.x + movingBox.dx + movingBox.width <= box2.x) ||
        (movingBox.y + movingBox.dy >= box2.y + box2.height) ||
        (movingBox.y + movingBox.dy + movingBox.height <= box2.y)) {
        return false;
    }
    return true;
}
function movingBoxCollision(movingBox, box2) {
    if ((movingBox.x + movingBox.dx >= box2.x + box2.width) ||
        (movingBox.x + movingBox.dx + movingBox.width <= box2.x) ||
        (movingBox.y + movingBox.dy >= box2.y + box2.height) ||
        (movingBox.y + movingBox.dy + movingBox.height <= box2.y)) {
        return false;
    }
    else {
        if (movingBox.dx > 0 && movingBox.x + movingBox.width + movingBox.dx > box2.x && movingBox.x + movingBox.width <= box2.x) {
            movingBox.x = box2.x - movingBox.width;
            movingBox.dx = 0;
        }
        if (movingBox.dx < 0 && movingBox.x + movingBox.dx < box2.x + box2.width && movingBox.x >= box2.x + box2.width) {
            movingBox.x = box2.x + box2.width;
            movingBox.dx = 0;
        }
        if (movingBox.dy > 0 && movingBox.y + movingBox.height + movingBox.dy > box2.y && movingBox.y + movingBox.height <= box2.y) {
            movingBox.y = box2.y - movingBox.height;
            movingBox.dy = 0;
        }
        if (movingBox.dy < 0 && movingBox.y + movingBox.dy < box2.y + box2.height && movingBox.y >= box2.y + box2.height) {
            movingBox.y = box2.y + box2.height;
            movingBox.dy = 0;
        }
        return true;
    }
}
function movingBoxsCollision(movingBox1, movingBox2) {
    if ((movingBox1.x + movingBox1.dx >= movingBox2.x + movingBox2.width + movingBox1.dx) ||
        (movingBox1.x + movingBox1.dx + movingBox1.width <= movingBox2.x + movingBox1.dx) ||
        (movingBox1.y + movingBox1.dy >= movingBox2.y + movingBox2.height + movingBox1.dy) ||
        (movingBox1.y + movingBox1.dy + movingBox1.height <= movingBox2.y + movingBox1.dy)) {
        return false;
    }
    return true;
}
function simpleMovingBoxCanvasCollision(movingBox, canvas) {
    if (movingBox.x + movingBox.dx + movingBox.width <= canvas.width &&
        movingBox.x + movingBox.dx >= 0 &&
        movingBox.y + movingBox.dy + movingBox.height <= canvas.height &&
        movingBox.y + movingBox.dy >= 0) {
        return false;
    }
    else {
        return true;
    }
}
function movingBoxCanvasCollision(movingBox, canvas) {
    if (!simpleMovingBoxCanvasCollision(movingBox, canvas)) {
        return false;
    }
    else {
        if (movingBox.x + movingBox.dx + movingBox.width > canvas.width) {
            movingBox.dx = 0;
            movingBox.x = canvas.width - movingBox.width;
        }
        if (movingBox.x + movingBox.dx < 0) {
            movingBox.dx = 0;
            movingBox.x = 0;
        }
        if (movingBox.y + movingBox.dy + movingBox.height > canvas.height) {
            movingBox.dy = 0;
            movingBox.y = canvas.height - movingBox.height;
        }
        if (movingBox.y + movingBox.dy < 0) {
            movingBox.dy = 0;
            movingBox.y = 0;
        }
        return true;
    }
}
function simpleMovingBoxLineCollision(movingBox, lineCoordinate, direction) {
    switch (direction) {
        case Direction.Up:
            if (movingBox.y + movingBox.dy < lineCoordinate) {
                return true;
            }
            break;
        case Direction.Down:
            if (movingBox.y + movingBox.dy + movingBox.height > lineCoordinate) {
                return true;
            }
            break;
        case Direction.Left:
            if (movingBox.x + movingBox.dx < lineCoordinate) {
                return true;
            }
            break;
        case Direction.Right:
            if (movingBox.x + movingBox.dx + movingBox.width > lineCoordinate) {
                return true;
            }
            break;
    }
}
function movingBoxLineCollision(movingBox, lineCoordinate, direction) {
    if (!simpleMovingBoxLineCollision(movingBox, lineCoordinate, direction)) {
        return false;
    }
    else {
        switch (direction) {
            case Direction.Up:
                movingBox.y = lineCoordinate + 1;
                movingBox.dy = 0;
                break;
            case Direction.Down:
                movingBox.y = lineCoordinate - movingBox.height;
                movingBox.dy = 0;
                break;
            case Direction.Left:
                movingBox.x = lineCoordinate + 1;
                movingBox.dx = 0;
                break;
            case Direction.Right:
                movingBox.x = lineCoordinate - movingBox.width;
                movingBox.dx = 0;
                break;
        }
        return true;
    }
}

'use strict';
var GameState;
(function (GameState) {
    GameState[GameState["Splash"] = 0] = "Splash";
    GameState[GameState["Run"] = 1] = "Run";
    GameState[GameState["Stopped"] = 2] = "Stopped";
    GameState[GameState["SlideScene"] = 3] = "SlideScene";
    GameState[GameState["GameOver"] = 4] = "GameOver";
    GameState[GameState["Win"] = 5] = "Win";
})(GameState || (GameState = {}));
;
class Game {
    constructor(canvas) {
        this.Canvas = canvas;
        this.ctx = this.Canvas.getContext("2d");
        this.lastTime = null;
        this.dt = null;
        this.init();
    }
    init() {
        this.EventManager = new EventManager(this);
        this.World = new World(this);
        this.Viewport = new Viewport(this);
        this.Player = new Player(this);
        this.Sword = new Sword(this);
        this.EnemyManager = new EnemyManager(this);
        this.ProjectileManager = new ProjectileManager(this);
        this.ItemManager = new ItemManager(this);
        this.Hud = new Hud(this);
        this.Panes = new Panes(this);
        this.SplashScreen = new SplashScreen(this);
        this.GameOverScreen = new GameOverScreen(this);
        this.WinScreen = new WinScreen(this);
        this.StoppedScreen = new StoppedScreen(this);
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
    restart() {
        this.init();
        this.state.setNextState(GameState.Run);
    }
    run() {
        window.requestAnimationFrame((now) => this.loop(now));
    }
    deltaCalculation(now) {
        if (this.lastTime === null) {
            this.dt = 1;
        }
        else {
            this.dt = (now - this.lastTime) / (1000 / 60); // (1000 / 60) because we target 60 fps
        }
        this.lastTime = now;
    }
    loop(now) {
        window.requestAnimationFrame((now) => this.loop(now));
        this.deltaCalculation(now);
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
        this.state.update(this.dt);
    }
    runLoop() {
        if (!this.Panes.isAnimationFinished) {
            this.drawGame();
            this.Panes.drawOpen();
            return;
        }
        this.Player.listenEvents();
        this.Sword.listenEvents();
        this.EnemyManager.aiThinking();
        this.Player.collisions();
        this.ItemManager.collisions();
        this.EnemyManager.collisions();
        this.Viewport.collisions();
        this.ProjectileManager.collisions();
        this.Sword.collisions();
        this.Player.move();
        this.EnemyManager.move();
        this.ProjectileManager.move();
        this.drawGame();
        this.Player.updateObservers();
        this.EnemyManager.updateObservers();
        this.ProjectileManager.updateObservers();
        this.EventManager.newFrame();
    }
    stoppedLoop() {
        this.drawGame();
        this.StoppedScreen.draw();
    }
    splashLoop() {
        this.SplashScreen.draw();
    }
    gameOverLoop() {
        this.GameOverScreen.draw();
    }
    winLoop() {
        this.WinScreen.draw();
    }
    slideSceneLoop() {
        this.Viewport.slideSceneAnimationMove();
        this.Player.slideSceneAnimationMove();
        this.Viewport.draw();
        this.EnemyManager.draw();
        this.Sword.draw();
        this.Player.draw();
        this.ProjectileManager.draw();
        this.Hud.draw();
    }
    drawGame() {
        this.Viewport.draw();
        this.EnemyManager.draw();
        this.Sword.draw();
        this.ItemManager.draw();
        this.ProjectileManager.draw();
        this.Player.draw();
        this.Hud.draw();
    }
    drawImage(sprite, x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(sprite, x, y, width, height);
        this.ctx.closePath();
    }
    fillRect(x, y, width, height, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
        this.ctx.closePath();
    }
    fillText(text, x, y, color, fontSize = '16px', textAlign = 'left', textBaseline = 'alphabetic') {
        this.ctx.beginPath();
        this.ctx.font = fontSize + ' NES-font';
        this.ctx.fillStyle = color;
        this.ctx.textAlign = textAlign;
        this.ctx.textBaseline = textBaseline;
        this.ctx.fillText(text, x, y);
        this.ctx.closePath();
    }
}

class Hud {
    constructor(game) {
        this.Game = game;
        this.x = 0;
        this.y = 0;
        this.height = 64;
        this.emptyHeartSprite = SpriteLoader.load('./sprites/png/empty-heart.png');
        this.halfHeartSprite = SpriteLoader.load('./sprites/png/half-heart.png');
        this.fullHeartSprite = SpriteLoader.load('./sprites/png/full-heart.png');
        this.currentSceneAnimation = new AnimationObserver(25, 2);
    }
    draw() {
        this.Game.fillRect(this.x, this.y, this.width, this.height, '#000');
        this.drawHearts();
        this.drawMap();
        this.drawScore();
    }
    drawHearts() {
        for (let i = 1; i <= this.Game.Player.maxHp / 2; i++) {
            this.Game.drawImage(this.emptyHeartSprite, 24 * i + 8 * i, this.height / 2 - 12, 24, 24);
        }
        for (let i = 1; i <= this.Game.Player.hp / 2; i++) {
            this.Game.drawImage(this.fullHeartSprite, 24 * i + 8 * i, this.height / 2 - 12, 24, 24);
        }
        if (this.Game.Player.hp % 2 === 1) {
            this.Game.drawImage(this.halfHeartSprite, 24 * (this.Game.Player.hp / 2 + 1) + 8 * (this.Game.Player.hp / 2 - 1), this.height / 2 - 12, 24, 24);
        }
    }
    drawMap() {
        let cellHeight = (this.height - this.Game.World.nbCol - 1) / this.Game.World.nbCol;
        let cellWidth = (cellHeight * this.Game.Viewport.width) / this.Game.Viewport.height;
        let x = (this.width / 2) - (cellWidth * this.Game.World.nbRow + this.Game.World.nbRow - 1) / 2;
        this.Game.World.loopScenes((scene) => {
            this.Game.fillRect(x + cellWidth * scene.c + 2 * scene.c, cellHeight * scene.r + 2 * scene.r, cellWidth, cellHeight, scene.hasEnemies ? '#d11c0d' : '#00a230');
        });
        if (this.currentSceneAnimation.currentAnimationStep === 1) {
            this.Game.fillRect(x + cellWidth * this.Game.Viewport.currentScene.c + 2 * this.Game.Viewport.currentScene.c, cellHeight * this.Game.Viewport.currentScene.r + 2 * this.Game.Viewport.currentScene.r, cellWidth, cellHeight, "rgba(0, 0, 0, 0.3)");
        }
        if (this.Game.state.isIn(GameState.Run, GameState.SlideScene)) {
            this.currentSceneAnimation.update(this.Game.dt);
        }
    }
    drawScore() {
        this.Game.fillText(' SCORE: ' + this.Game.Player.score + '/' + this.Game.Player.targetScore, 
        //'FPS:' + ((1/this.Game.dt)*60).toFixed(0),
        this.width - (this.height / 2) + this.x, this.y + this.height / 2, '#fff', '16px', 'right', 'middle');
    }
}

class ItemManager {
    constructor(game) {
        this.Game = game;
        this.items = [];
    }
    collisions() {
        this.loopItems((item) => {
            if (movingBoxsCollision(this.Game.Player, item) ||
                (this.Game.Player.isAttackObserver.is(true) && simpleBoxCollision(this.Game.Sword, item))) {
                item.collisionCallback();
                item.collisionSound.play();
                this.deleteItem(item);
            }
        });
    }
    draw() {
        this.loopItems((item) => {
            this.Game.Viewport.currentScene.drawImage(item.sprite, item.x, item.y, item.width, item.height);
        });
    }
    addItem(item) {
        this.items.push(item);
    }
    deleteItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
    deleteAllItems() {
        this.items = [];
    }
    loopItems(callback) {
        this.items.forEach((item) => {
            callback(item);
        });
    }
}

class Item extends SimpleBox {
    constructor(x, y, width, height, sprite, collisionCallback, collisionSound) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = sprite;
        this.collisionCallback = collisionCallback;
        this.collisionSound = collisionSound;
    }
}

class Cell extends SimpleBox {
    constructor(x, y, size, brick) {
        super();
        this.x = x;
        this.y = y;
        this.width = size;
        this.height = size;
        this.brick = brick;
    }
}
class Scene {
    constructor(game, overworld, c, r, music) {
        this.cells = [];
        this.Game = game;
        this.World = overworld;
        this.nbRow = 11;
        this.nbCol = 16;
        this.cellSize = 64;
        this.enemies = [];
        this.x = 0;
        this.y = 0;
        this.c = c;
        this.r = r;
        this.music = music;
        this.defaultBrick = new DefaultBrick();
        this.defaultWallBrick = new WallBrick();
        for (let c = 0; c < this.nbCol; c++) {
            this.cells[c] = [];
            for (let r = 0; r < this.nbRow; r++) {
                this.cells[c][r] = new Cell(this.cellSize * c, this.cellSize * r, this.cellSize, this.defaultBrick);
            }
        }
        if (this.c == 0) {
            for (let r = 0; r < this.nbRow; r++) {
                this.cells[0][r].brick = this.defaultWallBrick;
            }
        }
        if (this.c == this.World.nbCol - 1) {
            for (let r = 0; r < this.nbRow; r++) {
                this.cells[this.nbCol - 1][r].brick = this.defaultWallBrick;
            }
        }
        if (this.r == 0) {
            for (let c = 0; c < this.nbCol; c++) {
                this.cells[c][0].brick = this.defaultWallBrick;
            }
        }
        if (this.r == this.World.nbRow - 1) {
            for (let c = 0; c < this.nbCol; c++) {
                this.cells[c][this.nbRow - 1].brick = this.defaultWallBrick;
            }
        }
    }
    get hasEnemies() {
        return this.enemies.length > 0;
    }
    getCell(col, row) {
        return this.cells[col][row];
    }
    loadBricks(bricks) {
        bricks.forEach((row, r) => {
            row.forEach((brick, c) => {
                this.cells[c][r].brick = brick;
            });
        });
    }
    drawImage(sprite, x, y, width, height) {
        this.Game.Viewport.drawImage(sprite, x + this.x, y + this.y, width, height);
    }
}
class World {
    constructor(game) {
        this.map = [];
        this.Game = game;
        this.nbRow = 3;
        this.nbCol = 3;
        this.spawnSceneColl = 1;
        this.spawnSceneRow = 2;
        this.spawnCellColl = 7;
        this.spawnCellRow = 6;
        for (let c = 0; c < this.nbCol; c++) {
            this.map[c] = [];
            for (let r = 0; r < this.nbRow; r++) {
                this.map[c][r] = new Scene(this.Game, this, c, r, AudioLoader.load("./sounds/music/overworld.mp3", true));
            }
        }
        this.map[0][0].loadBricks([
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new WhiteWallBrick(), new WhiteWallBottomRightBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(),],
            [new WhiteWallBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(),],
            [new WhiteWallBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new WhiteWallBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new WhiteWallBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new WhiteWallBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new WhiteWallBrick(), new WhiteWallTopRightBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new StairsBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new StairsBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()]
        ]);
        this.map[0][0].music = AudioLoader.load("./sounds/music/death_mountain.mp3", true);
        this.map[0][0].enemies = [
            new BlueOctorok(this.Game, 2 * 64, 2 * 64, 4, getOneRandom(2) ? Direction.Right : Direction.Down),
            new BlueOctorok(this.Game, 5 * 64, 5 * 64, 4, getOneRandom(2) ? Direction.Up : Direction.Down),
            new BlueOctorok(this.Game, 13 * 64, 3 * 64, 4, getOneRandom(2) ? Direction.Up : Direction.Down),
        ];
        this.map[1][0].loadBricks([
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(),],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(),],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()]
        ]);
        this.map[1][0].music = AudioLoader.load("./sounds/music/death_mountain.mp3", true);
        this.map[1][0].enemies = [
            new BlueMoblin(this.Game, 5 * 64, 8 * 64, 4, Direction.Up),
            new BlueMoblin(this.Game, 8 * 64, 4 * 64, 4, getOneRandom(2) ? Direction.Right : Direction.Left),
            new BlueMoblin(this.Game, 10 * 64, 2 * 64, 4, Direction.Down),
        ];
        this.map[2][0].loadBricks([
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteWallBottomLeftBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new MonumentTopLeftBrick(), new MonumentTopRightBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteTreeBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new MonumentTopLeftBrick(), new MonumentTopRightBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new MonumentBottomLeftBrick(), new MonumentBottomRightBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new MonumentBottomLeftBrick(), new MonumentBottomRightBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new GraveBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new DefaultGreyBrick(), new WhiteWallTopLeftBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallTopBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()],
            [new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick(), new WhiteWallBrick()]
        ]);
        this.map[2][0].music = AudioLoader.load("./sounds/music/death_mountain.mp3", true);
        this.map[2][0].enemies = [
            new BlueOctorok(this.Game, 5 * 64, 4 * 64, 4, Direction.Down),
            new BlueOctorok(this.Game, 9 * 64, 6 * 64, 4, Direction.Right),
            new BlueOctorok(this.Game, 12 * 64, 3 * 64, 4, Direction.Down),
            new BlueTektite(this.Game, 7 * 64, 7 * 64),
        ];
        this.map[0][1].loadBricks([
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new StairsBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new StairsBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick(), new WallBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new SingleRedWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick()],
            [new WallBrick(), new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick()]
        ]);
        this.map[0][1].enemies = [
            new Octorok(this.Game, 6 * 64, 4 * 64, 3, getOneRandom(2) ? Direction.Right : Direction.Left),
            new Octorok(this.Game, 4 * 64, 6 * 64, 3, getOneRandom(2) ? Direction.Right : Direction.Left),
            new Octorok(this.Game, 7 * 64, 2 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
            new Octorok(this.Game, 13 * 64, 2 * 64, 3, Direction.Down),
        ];
        this.map[1][1].loadBricks([
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick(), new WallBrick()],
            [new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick()],
            [new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick()],
            [new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick()],
            [new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick()],
            [new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick()],
            [new WallBrick(), new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick(), new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()]
        ]);
        this.map[1][1].enemies = [
            new Octorok(this.Game, 4 * 64, 5 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
            new Octorok(this.Game, 10 * 64, 3 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
            new Octorok(this.Game, 13 * 64, 7 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
            new Octorok(this.Game, 12 * 64, 6 * 64, 3, getOneRandom(2) ? Direction.Right : Direction.Left),
        ];
        this.map[2][1].loadBricks([
            [new WallBrick(), new WallBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick()],
            [new WallBrick(), new WallBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick()],
            [new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick()],
            [new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new WallBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new WallBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
        ]);
        this.map[2][1].enemies = [
            new Octorok(this.Game, 3 * 64, 4 * 64, 3, getOneRandom(2) ? Direction.Right : Direction.Left),
            new Octorok(this.Game, 5 * 64, 6 * 64, 3, getOneRandom(2) ? Direction.Right : Direction.Left),
            new Octorok(this.Game, 10 * 64, 5 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
            new Octorok(this.Game, 14 * 64, 2 * 64, 3, getOneRandom(2) ? Direction.Left : Direction.Down),
        ];
        this.map[0][2].loadBricks([
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick(), new WallBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick(), new WallTopBrick()],
            [new WallBrick(), new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new SingleWallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()]
        ]);
        this.map[0][2].enemies = [
            new Tektite(this.Game, 3 * 64, 4 * 64),
            new Tektite(this.Game, 5 * 64, 7 * 64),
            new Tektite(this.Game, 10 * 64, 5 * 64),
        ];
        // Spawn scene
        this.map[1][2].loadBricks([
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBottomLeftBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()],
            [new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick()],
            [new WallTopBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallTopLeftBrick(), new WallTopBrick()],
            [new WallBrick(), new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallTopBrick(), new WallBrick(), new WallBrick()],
            [new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick(), new WallBrick()]
        ]);
        this.map[2][2].loadBricks([
            [new WallBrick(), new WallBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new WallBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new WallBottomRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBottomRightBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick()],
            [new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallTopBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new WallTopRightBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new DefaultBrick(), new TreeBrick()],
            [new WallBrick(), new WallBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick()],
            [new WallBrick(), new WallBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick(), new TreeBrick()],
        ]);
        this.map[2][2].enemies = [
            new Moblin(this.Game, 3 * 64, 5 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
            new Moblin(this.Game, 5 * 64, 7 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
            new Moblin(this.Game, 10 * 64, 5 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
            new Moblin(this.Game, 12 * 64, 7 * 64, 3, getOneRandom(2) ? Direction.Up : Direction.Down),
        ];
    }
    getSpawnScene() {
        return this.map[this.spawnSceneColl][this.spawnSceneRow];
    }
    loopScenes(callback) {
        this.map.forEach((col, c) => {
            col.forEach((scene, r) => {
                callback(scene);
            });
        });
    }
}

class AbstractObserver {
    constructor() {
        this.currentFrame = 0;
        this.isFirstFrame = true;
    }
    update(dt) {
        this.currentFrame += dt;
    }
}
class StateObserver extends AbstractObserver {
    constructor(state) {
        super();
        this.lastState = null;
        this.lastFrameState = null;
        this.state = state;
        this.nextState = null;
    }
    setNextState(state) {
        this.nextState = state;
    }
    update(dt) {
        this.lastFrameState = this.state;
        if (this.nextState !== null) {
            this.lastState = this.state;
            this.state = this.nextState;
            this.nextState = null;
            this.currentFrame = 0;
            this.isFirstFrame = true;
        }
        else {
            this.isFirstFrame = false;
        }
        super.update(dt);
    }
    get() {
        return this.state;
    }
    getLast() {
        return this.lastState;
    }
    getLastFrame() {
        return this.lastFrameState;
    }
    is(state) {
        return this.state === state;
    }
    isIn(...states) {
        return states.some(s => this.is(s));
    }
    was(state) {
        return this.lastState === state;
    }
    wasIn(...states) {
        return states.some(s => this.was(s));
    }
    wasLastFrame(state) {
        return this.lastFrameState === state;
    }
    wasInLastFrame(...states) {
        return states.some(s => this.wasLastFrame(s));
    }
}
class AnimationObserver extends AbstractObserver {
    constructor(animationStepDuration, nbAnimationStep) {
        super();
        this.currentAnimationStep = 1;
        this.animationStepDuration = animationStepDuration;
        this.nbAnimationStep = nbAnimationStep;
    }
    update(dt) {
        if (this.currentFrame >= this.animationStepDuration) {
            this.currentFrame = 0;
            this.currentAnimationStep =
                (this.currentAnimationStep + 1 > this.nbAnimationStep)
                    ? 1
                    : this.currentAnimationStep + 1;
            this.isFirstFrame = true;
        }
        else {
            this.isFirstFrame = false;
        }
        super.update(dt);
    }
}

class Panes {
    constructor(game) {
        this.Game = game;
        this.speed = 8;
        this.position = 0;
    }
    get isAnimationFinished() {
        return this.position > this.Game.Canvas.width / 2;
    }
    reset() {
        this.position = 0;
    }
    drawOpen() {
        this.Game.fillRect(-this.position, 0, this.Game.Canvas.width / 2, this.Game.Canvas.height, "#000");
        this.Game.fillRect(this.Game.Canvas.width / 2 + this.position, 0, this.Game.Canvas.width / 2, this.Game.Canvas.height, "#000");
        this.position += this.speed * this.Game.dt;
    }
    drawClose() {
        this.Game.fillRect(-(this.Game.Canvas.width / 2) + this.position, 0, this.Game.Canvas.width / 2, this.Game.Canvas.height, "#000");
        this.Game.fillRect(this.Game.Canvas.width - this.position, 0, this.Game.Canvas.width / 2, this.Game.Canvas.height, "#000");
        this.position += this.speed * this.Game.dt;
    }
}

class Player extends GameMovingBox {
    constructor(game) {
        super(game);
        this.sprites = [];
        this.attackSprites = [];
        this.killedSprites = [];
        this.isMovingObserver = new StateObserver(false);
        this.isAttackObserver = new StateObserver(false);
        this.isDiedObserver = new StateObserver(false);
        this.diedAnimation = new AnimationObserver(8, 4);
        this.isInvincibleObserver = new StateObserver(false);
        this.defaultInvincibleDuration = 150;
        this.invincibleDuration = 0;
        this.isKnockBackObserver = new StateObserver(false);
        this.knockBackDuration = 10;
        this.knockBackSpeed = 15;
        this.score = 0;
        this.targetScore = 0;
        this.width = 64;
        this.height = 64;
        this.x = 0;
        this.y = 0;
        this.speed = 5;
        this.maxHp = 6;
        this.hp = this.maxHp;
        this.direction = Direction.Up;
        // | -- | -- |
        // | -- | -- |
        // | ** | ** |
        // | ** | ** |
        this.hitBox = new MovingBoxHitBox(this, 0, this.height / 2, this.width, this.height / 2);
        // HalfHitBoxs are used by the passBetweenHelper() function
        // | -- | -- |
        // | -- | -- |
        // | ** | -- |
        // | ** | -- |
        this.halfLeftHitBox = new MovingBoxHitBox(this, 0, this.height / 2, this.width / 2, this.height / 2);
        // | -- | -- |
        // | -- | -- |
        // | -- | ** |
        // | -- | ** |
        this.halfRightHitBox = new MovingBoxHitBox(this, this.width / 2, this.height / 2, this.width / 2, this.height / 2);
        // | -- | -- |
        // | -- | -- |
        // | ** | ** |
        // | -- | -- |
        this.halfUpHitBox = new MovingBoxHitBox(this, 0, this.height / 2, this.width, this.height / 4);
        // | -- | -- |
        // | -- | -- |
        // | -- | -- |
        // | ** | ** |
        this.halfDownHitBox = new MovingBoxHitBox(this, 0, (this.height / 4) * 3, this.width, this.height / 4);
        this.sprites[Direction.Up] = [];
        this.sprites[Direction.Up][1] = SpriteLoader.load("./sprites/png/link-up1.png");
        this.sprites[Direction.Up][2] = SpriteLoader.load("./sprites/png/link-up2.png");
        this.attackSprites[Direction.Up] = SpriteLoader.load("./sprites/png/link-up-attack.png");
        this.sprites[Direction.Right] = [];
        this.sprites[Direction.Right][1] = SpriteLoader.load("./sprites/png/link-right1.png");
        this.sprites[Direction.Right][2] = SpriteLoader.load("./sprites/png/link-right2.png");
        this.attackSprites[Direction.Right] = SpriteLoader.load("./sprites/png/link-right-attack.png");
        this.sprites[Direction.Down] = [];
        this.sprites[Direction.Down][1] = SpriteLoader.load("./sprites/png/link-down1.png");
        this.sprites[Direction.Down][2] = SpriteLoader.load("./sprites/png/link-down2.png");
        this.attackSprites[Direction.Down] = SpriteLoader.load("./sprites/png/link-down-attack.png");
        this.sprites[Direction.Left] = [];
        this.sprites[Direction.Left][1] = SpriteLoader.load("./sprites/png/link-left1.png");
        this.sprites[Direction.Left][2] = SpriteLoader.load("./sprites/png/link-left2.png");
        this.attackSprites[Direction.Left] = SpriteLoader.load("./sprites/png/link-left-attack.png");
        this.winSprite = SpriteLoader.load("./sprites/png/link-win.png");
        this.killedSprites[1] = SpriteLoader.load("./sprites/png/killed1.png");
        this.killedSprites[2] = SpriteLoader.load("./sprites/png/killed2.png");
        this.spritesAnimation = new AnimationObserver(6, 2);
        this.invincibleAnimation = new AnimationObserver(7, 2);
        this.hurtSound = AudioLoader.load("./sounds/effect/Link_Hurt.wav");
        this.dieSound = AudioLoader.load("./sounds/effect/Link_Die.wav");
        this.lowHealthSound = AudioLoader.load("./sounds/effect/Low_Health.wav", true);
        this.fanfareSound = AudioLoader.load("./sounds/effect/Fanfare.wav");
    }
    get isFullLife() {
        return this.hp === this.maxHp;
    }
    draw() {
        let sprite = this.isAttackObserver.get()
            ? this.attackSprites[this.direction]
            : this.sprites[this.direction][this.spritesAnimation.currentAnimationStep];
        if (this.isInvincibleObserver.get()) {
            this.invincibleAnimation.update(this.Game.dt);
            if (this.invincibleAnimation.currentAnimationStep === 2)
                sprite = new Image();
        }
        this.Game.Viewport.drawImage(sprite, this.x, this.y, this.width, this.height);
        if (this.isMovingObserver.is(true) && !this.Game.state.is(GameState.Stopped)) {
            this.spritesAnimation.update(this.Game.dt);
        }
    }
    drawWin() {
        this.Game.Viewport.drawImage(this.winSprite, this.x, this.y, this.width, this.height);
    }
    drawGameOver() {
        if (this.isDiedObserver.currentFrame <= 125) {
            switch (this.diedAnimation.currentAnimationStep) {
                case 1:
                    this.Game.Player.direction = Direction.Down;
                    break;
                case 2:
                    this.Game.Player.direction = Direction.Left;
                    break;
                case 3:
                    this.Game.Player.direction = Direction.Up;
                    break;
                case 4:
                    this.Game.Player.direction = Direction.Right;
                    break;
            }
            this.Game.Player.draw();
            this.diedAnimation.update(this.Game.dt);
        }
        else if (this.isDiedObserver.currentFrame <= 135) {
            this.Game.Viewport.currentScene.drawImage(this.killedSprites[1], this.Game.Player.x, this.Game.Player.y, this.Game.Player.width, this.Game.Player.height);
        }
        else if (this.isDiedObserver.currentFrame <= 145) {
            this.Game.Viewport.currentScene.drawImage(this.killedSprites[2], this.Game.Player.x, this.Game.Player.y, this.Game.Player.width, this.Game.Player.height);
        }
        this.isDiedObserver.update(this.Game.dt);
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
        this.dx = 0;
        this.dy = 0;
    }
    slideSceneAnimationMove() {
        if (this.Game.Viewport.dc === 1) {
            this.dx = -this.Game.Viewport.slideSceneAnimationSpeed;
        }
        else if (this.Game.Viewport.dc === -1) {
            this.dx = this.Game.Viewport.slideSceneAnimationSpeed;
        }
        else if (this.Game.Viewport.dr === 1) {
            this.dy = -this.Game.Viewport.slideSceneAnimationSpeed;
        }
        else if (this.Game.Viewport.dr === -1) {
            this.dy = this.Game.Viewport.slideSceneAnimationSpeed;
        }
        movingBoxCanvasCollision(this, this.Game.Viewport);
        this.move();
    }
    // Helper to pass between two boxes
    passBetweenBoxesHelper() {
        let halfLeftCollision = false;
        let halfRightCollision = false;
        let halfUpCollision = false;
        let halfDownCollision = false;
        this.Game.Viewport.loopCollision((cell, col, row) => {
            if (simpleMovingBoxCollision(this.halfLeftHitBox, cell)) {
                halfLeftCollision = true;
            }
            if (simpleMovingBoxCollision(this.halfRightHitBox, cell)) {
                halfRightCollision = true;
            }
            if (simpleMovingBoxCollision(this.halfUpHitBox, cell)) {
                halfUpCollision = true;
            }
            if (simpleMovingBoxCollision(this.halfDownHitBox, cell)) {
                halfDownCollision = true;
            }
        });
        if (this.direction === Direction.Up || this.direction === Direction.Down) {
            if (halfLeftCollision && !halfRightCollision) {
                this.dx = this.speed;
            }
            else if (!halfLeftCollision && halfRightCollision) {
                this.dx = -this.speed;
            }
        }
        else if (this.direction === Direction.Left || this.direction === Direction.Right) {
            if (halfUpCollision && !halfDownCollision) {
                this.dy = this.speed;
            }
            else if (!halfUpCollision && halfDownCollision) {
                this.dy = -this.speed;
            }
        }
    }
    collisions() {
        if (movingBoxCanvasCollision(this, this.Game.Viewport)) {
            this.Game.Viewport.slideScene(this.direction);
        }
        this.passBetweenBoxesHelper();
        this.Game.Viewport.loopCollision((cell, col, row) => {
            movingBoxCollision(this.hitBox, cell);
        });
    }
    listenEvents() {
        if (this.isKnockBackObserver.is(true)) {
            this.isMovingObserver.setNextState(false);
            this.isAttackObserver.setNextState(false);
            switch (this.direction) {
                case Direction.Up:
                    this.dy = this.knockBackSpeed;
                    break;
                case Direction.Right:
                    this.dx = -this.knockBackSpeed;
                    break;
                case Direction.Down:
                    this.dy = -this.knockBackSpeed;
                    break;
                case Direction.Left:
                    this.dx = this.knockBackSpeed;
                    break;
            }
            movingBoxCanvasCollision(this, this.Game.Viewport);
            return;
        }
        this.isAttackObserver.setNextState(this.Game.EventManager.isAttackPressed ? true : false);
        if ((this.Game.EventManager.isDownPressed || this.Game.EventManager.isUpPressed) &&
            !(this.Game.EventManager.isDownPressed && this.Game.EventManager.isUpPressed)) {
            if (this.Game.EventManager.isDownPressed) {
                if (this.isAttackObserver.is(false))
                    this.dy = this.speed;
                this.direction = Direction.Down;
            }
            else if (this.Game.EventManager.isUpPressed) {
                if (this.isAttackObserver.is(false))
                    this.dy = -this.speed;
                this.direction = Direction.Up;
            }
        }
        else if ((this.Game.EventManager.isRightPressed || this.Game.EventManager.isLeftPressed) &&
            !(this.Game.EventManager.isRightPressed && this.Game.EventManager.isLeftPressed)) {
            if (this.Game.EventManager.isRightPressed) {
                if (this.isAttackObserver.is(false))
                    this.dx = this.speed;
                this.direction = Direction.Right;
            }
            else if (this.Game.EventManager.isLeftPressed) {
                if (this.isAttackObserver.is(false))
                    this.dx = -this.speed;
                this.direction = Direction.Left;
            }
        }
        this.isMovingObserver.setNextState((this.dx != 0 || this.dy != 0) ? true : false);
    }
    increaseScore() {
        this.score++;
        if (this.score >= this.targetScore) {
            this.isInvincibleObserver.setNextState(false);
            this.isAttackObserver.setNextState(false);
            this.isMovingObserver.setNextState(false);
            this.Game.Viewport.music.pause();
            this.lowHealthSound.pause();
            this.fanfareSound.play();
            this.Game.state.setNextState(GameState.Win);
        }
    }
    takeDamage(damage) {
        if (this.isInvincibleObserver.get())
            return;
        this.hurtSound.play();
        this.takeKnockBack();
        if (this.hp - damage >= 0) {
            this.hp -= damage;
            this.getInvicibility();
        }
        else {
            this.hp = 0;
        }
        if (this.hp <= 0) {
            this.isDiedObserver.setNextState(false);
            this.isInvincibleObserver.setNextState(false);
            this.Game.Player.isMovingObserver.setNextState(false);
            this.Game.Player.isAttackObserver.setNextState(false);
            this.Game.Viewport.music.pause();
            this.lowHealthSound.pause();
            this.dieSound.play();
            this.Game.state.setNextState(GameState.GameOver);
        }
        else if (this.hp <= 2) {
            this.lowHealthSound.play();
        }
    }
    recoverHealth(hp) {
        this.hp += hp;
        if (this.hp > this.maxHp)
            this.hp = this.maxHp;
        if (this.hp > 2) {
            this.lowHealthSound.pause();
            this.lowHealthSound.currentTime = 0;
        }
    }
    takeKnockBack(direction = this.direction) {
        this.direction = direction;
        this.isKnockBackObserver.setNextState(true);
    }
    getInvicibility(duration = this.defaultInvincibleDuration) {
        this.invincibleDuration = duration;
        this.isInvincibleObserver.setNextState(true);
    }
    updateObservers() {
        this.isMovingObserver.update(this.Game.dt);
        this.isAttackObserver.update(this.Game.dt);
        this.isInvincibleObserver.update(this.Game.dt);
        this.isKnockBackObserver.update(this.Game.dt);
        if (this.isKnockBackObserver.is(true) && this.isKnockBackObserver.currentFrame > this.knockBackDuration) {
            this.isKnockBackObserver.setNextState(false);
        }
        if (this.isInvincibleObserver.get() && this.isInvincibleObserver.currentFrame > this.invincibleDuration) {
            this.isInvincibleObserver.setNextState(false);
        }
    }
}

class ProjectileManager {
    constructor(game) {
        this.Game = game;
        this.projectiles = [];
        this.shieldSound = AudioLoader.load("./sounds/effect/Shield.wav");
    }
    collisions() {
        this.loopProjectiles((projectile) => {
            if (projectile.state.is(ProjectileState.ShieldBlocked))
                return;
            if (projectile.hasEnemiesCollision) {
                this.Game.EnemyManager.loopEnemies((enemy) => {
                    if (movingBoxsCollision(enemy, projectile)) {
                        if (projectile.enemiesCollisionCallback !== null)
                            projectile.enemiesCollisionCallback(enemy);
                        this.deleteProjectile(projectile);
                    }
                });
            }
            if (projectile.hasPlayerCollision) {
                if (movingBoxsCollision(this.Game.Player.hitBox, projectile)) {
                    if (projectile.canBeShieldBlocked &&
                        this.Game.Player.isMovingObserver.is(false) &&
                        this.Game.Player.isAttackObserver.is(false) &&
                        Direction.areOpposite(this.Game.Player.direction, projectile.direction)) {
                        this.shieldSound.play();
                        projectile.state.setNextState(ProjectileState.ShieldBlocked);
                        return;
                    }
                    if (projectile.playerCollisionCallback !== null)
                        projectile.playerCollisionCallback(this.Game.Player);
                    this.deleteProjectile(projectile);
                }
            }
            if (movingBoxCanvasCollision(projectile, this.Game.Viewport)) {
                this.deleteProjectile(projectile);
            }
        });
    }
    move() {
        this.loopProjectiles((projectile) => {
            switch (projectile.state.get()) {
                case ProjectileState.Moving:
                    projectile.x += projectile.dx;
                    projectile.y += projectile.dy;
                    break;
                case ProjectileState.ShieldBlocked:
                    if (Direction.isVertical(projectile.direction)) {
                        projectile.x += projectile.dy / 2;
                        projectile.y -= projectile.dy / 2;
                    }
                    else {
                        projectile.x -= projectile.dx / 2;
                        projectile.y += projectile.dx / 2;
                    }
                    break;
            }
        });
    }
    draw() {
        this.loopProjectiles((projectile) => {
            this.Game.Viewport.currentScene.drawImage(projectile.sprite, projectile.x, projectile.y, projectile.width, projectile.height);
        });
    }
    updateObservers() {
        this.loopProjectiles((projectile) => {
            projectile.state.update(this.Game.dt);
            if (projectile.state.is(ProjectileState.ShieldBlocked) && projectile.state.currentFrame > 20) {
                this.deleteProjectile(projectile);
            }
        });
    }
    addProjectile(projectile) {
        this.projectiles.push(projectile);
    }
    deleteProjectile(projectile) {
        if (projectile.deleteCallback !== null)
            projectile.deleteCallback();
        this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
    }
    deleteAllProjectiles() {
        this.loopProjectiles((projectile) => {
            if (projectile.deleteCallback !== null)
                projectile.deleteCallback();
        });
        this.projectiles = [];
    }
    loopProjectiles(callback) {
        this.projectiles.forEach((projectile) => {
            callback(projectile);
        });
    }
}

var ProjectileState;
(function (ProjectileState) {
    ProjectileState[ProjectileState["Moving"] = 0] = "Moving";
    ProjectileState[ProjectileState["ShieldBlocked"] = 1] = "ShieldBlocked";
})(ProjectileState || (ProjectileState = {}));
class Projectile extends GameMovingBox {
    constructor(game, x, y, width, height, speed, direction, sprite, hasPlayerCollision, canBeShieldBlocked, playerCollisionCallback, hasEnemiesCollision, enemiesCollisionCallback, deleteCallback) {
        super(game);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction;
        this.sprite = sprite;
        this.hasPlayerCollision = hasPlayerCollision;
        this.canBeShieldBlocked = canBeShieldBlocked;
        this.playerCollisionCallback = playerCollisionCallback;
        this.hasEnemiesCollision = hasEnemiesCollision;
        this.enemiesCollisionCallback = enemiesCollisionCallback;
        this.deleteCallback = deleteCallback;
        switch (this.direction) {
            case Direction.Up:
                this.dy = -this.speed;
                break;
            case Direction.Right:
                this.dx = this.speed;
                break;
            case Direction.Down:
                this.dy = this.speed;
                break;
            case Direction.Left:
                this.dx = -this.speed;
                break;
        }
        this.state = new StateObserver(ProjectileState.Moving);
    }
}

class Sword {
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
                if (simpleMovingBoxCollision(enemy, this)) {
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

class Viewport {
    constructor(game) {
        this.Game = game;
        this.currentScene = this.Game.World.getSpawnScene();
        this.nextScene = null;
        this.music = this.currentScene.music;
        this.x = 0;
        this.y = 0;
        this.dr = 0;
        this.dc = 0;
        this.slideSceneAnimationSpeed = 10;
    }
    get cellSize() {
        return this.currentScene.cellSize;
    }
    get nbRow() {
        return this.currentScene.nbRow;
    }
    get nbCol() {
        return this.currentScene.nbCol;
    }
    get width() {
        return this.currentScene.cellSize * this.currentScene.nbCol;
    }
    get height() {
        return this.currentScene.cellSize * this.currentScene.nbRow;
    }
    loopCells(callback, scene = this.currentScene) {
        for (let col = 0; col < this.nbCol; col++) {
            for (let row = 0; row < this.nbRow; row++) {
                callback(scene.getCell(col, row), col, row);
            }
        }
    }
    loopCollision(callback) {
        this.loopCells((cell, col, row) => {
            if (cell.brick.hasCollisions) {
                callback(cell, col, row);
            }
        });
    }
    draw() {
        if (this.Game.state.is(GameState.Run) && this.Game.state.isFirstFrame)
            this.music.play();
        this.loopCells((cell, col, row) => {
            this.currentScene.drawImage(cell.brick.sprite, this.cellSize * col, this.cellSize * row, this.cellSize, this.cellSize);
        });
        if (this.nextScene !== null) {
            this.loopCells((cell, col, row) => {
                this.nextScene.drawImage(cell.brick.sprite, this.cellSize * col, this.cellSize * row, this.cellSize, this.cellSize);
            }, this.nextScene);
        }
    }
    slideSceneAnimationMove() {
        let speed = this.slideSceneAnimationSpeed * this.Game.dt;
        if (this.dc === 1) {
            this.currentScene.x -= speed;
            this.nextScene.x -= speed;
        }
        else if (this.dc === -1) {
            this.currentScene.x += speed;
            this.nextScene.x += speed;
        }
        else if (this.dr === 1) {
            this.currentScene.y -= speed;
            this.nextScene.y -= speed;
        }
        else if (this.dr === -1) {
            this.currentScene.y += speed;
            this.nextScene.y += speed;
        }
        if ((this.nextScene.y <= 0 && this.dr === 1) ||
            (this.nextScene.y >= 0 && this.dr === -1) ||
            (this.nextScene.x <= 0 && this.dc === 1) ||
            (this.nextScene.x >= 0 && this.dc === -1)) {
            this.nextScene.y = 0;
            this.nextScene.x = 0;
            this.dr = 0;
            this.dc = 0;
            if (this.music.src != this.nextScene.music.src) {
                this.music.pause();
                this.music.currentTime = 0;
                this.music = this.nextScene.music;
                this.music.play();
            }
            this.currentScene = this.nextScene;
            this.nextScene = null;
            this.Game.EnemyManager.loopEnemies((enemy) => {
                if (enemy.state.is(EnemieState.Killed)) {
                    this.Game.EnemyManager.killEnemy(enemy);
                }
            });
            this.Game.EnemyManager = new EnemyManager(this.Game);
            this.Game.ProjectileManager.deleteAllProjectiles();
            this.Game.ItemManager.deleteAllItems();
            this.Game.state.setNextState(GameState.Run);
        }
    }
    collisions() {
    }
    drawImage(sprite, x, y, width, height) {
        this.Game.drawImage(sprite, x + this.x, y + this.y, width, height);
    }
    slideScene(direction) {
        let currentSceneCol = this.currentScene.c;
        let currentSceneRow = this.currentScene.r;
        if (direction === Direction.Left) {
            this.dc = -1;
        }
        else if (direction === Direction.Right) {
            this.dc = 1;
        }
        else if (direction === Direction.Up) {
            this.dr = -1;
        }
        else if (direction === Direction.Down) {
            this.dr = 1;
        }
        else {
            return;
        }
        if (!(currentSceneCol + this.dc < 0 ||
            currentSceneCol + this.dc > this.Game.World.nbCol - 1 ||
            currentSceneRow + this.dr < 0 ||
            currentSceneRow + this.dr > this.Game.World.nbRow - 1)) {
            this.nextScene = this.Game.World.map[currentSceneCol + this.dc][currentSceneRow + this.dr];
            if (direction === Direction.Left) {
                this.nextScene.x = -this.width;
                this.nextScene.y = 0;
            }
            else if (direction === Direction.Right) {
                this.nextScene.x = this.width;
                this.nextScene.y = 0;
            }
            else if (direction === Direction.Up) {
                this.nextScene.y = -this.height;
                this.nextScene.x = 0;
            }
            else if (direction === Direction.Down) {
                this.nextScene.y = this.height;
                this.nextScene.x = 0;
            }
            this.Game.Player.dx = 0;
            this.Game.Player.dy = 0;
            this.Game.Player.isAttackObserver.setNextState(false);
            this.Game.state.setNextState(GameState.SlideScene);
            return;
        }
        this.dc = 0;
        this.dr = 0;
    }
}

class AbstractScreen {
    constructor(game, state, backgroundColor, title, message, showMessageAfter = 0) {
        this.Game = game;
        this.title = title;
        this.message = message;
        this.showMessageAfter = showMessageAfter;
        this.backgroundColor = backgroundColor;
        this.state = state;
        this.messageAnimation = new AnimationObserver(50, 2);
    }
    draw() {
        this.Game.fillRect(0, 0, this.Game.Canvas.width, this.Game.Canvas.height, this.backgroundColor);
        this.Game.fillText(this.title, this.Game.Canvas.width / 2, this.Game.Canvas.height / 3, '#fff', '24px', 'center', 'middle');
        if (this.state.currentFrame > this.showMessageAfter) {
            if (this.messageAnimation.currentAnimationStep === 1) {
                this.Game.fillText(this.message, this.Game.Canvas.width / 2, this.Game.Canvas.height / 3 * 2, '#fff', '16px', 'center', 'middle');
            }
            this.messageAnimation.update(this.Game.dt);
        }
        ;
    }
    updateObservers() {
        this.state.update(this.Game.dt);
    }
}

var GameOverScreenState;
(function (GameOverScreenState) {
    GameOverScreenState[GameOverScreenState["PlayerAnimation"] = 0] = "PlayerAnimation";
    GameOverScreenState[GameOverScreenState["HideGame"] = 1] = "HideGame";
    GameOverScreenState[GameOverScreenState["BlackScreen"] = 2] = "BlackScreen";
})(GameOverScreenState || (GameOverScreenState = {}));
class GameOverScreen extends AbstractScreen {
    constructor(game) {
        super(game, new StateObserver(GameOverScreenState.PlayerAnimation), "#000", "GAME OVER", "press enter to retry", 150);
        this.music = AudioLoader.load("./sounds/music/game_over.mp3", true);
    }
    draw() {
        switch (this.state.get()) {
            case GameOverScreenState.PlayerAnimation:
                this.Game.Viewport.draw();
                this.Game.EnemyManager.draw();
                this.Game.Hud.draw();
                this.Game.Player.drawGameOver();
                if (this.Game.Player.isDiedObserver.currentFrame > 145)
                    this.state.setNextState(GameOverScreenState.HideGame);
                break;
            case GameOverScreenState.HideGame:
                if (this.state.isFirstFrame) {
                    this.Game.Panes.reset();
                }
                this.Game.Viewport.draw();
                this.Game.Hud.draw();
                this.Game.Panes.drawClose();
                if (this.Game.Panes.isAnimationFinished) {
                    this.state.setNextState(GameOverScreenState.BlackScreen);
                }
                break;
            case GameOverScreenState.BlackScreen:
                if (this.state.isFirstFrame)
                    this.music.play();
                if (this.Game.EventManager.isEnterPressed) {
                    this.music.pause();
                    this.Game.restart();
                }
                super.draw();
                break;
        }
        super.updateObservers();
    }
}

var SplashScreenState;
(function (SplashScreenState) {
    SplashScreenState[SplashScreenState["BlackScreen"] = 0] = "BlackScreen";
})(SplashScreenState || (SplashScreenState = {}));
class SplashScreen extends AbstractScreen {
    constructor(game) {
        super(game, new StateObserver(SplashScreenState.BlackScreen), "#000", "TLOZ-JS GAME", "press enter to start", 150);
        this.music = AudioLoader.load("./sounds/music/intro.mp3", true);
    }
    draw() {
        switch (this.state.get()) {
            case SplashScreenState.BlackScreen:
                if (this.state.isFirstFrame)
                    this.music.play();
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

var StoppedScreenState;
(function (StoppedScreenState) {
    StoppedScreenState[StoppedScreenState["BlackScreen"] = 0] = "BlackScreen";
})(StoppedScreenState || (StoppedScreenState = {}));
class StoppedScreen extends AbstractScreen {
    constructor(game) {
        super(game, new StateObserver(StoppedScreenState.BlackScreen), "rgba(0, 0, 0, 0.5)", "PAUSE", "press p to continue");
    }
    draw() {
        switch (this.state.get()) {
            case StoppedScreenState.BlackScreen:
                super.draw();
                break;
        }
        super.updateObservers();
    }
}

var WinScreenState;
(function (WinScreenState) {
    WinScreenState[WinScreenState["PlayerAnimation"] = 0] = "PlayerAnimation";
    WinScreenState[WinScreenState["HideGame"] = 1] = "HideGame";
    WinScreenState[WinScreenState["BlackScreen"] = 2] = "BlackScreen";
})(WinScreenState || (WinScreenState = {}));
;
class WinScreen extends AbstractScreen {
    constructor(game) {
        super(game, new StateObserver(WinScreenState.PlayerAnimation), "#000", "YOU WON", "press enter to play again", 150);
        this.killedSprites = [];
        this.music = AudioLoader.load("./sounds/music/ending.mp3", true);
        this.killedSprites[1] = SpriteLoader.load("./sprites/png/killed1.png");
        this.killedSprites[2] = SpriteLoader.load("./sprites/png/killed2.png");
    }
    draw() {
        switch (this.state.get()) {
            case WinScreenState.PlayerAnimation:
                this.Game.Viewport.draw();
                this.Game.EnemyManager.draw();
                this.Game.Sword.drawWin();
                this.Game.Player.drawWin();
                this.Game.Hud.draw();
                if (this.state.currentFrame > 120)
                    this.state.setNextState(WinScreenState.HideGame);
                break;
            case WinScreenState.HideGame:
                if (this.state.isFirstFrame)
                    this.Game.Panes.reset();
                this.Game.Viewport.draw();
                this.Game.EnemyManager.draw();
                this.Game.Sword.drawWin();
                this.Game.Player.drawWin();
                this.Game.Hud.draw();
                this.Game.Panes.drawClose();
                if (this.Game.Panes.isAnimationFinished) {
                    this.state.setNextState(WinScreenState.BlackScreen);
                }
                break;
            case WinScreenState.BlackScreen:
                if (this.state.isFirstFrame)
                    this.music.play();
                if (this.Game.EventManager.isEnterPressed) {
                    this.music.pause();
                    this.Game.restart();
                }
                super.draw();
                break;
        }
        super.updateObservers();
    }
}
