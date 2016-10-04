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
    var ForestCamp = (function (_super) {
        __extends(ForestCamp, _super);
        function ForestCamp() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        ForestCamp.prototype.start = function () {
            // Add objects to the scene
            console.log("ForestCamp scene started");
            //Add Background
            this._bg = new createjs.Bitmap(assets.getResult("CampBG"));
            this._bg.x = -150;
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            //this._gameLabel = new objects.Label("PLAY SCENE", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            //this.addChild(this._gameLabel);
            // Scene Decision 1
            this._sceneButton1 = new objects.Button("ButtonEncampment", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton1);
            this._sceneButton1.on("click", this._onLeftButtonClick, this);
            // Scene Decision 2
            this._sceneButton2 = new objects.Button("ButtonRun", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton2);
            this._sceneButton2.on("click", this._onRightButtonClick, this);
            //Scene Story
            this._sceneLabel1 = new objects.Label("You arrive at the camp and confirmed the bandit crew's presence", "bold 16px Arial", "#A9A9A9", 50, 210);
            this.addChild(this._sceneLabel1);
            this._sceneLabel2 = new objects.Label("There is no sign of the dragonborn.", "bold 16px Arial", "#A9A9A9", 50, 230);
            this.addChild(this._sceneLabel2);
            this._sceneLabel3 = new objects.Label("Search the camp or run away?", "bold 16px Arial", "#A9A9A9", 50, 250);
            this.addChild(this._sceneLabel3);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        ForestCamp.prototype.update = function () {
            // Update objects
        };
        ForestCamp.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            lastScene = 1;
            scene = config.Scene.GAMEOVER;
            changeScene();
        };
        ForestCamp.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            lastScene = 2;
            scene = config.Scene.GAMEOVER;
            changeScene();
        };
        return ForestCamp;
    }(objects.Scene));
    scenes.ForestCamp = ForestCamp;
})(scenes || (scenes = {}));
//# sourceMappingURL=ForestCamp.js.map