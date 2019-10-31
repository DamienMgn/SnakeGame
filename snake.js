let snake = {
    scale: 30,

    positionX: 0,
    positionY: 0,
    speedX: 30,
    speedY: 0,
    tail: [],

    draw: function() {

        app.ctx.fillStyle = '#45B39D';

        for (let i = 0; i < snake.tail.length; i++) {
        app.ctx.fillRect(snake.tail[i].x, snake.tail[i].y, snake.scale, snake.scale);
        }


    },
    update: function() {

        let tailBis = [];
        tailBis[0] = {x: snake.positionX, y: snake.positionY};

        for (let i = 1; i <= app.count; i++) {  
            tailBis[i] = snake.tail[i - 1];
        }
        snake.tail = tailBis;

        snake.positionX += snake.speedX;
        snake.positionY += snake.speedY;

        if (snake.positionX == app.canvas.width) {
            snake.positionX = 0;
        } else if (snake.positionX == -snake.scale) {
            snake.positionX = app.canvas.width;
        } else if (snake.positionY == app.canvas.height) {
            snake.positionY = 0;
        } else if (snake.positionY == -snake.scale) {
            snake.positionY = app.canvas.height;
        }
    },
    direction: function(e) {
        switch(e.key) {
            case 'ArrowDown':
                snake.speedX = 0;
                snake.speedY = snake.scale;
            break;
            case 'ArrowUp':
                snake.speedX = 0;
                snake.speedY = -snake.scale;
            break;
            case 'ArrowLeft':
                snake.speedX = -snake.scale;
                snake.speedY = 0;
            break;
            case 'ArrowRight':
                snake.speedX = snake.scale;
                snake.speedY = 0;
            break;
        }
    }
}