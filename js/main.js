WINDOW_HEIGHT = 500;
WINDOW_WIDTH = 500;

function main(){
  init();

  fBullets = new BulletArray();
  mine = new Ship();
  setInterval(function(){
    ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    fBullets.draw();
    mine.draw();
    fBullets.update();
    mine.update();
  },4);
}

function init() {
  cvs = document.getElementById('cvs');
  ctx = cvs.getContext('2d');
  cvs.height = WINDOW_HEIGHT;
  cvs.width = WINDOW_WIDTH;
  ctx.fillRect(0,0,100,100);

  window.onkeyup= function (e) {
    switch(e.keyCode){
      case 38:
        mine.vy = 0;
        break;
      case 40:
        mine.vy = 0;
        break;
      case 37:
        mine.vx = 0;
        break;
      case 39:
        mine.vx = 0;
        break;
      default:
        break;
    }
  }
  window.onkeydown= function (e) {
    switch(e.keyCode){
      case 38:
        mine.vy = -3;
        break;
      case 40:
        mine.vy = 3;
        break;
      case 37:
        mine.vx = -3;
        break;
      case 39:
        mine.vx = 3;
        break;
      case 88:
        fBullets.list.push(new Bullet(mine.x,mine.y,0,-3));
        break;
      default:
        break;
    }
  }
}


