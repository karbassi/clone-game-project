import{getRandom} from './helpers.js';

//class takes the name in caps
//has the name and constructor
//a class is a reusable
class Enemy {
    constructor(ctx, name, fillStyle = 'transparent') {
        //this represents the object as its self, so its player in this case
        this.ctx = ctx;
        this.name = name;
        this.hp = 100;
        this.x = getRandom(100, 400);
        this.y = getRandom(100, 400);
        this.radius = getRandom(10, 30);
        this.fillStyle= fillStyle;


        this.velocityX = getRandom(-0.1, 0.1);
        this.velocityY = getRandom(-0.1, 0.1);
    }
    sayName() {
        console.log(`Hi! I'm ${this.name}. Get out of my way.`);
    }

    draw() {
        //draw circle
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2* Math.PI);
        this.ctx.stroke();
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.fill();
    }

    move() {
        this.x += 0.1;
        this.y += 0.1;
    }

}

export{Enemy};
