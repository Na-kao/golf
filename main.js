var canvas= new fabric.Canvas('myCanvas')

ballY=0;
ballX=0;
holeY=400;
holeX=800;

holeW = 5;
holeH = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png",function(Img) {
        Bloco=Img;
        Bloco.scaleToWidth(50);
        Bloco.scaleToHeight(50);
        Bloco.set({
            top:holeY,
            left:holeX
        });
        canvas.add(Bloco);
    } );
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png",function(Img) {
        BlocoB=Img;
        BlocoB.scaleToWidth(50);
        BlocoB.scaleToHeight(50);
        BlocoB.set({
            top:ballY,
            left:ballX
        });
        canvas.add(BlocoB);
    } );

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ballX==holeX)&&(ballY==holeY)){
	canvas.remove(BlocoB);
	document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
	document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}
	function up()
	{
		if (ballY>=0){
            ballY=ballY-holeH;
            canvas.remove(BlocoB);
            newImage();
		}
	}

	function down()
	{
		if (ballY<=450){
            ballY=ballY+holeH;
            canvas.remove(BlocoB);
            newImage();
	}
}

	function left()
	{
		if(ballX >=5)
		{
				ballX=ballX-holeW;
				canvas.remove(BlocoB);
				newImage();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
		        ballX=ballX+holeW;
				canvas.remove(BlocoB);
				newImage();
		}
	}
	


