$(function(){

    $("#arrow").click(function (){
      $('html, body').animate({
        scrollTop: $("#container-1").offset().top}, 1000);
      $('#arrow').fadeOut('slow');
      
    });
    
});

