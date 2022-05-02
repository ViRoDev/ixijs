
export class Vector 
{
    public x: number;
    public y: number;
    
    constructor(x?:number, y?:number)
    {  
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    public distance(to: Vector) : number
    {
        return Math.sqrt((this.x - to.x)**2 + (this.y - to.y)**2);
    }

    public direction(to: Vector, normalized: boolean = false) : Vector
    {
        var vect = new Vector(to.x - this.x, to.y - this.y);

        if(normalized)
        {
            let distance = this.distance(to)
            vect.x /= distance;
            vect.y /= distance;
        }
        return vect;
    }

    public add(w: Vector) : Vector
    {
        return Vector.addition(this, w);
    }

    public substract(w: Vector) : Vector
    {
        return Vector.subsraction(this, w);
    }

    public substractFrom(f: Vector) : Vector
    {
        return Vector.subsraction(f, this);
    }

    public static addition(v1: Vector, v2: Vector) : Vector
    {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }

    public static subsraction(v1: Vector, v2: Vector) : Vector
    {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
}