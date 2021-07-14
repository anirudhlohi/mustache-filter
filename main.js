nose_x = 0;
nose_y = 0;
function preload(){
  filter = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function draw(){
   image(video,0,0,300,300);
   image(filter,nose_x,nose_y,50,50);
}
function take_snapshot(){
    save("photo.jpeg");
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(result){
    if (result.length > 0){
        console.log(result);
        nose_x = result[0].pose.nose.x-210;
        nose_y = result[0].pose.nose.y-140;

    }
    
}