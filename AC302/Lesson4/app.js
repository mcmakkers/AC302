var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var live = new Image();
var cubase = new Image();
var fl = new Image();
var logic = new Image();

live.src = "live.png"
cubase.src = "cubase.png"
fl.src = "flstudio.png"
logic.src = "logic.png"

ctx.font = "50px Impact";
ctx.fillStyle = "blue";
ctx.fillText = ("DAWs", 400, 100);

live.onload = function(){
	ctx.drawImage(live, 470, 110, 150, 150)
}

cubase.onload = function(){
	ctx.drawImage(cubase, 200, 200, 150, 150)
}