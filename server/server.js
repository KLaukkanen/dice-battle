const faces=require('./faces.js')

class playerDice{
    /* allDice=[];   
     deck=[];
     hand=[];
     table=[];*/
     constructor(deck){
         this.allDice=shuffleArray(deck);
         this.deck=this.allDice.slice(0,12);
         this.hand=this.allDice.slice(12,18);
         this.table=this.allDice.slice(18,24);
     }
     printAll(){
         console.log(this.deck);
         console.log(this.hand);
         console.log(this.table);
     }
     getHand(){
         this.hand.forEach((die)=>{
             console.log(die,die());
         })
     }


}
class Die{
    constructor(faces){
        this.faces=faces;
    }
    roll(){
        let rnd=Math.random()*6;
        return this.faces[rnd];
    }
}
/*class FireDie{
    constructor(){
        this.die=new Die
    }
}*/
function FireDie(){
    const fireFaces=[faces.EMPTY,
        faces.HOLD_1_ATTACK,
        faces.DEFEND_1,
        faces.ATTACK_1,
        faces.ATTACK_1,
        faces.ATTACK_2]
    return fireFaces[dieRoll()];
}
function AirDie(){
    const airFaces=[faces.ADD_DIE,
        faces.QUICKNESS,
        faces.CANCEL,
        faces.REROLL,
        faces.SWITCH,
        faces.REPLICATE]
    return airFaces[dieRoll()];
}
function WaterDie(){
    const waterFaces=[faces.DEFEND_1,
        faces.QUICKNESS,
        faces.ATTACK_1,
        faces.CANCEL_FIRE,
        faces.SWITCH,
        faces.HOLD_1]
    return waterFaces[dieRoll()];
}
function EarthDie(){
    const fireFaces=[faces.HOLD_1,
        faces.HOLD_1,
        faces.DEFEND_1,
        faces.ATTACK_1,
        faces.DEFEND_1,
        faces.ATTACK_2]
    return fireFaces[dieRoll()];
}
function dieRoll(){
    return Math.floor(Math.random()*6)
}

function shuffleArray(array){
    for(let i=0;i<array.length;i++){
        let rnd=Math.floor(Math.random()*array.length);
        let newValue=array[rnd];
        array[rnd]=array[i];
        array[i]=newValue;
    }
    return array;
}
let a=[WaterDie,FireDie,EarthDie,AirDie]
let newArr=[];
for(i=0;i<6;i++){
    newArr=newArr.concat(a);
}
new playerDice(newArr).getHand();

//console.log(faces);