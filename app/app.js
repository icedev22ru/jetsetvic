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



/*ITEMS */

var actives = document.getElementsByClassName('smart_button_active'); 

  var item1 = document.getElementById("first_item");
  if(item6 != null){
  item1.addEventListener('click', function(){
    console.log("first");
    actives[0].classList.remove('smart_button_active');
    item1.classList.add('smart_button_active');
    swiper_lg.slideTo(0);
  });
}


  var item2 = document.getElementById("second_item");
  if(item6 != null){
  item2.addEventListener('click', function(){
  console.log("second");
  actives[0].classList.remove('smart_button_active');
  item2.classList.add('smart_button_active');
  swiper_lg.slideTo(1);
  });
}

  var item3 = document.getElementById("third_item");
  if(item6 != null){
  item3.addEventListener('click', function(){
  actives[0].classList.remove('smart_button_active');
  item3.classList.add('smart_button_active');
  swiper_lg.slideTo(2);
  });
}


  var item4 = document.getElementById("four_item");
  if(item6 != null){
  item4.addEventListener('click', function(){
  actives[0].classList.remove('smart_button_active');
  item4.classList.add('smart_button_active');
  swiper_lg.slideTo(3);
  });
}


  var item5 = document.getElementById("five_item");
  if(item6 != null){
  item5.addEventListener('click', function(){
  actives[0].classList.remove('smart_button_active');
  item5.classList.add('smart_button_active');
  swiper_lg.slideTo(4);
  });
}


  var item6 = document.getElementById("six_item");
  if(item6 != null){
    item6.addEventListener('click', function(){
      actives[0].classList.remove('smart_button_active');
      item6.classList.add('smart_button_active');
      swiper_lg.slideTo(5);
      });
  }
 


  /*ITEMS */

  
  /*MENU*/
  var humb = document.getElementById("humb");
  var humb_menu = document.getElementsByClassName('humb_menu');

  humb.addEventListener('click', function(){
    if(humb_menu[0].style.display == 'block'){
      humb_menu[0].style.display = 'none';
    }else{
      humb_menu[0].style.display = 'block';
    }
    
  });
  /*MENU*/


  /*PRALAX*/
  var target = document.getElementsByClassName('prlx-down');
  var target2 = document.getElementsByClassName('prlx-down-mobile');
  
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
       target[0].style.opacity = 1.0;
       target[0].setAttribute('transition-style','in:wipe:down');//transition-style="in:wipe:down"  //in:wipe:up
    }
    });
   
    
},{threshold:0.7});
    imageObserver.observe(target[0]);

  /*PRALAX*/