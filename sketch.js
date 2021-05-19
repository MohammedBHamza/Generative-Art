// clmtrackr + p5 smile detection example. Face Tracking example created by Kyle McDonald revised by Xin Xin, 2020
// https://kylemcdonald.github.io/cv-examples/

let capture;
let tracker
let positions;

let x
let y

function setup() {

  // load p5 functions:
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', ''); // this line makes your program works on iPhone 11

  capture.size(width, height);
  capture.hide();

  // load clmtrackr functions:
  tracker = new clm.tracker(); // create a new clmtrackr object
  tracker.init(); // initialize the object
  tracker.start(capture.elt); // start tracking the video element capture.elt
}

function draw() {
  image(capture, 0, 0, width, height);
  positions = tracker.getCurrentPosition(); // updates the tracker with current positions


  

  beginShape();
  for (let i = 0; i < positions.length; i++) {
    vertex(positions[i][0], positions[i][1]);
  }
  endShape();

  // draw dots + numbers
  noStroke();
  for (let i = 0; i < positions.length; i++) {
    fill(random(0,255), random(0,255), random(0,255));
    
  }
  
    if (positions.length > 0) {
      let mouthLeft = createVector(positions[44][0], positions[44][1]);
      let mouthRight = createVector(positions[50][0], positions[50][1]);
      let smile = mouthLeft.dist(mouthRight);
      print(smile);
      
      
      if (smile > 90.00000000000000) {
        rect(110, 0, 30, 20);
        rect(110, 50, 30, 20);
        rect(10, 150, 70, 10);
        rect(50, 100, 230, 120);
        rect(510, 0, 30, 20);
        rect(510, 450, 50, 50);
  console.log('Lach');
        
        x=mouseX
        y=mouseY
        rect(x, y, smile * 3, 20);
        
        
        
        
}
      else {
  console.log('Geen lach');

        textSize(72);
text('SMILE!', 110, 530);
        
}
}
}