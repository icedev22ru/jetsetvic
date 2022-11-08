let slide_titles = [
    "Slide",
    "Transparency",
    "Online communication",
    "Compliance with law",
    "Step-by-step process",
    "Cost and time saving",
];

var slide_title = document.getElementsByClassName("slide_title_small");


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next_slide',
      prevEl: '.pre_slide',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  swiper.on('slideChange',(index)=>{
    slide_title[0].innerHTML = slide_titles[swiper.activeIndex];
    console.log(slide_titles[swiper.activeIndex] + "|"+swiper.activeIndex);
  });



  const swiper_lg = new Swiper('.swiper_lg', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,   
    centeredSlides: true,
  
    pagination:{
      el:'.slider_blue',
    }
  });



  /*ITEMS */

var actives = document.getElementsByClassName('smart_button_active'); 

  var item1 = document.getElementById("first_item");
  
  item1.addEventListener('click', function(){
    console.log("first");
    actives[0].classList.remove('smart_button_active');
    item1.classList.add('smart_button_active');
    swiper_lg.slideTo(0);
  });


  var item2 = document.getElementById("second_item");
  
  item2.addEventListener('click', function(){
  console.log("second");
  actives[0].classList.remove('smart_button_active');
  item2.classList.add('smart_button_active');
  swiper_lg.slideTo(1);
  });

  var item3 = document.getElementById("third_item");
  
  item3.addEventListener('click', function(){
  actives[0].classList.remove('smart_button_active');
  item3.classList.add('smart_button_active');
  swiper_lg.slideTo(2);
  });


  var item4 = document.getElementById("four_item");
  
  item4.addEventListener('click', function(){
  actives[0].classList.remove('smart_button_active');
  item4.classList.add('smart_button_active');
  swiper_lg.slideTo(3);
  });


  var item5 = document.getElementById("five_item");
  
  item5.addEventListener('click', function(){
  actives[0].classList.remove('smart_button_active');
  item5.classList.add('smart_button_active');
  swiper_lg.slideTo(4);
  });


  /*ITEMS */

  