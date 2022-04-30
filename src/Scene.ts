import { GameObject } from "./GameObject";

export class Scene
{
    private static _MINHEIGHT = 10;
    private static _MINWIDTH = 10;

    private name: string = "";
    public gameObjects: Map<number, GameObject> = new Map();

    private set go(value: Map<number, GameObject>)
    {
        this.gameObjects = value;
    }


    private _height: number;
    private _width: number;
    constructor(height: number, width: number)
    {
        this._height = height > Scene._MINHEIGHT ? height : Scene._MINHEIGHT;
        this._width = width > Scene._MINWIDTH ? width : Scene._MINWIDTH;
    }

    public get height() {
        return this._height;
    }
    public get width() {
        return this._width;
    }

    public addGameObject(gameObject: GameObject, that: this)
    {
        this.gameObjects?.set(this.generateIdForGameObject(), gameObject);
    }

    public generateIdForGameObject() : number
    {
        return 0;
    }
    
    /*public getGameObjectByName(name: string) : GameObject
    {
        //TODO: write some normal code
        return new GameObject(this);
    }*/

    public onUpdate(deltaTime: number)
    {
        this.gameObjects?.forEach(this.callUpdateOn);
    }

    private callUpdateOn(gameObject: GameObject, id: number)
    {
        gameObject.onUpdate();
    }

    public getId(gameObject: GameObject) : number
    {
        return 0;
    }
}