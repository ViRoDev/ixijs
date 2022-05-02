import { Container, Graphics, Ticker } from "pixi.js";
import { GameObject } from "./GameObject";
import { Vector } from "./Vector";
import { Scene } from "./Scene";
import { TestScript } from "../TestScript";

export class View extends Container
{
    private _scene;
    private _HEIGHT: number;
    private _WIDTH: number;

    public g : Graphics = new Graphics();

    constructor(height: number, width: number, scene: Scene)
    {
        super();
        this._HEIGHT = height;
        this._WIDTH = width;
        this._scene = scene;

        Ticker.shared.add(this.upd, this);
    }

    public upd(deltaTime: number)
    {
        this._scene.onUpdate(deltaTime);
        this.drawScene(this._scene);
    }

    public drawScene(scene: Scene)
    {

    }
}