import { Game } from "./Game.js";

import { AudioLoader } from "./Libraries/Loaders.js";
import { Direction } from "./Libraries/Direction.js";
import { Collisions } from "./Libraries/Collisions.js";

import { Projectile, ProjectileState } from "./Projectiles.js";

export class ProjectileManager {
    Game: Game;

    projectiles: Projectile[];

    shieldSound: HTMLAudioElement;

    constructor(game: Game) {
        this.Game = game;

        this.projectiles = [];

        this.shieldSound = AudioLoader.load("./sounds/effect/Shield.wav");
    }

    collisions(): void {
        this.loopProjectiles((projectile) => {
            if (projectile.state.is(ProjectileState.ShieldBlocked)) return;

            if (projectile.hasEnemiesCollision) {
                this.Game.EnemyManager.loopEnemies((enemy) => {
                    if (Collisions.movingBoxs(enemy, projectile.hitbox)) {
                        if (projectile.enemiesCollisionCallback !== null) projectile.enemiesCollisionCallback(enemy);
                        this.deleteProjectile(projectile);
                    }
                });
            }

            if (projectile.hasPlayerCollision) {
                if (Collisions.movingBoxs(this.Game.Player.hitBox, projectile.hitbox)) {
                    if (
                        projectile.canBeShieldBlocked &&
                        this.Game.Player.isMovingObserver.is(false) &&
                        this.Game.Player.isAttackObserver.is(false) &&
                        Direction.areOpposite(this.Game.Player.direction, projectile.direction)
                    ) {
                        this.shieldSound.play();
                        projectile.state.setNextState(ProjectileState.ShieldBlocked);
                        return;
                    }

                    if (projectile.playerCollisionCallback !== null) projectile.playerCollisionCallback();
                    this.deleteProjectile(projectile);
                }
            }

            if (Collisions.movingBoxCanvas(projectile.hitbox, this.Game.Viewport)) {
                this.deleteProjectile(projectile);
            }
        });
    }

    move(): void {
        this.loopProjectiles((projectile) => {
            switch (projectile.state.get()) {
                case ProjectileState.Moving:
                    projectile.x += projectile.dx * this.Game.dt;
                    projectile.y += projectile.dy * this.Game.dt;
                    break;

                case ProjectileState.ShieldBlocked:
                    if (Direction.isVertical(projectile.direction)) {
                        projectile.x += projectile.dy / 2 * this.Game.dt;
                        projectile.y -= projectile.dy / 2 * this.Game.dt;
                    }
                    else {
                        projectile.x -= projectile.dx / 2 * this.Game.dt;
                        projectile.y += projectile.dx / 2 * this.Game.dt;
                    }
                    break;
            }
        });
    }

    draw(): void {
        this.loopProjectiles((projectile) => {
            this.Game.Viewport.currentScene.drawImage(
                projectile.sprites[projectile.direction],
                projectile.x,
                projectile.y,
                projectile.width,
                projectile.height
            );
        });
    }

    updateObservers(): void {
        this.loopProjectiles((projectile) => {
            projectile.state.update(this.Game.dt);

            if (projectile.state.is(ProjectileState.ShieldBlocked) && projectile.state.currentFrame > 20) {
                this.deleteProjectile(projectile);
            }
        });
    }

    addProjectile(projectile: Projectile): void {
        this.projectiles.push(projectile);
    }

    deleteProjectile(projectile: Projectile): void {
        if (projectile.deleteCallback !== null) projectile.deleteCallback();
        this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
    }

    deleteAllProjectiles(): void {
        this.loopProjectiles((projectile) => {
            if (projectile.deleteCallback !== null) projectile.deleteCallback();
        });

        this.projectiles = [];
    }

    loopProjectiles(callback: Function): void {
        this.projectiles.forEach((projectile: Projectile) => {
            callback(projectile);
        });
    }
}
