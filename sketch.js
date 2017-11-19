var mic;
 var myButtonStart;

var amp;
var volstoria=[];

var campitura= 'white';

function iniziareg(){
    mic.start();
}



function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    mic = new p5.AudioIn();
    //mic.start();   
   
    myButtonStart=createButton("Play");
    
    myButtonStart.size(100,20);
    myButtonStart.mousePressed(iniziareg);
    
    amp=new p5.Amplitude();
    amp.setInput(mic);
    
    
    
    
}

function draw() {
    background(240);
    
    noStroke();
    fill('black');
    textFont('Raleway');
    textSize(24);
    textAlign(CENTER);
    text("Press any key to change color", width/2,height-50); 
    text("Press 'Play' and try to sing!", width/2,50);
     myButtonStart.position(width/2-50,60);
    
    var myVol =mic.getLevel();
    volstoria.push(myVol);
    
    push();
        translate(width/2,height/2);
        beginShape();
            for (var i =0; i<360; i++) {
                var x=r*cos(i);
                var y =r*sin(i);
                var r= map(volstoria[i],0,1,height/10, width);
                noFill();
                stroke(0,0,0);
                strokeWeight(2);

                vertex(x,y);

            }
        endShape();
    
    pop();
    
    if (volstoria.length>360){
        volstoria.splice(0,1);
    }
    //var mycattura= image(myVideo,0,0);
    //fill(mycattura);
    var area= map(myVol,0,1,height/10,height/4);
    ellipse(width/2,height/2,area);
    //image(myVideo,0,0,);
   /* beginShape();
        for (var i =0; i<volstoria.length; i++) {
            noFill();
            stroke(255,0,0);
            strokeWeight(2);
        
            var y= map(volstoria[i],0,1,height/2, 0);
            vertex(i,y);
        
        }
    endShape();
    
    if (volstoria.length>width-30){
        volstoria.splice(0,1);
    }*/
    
    fill(0);
    //ellipse(width/2,height/2,width, myVol*200);
    //console.log(amp);
    
    if(keyIsPressed) {  //keyIsPressed is a new variable
      
       fill(campitura);
        background(campitura);
    }
    
    
}

function keyReleased(){
   campitura=color(random(255),random(255),random(255),100);
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}


