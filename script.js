// var c = document.querySelector('#c');
// var ctx = c.getContext("2d")

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


function textChangeListener (evt) {
	var id = evt.target.id;
	var text = evt.target.value;
	if (id == "topLineText") {
		window.topLineText = text;
	} else {
		window.bottomLineText = text;
	}
	redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
}
    
function redrawMeme(image, topLine, bottomLine) {
	// Get Canvas2DContext
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext("2d");
	if (image != null)
		ctx.drawImage(image, 0,0,canvas.width, canvas.height);
	// Style size and font 
	ctx.font = "30pt Impact";
	// center it
	ctx.textAlign = "center";
	// set the outline to black
	ctx.strokeStyle = "black";
	ctx.lineWidth =3;
	// inside of lettering white
	ctx.fillStyle = "white";


	if(topLine != null){
		ctx.fillText(topLine, canvas.width/2, 40);
		ctx.strokeText(topLine, canvas.width/2, 40);
	}
	if (bottomLine != null) {
		ctx.fillText(bottomLine, canvas.width/2, canvas.height -20);
		ctx.strokeText(bottomLine, canvas.width/2, canvas.height -20);
	}
	
}
    
function saveFile() {
	window.open(document.querySelector('canvas').toDataURL());
}
    
function handleFileSelect(evt) {
	var canvasWidth = 500;
	var canvasHeight = 500;
	var file = evt.target.files[0];

	var reader = new FileReader();
	reader.onload = function(fileObject) {
		var data = fileObject.target.result;
		
		// Create an image object
		var image = new Image();
		image.onload = function() {
  			window.imageSrc = this;
  			redrawMeme(window.imageSrc, null, null);
		}
	// Set image data to background image.
	image.src = data;
	console.log(fileObject.target.result);
	};
	reader.readAsDataURL(file)
}
    
window.topLineText = "";
window.bottomLineText = "";
var input1 = document.getElementById('topLineText');
var input2 = document.getElementById('bottomLineText');
input1.oninput = textChangeListener;
input2.oninput = textChangeListener;
document.getElementById('file').addEventListener('change', handleFileSelect, false);
document.querySelector('button').addEventListener('click', saveFile, false)