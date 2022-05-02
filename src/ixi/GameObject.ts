import { Point } from "pixi.js";
import { Scene } from "./Scene";
import { IComponent } from "./IComponent";
import { Vector } from "./Vector";

export class GameObject
{
    private _scene: Scene;
    private _id: number;
    private _name: string = "";
    private _position: Vector = new Vector();
    private _components: Map<number, IComponent> = new Map();//{[name: string] : IComponent } = {};

    public get x() { return this._position.x;}
    public set x(value: number) {
        this._position.x = value;
    }

    public get y() { return this._position.y; }
    public set y(value: number) {
        this._position.y = value;
    }

    public get position() { return this._position; }

    public get scene() { return this._scene; }
    constructor(scene: Scene, position?: Vector, name?: string)
    {
        this._scene = scene;
        this._id = scene.getId(this);

        if(position != undefined)
        {
            this.x = position.x;
            this.y = position.y;
        }
        else
        {
            this.x = 0;
            this.y = 0;
        }

        if(name != undefined && name != "")
            this._name = name;
        else
            this._name = `GameObject(${this._id})`;
    }

    public onUpdate()
    {
        console.log("calling on components");
        this._components.forEach(this.callUpdateOn);
    }

    private callUpdateOn(component: IComponent)
    {
        component.onUpdate();
    }
    public addComponent(component: IComponent) {
        console.log("component added to go");
        this._components.set(this.generateId(), component);
    }

    private generateId() : number
    {
        return 0;
    }
}
