// declare module '..\\node_modules\\typescript-cookie\\index.js';
// import{ getCookie, setCookie } from '..\\node_modules\\typescript-cookie\\index.js';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
export class UI {
    static GetUI() {
        if (UI.CurrentUI == null)
            UI.CurrentUI = new UI();
        return UI.CurrentUI;
    }
    constructor() {
        this.cellSize = 20;
        let snakeEl = document.getElementById('snake');
        let snakeEl2 = document.getElementById('snake2');
        let gridEl = document.getElementById('grid');
        this.snakeElement = snakeEl == null ? new HTMLElement() : snakeEl;
        this.snakeElement2 = snakeEl2 == null ? new HTMLElement() : snakeEl2;
        this.grid = gridEl == null ? new HTMLElement() : gridEl;
        this.cellSize = this.cellSize;
    }
    render(SnakeHead, SnakeHead2, SnakeBody, SnakeBody2, SnakeDirection, SnakeDirection2, AppleArray, HighScore) {
        var existingSegments = document.querySelectorAll('.snake-segment');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.sl');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.sr');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.so');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.su');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.bv');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.bh');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.ol');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.ur');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.or');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.ul');
        existingSegments.forEach(segment => segment.remove());
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.sl2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.sr2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.so2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.su2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.bv2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.bh2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.ol2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.ur2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.or2');
        existingSegments.forEach(segment => segment.remove());
        existingSegments = document.querySelectorAll('.ul2');
        existingSegments.forEach(segment => segment.remove());
        //console.log(SnakeHead)
        const body = SnakeBody;
        for (let i = 0; i < body.length; i++) {
            const bodyElement = document.createElement('div');
            if (body.length == 1) {
                if (SnakeDirection === Direction.Left) {
                    bodyElement.className = "sl";
                }
                else if (SnakeDirection === Direction.Right) {
                    bodyElement.className = "sr";
                }
                else if (SnakeDirection === Direction.Down) {
                    bodyElement.className = "su";
                }
                else if (SnakeDirection === Direction.Up) {
                    bodyElement.className = "so";
                }
            }
            if (i > 0 && i < body.length - 1) {
                if (body[i - 1][0] == body[i + 1][0]) {
                    bodyElement.className = 'bv';
                    // bodyElement.style.left = body[i][0]*this.cellSize + "px";
                    // bodyElement.style.top = body[i][1]*this.cellSize + "px";
                }
                else if (body[i - 1][1] == body[i + 1][1]) {
                    bodyElement.className = 'bh';
                }
                else if ((body[i - 1][0] < body[i][0] && body[i][1] > body[i + 1][1]) || (body[i + 1][0] < body[i][0] && body[i - 1][1] < body[i][1])) {
                    bodyElement.className = 'ol';
                }
                else if ((body[i - 1][0] < body[i][0] && body[i][1] < body[i + 1][1]) || (body[i + 1][0] < body[i][0] && body[i - 1][1] > body[i][1])) {
                    bodyElement.className = 'ul';
                }
                else if (body[i - 1][0] > body[i][0] && body[i][1] < body[i + 1][1] || (body[i + 1][0] > body[i][0] && body[i - 1][1] > body[i][1])) {
                    bodyElement.className = 'ur';
                }
                else if ((body[i - 1][0] > body[i][0] && body[i][1] > body[i + 1][1]) || (body[i + 1][0] > body[i][0] && body[i - 1][1] < body[i][1])) {
                    bodyElement.className = 'or';
                }
            }
            if (i == 0 && body.length > 1) {
                if (SnakeDirection === Direction.Left) {
                    bodyElement.className = 'bh';
                    if (body[1][1] < body[0][1]) { // NACH OBEN
                        bodyElement.className = 'ol';
                    }
                    else if (body[1][1] > body[0][1]) { // NACH UNTEN
                        bodyElement.className = 'ul';
                    }
                }
                if (SnakeDirection === Direction.Right) {
                    bodyElement.className = 'bh';
                    if (body[1][1] < body[0][1]) { // NACH OBEN
                        bodyElement.className = 'or';
                    }
                    else if (body[1][1] > body[0][1]) { // NACH UNTEN
                        bodyElement.className = 'ur';
                    }
                }
                if (SnakeDirection === Direction.Down) {
                    bodyElement.className = 'bv';
                    if (body[1][0] < body[0][0]) { // VON LINKS
                        bodyElement.className = 'ul';
                    }
                    else if (body[1][0] > body[0][0]) { // VON RECHTS
                        bodyElement.className = 'ur';
                    }
                }
                if (SnakeDirection === Direction.Up) {
                    bodyElement.className = 'bv';
                    if (body[1][0] < body[0][0]) { // VON LINKS
                        bodyElement.className = 'ol';
                    }
                    else if (body[1][0] > body[0][0]) { // VON RECHTS
                        bodyElement.className = 'or';
                    }
                }
            }
            if (i == body.length - 1 && i > 0) {
                if (body[i][0] < body[i - 1][0]) { // NACH RECHTS
                    bodyElement.className = 'sr';
                }
                else if (body[i][0] > body[i - 1][0]) { // NACH LINKS
                    bodyElement.className = 'sl';
                }
                else if (body[i][1] < body[i - 1][1]) { // NACH UNTEN
                    bodyElement.className = 'su';
                }
                else if (body[i][1] > body[i - 1][1]) { // NACH OBEN
                    bodyElement.className = 'so';
                }
            }
            bodyElement.id = 'snake-body-${i}';
            bodyElement.style.left = body[i][0] * this.cellSize + "px";
            bodyElement.style.top = body[i][1] * this.cellSize + "px";
            this.grid.appendChild(bodyElement);
        }
        this.snakeElement.style.left = SnakeHead[0] * this.cellSize + "px";
        this.snakeElement.style.top = SnakeHead[1] * this.cellSize + "px";
        if (SnakeDirection === Direction.Left) {
            this.snakeElement.className = "kl";
            //console.log("GOING LEFT")
        }
        else if (SnakeDirection === Direction.Right) {
            this.snakeElement.className = "kr";
            //console.log("GOING RIGHT")
        }
        else if (SnakeDirection === Direction.Down) {
            this.snakeElement.className = "ku";
            //console.log("GOING DOWN")
        }
        else if (SnakeDirection === Direction.Up) {
            this.snakeElement.className = "ko";
            //console.log("GOING UP")
        }
        const existingApples = document.querySelectorAll('.apple');
        const existingYellowApples = document.querySelectorAll('.yellow-apple');
        existingApples.forEach(apple => apple.remove());
        existingYellowApples.forEach(apple => apple.remove());
        var apples = AppleArray;
        for (let apple of apples) {
            const appleElement = document.createElement('div');
            appleElement.id = 'apple-${i}';
            let applePos = apple.getPos();
            // console.log(applePos)
            if (apple.getYellow()) {
                appleElement.className = 'yellow-apple';
                appleElement.style.left = applePos[0] * this.cellSize - 4 + "px";
                appleElement.style.top = applePos[1] * this.cellSize - 2 + "px";
            }
            else {
                appleElement.className = 'apple';
                appleElement.style.left = applePos[0] * this.cellSize - 2 + "px";
                appleElement.style.top = applePos[1] * this.cellSize - 2 + "px";
            }
            // appleElement.style.top = applePos[1]*this.cellSize + "px"
            // appleElement.style.left = applePos[0]*this.cellSize + "px"
            this.grid.appendChild(appleElement);
        }
        //console.log(SnakeHead)
        apples = [];
        const score = document.getElementById('score');
        if (score) {
            score.textContent = "Score: " + Game.GetGame().GetScore() + "";
        }
        const highscore = document.getElementById('highscore');
        if (highscore) {
            highscore.textContent = "HighScore: " + HighScore + "";
        }
        const body2 = SnakeBody2;
        for (let i = 0; i < body2.length; i++) {
            const bodyElement2 = document.createElement('div');
            if (body2.length == 1) {
                if (SnakeDirection2 === Direction.Left) {
                    bodyElement2.className = "sl2";
                }
                else if (SnakeDirection2 === Direction.Right) {
                    bodyElement2.className = "sr2";
                }
                else if (SnakeDirection2 === Direction.Down) {
                    bodyElement2.className = "su2";
                }
                else if (SnakeDirection2 === Direction.Up) {
                    bodyElement2.className = "so2";
                }
            }
            if (i > 0 && i < body2.length - 1) {
                if (body2[i - 1][0] == body2[i + 1][0]) {
                    bodyElement2.className = 'bv2';
                    // bodyElement.style.left = body[i][0]*this.cellSize + "px";
                    // bodyElement.style.top = body[i][1]*this.cellSize + "px";
                }
                else if (body2[i - 1][1] == body2[i + 1][1]) {
                    bodyElement2.className = 'bh2';
                }
                else if ((body2[i - 1][0] < body2[i][0] && body2[i][1] > body2[i + 1][1]) || (body2[i + 1][0] < body2[i][0] && body2[i - 1][1] < body2[i][1])) {
                    bodyElement2.className = 'ol2';
                }
                else if ((body2[i - 1][0] < body2[i][0] && body2[i][1] < body2[i + 1][1]) || (body2[i + 1][0] < body2[i][0] && body2[i - 1][1] > body2[i][1])) {
                    bodyElement2.className = 'ul2';
                }
                else if (body2[i - 1][0] > body2[i][0] && body2[i][1] < body2[i + 1][1] || (body2[i + 1][0] > body2[i][0] && body2[i - 1][1] > body2[i][1])) {
                    bodyElement2.className = 'ur2';
                }
                else if ((body2[i - 1][0] > body2[i][0] && body2[i][1] > body2[i + 1][1]) || (body2[i + 1][0] > body2[i][0] && body2[i - 1][1] < body2[i][1])) {
                    bodyElement2.className = 'or2';
                }
            }
            if (i == 0 && body2.length > 1) {
                if (SnakeDirection2 === Direction.Left) {
                    bodyElement2.className = 'bh2';
                    if (body2[1][1] < body2[0][1]) { // NACH OBEN
                        bodyElement2.className = 'ol2';
                    }
                    else if (body2[1][1] > body2[0][1]) { // NACH UNTEN
                        bodyElement2.className = 'ul2';
                    }
                }
                if (SnakeDirection2 === Direction.Right) {
                    bodyElement2.className = 'bh2';
                    if (body2[1][1] < body2[0][1]) { // NACH OBEN
                        bodyElement2.className = 'or2';
                    }
                    else if (body2[1][1] > body2[0][1]) { // NACH UNTEN
                        bodyElement2.className = 'ur2';
                    }
                }
                if (SnakeDirection2 === Direction.Down) {
                    bodyElement2.className = 'bv2';
                    if (body2[1][0] < body2[0][0]) { // VON LINKS
                        bodyElement2.className = 'ul2';
                    }
                    else if (body2[1][0] > body2[0][0]) { // VON RECHTS
                        bodyElement2.className = 'ur2';
                    }
                }
                if (SnakeDirection2 === Direction.Up) {
                    bodyElement2.className = 'bv2';
                    if (body2[1][0] < body2[0][0]) { // VON LINKS
                        bodyElement2.className = 'ol2';
                    }
                    else if (body2[1][0] > body2[0][0]) { // VON RECHTS
                        bodyElement2.className = 'or2';
                    }
                }
            }
            if (i == body2.length - 1 && i > 0) {
                if (body2[i][0] < body2[i - 1][0]) { // NACH RECHTS
                    bodyElement2.className = 'sr2';
                }
                else if (body2[i][0] > body2[i - 1][0]) { // NACH LINKS
                    bodyElement2.className = 'sl2';
                }
                else if (body2[i][1] < body2[i - 1][1]) { // NACH UNTEN
                    bodyElement2.className = 'su2';
                }
                else if (body2[i][1] > body2[i - 1][1]) { // NACH OBEN
                    bodyElement2.className = 'so2';
                }
            }
            bodyElement2.id = 'snake-body-${i}';
            bodyElement2.style.left = body2[i][0] * this.cellSize + "px";
            bodyElement2.style.top = body2[i][1] * this.cellSize + "px";
            this.grid.appendChild(bodyElement2);
        }
        this.snakeElement2.style.left = SnakeHead2[0] * this.cellSize + "px";
        this.snakeElement2.style.top = SnakeHead2[1] * this.cellSize + "px";
        if (SnakeDirection2 === Direction.Left) {
            this.snakeElement2.className = "kl2";
            //console.log("GOING LEFT")
        }
        else if (SnakeDirection2 === Direction.Right) {
            this.snakeElement2.className = "kr2";
            //console.log("GOING RIGHT")
        }
        else if (SnakeDirection2 === Direction.Down) {
            this.snakeElement2.className = "ku2";
            //console.log("GOING DOWN")
        }
        else if (SnakeDirection2 === Direction.Up) {
            this.snakeElement2.className = "ko2";
            //console.log("GOING UP")
        }
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            var i = 0;
            this.snakeElement.style.backgroundColor = 'darkred';
            const existingSegments = document.querySelectorAll('.snake-segment');
            var sleepTimer = 100;
            for (const segment of existingSegments) {
                yield new Promise(r => setTimeout(r, sleepTimer));
                sleepTimer *= 0.97;
                segment.style.backgroundColor = 'darkred';
            }
            yield new Promise(r => setTimeout(r, 300));
            this.snakeElement.remove();
            for (const segment of existingSegments) {
                yield new Promise(r => setTimeout(r, sleepTimer));
                sleepTimer *= 0.97;
                segment.remove();
            }
        });
    }
    getCellSize() {
        return this.cellSize;
    }
}
export class Game {
    static GetGame() {
        if (Game.CurrentGame == null)
            Game.CurrentGame = new Game();
        return Game.CurrentGame;
    }
    constructor() {
        this.ui = new UI();
        this.apples = [];
        this.snake = new Snake();
        this.snake2 = new Snake();
        this.lastUpdatedTime = 0;
        this.frameRate = 8;
        this.cheat = false;
        this.cheater = false;
        this.boardSize = [41, 20];
        this.gameOver = false;
        this.highscore = 0;
        this.highscoreBeaten = false;
        this.started = false;
        this.initialized = false;
        this.singleplayer = false;
        this.ulti = 0;
        this.ended = false;
        this.boardSize = [40, 21];
        for (let i = 0; i < 500; i++) {
            let newApple = new Apple(this.boardSize);
            newApple.placeApple(this.snake.getBody(), this.apples);
            this.apples.push(newApple);
        }
        //const cookieResult = getCookie('highscore')
        //this.highscore = cookieResult === undefined ? 0 : +cookieResult
    }
    restart() {
        this.gameOver = false;
        this.apples = [];
        this.snake.clearBody();
        this.snake2.clearBody();
        this.snake = new Snake();
        this.snake.init(this.boardSize);
        if (!this.singleplayer) {
            this.snake2 = new Snake();
            this.snake2.init(this.boardSize);
        }
        this.boardSize = [40, 21];
        for (let i = 0; i < 500; i++) {
            let newApple = new Apple(this.boardSize);
            newApple.placeApple(this.snake.getBody(), this.apples);
            this.apples.push(newApple);
        }
        //const cookieResult = getCookie('highscore')
        //this.highscore = cookieResult === undefined ? 0 : +cookieResult
    }
    tick(timestamp) {
        if (!this.started) {
            this.ui.render([-100, -100], [-100, -100], this.snake.getBody(), this.snake2.getBody(), this.snake.direction, this.snake2.direction, this.apples, this.highscore);
            return;
        }
        else if (!this.initialized) {
            this.snake.init(this.boardSize);
            if (this.singleplayer === false)
                this.snake2.init(this.boardSize);
            this.initialized = true;
        }
        if (this.ulti > 0) {
            this.frameRate = 10;
            this.ulti--;
        }
        else {
            this.frameRate = 10;
        }
        if (this.cheat) {
            this.frameRate = 300;
        }
        if (timestamp - this.lastUpdatedTime > 1000 / this.frameRate && !this.ended) {
            this.lastUpdatedTime = timestamp;
            if (this.gameOver) {
                this.ui.close();
                this.ended = true;
                return;
            }
            this.snake.move(this.apples, this.cheat);
            if (this.singleplayer === false)
                this.snake2.move(this.apples, this.cheat);
            if (this.highscoreBeaten && !this.cheater && this.snake.getBody().length + 1 > this.highscore) {
                this.highscore = this.snake.getBody().length + 1;
                //setCookie('highscore', this.highscore.toString());
            }
            else if (this.snake.getBody().length + 1 > this.highscore) {
                this.highscoreBeaten = true;
            }
        }
        if (this.singleplayer) {
            this.ui.render(this.snake.getHead(), [-100, -100], this.snake.getBody(), this.snake2.getBody(), this.snake.direction, this.snake2.direction, this.apples, this.highscore);
        }
        else {
            this.ui.render(this.snake.getHead(), this.snake2.getHead(), this.snake.getBody(), this.snake2.getBody(), this.snake.direction, this.snake2.direction, this.apples, this.highscore);
        }
    }
    inputController(input) {
        input = input || window.event;
        //console.log(input.keyCode)
        switch (input.keyCode) {
            case 35: { // RESTART GAME
                this.setGameOver(false);
                Game.GetGame().restart();
            }
            case 38:
                { // UP´
                    if (this.snake.direction != Direction.Down && !this.cheat)
                        this.snake.nextDirection = Direction.Up;
                }
                break;
            case 40:
                { // DOWN
                    if (this.snake.direction != Direction.Up && !this.cheat)
                        this.snake.nextDirection = Direction.Down;
                }
                break;
            case 37:
                { // LEFT
                    if (this.snake.direction != Direction.Right && !this.cheat)
                        this.snake.nextDirection = Direction.Left;
                }
                break;
            case 39:
                { // RIGHT
                    if (this.snake.direction != Direction.Left && !this.cheat)
                        this.snake.nextDirection = Direction.Right;
                }
                break;
            case 85:
                { // RIGHT
                    this.cheater = true;
                    if (this.cheat) {
                        this.cheat = false;
                    }
                    else {
                        this.cheat = true;
                    }
                }
                break;
            case 87:
                { // UP´
                    if (this.snake2.direction != Direction.Down && !this.cheat)
                        this.snake2.nextDirection = Direction.Up;
                }
                break;
            case 83:
                { // DOWN
                    if (this.snake2.direction != Direction.Up && !this.cheat)
                        this.snake2.nextDirection = Direction.Down;
                }
                break;
            case 65:
                { // LEFT
                    if (this.snake2.direction != Direction.Right && !this.cheat)
                        this.snake2.nextDirection = Direction.Left;
                }
                break;
            case 68:
                { // RIGHT
                    if (this.snake2.direction != Direction.Left && !this.cheat)
                        this.snake2.nextDirection = Direction.Right;
                }
                break;
            case 85:
                { // RIGHT
                    this.cheater = true;
                    if (this.cheat) {
                        this.cheat = false;
                    }
                    else {
                        this.cheat = true;
                    }
                }
                break;
        }
    }
    getCellSize() {
        return this.ui.getCellSize();
    }
    getSnake() {
        return this.snake;
    }
    getSnake2() {
        return this.snake2;
    }
    getBoardSize() {
        return this.boardSize;
    }
    getGameOver() {
        return this.gameOver;
    }
    setGameOver(Over) {
        this.gameOver = Over;
    }
    setSuper(value) {
        this.ulti = value;
    }
    addSuper(value) {
        this.ulti = this.ulti + value;
    }
    GetScore() {
        return this.snake.getBody().length + 1;
    }
}
export class Snake {
    constructor() {
        this.head = [1, 1];
        this.body = [];
        this.length = 0; // Define length here
        this.direction = Direction.Right;
        this.nextDirection = Direction.Right;
        this.stage = 1;
        this.screenPosition = [0, 0];
    }
    init(boardSize) {
        this.head = [getRandomInt(5, boardSize[0] - 6), getRandomInt(5, boardSize[1] - 6)];
        const randomDirection = Math.random();
        if (randomDirection < 0.25) {
            this.direction = Direction.Left;
        }
        else if (randomDirection < 0.5) {
            this.direction = Direction.Up;
        }
        else if (randomDirection < 0.75) {
            this.direction = Direction.Right;
        }
        else if (randomDirection < 1.000001) {
            this.direction = Direction.Down;
        }
    }
    move(apples, cheat) {
        console.log(this.direction + " :  " + this.nextDirection);
        if (!cheat) {
            if (Game.GetGame().getGameOver() == true) {
                return;
            }
            switch (this.direction) {
                case Direction.Right:
                    if (this.head[0] > Game.GetGame().getBoardSize()[0]) {
                        Game.GetGame().setGameOver(true);
                        return;
                    }
                    break;
                case Direction.Left:
                    if (this.head[0] < 0) {
                        Game.GetGame().setGameOver(true);
                        return;
                    }
                    break;
                case Direction.Up:
                    if (this.head[1] < 0) {
                        Game.GetGame().setGameOver(true);
                        return;
                    }
                    break;
                case Direction.Down:
                    if (this.head[1] > Game.GetGame().getBoardSize()[1]) {
                        Game.GetGame().setGameOver(true);
                        return;
                    }
                    break;
            }
            for (let i = this.length - 1; i > -1; i--) {
                if (i == 0) {
                    this.body[0] = [this.head[0], this.head[1]];
                }
                else {
                    this.body[i] = [this.body[i - 1][0], this.body[i - 1][1]];
                }
            }
            this.direction = this.nextDirection;
            switch (this.direction) {
                case Direction.Right:
                    this.head[0] += 1;
                    break;
                case Direction.Left:
                    this.head[0] -= 1;
                    break;
                case Direction.Up:
                    this.head[1] -= 1;
                    break;
                case Direction.Down:
                    this.head[1] += 1;
                    break;
            }
            this.body.forEach(segment => {
                const bodyPosition = [segment[0], segment[1]];
                if (this.head[0] == bodyPosition[0] && this.head[1] == bodyPosition[1]) {
                    Game.GetGame().setGameOver(true);
                }
            });
            let otherSnake;
            if (this === Game.GetGame().getSnake()) { // Compare the snake instance directly
                otherSnake = Game.GetGame().getSnake2();
            }
            else {
                otherSnake = Game.GetGame().getSnake();
            }
            otherSnake.getBody().forEach(segment => {
                const bodyPosition = [segment[0], segment[1]];
                if (this.head[0] == bodyPosition[0] && this.head[1] == bodyPosition[1]) {
                    Game.GetGame().setGameOver(true);
                }
            });
            this.screenPosition[0] = this.head[0] * Game.GetGame().getCellSize();
            this.screenPosition[1] = this.head[1] * Game.GetGame().getCellSize();
            for (let i = 0; i < apples.length; i++) {
                if (this.head[0] == apples[i].getPos()[0] && this.head[1] == apples[i].getPos()[1]) {
                    if (apples[i].getYellow()) {
                        console.log("Is Yellow");
                        Game.GetGame().setSuper(100);
                    }
                    if (apples.length + this.getBody().length + 1 > 41 * 22) {
                        apples.splice(i, 1);
                        i--;
                    }
                    else {
                        apples[i].placeApple(this.body, apples);
                    }
                    if (this.body.length == 0) {
                        this.body.push([this.head[0], this.head[1]]);
                    }
                    else {
                        this.body.push([this.body[this.body.length - 1][0], this.body[this.body.length - 1][1]]);
                    }
                    this.length += 1;
                }
            }
        }
    }
    getHead() {
        return this.head;
    }
    getBody() {
        return this.body;
    }
    clearBody() {
        this.body = [];
    }
}
export class Apple {
    constructor(boardSize) {
        this.pos = [0, 0];
        this.isYellow = false;
        this.boardSize = [0, 0];
        this.boardSize = boardSize;
    }
    getPos() {
        return this.pos;
    }
    getYellow() {
        return this.isYellow;
    }
    placeApple(bodyArray, appleArray) {
        if (Math.random() < 0.05)
            this.isYellow = true;
        else
            this.isYellow = false;
        let randomPos = [getRandomInt(0, this.boardSize[0]), getRandomInt(0, this.boardSize[1])];
        const isOverlap = (pos, arr) => {
            return arr.some(item => item[0] === pos[0] && item[1] === pos[1]);
        };
        const isAppleOverlap = (pos, apples) => {
            return apples.some(apple => {
                const applePos = apple.getPos();
                return applePos[0] === pos[0] && applePos[1] === pos[1];
            });
        };
        let validPosition = false;
        while (!validPosition) {
            randomPos = [getRandomInt(0, this.boardSize[0]), getRandomInt(0, this.boardSize[1])];
            if (!isOverlap(randomPos, bodyArray) && !isAppleOverlap(randomPos, appleArray)) {
                validPosition = true;
                console.log(`Valid position found: ${randomPos}`);
            }
            else {
                console.log(`Invalid position: ${randomPos}, retrying...`);
            }
        }
        this.pos = randomPos;
        return this.pos;
    }
}
