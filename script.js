var c = document.querySelector('#c');
var ctx = c.getContext("2d")

ctx.strokeRect(50,50,100,100);

ctx.beginPath();
ctx.moveTo(75,75);
ctx.lineTo(125,75);
ctx.lineTo(125,125);
ctx.lineTo(75,75);
ctx.fill();

ctx.fillStyle = "blue";
ctx.fill();

