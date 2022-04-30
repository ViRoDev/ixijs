import { Graphics } from "pixi.js";
import { Script } from "./Script"

export class TestScript extends Script
{
    onStart(): void 
    {
        
    }

    onUpdate(): void 
    {
        console.log("huh?");
    }
}