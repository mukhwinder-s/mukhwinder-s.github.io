



$(window).scroll(function(){
    var sticky = $('.name'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  
  $(window).scroll(function(){
    var sticky = $('nav'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  
  $(window).scroll(function(){
    var precSticky = $('.name'),
    scroll = $(window).scrollTop();

    if(scroll >=900) precSticky.removeClass('fixed');
    
    var sticky = $('#AboutMe'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 900) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    

 
  });



  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#content_page').fadeOut();
    }
    else {
      $('#content_page').fadeIn();
    }
  });
