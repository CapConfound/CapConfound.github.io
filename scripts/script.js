
jQuery(document).ready(function($) {

    console.log('ama live!');

    var sliderTwo = $('#carouselExampleIndicators2').carousel({
        /* your options for slider #2 */
      })
      
      $(".slider-pager li").click(function (e) {
          var index = $(this).data('slide');
          sliderTwo.carousel(index);
          e.preventDefault();
      });

});
