x = 0;
y = 0;
screen_width = 0;
screen_height = 0;

var apple = "";
var speak_data = "";
var to_number = "";



function loadIamge(){
  background_image = "apple.png";
  apple = "apple.png";
}

function recognition.onresult(){
  to_number = Number(content);
  if(Number.isInteger(to_number));
  draw_apple == "set";

  else 
  status = "The speech has not recognized a number"
}


function setup(){
  screen_width = innerWidth;
  screen_height = innerHeight;
  createCanvas(screen_width,screen_height-150);
  canvas.position(100,120);
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
 
  for( var i = 1; 1<=to_number; i++){
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple,x,y,50,50);
    
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
