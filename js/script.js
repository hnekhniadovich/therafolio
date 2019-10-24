// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     pagination:false,
//     autoplay: 1000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         700: {
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

$(document).ready(function() {
 
    $("#slider").owlCarousel({
   
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
   
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
   
    });
   
  });
