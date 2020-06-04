
//logo image
var logo;
var heading
var wifi;
var battery;
var whatsap;
var red;
var pvc;


function preload() {

 logo = loadImage('Icons/Logo2.png');
 heading = loadImage('Icons/App2.png');
 wifi = loadImage('Icons/wifi.png');
 battery = loadImage('Icons/battery.png');
 red = loadImage('Icons/red.png');
 whtsap = loadImage('Icons/whtsap.jpg');
 pvc = loadImage('Icons/pvc.png');


}


function setup() {
createCanvas(windowWidth,windowHeight);
background(0);
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
  image(heading, 750,135,210,70);
  image(logo, 680,138,65,55);
  fill(255);
  textSize(20);
  text('Product Id',780,255);
  stroke(255);
  noFill();
  rect(770,270,110,20);
  noStroke();
  
  fill(255);
  textSize(18);
  text('2453567',787,287);
  image(red, 700,240,65,55);
  text('03 PVC - Polyvinylchloride',710,340);
  text('Formula:',700,380);
  image(pvc,700,360,255,200);
  
  //commentbox
  fill(0,200,170);
  text('Comment:',680,580);
  stroke(100,0,0,100);
  noFill();
  rect(690,585,300,150,20);
  
  
  //reportbutton
  fill(200,0,0);
  rect(780,750,100,30,20);
  fill(255);
  text('REPORT',790,770)


 
  //Iphone Button
  fill(70);
  ellipse(830,820,70,70);
  fill(30);
  ellipse(830,820,60,60);
  
  
}
