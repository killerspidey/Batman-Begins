class Umbrella() {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = 50;
        
        var options = {
            isStatic : true
        }
        this.image = loadImage('Walking Frame/walking_1.png');
        this.umbrella = Bodies.circle(x, y, 50, options);
        World.add(world, this.umbrella);
    }
    display() {
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y + 70, 300, 300);
    }
}