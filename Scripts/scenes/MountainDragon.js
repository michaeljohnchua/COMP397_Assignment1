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
    var MountainDragon = (function (_super) {
        __extends(MountainDragon, _super);
        function MountainDragon() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        MountainDragon.prototype.start = function () {
            // Add objects to the scene
            console.log("Dragon scene started");
            //Add Background
            this._bg = new createjs.Bitmap(assets.getResult("DragonBG"));
            this._bg.x = -20;
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            //this._gameLabel = new objects.Label("PLAY SCENE", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            //this.addChild(this._gameLabel);
            // Scene Decision 1
            this._sceneButton1 = new objects.Button("ButtonNope", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton1);
            this._sceneButton1.on("click", this._onLeftButtonClick, this);
            // Scene Decision 2
            this._sceneButton2 = new objects.Button("ButtonFight", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._sceneButton2);
            this._sceneButton2.on("click", this._onRightButtonClick, this);
            //Scene Story
            this._sceneLabel1 = new objects.Label("Up the townhall perched an Ice Dragon terrorizing the town.", "bold 16px Arial", "#000000", 50, 210);
            this.addChild(this._sceneLabel1);
            this._sceneLabel2 = new objects.Label("The dragon has not seen you yet.", "bold 16px Arial", "#000000", 50, 230);
            this.addChild(this._sceneLabel2);
            this._sceneLabel3 = new objects.Label("Charge the dragon, or find a place to drink?", "bold 16px Arial", "#000000", 50, 250);
            this.addChild(this._sceneLabel3);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        MountainDragon.prototype.update = function () {
            // Update objects
        };
        MountainDragon.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.GameWin;
            changeScene();
        };
        MountainDragon.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.GAMEOVER;
            lastScene = 7;
            changeScene();
        };
        return MountainDragon;
    }(objects.Scene));
    scenes.MountainDragon = MountainDragon;
})(scenes || (scenes = {}));
//# sourceMappingURL=MountainDragon.js.map