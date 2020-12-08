var last_x_position, last_y_position;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="red";
width_of_line=2;

screen_width = screen.width;

var new_width = screen.width - 300;
var new_height = screen.height - 300;

if (992 < screen_width) {
    document.getElementById('myCanvas').width=new_width;
    document.getElementById('myCanvas').height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("my_TouchStart");
    last_x_position = e.touches[0].clientX - canvas.offsetLeft;
    last_y_position = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e) {
    console.log("my_TouchMove");

    current_x_position = e.touches[0].clientX - canvas.offsetLeft;
    current_y_position = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("Old position of axis X and Y - ");
    console.log("X - ", last_x_position, "Y - ", last_y_position);
    ctx.moveTo(last_x_position,last_y_position);

    console.log("New position of axis X and Y - ");
    console.log("X - ", current_x_position, "Y - ", current_y_position);
    ctx.lineTo(current_x_position, current_y_position);

    ctx.stroke();

    last_y_position = current_y_position;
    last_x_position = current_x_position;
}