// НА ЧИСТОМ JS

let header__burger = document.querySelector('.icon__menu');
let header_menu = document.querySelector('.menu__body');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu__list');
header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}
header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}


// Применение класса "ibg"

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }
 }
}
    
ibg();


// function ibg(){

//  $.each($('.ibg'), function(index, val) {
//  if($(this).find('img').length>0){
//  $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
//   }
//  });
//   }
 
//   ibg();



// ПРИМЕНЕНИЕ СЛАЙДЕРА

if($('.slider__body').length>0) {
    $('.slider__body').slick({
        dots:true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    })
}