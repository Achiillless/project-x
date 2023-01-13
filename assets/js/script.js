$(document).ready(function(){
    $('.phone').mask('+38(000)-000-00-00');
    $('select').niceSelect();
})

$(document).ready(function(){

  $('.single-item').slick();
    
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

$(document).ready(() => {
    $("body").removeClass("load");

    $('.first-screen-slider').slick({
        dots: true,
        autoplay: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }]
    });

    $('.delivery-slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                variableWidth: true,
              }
            },
          ]
      });
    
    mobileOnlySlider(".ability-slider", true, false, 991);
    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        var slider = $($slidername);
        var settings = {
            mobileFirst: true,
            dots: $dots,
            arrows: $arrows,
            responsive: [{
                breakpoint: $breakpoint,
                settings: "unslick"
               
            }]
        };

        slider.slick(settings);

        $(window).on("resize", function () {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    } 
    $('.delivery-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});