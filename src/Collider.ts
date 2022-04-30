import { GameObject } from "./GameObject";
import { IComponent } from "./IComponent";
import { Position } from "./Position";

export abstract class Collider implements IComponent
{
    private _gameObject : GameObject;
    private _localPosition: Position;
    constructor(gameObject: GameObject) {
        this._gameObject = gameObject;
        this._localPosition = new Position();
    }
    public getLocalPosition(): Position {
        return this._localPosition;
    }
    getGameObject(): GameObject {
        return this._gameObject;
    }
    onStart(): void {
        throw new Error("Method not implemented.");
    }
    onUpdate(): void {
        throw new Error("Method not implemented.");
    }
    onDestroy(): void {
        throw new Error("Method not implemented.");
    }
    
    abstract onCollision(): void;
    abstract isColliding(): boolean ;
    abstract getCollisions(): Collider[];
}