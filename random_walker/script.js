const pi2 = Math.PI * 2;

let centerX = width / 2;
let centerY = height / 2;

let outColor = "#FF1111";
let inColor = "#11FF11";

let w = new Walker(centerX, centerY, 3);
let cp = new CircularPath(centerX, centerY, 150, 200);




function drawSquareLimit() {
    ctx.save();
    ctx.strokeStyle = "#F00";
    ctx.lineWidth = 1;
    ctx.strokeRect(600, 250, 150, 135);
    ctx.restore();
}


function drawCircularLimits() {
    ctx.save();
    ctx.strokeStyle = "#F00";
    ctx.fillStyle = "#FFFFFF99";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 150, 0, pi2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = "#360";
    ctx.fillStyle = "#333";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 100, 0, pi2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}


function draw() {
    //w.walkInSquare(100, 40, 100, 100);
    // this loop accelrate the walk
    for(let i = 0; i < 20; i++) {
        w.walkInCircularPath(cp);
        if(w.isOnCircularPath(cp)) {
            ctx.fillStyle = inColor;
        } else {
            ctx.fillStyle = outColor;
        }
        w.display(ctx);
    }

    window.requestAnimationFrame(draw);
}

//drawSquareLimit();
//drawCircularLimits();

ctx.save();
ctx.strokeStyle = "#FFF";
cp.display(ctx);
ctx.restore();


window.requestAnimationFrame(draw);


window.onclick = function(event) {
    window.alert(event.clientX+", "+event.clientY);
}
