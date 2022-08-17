$(document).ready(function(){
    $("#btn").click(function(){
        $("#navItems").show().animate({right: '0px'},"slow");
    }); 

    $("#times").click(function(){
        $("#navItems").hide().fadeOut(3000);
    }); 

    $("#dropdown").click(function(){
        $("#dropContent").slideToggle();
    }); 

    $("#dropdownDeep").click(function(){
        $("#dropContentDeep").slideToggle();
    }); 
    $(function () {
        $(document).scroll(function () {
          var $nav = $("#navbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
    //Scroll variables
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    //Scroll Position detection function
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        
        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);
            
          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
          } else {
            $element.removeClass('in-view');
          }
        });
      }

    //Scroll Event
    $window.on('scroll', check_if_in_view);
    $window.trigger('scroll');
    
      //Client Animation Function
    $('.clients').each(function () {
      var $this = $(this);
      //Start Counter From 0 to client inner text
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });

    
    //progress Animation
    $(function () {

      let progress = $(".progress-bar");
    
      progress.eq(0).animate({width:"100%"}, 800)
    
      progress.eq(1).animate({width:"90%"}, 900)
    
      progress.eq(2).animate({width:"75%"}, 1000)
    
      progress.eq(3).animate({width:"55%"}, 1100)
    });
    

    //Tetstimonials Slider
    var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true
    });
 
    
  })

//Email validation
const btn = document.getElementById('subBtn');

//Form Validation
btn.addEventListener("click", inputValidation);
function inputValidation(){
    event.preventDefault();
    let input = document.getElementById("mail").value;
    let fname = document.getElementById("fname").value;
  
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    //validate Email And Name
    if(input.match(validRegex)  && fname.length >= 2){
        alert('Thanks for Your Message');
    }else if(input.match(validRegex) && fname.length < 2){
        alert('Please Enter Your Name');
    }
    else{ 
     alert('Please Enter A Valid Email');
    } 
};