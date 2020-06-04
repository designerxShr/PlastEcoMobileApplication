
//logo image
var logo;
var heading
var wifi;
var battery;
var whatsap;
var red;
var nomicro;



function preload() {
 logo = loadImage('Icons/Logo2.png');
 heading = loadImage('Icons/App2.png');
 wifi = loadImage('Icons/wifi.png');
 battery = loadImage('Icons/battery.png');
 whtsap = loadImage('Icons/whtsap.jpg');
 red = loadImage('Icons/red1.png');
 nomicro = loadImage('Icons/nomicrowave.png');
 
}


function setup() {
createCanvas(windowWidth,windowHeight);
background(0);

}

function draw() {
  //mobile body
  stroke(0);
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
  fill(255,0,0,100);
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
  
  fill(200,0,0);
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
  text('03 PVC - Polyvinylchloride',720,350);
  var x = 'Minimize use of PVC plastic around food.';
  text(x,720,370,250,100);
  image(nomicro, 680,440,100,80);
  text('Do not microwave your food with this food wrap',785,450,200,100);
  fill(200,0,0);
  rect(780,570,100,30,20);
  fill(255);
  text('REPORT',790,590)
  

  
  
  
  

  

  
 

 
  //Iphone Button
  fill(70);
  ellipse(830,820,70,70);
  fill(30);
  ellipse(830,820,60,60);
  
  
}
