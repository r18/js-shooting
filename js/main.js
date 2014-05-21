WINDOW_HEIGHT = 500;
WINDOW_WIDTH = 500;
FRAME = 0;
SHIP_VELOCITY = 2;

function main(){
  init();

  mine = new Ship();
  setInterval(function(){
    ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    mine.draw();
    mine.update();
    FRAME++;
  },4);
}

function init() {
  cvs = document.getElementById('cvs');
  ctx = cvs.getContext('2d');
  cvs.height = WINDOW_HEIGHT;
  cvs.width = WINDOW_WIDTH;

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
      case 88:
        mine.shot = false;
        break;
      default:
        break;
    }
  }
  window.onkeydown= function (e) {
    switch(e.keyCode){
      case 38:
        mine.vy = -SHIP_VELOCITY;
        break;
      case 40:
        mine.vy = SHIP_VELOCITY;
        break;
      case 37:
        mine.vx = -SHIP_VELOCITY;
        break;
      case 39:
        mine.vx = SHIP_VELOCITY;
        break;
      case 88:
        mine.shot = true;
        break;
      default:
        break;
    }
  }
}


