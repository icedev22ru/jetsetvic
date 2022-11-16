let slide_titles = [
    "Negotiatie the aircraft price and deal's terms and conditions online",
    "You are advised on all necessary actions of parties to effectevely complete the deal. ",
    "Based on approved terms and condition, all legal agreements as well as other documents are automatically drafted for you",
    "Enter into a deal only with confirmed counterparty",
    "Funds transfers in the transaction are securely controlled by smart contracts to assure that all deals covenants are met",
    "The funds are released only completing of all closing obligations by both parties ",
];


let slide_buttons = [
  "Online negotiations",
  "Structured deal flow",
  "Pre-drafted legal agreements",
  "Digital signatures",
  "Escrow smart contracts",
  "Closing"
];

var slide_title = document.getElementsByClassName("slide_title");
var slide_title_phone = document.getElementsByClassName("p_title"); 
var slide_button = document.getElementsByClassName("slide_title_small");

const swiper_lg = new Swiper('.swiper_lg', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.slider_blue',
    }
  });

  swiper_lg.on('slideChange',(index)=>{
    slide_title[0].innerHTML =slide_titles[swiper_lg.activeIndex];
    
  });


  const swiper_mobile = new Swiper('.swiper_smartphone', {
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
  }
  });

  swiper_mobile.on('slideChange',(index)=>{
    slide_button[0].innerHTML = slide_buttons[swiper_mobile.activeIndex];
    slide_title_phone[0].innerHTML =slide_titles[swiper_mobile.activeIndex];
    
  });


/*ITEMS */

var actives = document.getElementsByClassName('smart_button_active'); 

  var item1 = document.getElementById("first_item");
  
  if(item1 != null){
  item1.addEventListener('click', function(){
    console.log(item1);
    console.log("first");
    actives[0].classList.remove('smart_button_active');
    item1.classList.add('smart_button_active');
    swiper_lg.slideTo(0);
  });
}


  var item2 = document.getElementById("second_item");
  if(item2 != null){
  item2.addEventListener('click', function(){
  console.log("second");
  actives[0].classList.remove('smart_button_active');
  item2.classList.add('smart_button_active');
  swiper_lg.slideTo(1);
  });
}

  var item3 = document.getElementById("third_item");
  if(item3 != null){
  item3.addEventListener('click', function(){
  actives[0].classList.remove('smart_button_active');
  item3.classList.add('smart_button_active');
  swiper_lg.slideTo(2);
  });
}


  var item4 = document.getElementById("four_item");
  if(item4 != null){
  item4.addEventListener('click', function(){
  actives[0].classList.remove('smart_button_active');
  item4.classList.add('smart_button_active');
  swiper_lg.slideTo(3);
  });
}


  var item5 = document.getElementById("five_item");
  if(item5 != null){
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
  //var target2 = document.getElementsByClassName('prlx-down-mobile');
  console.log(target);

  if(target.length != 0){
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
      
       target[0].style.opacity = 1.0;
       target[0].setAttribute('transition-style','in:wipe:down');//transition-style="in:wipe:down"  //in:wipe:up
    }
    });
    
   
    
},{threshold:0.7});
  imageObserver.observe(target[0]);
}
  /*PRALAX*/



  /*TABS*/
  const tab_buttons = document.querySelectorAll('.quest_tabs_item');
  const active_buttons = document.getElementsByClassName('active_tab');
  const active_tabs = document.getElementsByClassName('tab_data_active');
  
  tab_buttons.forEach(function(item){
    item.addEventListener('click',function(){
      
      let cur_btn = item;
      let tabid = cur_btn.getAttribute('data-tab');
      let cur_tab = document.querySelector(tabid);

      active_buttons[0].classList.remove('active_tab');
      cur_btn.classList.add('active_tab');

      active_tabs[0].classList.remove('tab_data_active');
      cur_tab.classList.add('tab_data_active');

    });
  });

 
  /*TABS*/

 /*AOS*/
 AOS.init();
 /*AOS*/