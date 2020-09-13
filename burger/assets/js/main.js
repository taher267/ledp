
//popup Video system 02
$(document).ready(function() {
  // $('#youtubeVid').magnificPopup({
  // 	type:'iframe',
//iframe Start=================================

//   	iframe: {

//   patterns: {
//     youtube: {
//       index: 'youtube.com/', 
//       id: 'v=',

//       src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
//     }

//   },

//   srcAction: 'iframe_src',
// }

//iframe End===========================================
  // });

$('.owlCarouselCustom').owlCarousel({
    loop:true,
    items:1,
    // nav:false,
   
  
});

$('.upcomingActive').owlCarousel({
    loop:true,
    items:1,
    dots:true,
     responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  
});











});


// ============================================================wow js Start

wow = new WOW(
      {
        animateClass: 'animated',
        offset:       0,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
	
//=============================== WOW js Stop
