// ----- SCROLL TO TOP ----- //
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#scrollTopBtn').fadeIn();
    } else {
      $('#scrollTopBtn').fadeOut();
    }
  });

  $('#scrollTopBtn').click(function(){
    $('html, body').animate({scrollTop : 0},500);
    return false;
  });
});

// ----- HEADER ----- //
let btnsearch = document.querySelector("#search")
let btnsearch1 = document.querySelector("#search1")
let searchbar = document.querySelector(".search-bar")
let close_search = document.querySelector("#close")



btnsearch.addEventListener("click",function(){
    searchbar.classList.toggle("show_searchbar")
})
btnsearch1.addEventListener("click",function(){
  searchbar.classList.toggle("show_searchbar")
})
close_search.addEventListener("click",function(){
    searchbar.classList.toggle("show_searchbar")
})


let btn_form =document.querySelector("#btn_form")
let btn_form2 =document.querySelector("#btn_form2")
let form =document.querySelector(".form")
let close_form =document.querySelector("#close_form")

btn_form.addEventListener("click",function(){
    form.classList.toggle("show_form")
})

btn_form2.addEventListener("click",function(){
  form.classList.toggle("show_form")
})


close_form.addEventListener("click",function(){
    form.classList.toggle("show_form")
})


let menu = document.querySelector("ul")
let bars = document.querySelector(".fa-bars-staggered")
bars.addEventListener("click",function(){
  menu.classList.toggle("show_menu")
})




// ----- HERO ---- //
/*----- HERO BACKGROUND SLIDER -----*/
$(document).ready(function(){
    const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");
        var swiper = new Swiper(".mySwiper", {
          spaceBetween: 50,
          centeredSlides: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          on: {
            autoplayTimeLeft(s, time, progress) {
              progressCircle.style.setProperty("--progress", 1 - progress);
              progressContent.textContent = `${Math.ceil(time / 1500)}s`;
            }
          }
        });
    var swiper = new Swiper('.swiper', {
        spaceBetween: 50,
          centeredSlides: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  });


// ----- GALLERY ISOTOP ----- //
$(document).ready(function(){
var $grid = $('.items').isotope({   
});
$('.menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.menu').on( 'click', 'li', function() {
  $(this).activeClass('active').siblings.removeClass('active');
});
});



// ----- REVIEW ----- //
  $(document).ready(function(){
  $('.slider-item').slick({
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});
});



/*----- COUNTER UP -----*/
$(document).ready(function(){
  $(".counter").counterUp({
      delay: 10,
      time: 1200
  });
});

 /*--================ ABOUT PAGE ====================---*/
 let goal = document.querySelector('.goal');
menu.onclick = () =>{
	goal.classList.toggle('active');
 }

 window.onscroll = () =>{
 	goal.classList.remove('active');
 }

 /*--================ FAQ PAGE ====================--*/
 //--------- faq SECTION ---------//
$(document).ready(function(){
  $('.faq-ansr').hide();
  $('#faq1').click(function(){
    $('#faq-ansr1').slideToggle('slow');
  });
  $('#faq2').click(function(){
    $('#faq-ansr2').slideToggle('slow');
  });
  $('#faq3').click(function(){
    $('#faq-ansr3').slideToggle('slow');
  });
  $('#faq4').click(function(){
    $('#faq-ansr4').slideToggle('slow');
  });
  $('#faq5').click(function(){
    $('#faq-ansr5').slideToggle('slow');
  });
})





