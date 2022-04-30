import { GameObject } from "./GameObject";

export interface IComponent
{
    getGameObject(): GameObject;
    onStart(): void;
    onUpdate(): void;
    onDestroy(): void;
}