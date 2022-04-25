import { Application } from "pixi.js";

export class Game {
    private static instance: Game = new Game();
    private pixiApp: Application;
    private parentElement: HTMLElement | undefined;
    private running: boolean = false;
    
    private constructor() {
        this.pixiApp = new Application();
    }

    static getInstance(): Game {
        return Game.instance;
    }
    
    setParent(element: HTMLElement) {
        this.parentElement?.removeChild(this.pixiApp.view);
        this.parentElement = element;
        this.parentElement.appendChild(this.pixiApp.view);
    }

    setViewDimentions(height: number, width: number) {
        this.pixiApp.view.height = height;
        this.pixiApp.view.width = width;
    }

    run() {
        if(!this.running) {
            this.running = true;
            console.log('This is where game logic will go');
        }
    }
}