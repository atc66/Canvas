var c = document.querySelector('#c');
var ctx = c.getContext("2d")

// Need to declare the stroke style before drawing the stroke
// ctx.strokeStyle = "#33CC33";
// ctx.strokeRect(50,50,100,100);

// ctx.beginPath();
// ctx.moveTo(75,75);
// ctx.lineTo(125,75);
// ctx.lineTo(125,125);
// ctx.lineTo(75,75);
// ctx.fill();

// // setting the color of the triangle
// ctx.fillStyle = "blue";
// ctx.fill();
// 50 is the bottom left hand corner of the H,
// ctx.strokeText("Hello World!", 50, 10);
// Style size and font 
ctx.font = "36pt Impact";
// center it
ctx.textAlign = "center";

// inside of lettering white
ctx.fillStyle = "white";
ctx.fillText("CANVAS MEMES!", c.width/2, 40);

// set the outline to black
ctx.strokeStyle = "black";
ctx.lineWidth =3;
ctx.strokeText("CANVAS MEMES!", c.width/2, 40);


