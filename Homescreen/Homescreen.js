
//lockscreen Image
var lockscreen;
var logo;
var phone;
var map;
var music;
var wifi;
var battery;
var whatsap;

function preload() {
 lockscreen = loadImage('Icons/2144.jpg');
 logo = loadImage('Icons/Logo2.png');
 contact = loadImage('Icons/iphon-call.png');
 music = loadImage('Icons/itunes.png');
 map = loadImage('Icons/map.png');
 
 wifi = loadImage('Icons/wifi.png');
 battery = loadImage('Icons/battery.png');
 whtsap = loadImage('Icons/whtsap.jpg');
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
  fill(40);
  rect(790,36,80,05,30);
  //front cam
  fill(30);
  ellipse(920,40,20,20);
  fill(20);
  ellipse(920,41,13,13);
  fill(150);
  ellipse(920,41,5,5);
  
  
  
  //Display screen
  fill(15);
  rect(610,50,430,800,45);
  //tint(0, 200, 204, 126);
  image(lockscreen, 618,50,430,800,45);
  fill(0,0,0,90);
  rect(610,50,430,800,45);
  noTint();
  image(contact, 650, 700, 70, 70);
  fill(255);
  textSize(15);
  text('Phone',665,780);
  image(logo, 750, 700, 60, 60);
  text('PlastEco',750,780);
  image(music, 850, 695, 80, 80);
  text('Music',865,780);
  image(map, 950, 690, 90, 90);
  text('Map',970,780);
  
  
  
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
  

  //Iphone Button
  fill(70);
  ellipse(830,820,70,70);
  fill(30);
  ellipse(830,820,60,60);
  
  
}
