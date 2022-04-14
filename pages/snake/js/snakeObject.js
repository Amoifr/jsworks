

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.length = 1;
    this.tail = [];

    this.changeDirection = function(xOffset, yOffset){
        this.xSpeed = xOffset * scale;
        this.ySpeed = yOffset * scale;
    }

    this.update = function() {
        if(this.length === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.length - 1] = createVector(this.x, this.y);

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.x = constrain(this.x, 0, canvasSize - scale);
        this.y = constrain(this.y, 0, canvasSize - scale);
    }

    this.eatFood = function(food) {
        const distance = dist(this.x, this.y, food.x, food.y);
        if(distance < scale) {
            this.length++;
            return true;
        }
        return false;
    }

    this.die= function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            if( this.tail[i].x === this.x && this.tail[i].y === this.y) {
                return true;
            }
        }
        return false;
    }

    this.show = function() {
        fill(175);
        for (let i=0; i<this.length-1; i++) {
            rect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        fill(250);

        rect(this.x, this.y, scale, scale);
    }
}