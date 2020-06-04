
//logo image
var lockscreen;
var logo;
var heading;
var wifi;
var battery;
var whatsap;


function preload() {
 lockscreen = loadImage('Icons/wallpaper.jpg');
 logo = loadImage('Icons/Logo2.png');
 heading = loadImage('Icons/App2.png');
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
    image(lockscreen, 618,50,430,800,45);

  //fill(0);
  //rect(610,30,430,840,45);
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
  
  fill(255,255,255,200);
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
  
  
  fill(0,200,170,70);
  rect(610,200,430,350,15); 
  //app page Heading
  image(heading, 710,145,210,70);
  image(logo, 750,270,135,120);
  textSize(25);
  fill(255);
  text('Scan plastic product', 710,430);
  textSize(15);
  text('Scan details of product or barcode', 710,455);
  fill(50);
  textSize(20);
  
  //Aboutus
  text('ABOUT US', 770,540);
  textSize(15);
  var s = 'On a daily basis we visit grocery stores, Wal-mart, restaurants, etc. Whenever we consume any product we leave a significant amount of plastic footprint. Let’s say we buy some packed lunch, but along with the lunch you get plastic cutlery, some cling wraps, soda bottle and some more plastic used for packaging the food.';
  text(s, 650, 580, 350, 100); // Text wraps within text box
  //read more button
  stroke(10);
  noFill();
  noStroke();
  fill(0,200,170);
  text('Read more..',785,700);
  
 

 
  //Iphone Button
  fill(70);
  ellipse(830,820,70,70);
  fill(30);
  ellipse(830,820,60,60);
  
  
}
