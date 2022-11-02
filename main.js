function setup(){
    canvas=createCanvas(550,500);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}

function modelLoaded(){
    console.log("Pose Net model loaded");
}

function draw(){
background("white");

}

function getPoses(results){
    if(results.length>0){
        console.log(results);
        
    }
}