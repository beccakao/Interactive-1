var capture;
var value1=0;
var value2=255;

function setup() {
	createCanvas(displayWidth,displayHeight);
	capture = createCapture(VIDEO);
  	capture.hide();
  	imageMode(CENTER);
}

function draw() {
	frameRate(4);
	image(capture, 0, 0, 1000, 1000);

//Start S
//top horizontal
	for(var i = 0; i<200; i+=8){
		fill(value1);
		noStroke();
		ellipse(100+i*1.25,100,45,45);
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
		ellipse(100,107+i,60,60);
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
		ellipse(100+i,235,60,60);
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
		ellipse(340,237+i,60,60);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}
	}

//bottom horizontal
	for(var i = 0; i<262; i+=12){
		fill(value2);
		noStroke();
		ellipse(85+i,385,65,65);
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
		fill(value1);
		noStroke();
		ellipse(420+i*1.25,100,45,45);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}	
	}

//left vertical
	for(var i = 0; i<300; i+=9){
		fill(value1);
		noStroke();
		ellipse(573,107+i,60,60);
			if(value1 == 0){
				value1 =255;
			} else {
				value1=0;
			}
	}
}