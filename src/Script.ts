import { GameObject } from "./GameObject";
import { IComponent } from "./IComponent";

export abstract class Script implements IComponent
{
    private _gameObject : GameObject;
    private _scriptPath : string = "";
    private _scriptName : string = "";
    constructor(gameObject: GameObject)
    {
        this._gameObject = gameObject;
    }
    getGameObject(): GameObject {
        return this._gameObject;
    }

    abstract onStart(): void;
    abstract onUpdate() : void;
    
    onDestroy(): void {
        throw new Error("Method not implemented.");
    }
}