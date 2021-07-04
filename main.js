var canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";

function add_player (){
    fabric.Image.fromURL("player.png", function (Img){
       player_object = Img;
       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
       player_object.set(
           {
          top:player_y,
          left:player_x
           }
       );
canvas.add(player_object);


    });
}

function add_block(block_image){
    fabric.Image.fromURL(block_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set ({
            top:player_y,
            left:player_x
        });
    canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80')
    {
        console.log ("p and shift pressed together");
        block_width = block_width + 10 ; 
        block_height = block_height + 10 ;
        document.getElementById ("current_width").innerHTML = block_width;  
        document.getElementById ("current_height").innerHTML = block_height; 
     }
     if  (e.shiftKey && keyPressed == '77')
     {
         console.log ("m and shift pressed together");
         block_width = block_width - 10 ;
         block_height = block_height - 10;
         document.getElementById ("current_width").innerHTML = block_width;
         document.getElementById ("current_height").innerHTML = block_height; 
     }
     if (keyPressed == '37')
     {left();
        console.log ("left");
    }

    if (keyPressed == '38')
     {up();
        console.log ("up");   
    }
    if (keyPressed == '39')
    {right();
       console.log ("right");
   }
   if (keyPressed == '40')
     {down();
        console.log ("down");
    }

    if (keyPressed == '71'){
        add_block('ground.png');
        console.log("G");
    }
    if (keyPressed == '87'){
        add_block('wall.jpg');
        console.log("W");
    }

    if (keyPressed == '76'){
        add_block('light_green.png');
        console.log("L");
    }
    if (keyPressed == '84'){
        add_block('trunk.jpg');
        console.log("T");
    }
    if (keyPressed == '82'){
        add_block('roof.jpg');
        console.log("R");
    }
    if (keyPressed == '68'){
        add_block('dark_green.png');
        console.log("D");
    }
    if (keyPressed == '89'){
        add_block('yellow_wall.png');
        console.log("Y");
    }
    if (keyPressed == '85'){
        add_block('unique.png');
        console.log("U");
    }
    



    }
    function up(){
        if (player_y > 0){
            player_y = player_y - block_height;
            console.log ("Block image height = "+ block_height);
            console.log ("When up arrow is pressed, X = "+ player_x + ", Y ="+ player_y );
            canvas.remove (player_object);
            add_player();

        }
    }
    function down(){
        if (player_y < 460){
            player_y = player_y + block_height;
            console.log ("Block image height = "+ block_height);
            console.log ("When down arrow is pressed, X = "+ player_x + ", Y ="+ player_y );
            canvas.remove (player_object);
            add_player();

        }
    }
    function left(){
        if (player_x > 0){
            player_x = player_x - block_width;
            console.log ("Block image width = "+ block_width);
            console.log ("When left arrow is pressed, X = "+ player_x + ", Y ="+ player_y );
            canvas.remove (player_object);
            add_player();

        }
    }
    function right(){
        if (player_x < 850){
            player_x = player_x + block_width;
            console.log ("Block image width = "+ block_width);
            console.log ("When right arrow is pressed, X = "+ player_x + ", Y ="+ player_y );
            canvas.remove (player_object);
            add_player();

        }
    }
