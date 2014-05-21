function Bullet(x,y,vx,vy){
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.ax = 0;
  this.ay = 0;
}

Bullet.prototype = {
  penetrable:false,
  x:0,
  y:0,
  vx:0,
  vy:
  ax:0,
  ay:0,
  m:1,
  r:10,
  targetTag:"",
  lifeTime:10,
  update:function () {
   if(this.lifeTime > -1){
    this.x += this.vx; 
    this.y += this.vy; 
    if(this.x < -10 || this.x > WINDOW_WIDTH || this.y < -10 || this.y > WINDOW_HEIGHT) this.lifeTime = 0;
    }
   return this.lifeTime;
  },
  check:function () {

  },
  draw:function () {
    if(this.lifeTime > -1){
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
      ctx.closePath();
      ctx.fill();
    }
  }
}

function BulletArray() {
 
}

BulletArray.prototype = {
  list : [],
  draw:function () {
   for(i in this.list){
      this.list[i].draw();
   }
  },
  update:function () {
   var cnt = 0;
   for(i in this.list){
      cnt += this.list[i].update();
   }
   if(cnt == 0)this.list = [];
  }
}
