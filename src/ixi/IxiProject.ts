import { Application} from 'pixi.js'
import { Scene } from './Scene';
import { View } from './View';
var fs = require('fs');

export class IxiProject
{
    private _app: Application;
    private _scenes: Scene[] = []
    private _view: View;
    constructor()
    {
        this._app = new Application({
            resizeTo: window,
            view: document.getElementById("ixi-canvas") as HTMLCanvasElement,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 0x362222,
            antialias: true,
        });

        this.loadScenes();
        this._view = new View(640, 360, this._scenes[0])
        this._app.stage.addChild(this._view);
    }

    private loadScenes()
    {
        this._scenes.push(new Scene(640, 360));
    }
}