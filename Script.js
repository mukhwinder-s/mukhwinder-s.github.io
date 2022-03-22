
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
var arrrand= [];
// let box_tesla = document.querySelector('#box-tesla');
let cv = document.querySelector("#canvas");
 
// box_tesla.addEventListener("mousemove", CreaFulmini);
cv.addEventListener("mousemove", CreaFulmini);

function CreaFulmini(e){

  count +=1;
  const canvas = document.querySelector('#canvas');
  if (canvas.getContext){

  console.log(count);
  const ctx = setupCanvas(document.querySelector('#canvas'));
  
  if (count ==1){
    drawLine(ctx,  getCenter(), e, 2 );
  }else if (count>2){
    count =0;
    drawLine(ctx, getCenter(),e, 5 );

  }


  
  }  
  cv = document.getElementById("canvas");
  cv.addEventListener("mouseleave", function pulisci(){ const canvas = document.querySelector('#canvas'); const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height); context.clear();});
}     



 
function drawLine(ctx, begin, e ,width = 1) {
 

  ctx.strokeStyle ='white';
  ctx.shadowColor ='blue';
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

function Rand(e){ x= e.clientX; y = e.clientY; var dimX = Math.sqrt(x+y); var dimY= Math.sqrt(x*y ); return [dimX,dimY]}
function GetPosition(e) {x = e.clientX; y = e.clientY; return[x,y]}
 
function getCenter(){
   
   x = (cv.offsetWidth/2);
  y = (cv.scrollHeight/2);
  console.log(x,y)
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