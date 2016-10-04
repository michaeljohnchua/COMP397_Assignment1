/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            //Add Backround Start scene
            this._bg = new createjs.Bitmap(assets.getResult("StartMenu"));
            this._bg.x = -50;
            this.addChild(this._bg);
            //this._menuLabel = new objects.Label("AWESOME SAUCE", "Arial 60px", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            //this.addChild(this._menuLabel);
            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("StartGame", config.Screen.CENTER_X + 240, config.Screen.CENTER_Y + 60);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Menu.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.Lydia;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map