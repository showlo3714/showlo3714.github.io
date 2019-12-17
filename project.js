//  首頁輪播 
var swiper = new Swiper('.banner-swiper', {
  // spaceBetween: 30,
  // centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});
//  首頁輪播 

$(window).scroll(function () {

  var scrollTop = $(window).scrollTop();
  // console.log(scrollTop);
  if (scrollTop > 1000 ) {
      $(".topbtn").addClass("active");
  } else{
      $(".topbtn").removeClass("active");
  }


});






//2-2
var swiper = new Swiper('.content-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
});
  //2-2
    //3-1
    var swiper = new Swiper('.content3-swiper', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
      //3-1
      // $('#myModal').modal(options)