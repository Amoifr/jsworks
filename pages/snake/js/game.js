var snake;
var food;
const scale = 10;
const canvasSize = 300;
var lastDirection;
let nationalHeroFont;

function preload() {
    nationalHeroFont = loadFont('assets/National Hero! 400.otf');
}

function setup() {
    frameRate(10);
    createCanvas(canvasSize, canvasSize);
    textFont(nationalHeroFont);
    snake = new Snake();
    food = getFood();
}

function draw() {
    drawCanvas();
    drawScore();
    drawSnake();
    drawFood();
}

function drawCanvas() {
    background(153);
}

function drawFood() {
    fill(255, 0, 100);
    rect(food.x, food.y, scale, scale);
}

function drawScore() {
    textSize(32);
    fill(40, 50, 40);
    text('Score : ' + snake.length, 10, 30);
}

function drawSnake() {
    if(snake.eatFood(food)) {
        food = getFood();
    }

    snake.update();
    snake.show();

    if(snake.die()) {
        snake = new Snake();
    }
}


function getFood() {
    const cols = floor(canvasSize / scale);
    const rows = floor(canvasSize / scale);
    const x = floor(random(cols)) * scale;
    const y = floor(random(rows)) * scale;
    return createVector(x, y);
}

function keyPressed() {
    switch(keyCode) {
        case  UP_ARROW :
            if(lastDirection != DOWN_ARROW) {
                snake.changeDirection(0, -1);
                lastDirection = UP_ARROW;
            }
            break;
        case  DOWN_ARROW :
            if(lastDirection !== UP_ARROW) {
                snake.changeDirection(0, 1);
                lastDirection = DOWN_ARROW;
            }
            break;
        case  LEFT_ARROW :
            if(lastDirection != RIGHT_ARROW) {
                snake.changeDirection(-1, 0);
                lastDirection = LEFT_ARROW;
            }
            break;
        case  RIGHT_ARROW :
            if(lastDirection != LEFT_ARROW) {
                snake.changeDirection(1, 0);
                lastDirection = RIGHT_ARROW;
            }
            break;
    }
}