let fruit = {
    scale: 30,

    positionX: 90,
    positionY: 60,

    draw: function() {
        app.ctx.fillStyle = '#A569BD';
        app.ctx.fillRect(fruit.positionX, fruit.positionY, fruit.scale, fruit.scale);
    },
    random: function(max, min) {
        let randomX = (Math.floor(Math.random() * ((max/fruit.scale) - min)) + min) * fruit.scale;
        let randomY = (Math.floor(Math.random() * ((max/fruit.scale) - min)) + min) * fruit.scale;

        fruit.positionX = randomX;
        fruit.positionY = randomY;
    }
}