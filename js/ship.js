function Ship() {
  this.bullets = new BulletArray();

}

Ship.prototype = {
  x:0,
  y:0,
  vx:0,
  vy:0,
  shot:false,
  nshot:false,
  update:function () {
    if(this.x < -10)this.x = 0;
    if(this. x > WINDOW_WIDTH+10)this.x= WINDOW_WIDTH;
    if(this.y < -10)this.y = 0;
    if(this. y > WINDOW_HEIGHT+10)this.y =  WINDOW_HEIGHT;
    this.x += this.vx;
    this.y += this.vy;
    this.bullets.update();
    if(this.shot && FRAME % 10 == 0)this.bullets.list.push(new MineBullet(this.x,this.y,0,-3));
    if(this.nshot && FRAME % 30 == 0)this.n_way_shot(15);
  },
  n_way_shot:function (n) {
    n++;
    for(var i=0;i<n;++i){
      var theta = Math.PI*2*i/n*1.0;
      this.bullets.list.push(new MineBullet(
            this.x,this.y,Math.cos(theta)*4,-Math.sin(theta)*4));
    }
  },
  draw:function () {
    ctx.beginPath();
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x+10,this.y+30);
    ctx.lineTo(this.x-10,this.y+30);
    ctx.closePath();
    ctx.fill();

    this.bullets.draw();
  }
}
