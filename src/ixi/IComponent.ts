import { GameObject } from "./GameObject";

export interface IComponent
{
    get name(): string;
    get parent(): GameObject;
    onStart(): void;
    onUpdate(): void;
    onDestroy(): void;
}