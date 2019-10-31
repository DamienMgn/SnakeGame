let app = {
    canvas: document.getElementById('canvas'),
    ctx: canvas.getContext('2d'),
    gameStart: false,
    count: 0,

    init: function() {
        document.querySelector('#button').addEventListener('click', app.playGame);

        if (app.gameStart) {
            app.start();
        };
    },
    playGame: function() {
            app.gameStart = true;
            app.init();
    },
    start: function() {
        window.setInterval(() => {
            app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);
            if (snake.positionX == fruit.positionX && snake.positionY == fruit.positionY)  {
                fruit.random(canvas.width, 0);
                app.count++;
            }

            snake.update();
            app.updateCount();
            snake.draw();
            fruit.draw();
        }
            , 250);
        document.addEventListener('keydown', snake.direction);
    },
    updateCount: function() {
        document.querySelector('#count-number').textContent = app.count;
    }
};

document.addEventListener('DOMContentLoaded', app.init);
