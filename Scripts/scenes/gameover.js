/*
    Game over scene. This scene is shown when the player dies
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Gameover = (function (_super) {
        __extends(Gameover, _super);
        // CONSTRUCTOR
        function Gameover() {
            _super.call(this);
        }
        // Run when the scene is started
        Gameover.prototype.start = function () {
            switch (lastScene) {
                case 1:
                    this._line1 = "A bandit spotted you!";
                    this._line2 = "You were outnumbered by the bandits.";
                    this._line3 = "You take out 3 of them and went down fighting.";
                    break;
                case 2:
                    this._line1 = "Your clunky steel armor alerted the bandits of your position.";
                    this._line2 = "You ran as fast as you can beseiged by arrows.";
                    this._line3 = "You used to be an adventurer, but took an arrow to the knee.";
                    break;
                case 3:
                    this._line1 = "The stormcloak rebels were in awe of fighting prowess.";
                    this._line2 = "Tales will be told on how they took down the mighty Lydia";
                    this._line3 = "";
                    break;
                case 4:
                    this._line1 = "There seems to be no sign of the dragonborn.";
                    this._line2 = "Unfortunately, you aren't that good with stealth.";
                    this._line3 = "You were captured by the rebel scum.";
                    break;
                case 5:
                    this._line1 = "You cast a fireball towards a charging giant!";
                    this._line2 = "You didn't roll a 13. The giant got you.";
                    this._line3 = "";
                    break;
                case 6:
                    this._line1 = "Lydia isn't really a mage.";
                    this._line2 = "Her protection spell does nothing but numb the pain,";
                    this._line3 = "as all her blood spills to the ground.";
                    break;
                case 7:
                    this._line1 = "The townsfolk continue to sing songs of Lydia.";
                    this._line2 = "How the mighty huscarl was brave,";
                    this._line3 = "while being eaten by the dragon.";
                    break;
            }
            console.log("Game over scene started");
            console.log("Last Scene Choice: " + lastScene);
            this._bg = new createjs.Bitmap(assets.getResult("GameOverBG"));
            this.addChild(this._bg);
            this._retryButton = new objects.Button("ButtonRetry", config.Screen.CENTER_X, config.Screen.CENTER_Y + 170);
            this.addChild(this._retryButton);
            this._retryButton.on("click", this._marioClick, this);
            //Ending Story
            this._sceneLabel1 = new objects.Label(this._line1, "bold 16px Arial", "#000000", 50, 100);
            this.addChild(this._sceneLabel1);
            this._sceneLabel2 = new objects.Label(this._line2, "bold 16px Arial", "#000000", 50, 120);
            this.addChild(this._sceneLabel2);
            this._sceneLabel3 = new objects.Label(this._line3, "bold 16px Arial", "#000000", 50, 140);
            this.addChild(this._sceneLabel3);
            stage.addChild(this);
        };
        // Run on every tick
        Gameover.prototype.update = function () {
        };
        Gameover.prototype._marioClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Gameover;
    }(objects.Scene));
    scenes.Gameover = Gameover;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map