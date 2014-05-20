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
  vy:0,
  ax:0,
  ay:0,
  m:1,
  r:10,
  targetTag:"",
  update:function () {
     this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx; 
    this.y += this.vy; 

  },
  draw:function () {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
  }
}
