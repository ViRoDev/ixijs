import { Container, Graphics, Ticker } from "pixi.js";
import { GameObject } from "./GameObject";
import { Position } from "./Position";
import { Scene } from "./Scene";
import { TestScript } from "./TestScript";

export class View extends Container
{
    private _scene;
    private _HEIGHT: number;
    private _WIDTH: number;

    public g : Graphics = new Graphics();
    public plr : GameObject;

    constructor(height: number, width: number)
    {
        super();
        this._HEIGHT = height;
        this._WIDTH = width;
        this._scene = new Scene(height, width);

        this.plr = new GameObject(this._scene, new Position(20, 20), "Player");
        this._scene.addGameObject(this.plr, this._scene);
        this.plr.addComponent(new TestScript(this.plr));

        Ticker.shared.add(this.upd, this);
    }

    public upd(deltaTime: number)
    {
        this._scene.onUpdate(deltaTime);
    }
}