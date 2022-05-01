import { Dict } from "@pixi/utils";
import { AnimatedSprite, Loader, LoaderResource, Resource, Sprite, Texture } from "pixi.js";

export class AssetLoader extends Loader {
    resources: Dict<LoaderResource> = {}

    constructor() {
        super();
        let public_dir = process.env.PUBLIC_URL;

        this.add('rock', `${public_dir}/assets/rock-gold.png`)
    }

    loadAssets(): Promise<any> {
        let complete = new Promise((resolve, reject) => {
            this.load((loader, resources) => {
                this.resources = resources;
                resolve(1);
            })
        })
        return complete
    }
}