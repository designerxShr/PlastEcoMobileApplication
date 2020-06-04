
//logo image
var logo;
var heading
var wifi;
var battery;
var whatsap;

var capture;


function preload() {
 logo = loadImage('Icons/Logo2.png');
 heading = loadImage('Icons/App2.png');
 wifi = loadImage('Icons/wifi.png');
 battery = loadImage('Icons/battery.png');
 whtsap = loadImage('Icons/whtsap.jpg');
 
}


function setup() {
createCanvas(windowWidth,windowHeight);
background(51);
//createCapture(VIDEO);
// capture.hide();
}

function draw() {
  //mobile body
  fill(80);
  rect(600,15,450,870,45);
  fill(0);
  rect(610,30,430,840,45);
  //speaker
  fill(150);
  rect(790,36,80,05,30);
  //front cam
  fill(50);
  ellipse(920,41,20,20);
  fill(20);
  ellipse(920,41,13,13);
  fill(150);
  ellipse(920,41,5,5);

  //Display screen
  fill(255);
  rect(610,50,430,800,45);
  fill(0,255,170,50);
  rect(610,50,430,800,45);
  
  //screen task bar
  noStroke();
  fill(10);
  rect(610,50,430,60,15);
  image(wifi,885,80,20,20);
  fill(255);
  textSize(15);
  text('40%',910,95);
  image(battery,940,80,20,20);
  text('6:30 PM',970,95);
  image(whtsap,630,80,17,17);
  
  fill(0,200,170);
  rect(610,200,430,350,15); 
  
  //app page Heading
  image(heading, 745,165,210,70);
  image(logo, 670,170,65,55);
  
  //Webcam
  image(capture, 0, 0, width, width * capture.height / capture.width);
  filter(INVERT);
  

  
 

 
  //Iphone Button
  fill(70);
  ellipse(830,820,70,70);
  fill(30);
  ellipse(830,820,60,60);
  
  
}
