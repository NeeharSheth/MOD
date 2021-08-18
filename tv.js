img=[];
status= false;
objects= [];
img_count= 0;
image1= "";

function preload(){
    img[0]=loadImage("tv.jpeg");
    img[1]=loadImage("trash.jpeg");
    img[2]=loadImage("chair.jpeg");
    img[3]=loadImage("bed.jpeg");
    img[4]=loadImage("books.jpeg");
    image1= loadImage("tv.jpeg");
}

function setup(){
    canvas= createCanvas(480,400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_span").innerHTML="Detecting Objects";
}

function draw(){
    img_count= localStorage.getItem("image_count");
    image(img[img_count],0,0,480,400);
    if(status !=""){
        for(i=0;i<objects.length;i++){
            fill(random(255),random(255),random(255));
            stroke(random(255),random(255),random(255));
            document.getElementById("status_span").innerHTML="Objects Detected";
        percent= floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+20,objects[i].y+20);
        noFill()
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        if(objects.length>1){
            document.getElementById("objects_span").innerHTML="There is 1 object here. BUT COCOSSD IS SEEING "+objects.length+" FRIGGIN OBJECTS."
        }
    }}
}

function modelLoaded(){
    console.log("model Loaded")
    stauts=true; 
    objectDetector.detect(img[img_count],gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        objects= results;
    }
}

function back(){
    window.location="index.html"
}