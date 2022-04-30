import { Application} from 'pixi.js'
import { Scene } from './Scene';
import { View } from './View';
export class IxiProject
{
    private _app: Application;
    private _scenes: Map<string, Scene> = new Map;
    private _view: View;
    constructor()
    {
        this._app = new Application({
            resizeTo: window,
            view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 0x362222,
            antialias: true,
        });

        this._view = new View(640, 360)
        this._app.stage.addChild(this._view);
    }
}