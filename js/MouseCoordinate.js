/* This is a lightweight library to display the x and y coordinates of
your mouse pointer. To be used with the following libraries : 


p5.dom.min.js
p5.js
p5.play.js
p5.sound.min.js

(Actually p5.play.js & p5.sound.min.js may be excluded, but the other two are vital
for this library to work) . 


*/


class MouseCoordinate {
    constructor(x1,y1,x2,y2,size,color) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.size = size;
        this.color = color;
    }

    displayValues() {
        fill(this.color);
        textSize(this.size);
        
        text("x : "+mouseX, this.x1,this.y1);
        text("y : "+mouseX, this.x2,this.y2);
    }
    
}