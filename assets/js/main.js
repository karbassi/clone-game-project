import {Player} from './modules/Player.js';
import{Enemy} from './modules/Enemy.js';


const $canvas = document.querySelector('.game-area');
const ctx = $canvas.getContext('2d');

const zeya = new Player(ctx,'Zeya Chen');
zeya.sayName();

const enemies =[];


const heather = new Enemy(ctx,'Heather', "peachpuff");
const jason = new Enemy(ctx,'Jason', "black");
const jesse = new Enemy(ctx,'Jesse', "purple");
const samar = new Enemy(ctx,'Samar', '#d59696');
const sami = new Enemy(ctx,'Sami', '#93E9BE');
const shin = new Enemy(ctx,'Shin', '#2521ff');
const siwei = new Enemy(ctx,'Siwei', 'green');
const pukka = new Enemy(ctx,'Pukka', '#C42348');
const kie = new Enemy(ctx,'Kie', 'skyblue');


enemies.push(heather, jason, jesse, samar, sami, shin, siwei, pukka, kie);

function step() {
    ctx.clearRect(0,0, $canvas.width, $canvas.height);
zeya.draw();
zeya.move();

enemies.forEach( function(enemy)
{
    enemy.draw();
});
window.requestAnimationFrame(step);
}

step();
