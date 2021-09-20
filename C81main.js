var mouseevent = "empty";
var lpox; 
var lpoy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
WidthOfLine = 3;
canvas.addEventListener("mousedown", mousmedown);

function mousmedown(e)
{
    WidthOfLine = document.getElementById("WidthOfLine").value;
    color = document.getElementById("asdfg").value;
    console.log(color, WidthOfLine);
    mouseevent = "mouseDown";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseevent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = WidthOfLine; 
        console.log("Current position of mouse x and y");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        console.log("Last position of x and y coordinates");
        console.log("x = " + lpox, "y = " + lpoy);
        ctx.moveTo(lpox, lpoy);
        ctx.stroke();
    }
    lpox = current_position_of_mouse_x;
    lpoy = current_position_of_mouse_y;
}

canvas.addEventListener("mouseleave", mouseLeave);
function mouseLeave(e) 
{
   mouseevent = "mouseleave";
}

canvas.addEventListener("mouseUp", mouseup);
function mouseup(e) 
{
   mouseevent = "mouseUp";
}


function qwertyuiopasdfghjklasdfghjklzxcvbnm()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}