let penguin;
let mobilenet;


function modelReady(){
  mobilenet.predict(cat, gotResults);
}

function gotResults(error, results){
  if(error){
    console.error(error);
  }else {
    console.log(results);
    let label = results[0].className;
    let prob = results[0].probability;
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
    createP(label);
    createP(prob);
  }
}


function imageReady(){
  console.log('Modelo pronto!');
  image(cat, 0, 0, width, height);
}
function setup() {
  createCanvas(640, 480);
  cat = createImg('cat.jpg', imageReady);
  cat.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
  cat.elt.crossOrigin = "Anonymous";
}