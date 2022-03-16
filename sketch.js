let zombies =[];
function setup() {
  createCanvas(400, 400);
  mover = new Mover(width/2, height/2)
  
  for (let i=0;i<200 ; i++){
    zombies.push(new Mover());
  }
}



function draw() {
  background(0);
  for (i=0;i<zombies.length;i++){
    zombies[i].gerakCuy();
    zombies[i].tampil();
    zombies[i].cekBatas(); 
  }
} //ini fungsi draw


class Mover {
  constructor(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.panjanglebar = random (5,15);
  }
  
  tampil(){
    stroke(0,255,255)
    fill(random(0,255),random(0,255),random(0,255));
    rect(this.location.x,
            this.location.y, 
            this.panjanglebar, 
            this.panjanglebar);
  }
  
  gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = random (0,50);
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}