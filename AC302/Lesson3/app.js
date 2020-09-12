var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");

ctx.beginPath();
ctx.arc(150,150,120,0,6.28)
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx1.beginPath();
ctx1.strokeStyle = "red";
ctx1.moveTo(150,25);
ctx1.lineTo(225,150);
ctx1.lineTo(150,275);
ctx1.lineTo(75,150);
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "red";
ctx1.fill();

ctx2.beginPath();
ctx2.strokeStyle = "grey";
ctx2.moveTo(150,50);
ctx2.lineTo(200,200);
ctx2.arc(150,200,50,0,3.14)
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "silver";
ctx2.fill();