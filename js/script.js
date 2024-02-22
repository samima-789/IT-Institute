// ----- SEARCHBAR & ACCOUNT ----- //
let btnsearch = document.querySelector("#search")
//let btnsearch2 = document.querySelector("search1")
let searchbar = document.querySelector(".search-bar")
let close = document.querySelector("#close")


btnsearch.addEventListener("click",function(){
    searchbar.classList.toggle("show_searchbar")
})

// btnsearch2.addEventListener("click",function(){
//   searchbar.classList.toggle("show_searchbar")
// })

close.addEventListener("click",function(){
    searchbar.classList.toggle("show_searchbar")
})


let btn_form =document.querySelector("#btn_form")
//let btn_form2 =document.querySelector("#btn_form2")
let form =document.querySelector(".form")
let close_form =document.querySelector("#close_form")

btn_form.addEventListener("click",function(){
    form.classList.toggle("show_form")
})
// btn_form2.addEventListener("click",function(){
//   form.classList.toggle("show_form")
// })
close_form.addEventListener("click",function(){
    form.classList.toggle("show_form")
})


let menu = document.querySelector("ul")
let bars = document.querySelector(".fa-bars-staggered")

bars.addEventListener("click",function(){
  menu.classList.toggle("show_menu")
})

// ----- HERO ---- //
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

        $(".counter").counterUp({
             delay: 10,
             time: 1200
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


// ----- ISOTOP ----- //
var $grid = $('.items').isotope({   
});
$('.menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.menu').on( 'click', 'li', function() {
  $(this).activeClass('active').siblings.removeClass('active');
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

