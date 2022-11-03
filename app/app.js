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