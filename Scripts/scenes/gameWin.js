/*
    This scene is shown when the player finds the dragonborn
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var GameWin = (function (_super) {
        __extends(GameWin, _super);
        // CONSTRUCTOR
        function GameWin() {
            _super.call(this);
        }
        // Run when the scene is started
        GameWin.prototype.start = function () {
            console.log("Game  Win started");
            this._bg = new createjs.Bitmap(assets.getResult("DhovakinBG"));
            this.addChild(this._bg);
            this._retryButton = new objects.Button("ButtonRetry", config.Screen.CENTER_X, config.Screen.CENTER_Y + 170);
            this.addChild(this._retryButton);
            this._retryButton.on("click", this._RestartGame, this);
            this._sceneLabel1 = new objects.Label("Alas, on your way to the tavern...", "bold 16px Arial", "#A9A9A9", 50, 120);
            this.addChild(this._sceneLabel1);
            this._sceneLabel2 = new objects.Label("You Come across the dragonborn raising his blacksmith skills.", "bold 16px Arial", "#A9A9A9", 50, 150);
            this.addChild(this._sceneLabel2);
            this._sceneLabel3 = new objects.Label("Congratulations, You have found your Thane.", "bold 16px Arial", "#A9A9A9", 50, 180);
            this.addChild(this._sceneLabel3);
            stage.addChild(this);
        };
        // Run on every tick
        GameWin.prototype.update = function () {
        };
        GameWin.prototype._RestartGame = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return GameWin;
    }(objects.Scene));
    scenes.GameWin = GameWin;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameWin.js.map