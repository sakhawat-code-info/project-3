$(document).ready(function(){

	// menu fixed function
	$(window).scroll(function(){
		if($(this).scrollTop() > 40)
		{
			$('#menu').addClass("fixed");
		}else{
			$('#menu').removeClass("fixed");
		}
	});


  // scroll top function

  $("#s_top").click(function(){
    $("html,body").animate({scrollTop:0},1000);
  });



// wow js

new WOW().init();


	// about_us_content_Read_more

  	$("#b1").click(function(){
  		if($(this).html()=="Read More"){
  			$(this).html("^");
  			$(".about_us_hide").slideDown();
  		}else{
  				$(this).html("Read More");
  				$(".about_us_hide").slideUp();
  			}

  	});

  	// about us slick
    // $('.your-class').slick({
                
    //          }); 

  	$('.slick_class').slick({
  	  dots: true,
  	  centerPadding: '60px',
  	  slidesToShow: 3,
  	  responsive: [
  	    {
  	      breakpoint: 768,
  	      settings: {
  	        arrows: false,
  	        centerMode: true,
  	        centerPadding: '40px',
  	        slidesToShow: 3
  	      }
  	    },
  	    {
  	      breakpoint: 480,
  	      settings: {
  	        arrows: false,
  	        centerMode: true,
  	        centerPadding: '40px',
  	        slidesToShow: 1
  	      }
  	    }
  	  ]
  	});




// about us read More
  $("#masrafi").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("Close");
      $(".p_info_mas").slideDown();
      $(".p_info_mesi").slideUp();
      $(".p_info_amirat").slideUp();
      $(".p_info_bangladesh").slideUp();
    }else{
        $(this).html("Read More");
        $(".p_info_mas").slideUp();
      }

  });

  $("#messi").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("Close");
      $(".p_info_mesi").slideDown();
      $(".p_info_mas").slideUp();
      $(".p_info_amirat").slideUp();
      $(".p_info_bangladesh").slideUp();
    }else{
        $(this).html("Read More");
        $(".p_info_mesi").slideUp();
      }

  });
  $("#amirat").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("Close");
      $(".p_info_amirat").slideDown();
      $(".p_info_mas").slideUp();
      $(".p_info_mesi").slideUp();
      $(".p_info_bangladesh").slideUp();
    }else{
        $(this).html("Read More");
        $(".p_info_amirat").slideUp();
      }
  });

  $("#bangladesh").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("Close");
      $(".p_info_bangladesh").slideDown();
      $(".p_info_mas").slideUp();
      $(".p_info_amirat").slideUp();
      $(".p_info_mesi").slideUp();
    }else{
        $(this).html("Read More");
        $(".p_info_bangladesh").slideUp();
      }

  });

// about contner up 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
      });

// bloge js
$("#bloge_1").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("^");
      $(".bloge_hide_1").slideDown();
    }else{
        $(this).html("Read More");
        $(".bloge_hide_1").slideUp();
      }

  });
$("#bloge_2").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("^");
      $(".bloge_hide_2").slideDown();
    }else{
        $(this).html("Read More");
        $(".bloge_hide_2").slideUp();
      }

  });
$("#bloge_3").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("^");
      $(".bloge_hide_3").slideDown();
    }else{
        $(this).html("Read More");
        $(".bloge_hide_3").slideUp();
      }

  });
$("#bloge_4").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("^");
      $(".bloge_hide_4").slideDown();
    }else{
        $(this).html("Read More");
        $(".bloge_hide_4").slideUp();
      }

  });
$("#bloge_5").click(function(){
    if($(this).html()=="Read More"){
      $(this).html("^");
      $(".bloge_hide_5").slideDown();
    }else{
        $(this).html("Read More");
        $(".bloge_hide_5").slideUp();
      }

  });



$("#box").click(function(){
        $(".animition_form").toggle();
    });


// alert("help");

    

 





});
