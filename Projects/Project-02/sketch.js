var capture;
var value1=0;
var value2=255;

function setup() {
	createCanvas(displayWidth,displayHeight);
	capture = createCapture(VIDEO);
  	capture.size(640,480);
  	//1024x780
 	 capture.hide();
}

function draw() {
	background(255);
	frameRate(4);
	image(capture, width/7, 0, 1024, 780);

//Start S
//top horizontal
	for(var i = 0; i<200; i+=8){
		fill(value1);
		noStroke();
		ellipse(250+i*1.25,40,45,45);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}	
	}

//left vertical
	for(var i = 0; i<120; i+=9){
		fill(value1);
		noStroke();
		ellipse(250,47+i,60,60);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}
	}

//middle horizontal
	for(var i = 0; i<250; i+=12){
		fill(value2);
		noStroke();
		ellipse(250+i,175,60,60);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}	
	}

//right vertical
	for(var i = 0; i<140; i+=9){
		fill(value1);
		noStroke();
		ellipse(490,177+i,60,60);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}
	}

//bottom horizontal
	for(var i = 0; i<240; i+=12){
		fill(value2);
		noStroke();
		ellipse(250+i*1.04,325,65,65);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}	
	}
//End S

//Start T
//horizontal
	for(var i = 0; i<244; i+=9){
		fill(value2);
		noStroke();
		ellipse(570+i*1.25,40,45,45);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}	
	}

//left vertical
	for(var i = 0; i<300; i+=9){
		fill(value1);
		noStroke();
		ellipse(723,47+i,60,60);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}
	}
//End T

//Start R
//top horizontal
	for(var i = 0; i<190; i+=9){
		fill(value1);
		noStroke();
		ellipse(950+i*1.25,40,45,45);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}	
	}

//bottom horizontal
	for(var i = 0; i<190; i+=9){
		fill(value1);
		noStroke();
		ellipse(950+i*1.25,166,55,55);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}	
	}

//left vertical
	for(var i = 0; i<300; i+=9){
		fill(value2);
		noStroke();
		ellipse(950,47+i*.98,60,60);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}
	}

//right vertical
	for(var i = 0; i<120; i+=9){
		fill(value1);
		noStroke();
		ellipse(1187,47+i,60,60);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}
	}

//diagonal
	for(var i = 0; i<230; i+=9){
		fill(value2);
		noStroke();
		ellipse(960+i,166+i*.77,60,60);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}
	}
//End R

//Start I
//top horizontal
	for(var i = 0; i<244; i+=9){
		fill(value1);
		noStroke();
		ellipse(240+i*1.038,400,45,45);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}	
	}

//vertical
	for(var i = 0; i<300; i+=9){
		fill(value1);
		noStroke();
		ellipse(370,407+i,60,60);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}
	}

//bottom horizontal
	for(var i = 0; i<250; i+=9){
		fill(value2);
		noStroke();
		ellipse(250+i,702,65,65);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}	
	}
//End I

//Start K
//left vertical
	for(var i = 0; i<300; i+=9){
		fill(value2);
		noStroke();
		ellipse(600,407+i,60,60);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}
	}

//top diagonal
	for(var i = 0; i<118; i+=5){
		fill(value1);
		noStroke();
		ellipse(610+i*2,526+i*-1.05,60,60);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}
	}

//bottom diagonal
	for(var i = 0; i<230; i+=9){
		fill(value2);
		noStroke();
		ellipse(610+i,526+i*.79,60,60);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}
	}
//End K

//Start E
//left vertical
	for(var i = 0; i<300; i+=9){
		fill(value2);
		noStroke();
		ellipse(950,407+i,60,60);
			if(value2 == 0){
				value2 =255;
			} else {
				value2=0;
			}
	}

//top horizontal
	for(var i = 0; i<190; i+=9){
		fill(value1);
		noStroke();
		ellipse(950+i*1.25,400,45,45);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}	
	}

//middle horizontal
	for(var i = 0; i<190; i+=9){
		fill(value1);
		noStroke();
		ellipse(950+i*1.25,526,55,55);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}	
	}

//bottom horizontal
	for(var i = 0; i<190; i+=9){
		fill(value1);
		noStroke();
		ellipse(950+i*1.25,707,55,55);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}	
	}
//End E
}
