/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.GAMEOVER = 1;
        Scene.Lydia = 2;
        Scene.Mountain = 3;
        Scene.Forest = 4;
        Scene.ForestCamp = 5;
        Scene.ForestGiant = 6;
        Scene.MountainFort = 7;
        Scene.MountainDragon = 8;
        Scene.GameWin = 9;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map