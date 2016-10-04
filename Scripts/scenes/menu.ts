/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
//Author: Michael John Chua
//Last Modified By: Michael John Chua
//Main Menu scene
module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        private _bg : createjs.Bitmap;
        // Button 
        private _menuButton : objects.Button;
        private _menuLabel : objects.Label;

        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            //Add Backround Start scene
            this._bg = new createjs.Bitmap(assets.getResult("StartMenu"));
            this._bg.x = -50;
            this.addChild(this._bg);


            //this._menuLabel = new objects.Label("AWESOME SAUCE", "Arial 60px", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            //this.addChild(this._menuLabel);

            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("StartGame", config.Screen.CENTER_X +240, config.Screen.CENTER_Y + 60);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.Lydia;
            changeScene();
        }


    }
}