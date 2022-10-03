noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup(){
 
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){

    console.log("poseNet is inisalized!");

}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " +noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor (leftwristX - rightwristX);

        console.log("left wrist X = " +leftwristX + " right wrist X = " + rightwristX + " difference = " + difference );
        


    }
}

function draw(){

    background('#6034b2');
    document.getElementById("square_side").innerHTML = "width and height of the square will be = "  + difference + "px";
    fill('black');
    stroke('black');
    square(noseX,noseY,difference);

}