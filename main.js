song="";
song1="";
function setup(){
    video=createCapture(VIDEO);
    video.hide();

    canvas=createCanvas(600,500);
    canvas.center();
}
function preload(){
    song=loadSound("despacito.mp3");
    song1=loadSound("hartypotter.mp3");
}
function draw(){
    image(video,0,0,600,500)
}
