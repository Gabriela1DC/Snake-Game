let canavs=document.getElementById('sanke');
let context=document.getContext('2d');
let box=32;
let snake=[]
snake[0]={
    x: 8 * box,
    y: 8 * box
}

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

createBG();
createSnake()