var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var interval = null;
var frames = 0; 

var images = {
  bg: './galaxy-wallpapers-30826-1545578.jpg',
  sprite: './Character5.png'
}

function Board() {
  this.x = 0
  this.y = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src = images.bg
  this.img.onload = () => {
    this.draw()
  }
  this.draw = () => {
    ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height)
  }
}

function Hero() {
  this.position = canvas.height / 2
  this.x = 0
  this.y = 0
  this.w = 300
  this.aux = 0
  this.h = 245
  this.img = new Image()
  this.img.src = images.sprite
  this.img.onload = () => {
    this.draw()
  }
  this.draw = () => {        //empiezax, empiezay, hastadondex, hastadondey, 
    console.log(this.x, this.w)
    ctx.drawImage(this.img, this.x, this.y, 320, this.h, 10, this.position, 100, 100);
    if (frames % 4 === 0) {
      this.aux++
      if (this.aux === 8) this.aux = 0
  }
  switch (this.aux) {
    case 0:
     return this.x = 0
    case 1:
      return this.x = 555
    case 2:
      return this.x = 1100
    case 3:
      return this.x = 1600
    case 4:
      return this.x = 2100
    case 5:
      return this.x = 2600
    case 6:
      return this.x = 3130
    case 7:
      return this.x = 3670
    case 8: 
      return this.x = 4200
  }
}
}

function update() {
  setInterval(start, 1000/60)
}

function start() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  frames++
  fondo.draw()
  hero.draw()
}

var fondo = new Board();
var hero = new Hero();
update();

addEventListener('keydown', (e) => {
  if (e.keyCode === 32)
  hero.position -= 50
})