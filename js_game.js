function gameChar(name,xPos,health){
    this.name=name;
    this.xPos=xPos;
    this.health=health;
    this.move = function(x){
        this.xPos += x;
    }
    this.class="Human"
}

var gc1 = new gameChar("lol", 4, 120)
gc1.move(2)
console.log(gc1.xPos)

var gc2 = new gameChar("pols", 1, 234)
console.log(gc2.name+" "+gc2.class)