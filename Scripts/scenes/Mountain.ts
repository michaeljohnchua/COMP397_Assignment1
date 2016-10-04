/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
//Author: Michael John Chua
//Last Modified By: Michael John Chua
//Node 3scene
module scenes {
    export class Mountain extends objects.Scene {

        // PRIVATE VARIABLES
        //private _gameLabel : objects.Label;
        private _sceneButton1: objects.Button;
        private _sceneButton2: objects.Button;

        //Labels        
        private _sceneLabel1 :objects.Label;    
        private _sceneLabel2 :objects.Label;        
        private _sceneLabel3 :objects.Label;

        //Background variable
        private _bg : createjs.Bitmap;
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Mountain scene started");

            //Add Background
            this._bg = new createjs.Bitmap(assets.getResult("MountainBG"));
            this._bg.x = -50;
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            //this._gameLabel = new objects.Label("PLAY SCENE", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            //this.addChild(this._gameLabel);

            // Scene Decision 1
            this._sceneButton1 = new objects.Button("ButtonTown", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton1);
            this._sceneButton1.on("click", this._onLeftButtonClick, this);

            // Scene Decision 2
            this._sceneButton2 = new objects.Button("ButtonFort", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y +80);
            this.addChild(this._sceneButton2);
            this._sceneButton2.on("click", this._onRightButtonClick, this);
            //Scene Story
            this._sceneLabel1 = new objects.Label("You grow weary and cold walking alone in the snowy mountains.", "bold 16px Arial", "#000000", 50,210);
            this.addChild(this._sceneLabel1);

            this._sceneLabel2 = new objects.Label("It is time for you to seek shelter.", "bold 16px Arial", "#000000", 50,230);
            this.addChild(this._sceneLabel2);

            this._sceneLabel3 = new objects.Label("The map shows a town and an abandoned fort nearby.", "bold 16px Arial", "#000000", 50,250);
            this.addChild(this._sceneLabel3);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onLeftButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MountainDragon;
            changeScene();
        }
        private _onRightButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MountainFort;
            changeScene();
        }
    }
}