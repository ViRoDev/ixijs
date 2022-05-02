import { Collider } from "./Collider";
import { GameObject } from "./GameObject";
import { Vector } from "./Vector";

export class CircleCollider extends Collider
{
    _defaultName: string = "CircleCollider";
    private _radius: number = 1;
    constructor(gameObject: GameObject, radius: number, localPosition: Vector, name?: string )
    {
        super(gameObject, localPosition, name);
        this.radius = radius;
        console.log(this.name);
    }

    public get radius() {
        return this._radius;
    }

    public set radius(radius: number){
        this._radius = radius > 0 ? radius : 1;
    }

    callculateCollision(collider: Collider): boolean 
    {   
        //Circle-Circle collision
        if(collider instanceof CircleCollider)
        {
            let radiuses : number = this.radius + collider.radius
            if(this.globalPosition.distance(collider.globalPosition) < radiuses)
                return true;
            return false;
        }

        return false
    }

    onStart(): void {
        throw new Error("Method not implemented.");
    }

    getCollisions(): Collider[] {
        throw new Error("Method not implemented.");
    }   
}