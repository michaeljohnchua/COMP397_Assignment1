/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene : objects.Scene;
var scene: number;
var lastScene: number;

// Game scenes
var menuScene : scenes.Menu;
var gameScene : scenes.Game;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "GameOverBG", src:"././Assets/images/gameover.jpg"},
    {id: "StartMenu",src:"././Assets/images/Start.jpg"},
    {id: "StartGame",src:"././Assets/images/StartGame.png"},
    {id: "LydiaBG",src:"././Assets/images/Node1.jpg"},
    {id: "ForestButton",src:"././Assets/images/ForestButton.png"},
    {id: "MountainButton",src:"././Assets/images/MountainButton.png"},
    {id: "MountainBG",src:"././Assets/images/Mountain.jpg"},
    {id: "ForestBG",src:"././Assets/images/Forest.jpg"},
    {id: "GiantBG",src:"././Assets/images/ForestGiant.jpg"},
    {id: "CampBG",src:"././Assets/images/ForestCamp.jpg"},
    {id: "DragonBG",src:"././Assets/images/MountainDragon.jpg"},
    {id: "FortBG",src:"././Assets/images/MountainFort.jpg"},
    {id: "ButtonEncampment",src:"././Assets/images/buttonEncampment.png"},
    {id: "ButtonFight",src:"././Assets/images/buttonFight.png"},
    {id: "ButtonFireball",src:"././Assets/images/buttonFireball.png"},
    {id: "ButtonFort",src:"././Assets/images/buttonFort.png"},
    {id: "ButtonNope",src:"././Assets/images/buttonNope.png"},
    {id: "ButtonProtection",src:"././Assets/images/buttonProtection.png"},
    {id: "ButtonRun",src:"././Assets/images/buttonRun.png"},
    {id: "ButtonSneak",src:"././Assets/images/buttonSneak.png"},
    {id: "ButtonStream",src:"././Assets/images/buttonStream.png"},
    {id: "ButtonTown",src:"././Assets/images/buttonTown.png"},
    {id: "ButtonVoices",src:"././Assets/images/buttonVoices.png"},
    {id: "ButtonRetry",src:"././Assets/images/ButtonRetry.png"},
    {id: "DhovakinBG",src:"././Assets/images/DhovakinFound.png"},
    

];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);

    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");

    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);

    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);

    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
       
        case config.Scene.GAMEOVER :
            stage.removeAllChildren();
            currentScene = new scenes.Gameover();
            console.log("Starting GAMEOVER scene");
            break;

        case config.Scene.Lydia :
            stage.removeAllChildren();
            currentScene = new scenes.Lydia();
            console.log("Starting Lydia Start scene");
            break;

        case config.Scene.Mountain :
            stage.removeAllChildren();
            currentScene = new scenes.Mountain();
            console.log("Starting Mountain scene");
            break;
        
        case config.Scene.Forest :
            stage.removeAllChildren();
            currentScene = new scenes.Forest();
            console.log("Starting Forest scene");
            break;

        case config.Scene.ForestGiant :
            stage.removeAllChildren();
            currentScene = new scenes.ForestGiant();
            console.log("Starting Forest Giant scene");
            break;
        
        case config.Scene.ForestCamp :
            stage.removeAllChildren();
            currentScene = new scenes.ForestCamp();
            console.log("Starting Forest Camp scene");
            break;
        
        case config.Scene.MountainFort :
            stage.removeAllChildren();
            currentScene = new scenes.MountainFort();
            console.log("Starting Mountain Fort scene");
            break;
        
        case config.Scene.MountainDragon :
            stage.removeAllChildren();
            currentScene = new scenes.MountainDragon();
            console.log("Starting Mountain Dragon scene");
            break;
        
        case config.Scene.GameWin :
            stage.removeAllChildren();
            currentScene = new scenes.GameWin();
            console.log("Starting Mountain Dragon scene");
            break;
    }
    
}