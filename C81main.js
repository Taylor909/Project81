var canvas=document.getElementById("cnv");
var ctx=canvas.getContext("2d");
var color="";

canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e){
color=document.getElementById("colorTXT").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;

color="blue";
circle(300,150);
color="black";
circle(400,150);
color="red";
circle(500,150);
color="yellow";
circle(350,200);
color="green";
circle(450,200);
}

function circle(mouse_x,mouse_y){
    ctx.lineWidth=5;
    ctx.strokeStyle=color;
    ctx.beginPath();
    ctx.arc(mouse_x,mouse_y,40,0,180);
    ctx.stroke();
}
function clearCnv(){
    console.log("clearBTN is clicked");
    ctx.clearRect(0,0,canvas.width,canvas.height);
}