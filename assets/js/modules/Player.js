
//ctx.beginPath();
//ctx.strokeRect(75,50,100,100);
//class takes the name in caps
//has the name and constructor
//a class is a reusable
class Player {
    constructor(ctx, name) {
        //this represents the object as its self, so its player in this case
        this.ctx = ctx;
        this.name = name;
        this.hp = 100;
        this.x = 75;
        this.y = 50;
        this.width = 100;
        this.height = 100;


        this.velocityX = 0.1;
        this.velocityY = 0.1;
    }
    sayName() {
        console.log(`Hi! I'm ${this.name}. Nice to meet you.`);
    }

    draw() {
        //draw square
        this.ctx.beginPath();
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.x += 0.1;
        this.y += 0.1;
    }

}

export{Player};
