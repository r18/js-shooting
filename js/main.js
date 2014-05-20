WINDOW_HEIGHT = 500;
WINDOW_WIDTH = 500;

function main(){
  init();

  var b = new Bullet(100,100,1,1);
  setInterval(function(){
  b.update();
  ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
  b.draw();
  },30);
}

function init() {
 
  cvs = document.getElementById('cvs');
  ctx = cvs.getContext('2d');
  cvs.height = WINDOW_HEIGHT;
  cvs.width = WINDOW_WIDTH;
  ctx.fillRect(0,0,100,100);
}
