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
    var Forest = (function (_super) {
        __extends(Forest, _super);
        function Forest() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Forest.prototype.start = function () {
            // Add objects to the scene
            console.log("Forest scene started");
            //Add Background
            this._bg = new createjs.Bitmap(assets.getResult("ForestBG"));
            this._bg.x = -20;
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            //this._gameLabel = new objects.Label("PLAY SCENE", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            //this.addChild(this._gameLabel);
            // Scene Decision 1
            this._sceneButton1 = new objects.Button("ButtonVoices", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton1);
            this._sceneButton1.on("click", this._onLeftButtonClick, this);
            // Scene Decision 2
            this._sceneButton2 = new objects.Button("ButtonStream", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton2);
            this._sceneButton2.on("click", this._onRightButtonClick, this);
            //Scene Story
            this._sceneLabel1 = new objects.Label("Two days in your journey, you arrive at a crossroad.", "bold 16px Arial", "#A9A9A9", 50, 210);
            this.addChild(this._sceneLabel1);
            this._sceneLabel2 = new objects.Label("You hear a small bandit group talking about the dragonborn.", "bold 16px Arial", "#A9A9A9", 50, 230);
            this.addChild(this._sceneLabel2);
            this._sceneLabel3 = new objects.Label("Along the stream, there seems to be trees moving in the distance. ", "bold 16px Arial", "#A9A9A9", 50, 250);
            this.addChild(this._sceneLabel3);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Forest.prototype.update = function () {
            // Update objects
        };
        Forest.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.ForestCamp;
            changeScene();
        };
        Forest.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.ForestGiant;
            changeScene();
        };
        return Forest;
    }(objects.Scene));
    scenes.Forest = Forest;
})(scenes || (scenes = {}));
//# sourceMappingURL=Forest.js.map