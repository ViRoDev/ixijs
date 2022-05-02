import { GameObject } from "./GameObject";
import { IComponent } from "./IComponent";
import { Vector } from "./Vector";
import { ColliderController } from "./ColliderController";

export abstract class Collider implements IComponent
{
    private colliderController: ColliderController = new ColliderController();
    abstract _defaultName: string;
    private _name: string;
    private _gameObject : GameObject;
    private _localPosition: Vector;
    constructor(gameObject: GameObject, localVector?: Vector, name?: string) {
        this._gameObject = gameObject;
        this._localPosition = new Vector();
        this._name = name? name: this.defaultName;
        this.colliderController.addCollider(this);
    }
    public get name(): string {
        return this._name;
    }

    private get defaultName(): string {
        return this._defaultName;
    }

    public get localPosition() : Vector {
        return this._localPosition;
    }

    public get globalPosition() : Vector {
        return this.localPosition.add(this.parent.position);
    }

    public get parent(): GameObject {
        return this._gameObject;   
    }

    //should be deleted bc everything seems to fit into constructor?
    abstract onStart(): void;

    onUpdate(): void {
        if(this.isColliding(this.colliderController.getActiveColliders()))
        {
            this.onCollision();
        };
    }

    onDestroy(): void {
        throw new Error("Method not implemented.");
    }

    public onCollision(callback?: Function): void
    {
        if(callback)
            callback();
    }

    abstract callculateCollision(collider: Collider): boolean;

    isColliding(colliders: Collider[]): boolean
    {
        let res = false;
        colliders.forEach(
        (value) => {
            if(this.callculateCollision(value))
            {
                res = true;
                return;
            }
        }) 
        return res;
    }
    abstract getCollisions(): Collider[];
}