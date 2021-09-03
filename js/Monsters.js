class Monster {
    constructor(x,y,health){
        this.body = createSprite(x,y,20,20);
      
        this.health = health;
    }

   move (){
       //this.body.bounceOff(wallGroup);
   } 
}