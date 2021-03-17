import { MathPlus } from "./MathPlus.js";
export class SimpleBox {
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = MathPlus.round(x, 7);
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = MathPlus.round(y, 7);
    }
}
export class MovingBox extends SimpleBox {
    constructor() {
        super(...arguments);
        this._dx = 0;
        this._dy = 0;
    }
    get dx() {
        return this._dx;
    }
    set dx(value) {
        this._dx = value;
    }
    get dy() {
        return this._dy;
    }
    set dy(value) {
        this._dy = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
}
export class MovingBoxHitBox {
    constructor(box, x, y, width, height) {
        this._Box = box;
        this._hitX = x;
        this._hitY = y;
        this._hitWidth = width;
        this._hitHeight = height;
    }
    get x() {
        return this._Box.x + this._hitX;
    }
    set x(x) {
        this._Box.x = x - this._hitX;
    }
    get y() {
        return this._Box.y + this._hitY;
    }
    set y(y) {
        this._Box.y = y - this._hitY;
    }
    get width() {
        return this._hitWidth;
    }
    get height() {
        return this._hitHeight;
    }
    get dx() {
        return this._Box.dx;
    }
    set dx(dx) {
        this._Box.dx = dx;
    }
    get dy() {
        return this._Box.dy;
    }
    set dy(dy) {
        this._Box.dy = dy;
    }
    get direction() {
        return this._Box.direction;
    }
    set direction(direction) {
        this._Box.direction = direction;
    }
}
