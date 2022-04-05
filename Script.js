
//PER CODICE COPYRIGHT
  DateX = new Date()
  document.getElementById("CopyRightTextPar").innerHTML = "Copyright M.S. " + DateX.getFullYear() +" ©"
  
 
   const delay = ms => new Promise(res => setTimeout(res, ms));
   async function topFunction() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop =0;
            

   }

//FINE CODICE COPYRIGHT
   

//PER BOX FULMINI

var count = 0;
var arr =[];

// let box_tesla = document.querySelector('#box-tesla');
let cv = document.querySelector("#canvas");
 
// box_tesla.addEventListener("mousemove", CreaFulmini);
cv.addEventListener("mousemove", CreaFulmini);

function CreaFulmini(e){

  count +=1;
  const canvas = document.querySelector('#canvas');
  if (canvas.getContext){

  const ctx = setupCanvas(document.querySelector('#canvas'));
  
  if (count ==1){

    drawLine(ctx,  getCenter(), e, 4 );
  }else if (count>2){
    count =0;
    drawLine(ctx, getCenter(),e, 5 );

  }
  
  }  
  cv = document.getElementById("canvas");
  cv.addEventListener("mouseleave", function pulisci(){ const canvas = document.querySelector('#canvas'); const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);});
}     



 
function drawLine(ctx, begin, e ,width = 1) {
 

  ctx.strokeStyle ='white';
  ctx.shadowColor ='violet';
  ctx.shadowOffsetX=3;
  ctx.shadowOffsetY=2;
  ctx.shadowBlur=15;
  if (width) {
      ctx.lineWidth = width;
  }

  ctx.beginPath();

  ctx.moveTo(...begin);
  
  
  arr.push(GetPosition(e));

 for(var i = 0; i<arr.length; i++){
     
  
 
  ctx.lineTo(...arr[i]); 
 
 
 }

  ctx.stroke();
 
  
}

function Rand(e){ x= e.clientX; y = e.clientY; var dimX = (2*Math.PI*x)/180; var dimY=(2*Math.PI*y*y)/180; return [dimX,dimY]}
function GetPosition(e) {x = e.clientX; y = e.clientY; return[x,y]}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getCenter(){
   
   x = (cv.offsetWidth/2);
  y = (cv.scrollHeight/2);
   return [x,y];
}

function setupCanvas(canvas) {
 
  var dpr = window.devicePixelRatio || 1;
 
  var rect = canvas.getBoundingClientRect();
 
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
 
  ctx.scale(dpr, dpr);
  return ctx;
}
//FINE BOX FULIMINI


// Ricarica al click sulle emojis
function reload(){window.location.reload(true); }

// CAMBIA LE EMOJIS
async function changeEmojis(){

while(true){

  await delay(3000);

  document.getElementById("emojis").innerHTML = "💘";

  await delay(3000);

  document.getElementById("emojis").innerHTML = "↩";
  await delay(3000);

  document.getElementById("emojis").innerHTML = "✨";
  await delay(3000);

  document.getElementById("emojis").innerHTML = "🥰";

  await delay(3000);

  document.getElementById("emojis").innerHTML = "😭";
  await delay(3000);

  document.getElementById("emojis").innerHTML = "🔥";
  await delay(3000);

  document.getElementById("emojis").innerHTML = "🌹";
  await delay(3000);

  document.getElementById("emojis").innerHTML = "😋";
  await delay(3000);

  document.getElementById("emojis").innerHTML = "😇";
  await delay(3000);

  document.getElementById("emojis").innerHTML = "♻";
  await delay(3000);

  document.getElementById("emojis").innerHTML = "👌";

  await delay(3000);

  document.getElementById("emojis").innerHTML = "🙏";
  
}
 

}

changeEmojis()

//FINE CAMBIO EMOJIS

// THE GAME
let _gameCanvas_ = document.querySelector("#TheGame");
_gameCanvas_.addEventListener("mousedown",StartGame);

function StartGame(e){

if (_gameCanvas_.getContext){

  _gameCanvasSetted_ = setupCanvas(document.querySelector('#TheGame'));
  _gameCanvasSetted_.font = "30px Comic Sans MS";
  _gameCanvasSetted_.fillText("🚀",...getCenterLeft())
  
  document.body.onkeydown = function(e){

    switch(e.key){

      case 32: // BARRA SPAZIATRICE



    }


  }

}


}
function getCenterLeft(){
   
  x = (_gameCanvas_.offsetWidth/2);
 y = (_gameCanvas_.scrollHeight/2);
  return [x,y];
}
//FINE THE GAME