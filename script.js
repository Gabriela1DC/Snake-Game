let canavs=document.getElementById('sanke');
let context=document.getContext('2d');
let box=32;
let snake=[]
snake[0]={
    x: 8 * box,
    y: 8 * box
}

let direction="right";

function createBG(){
    
    context.fillStyle='black';
    context.fillReact(0,0,16 * box, 16 * box);

}

function createSnake() {
    for(i=0; i < snake.length; i++){
        context.fillStyle='green'
        context.fillReact(snake[i].x, snake[i].y, box, box);
    }
}

function startGame(){

    createBG();
    createSnake();

    let snake_X = snake[0].x;
    let snake_Y = snake[0].y;

    if(direction=='right') snake_X += box;
    if (direction=='left') snake_X -= box;
    if(direction=='up') snake_Y += box;
    if(direction=='down') snake_Y -= box;

    snake.pop();

    let newHead = {
        x: snake_X,
        y: snake_Y
    }

    snake.unshift(newHead);
}

let game = setInterval{startGame, 100};