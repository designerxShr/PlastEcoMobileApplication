
//logo image
var logo;
var heading
var wifi;
var battery;
var whatsap;


function preload() {
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
  


  
 

 
  //Iphone Button
  fill(70);
  ellipse(830,820,70,70);
  fill(30);
  ellipse(830,820,60,60);
  
  
}
