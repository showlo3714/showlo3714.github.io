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

//scrollspy
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  // console.log(scrollTop);
  if (scrollTop > 800 ) {
      $("#menutea").addClass("hello");
  } else{
      $("#menutea").removeClass("hello");
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


      // 甜品hover圖片同時放大
    
   
       $(".swet").hover(
         function(){
         $(this).find('.swimg').addClass("actives")
         $(this).find('.reads').css("bottom",10)
         $('.reads').before(rowline)
        // $(this).$( ".reads" ).before( $( "rowline" ) )
        },
        function(){
          $(this).find('.swimg').removeClass("actives")
          $(this).find('.reads').css("bottom",0)
        }
        )

    // function ee(obj) {
    //   obj.innerHTML = $(".swimg").addClass(".active");
    // }
    
    // function ww(obj) {
    //   obj.innerHTML = $(".swimg").removeClass(".active");
    // }








  