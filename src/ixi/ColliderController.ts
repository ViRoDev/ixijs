import { Collider } from "./Collider";

export class ColliderController
{
    private static cc: ColliderController;
    private _activeColliders: Collider[] = [];
    constructor()
    {
        if(ColliderController.cc == null)
            ColliderController.cc = this;
    }

    public addCollider(collider: Collider) : boolean
    {
        if(!this._activeColliders.includes(collider))
        {
            this._activeColliders.push(collider);
            return true;
        }
        console.log("This collider is already in the list");
        return false;
    }

    public removeCollider(collider: Collider)
    {
        if(this._activeColliders.includes(collider))
        {
            this._activeColliders.forEach(
                (value, index) => {
                if(value === collider)
                    this._activeColliders.splice(index, 1)
            })
            return true;
        }
        return false;
    }

    //for scene maybe?
    public getActiveColliders() : Collider[]
    {
        return this._activeColliders;
    }
}