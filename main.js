function preload(){
    img= loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd, modelLoaded")
    document.getElementById("status").innerHTML ="status:dectingobjects"
}
function modelLoaded(){
    console.log("Model loaded")
    status = true;
    objectDetector.detect(img, gotResults);
}
