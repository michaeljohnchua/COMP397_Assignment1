/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static GAMEOVER : number = 1;
        public static Lydia: number =2;
        public static Mountain: number =3;
        public static Forest: number = 4;
        public static ForestCamp: number = 5;
        public static ForestGiant: number = 6;
        public static MountainFort: number = 7;
        public static MountainDragon: number = 8;
        public static GameWin: number =9;
    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}