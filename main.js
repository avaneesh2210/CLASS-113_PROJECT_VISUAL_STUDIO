function preload(){

}
function setup(){
canvas = createCanvas(640, 480);
canvas.position (110, 250);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video, 60, 40, 500, 400);
    
    fill(255, 0, 0);
    stroke(255, 0 , 0);
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);

    rect(60, 60, 20, 370);

    rect(560, 60, 20, 370);

    fill(255, 0, 0);
    stroke(255, 0 , 0);
    circle(70, 50, 60);

    circle(560, 50, 60);

    circle(560, 420, 60);

    circle(70, 420, 60);
}
function take_snapshot(){
save('avaneesh.png');
}