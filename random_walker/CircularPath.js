class CircularPath {
    centerX;
    centerY;
    minRadius;
    maxRadius;
    TWO_PI = Math.PI * 2;
    angle = this.TWO_PI / 360;

    constructor(centerX, centerY, minRadius, maxRadius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.minRadius = minRadius;
        this.maxRadius = maxRadius;
    }
}

// check if (x,y) are below the inner limit by comparing the norm of the vector
// ( with origin at center of the circularPath and end at point (x,y) passed in args )
// and the minRadius
CircularPath.prototype.innerContains = function(x, y) {
    let x_ = x - this.centerX;
    let y_ = y - this.centerY;
    let norm = Math.sqrt(Math.pow(x_, 2) + Math.pow(y_, 2));
    return norm >= this.minRadius;

}

// check if (x,y) are beyond the outer limit by comparing the norm of the vector
// ( with origin at center of the circularPath and end at point (x,y) passed in args )
// and the maxRadius
CircularPath.prototype.outerContains = function(x, y) {
    let x_ = x - this.centerX;
    let y_ = y - this.centerY;
    let norm = Math.sqrt(Math.pow(x_, 2) + Math.pow(y_, 2));
    return norm <= this.maxRadius;
}

CircularPath.prototype.display = function(ctx) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.minRadius, 0, this.TWO_PI);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.maxRadius, 0, this.TWO_PI);
    ctx.closePath();
    ctx.stroke();
}
