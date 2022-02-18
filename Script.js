

  DateX = new Date()
  document.getElementById("CopyRightTextPar").innerHTML = "Copyright M.S. " + DateX.getFullYear() +" ©"
  
   var mybutton = document.getElementById("btnScrollUp");
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           mybutton.style.display = "block";
       } else {
           mybutton.style.display = "none";
       }
   }
   const delay = ms => new Promise(res => setTimeout(res, ms));
   async function topFunction() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop =0;
            
   }