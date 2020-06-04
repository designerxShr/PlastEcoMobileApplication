//lockscreen Image
var wallpaper;

//notification bar
var wifi;
var battery;
var whatsap;

//App Icons
var logo;
var phone;
var map;
var music;

//AppTitle
var heading;

//PlasticProducts
var red;
var green;
var nomicro;

//report
var pvc;

//thank you
var tick;

//boolean variables
var islockScreen = true;
var ishomeScreen = false;
var isappScreen= false;
var isscanProductScreen= false;
var isproduct1Screen= false;
var isproduct2Screen= false;
var isreportScreen= false;
var isthankyouScreen= false;
var isaboutusScreen= false; 

function preload() {
 //lockScreen
 wallpaper = loadImage('Icons/wallpaper.jpg');
 
 //AppIcons
 logo = loadImage('Icons/Logo2.png');
 contact = loadImage('Icons/iphon-call.png');
 music = loadImage('Icons/itunes.png');
 map = loadImage('Icons/map.png');
 
 //Notification bar
 wifi = loadImage('Icons/wifi.png');
 battery = loadImage('Icons/battery.png');
 whtsap = loadImage('Icons/whtsap.jpg');
 
 //AppTitle
  heading = loadImage('Icons/App2.png');
  
 //PlastiProduct
 red = loadImage('Icons/red1.png');
  green = loadImage('Icons/green1.png');
 nomicro = loadImage('Icons/nomicrowave.png');
 
 //report
  pvc = loadImage('Icons/pvc.png');
  
  //Thank you
  tick = loadImage('Icons/tick.png');

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
  
  //wallpaper
  fill(15);
  rect(610,50,430,800,45);
  //tint(0, 200, 204, 126);
  image(wallpaper, 618,50,430,800,45);
  
  
  
  //Display screen
  if(islockScreen){
    lockScreen();
  }
  else if(ishomeScreen){
    homeScreen();
  }else if(isappScreen){
    appScreen();
  }else if(isscanProductScreen){
    scanProductScreen();
  }else if(isproduct1Screen){
    product1Screen();
  }else if(isproduct2Screen){
    product2Screen();
  }else if(isreportScreen){
    reportScreen();
  }else if(isthankyouScreen){
    thankyouScreen();
  }else if(isaboutusScreen){
    aboutusScreen();
  }
  

  //Iphone Button
  fill(70);
  ellipse(830,820,70,70);
  fill(30);
  ellipse(830,820,60,60);
  
  
}

////====== When the user clicks the mouse===================================//
function mousePressed() {
  // click to unlock phone
  var d = dist(mouseX, mouseY, 840, 900);
  if (d < 100) {
    islockScreen = false;
    ishomeScreen = true;
  }
  
  // click on app icon
  var d1 = dist(mouseX, mouseY, 750, 710);
  if (ishomeScreen && d1 < 100) {
    ishomeScreen = false;
    isappScreen = true;
  }
  
  // click to scan product
  var d2 = dist(mouseX, mouseY, 760, 300);
  if (isappScreen && d2 < 100) {
    isappScreen = false;
    isscanProductScreen = true;
    
  }
  
  var d3 = dist(mouseX, mouseY,815,270);
  if (isscanProductScreen && d3 < 100) {
  isscanProductScreen = false;
  isproduct1Screen = true;
  }
  
  var d4 = dist(mouseX, mouseY,795,600);
  if (isproduct1Screen && d4 < 100) {
   //print("click report button");
  isproduct1Screen = false;
  isreportScreen = true;
  }
  
  var d5 = dist(mouseX, mouseY,790,770);
  if (isreportScreen && d5 < 100) {
   //print("click report button");
  isreportScreen = false;
  isthankyouScreen = true;
  }
  
  
  
  
  
}







//all screens
function lockScreen(){
  fill(15);
  rect(610,50,430,800,45);
  image(wallpaper, 618,50,430,800,45);
  textSize(72);
  fill(255);
  text('6:30PM',710,210);
  fill(255);
  textSize(32);
  text('Press to Unlock',710,760);
}

function homeScreen(){
  
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
  
  //notification bar
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
}

function appScreen(){
  fill(255,255,255,150);
  rect(610,50,430,800,45);
  fill(0,200,170,200);
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
  
  //notification bar
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
}

function scanProductScreen(){
  fill(255,255,255,150);
  rect(610,50,430,800,45);
   //app page Heading
  image(heading, 745,165,210,70);
  image(logo, 670,170,65,55);
  
  //notification bar
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
  
  fill(0,150,0);
  rect(780,250,100,30,20);
  fill(255);
  text('Scan',815,270)
}

function product1Screen(){
fill(255,255,255,150);
rect(610,50,430,800,45);
   fill(200,0,0,150);
  rect(610,200,430,350,15); 
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
  
  //notification bar
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
}
function product2Screen(){
  fill(255,255,255,150);
  rect(610,50,430,800,45);
  fill(0,150,0);
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
  image(green, 700,240,65,55);
  text('04 LDPE - Low-density polythylene',690,350);
  textSize(22);
  text('This Plastic is considered SAFE',680,400);
  fill(0,150,0);
  rect(780,570,100,30,20);
  fill(255);
  text('OK',810,590)
  
  //notification bar
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
  
}
function reportScreen(){
  fill(255,255,255,150);
  rect(610,50,430,800,45);
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
  stroke(0,200,170);
  noFill();
  rect(690,585,300,150,20);
  
  
  //reportbutton
  fill(200,0,0);
  rect(780,750,100,30,20);
  fill(255);
  text('REPORT',790,770);
  
  //notification bar
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
  

}

function thankyouScreen(){
  fill(255,255,255,150);
  rect(610,50,430,800,45);
   fill(0,200,170);
  rect(610,200,430,350,15); 
  
  //Thank you
  textSize(42);
  fill(255);
  text('Thank You',720,300);
  textSize(18);
  text('for taking first step to save earth..',700,330);
  image(tick,770,350,100,100);
  text('Enjoy Shopping',750,480);
  
   //notification bar
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
  
}

function aboutusScreen(){
  fill(255,255,255,150);
  rect(610,50,430,800,45);
  fill(0,200,170);
  rect(610,200,430,350,15); 
  
  //app page Heading
  image(heading, 745,165,210,70);
  image(logo, 670,170,65,55);
  
  //Aboutus
  textSize(25);
  fill(255);
  text('ABOUT US', 760,280);
  textSize(15);
  var s = 'On a daily basis whenever we consume any product we leave a significant amount of plastic footprint. Let’s say we buy some packed lunch, but along with the lunch you get plastic cutlery, some cling wraps, soda bottle and some more plastic used for packaging the food. The best way to reduce this ill effect is wisely choose products you are using. The best way out is to use recyclable plastic or better, use compostable products. Compostable product has many advantages over plastic, it is made up of plant-based raw materials which is renewable and harmless to the environment. As end users, it would be great if we would know about the plastic foot print ';
  text(s, 650, 300, 355, 270); // Text wraps within text box
  fill(0,200,170);
  text('we will leave while consuming a product.',650,565);
  
  //Data policy
  textSize(22);
  text('Data Policy', 650, 600); 
  textSize(15);
  var d ='In our policy we collect the content and product details you provide. we store and share the content with environment friendly oranization. This can include information in or about the content you provide (like metadata), such as the location of a photo or the date a file was created. It can also include what you see through features we provide, such as our camera. Our systems automatically process content and communications you and others provide to analyze context and whats in them for the purposes described below. Learn more about how you can control who can see the things you share.';
  text(d, 650, 610, 355, 240); 
  
}
