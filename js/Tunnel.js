class Tunnel {
    constructor(x,y, health,outcome,prize,monster,whichM){
        this.body = createSprite(x,y,20,20);
        this.health = health;
        this.outcome = outcome;
        this.prize = prize;
        this.monster = monster;
        this.whichM = whichM;
        this.image = B1Img
        this.hits = 0;
        this.body.addImage(this.image);
        this.body.scale= 0.5;

        tunnelGroup.add(this.body);
     
    }

changeImages (){

    this.body.addImage(this.image);
        
    if(pc.body.isTouching(this.body)){
        console.log("Health in tunnel.js: "+this.health)
    }

    switch(this.health){
        case 1: switch(this.hits){
                    case 0: break;
                    case 1: switch(this.outcome){
                                case "fail":this.image = B4Img;
                                            break;
                                case "success": switch (this.prize){
                                                    case "gold":this.image = B5Img;
                                                                break;
                                                    case "silver":this.image = B2Img;
                                                                break;
                                                }
                                    }
                    switch (this.monster){
                        case 1 : monster1 = new Monster(560,632);
                                 break;
                        case 2 : monster1 = new Monster(560,632);
                                 break; 
                        case 3 : monster1 = new Monster(560,632);
                                 break;
                        case 4 : monster1 = new Monster(560,632);
                                 break;
                        case 5 : monster1 = new Monster(560,632);
                                 break;
                        case 6 : monster1 = new Monster(560,632);
                                 break;       
                    }
                }
           
                break;
        case 2: switch(this.hits){
                case 0: break;
                case 1: switch(this.outcome){
                            case "fail": this.image = B4Img;
                                    break;
                            case "success": switch (this.prize){
                                                case "gold":this.image = B5Img;
                                                            break;
                                                case "silver":this.image = B2Img;
                                                              break;
                                        }

                    }
                    break;
                    
        switch (this.monster){
            case 1 : monster1 = new Monster(560,632);
                    break;
            case 2 : monster1 = new Monster(560,632);
                    break; 
            case 3 : monster1 = new Monster(560,632);
                    break;
            case 4 : monster1 = new Monster(560,632);
                    break;
            case 5 : monster1 = new Monster(560,632);
                    break;
            case 6 : monster1 = new Monster(560,632);
                    break;       
        }
        
        break;
    }

    break;

    } 

               
       
        if((keyWentDown("h")||keyWentDown("H"))&& pc.body.isTouching(this.body)){
            //this.health--;
            this.hits++;
        }
       
       /*  if(this.health=== 0){
            if(this.outcome === "fail"){
                this.image = B4Img;
            }
            else{
                if(this.prize === "gold")
                    this.image = B5Img;
                else
                    this.image = B2Img;
  
            }

            if(this.monster === "yes"){
                monster1 = new Monster(560,632);
            }

        } */


        /* if(this.health === 3){
            if()
            //this.body.addImage(B6Img);
        } */
    }
    
}    