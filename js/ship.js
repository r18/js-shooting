function Ship() {
 
}

Ship.prototype = {
  x:0,
  y:0,
  vx:0,
  vy:0,
  update:function () {
    this.x += this.vx;
    this.y += this.vy;
  },
  draw:function () {
   ctx.beginPath();
   ctx.moveTo(this.x,this.y);
   ctx.lineTo(this.x+10,this.y+30);
   ctx.lineTo(this.x-10,this.y+30);
   ctx.closePath();
   ctx.fill();
  }
}
