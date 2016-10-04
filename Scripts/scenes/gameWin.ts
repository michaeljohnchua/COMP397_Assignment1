/*
    This scene is shown when the player finds the dragonborn
*/
//Author: Michael John Chua
//Last Modified By: Michael John Chua
//Positive outcome scene

module scenes {
    export class GameWin extends objects.Scene {

        private _bg : createjs.Bitmap;
        private _retryButton : objects.Button;

        //Label
        private _sceneLabel1 :objects.Label;
        private _sceneLabel2 :objects.Label;
        private _sceneLabel3 :objects.Label;
        // CONSTRUCTOR
        constructor() {
            super();
        }

        // Run when the scene is started
        public start() : void {
            console.log("Game  Win started");
            this._bg = new createjs.Bitmap(assets.getResult("DhovakinBG"));
            this.addChild(this._bg);

            this._retryButton = new objects.Button("ButtonRetry", config.Screen.CENTER_X, config.Screen.CENTER_Y + 170);
            this.addChild(this._retryButton);
            this._retryButton.on("click", this._RestartGame, this);

            this._sceneLabel1 = new objects.Label("Alas, on your way to the tavern...", "bold 16px Arial", "#A9A9A9", 50,120);
            this.addChild(this._sceneLabel1);

            this._sceneLabel2 = new objects.Label("You Come across the dragonborn raising his blacksmith skills.", "bold 16px Arial", "#A9A9A9", 50,150);
            this.addChild(this._sceneLabel2);

            this._sceneLabel3 = new objects.Label("Congratulations, You have found your Thane.", "bold 16px Arial", "#A9A9A9", 50,180);
            this.addChild(this._sceneLabel3);

            stage.addChild(this);
        }

        // Run on every tick
        public update() : void {

        }

        private _RestartGame(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}