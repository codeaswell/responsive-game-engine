
import ja from '../ja/index.js'

const { Game, Texture, Sprite, Text } = ja

const sprite = new Sprite(new Texture('./res/img/spaceship.png'))
sprite.pos.x = 60
sprite.pos.y = 60
sprite.update = function (dt) {
  sprite.pos.x += 30 * dt
  sprite.pos.y += 30 * dt
}

const message = new Text("My super Game", { font: '30px Arial', fill: 'red', align: 'center' })
message.pos.x = 300;
message.pos.y = 100;

const game = new Game(1400, 800)

game.scene.add(sprite)
game.scene.add(message);

game.run((dt, t) => {

})