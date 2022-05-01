import { Application, IApplicationOptions, Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";


export const assetLoader = new AssetLoader();
export const sampleRate = 10;
export class Game {
    static pixiApp: Application | undefined;
    static running: boolean = false;
    static height: number;
    static width: number

    private constructor() {

    }

    static run(height:number, width:number, parentElement: HTMLElement) {
        if(!this.running) {                    
            this.running = true;
            assetLoader.loadAssets().then(
                () => {
                    Game.initApp(height, width, parentElement);
                    
                    // game logic goes here
                    
                    //### Test view. Can remove ####
                    let ob1 = new Sprite(assetLoader.resources.rock.texture);
                    this.pixiApp?.stage.addChild(ob1)

                    let ob2 = new Sprite(assetLoader.resources.rock.texture);
                    ob2.position.x = Game.width - ob2.width
                    this.pixiApp?.stage.addChild(ob2)

                    let ob3 = new Sprite(assetLoader.resources.rock.texture);
                    ob3.position.y = Game.height - ob3.height
                    this.pixiApp?.stage.addChild(ob3)

                    let ob4 = new Sprite(assetLoader.resources.rock.texture);
                    ob4.position.x = Game.width - ob4.width
                    ob4.position.y = Game.height - ob4.height
                    this.pixiApp?.stage.addChild(ob4)
                    //##############################
                })
        }
    }

    private static initApp(height: number, width: number, parentElement: HTMLElement) {
        Game.height = height;
        Game.width = width;
        let options: IApplicationOptions = {};
        options.height = Game.height;
        options.width = Game.width;
        this.pixiApp = new Application(options);
        parentElement.appendChild(this.pixiApp.view);
    }

}