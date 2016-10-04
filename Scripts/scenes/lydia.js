/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Lydia = (function (_super) {
        __extends(Lydia, _super);
        function Lydia() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Lydia.prototype.start = function () {
            // Add objects to the scene
            console.log("Lydia scene started");
            //Add Background
            this._bg = new createjs.Bitmap(assets.getResult("LydiaBG"));
            this._bg.x = -50;
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            //this._gameLabel = new objects.Label("PLAY SCENE", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            //this.addChild(this._gameLabel);
            // Scene Decision 1
            this._sceneButton1 = new objects.Button("ForestButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton1);
            this._sceneButton1.on("click", this._onForestButtonClick, this);
            // Scene Decision 2
            this._sceneButton2 = new objects.Button("MountainButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton2);
            this._sceneButton2.on("click", this._onMountainButtonClick, this);
            //Scene Story
            this._sceneLabel1 = new objects.Label("You are Lydia, famed Huscarl of the Dragonborn.", "bold 16px Arial", "#A9A9A9", 50, 210);
            this.addChild(this._sceneLabel1);
            this._sceneLabel2 = new objects.Label("The Dragonborn has been missing for weeks.", "bold 16px Arial", "#A9A9A9", 50, 230);
            this.addChild(this._sceneLabel2);
            this._sceneLabel3 = new objects.Label("Find him for the sake of Skyrim", "bold 16px Arial", "#A9A9A9", 50, 250);
            this.addChild(this._sceneLabel3);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Lydia.prototype.update = function () {
            // Update objects
        };
        Lydia.prototype._onMountainButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.Mountain;
            changeScene();
        };
        Lydia.prototype._onForestButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.Forest;
            changeScene();
        };
        return Lydia;
    }(objects.Scene));
    scenes.Lydia = Lydia;
})(scenes || (scenes = {}));
//# sourceMappingURL=lydia.js.map