class Digger {
    constructor(){
        this.body = createSprite(50,45,50,50);
        this.body.shapeColor = "yellow";
        this.body.addImage(digger);
        this.body.scale = 0.15;
    }

    move (){
            if(keyDown(RIGHT_ARROW)){
                this.body.x += 5;
            }

            else if(keyDown(LEFT_ARROW)){
                this.body.x -= 5;
            }

           else if(keyDown(UP_ARROW)){
                this.body.y -= 5;
            }

           else if(keyDown(DOWN_ARROW)){
                this.body.y += 5;
            }

            this.body.collide(edges);
    }  

    hit (){
        
       if(keyWentDown("space") && this.body.isTouching(monster1.body)){
           monster1.health--;
       }

       
/*     if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block1.body)){
           block1.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block2.body)){
             block2.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block3.body)){
        block3.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block4.body)){
        block4.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block5.body)){
        block5.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block6.body)){
        block6.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block7.body)){
        block7.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block8.body)){
        block8.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block9.body)){
        block9.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block10.body)){
        block10.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block11.body)){
        block11.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block12.body)){
        block12.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block13.body)){
        block13.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block14.body)){
        block14.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block15.body)){
        block15.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block16.body)){
        block16.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block17.body)){
        block17.hits--;
    }  
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block18.body)){
        block18.hits--;
    }   
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block19.body)){
        block19.hits--;
    }   
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block20.body)){
        block20.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block21.body)){
        block21.hits--;
    }   
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block22.body)){
        block22.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block23.body)){
        block23.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block24.body)){
        block24.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block25.body)){
        block25.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block26.body)){
        block26.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block27.body)){
        block27.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block28.body)){
        block28.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block29.body)){
        block29.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block30.body)){
        block30.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block31.body)){
        block31.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block32.body)){
        block32.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block33.body)){
        block33.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block34.body)){
        block34.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block35.body)){
        block35.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block36.body)){
        block36.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block37.body)){
        block37.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block38.body)){
        block38.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block39.body)){
        block39.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block40.body)){
        block40.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block41.body)){
        block41.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block42.body)){
        block42.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block43.body)){
        block43.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block44.body)){
        block44.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block45.body)){
        block45.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block46.body)){
        block46.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block47.body)){
        block47.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block48.body)){
        block48.hits--;
    }
    if((keyWentDown("h")||keyWentDown("H"))&& this.body.isTouching(block49.body)){
        block49.hits--;
    }      
 */       
    }
}

//health of monster will decrease 