/* Show-more button clicked-on event */
function ShowmoreFunction() {
   let hiddenImage = document.getElementsByClassName("mecNavTabShow");
   console.log(hiddenImage);
   for (let i = 0; i < hiddenImage.length; i++) {
      hiddenImage[i].style.display = "block";
   }

   // Will be implemented for each button
   let hiddenButton = document.getElementsByClassName("mecNavTab__ctnShowBt");
   for (let i = 0; i < hiddenButton.length; i++) {
      hiddenButton[i].style.display = "none";
   }
}
// (function($) {
//   function doAnimations(elems) {
//     var animEndEv = "webkitAnimationEnd animationend";

//     elems.each(function() {
//       var $this = $(this),
//         $animationType = $this.data("animation");
//       $this.addClass($animationType).one(animEndEv, function() {
//         $this.removeClass($animationType);
//       });
//     });
//   }

//   var $myCarousel = $("#carouselExampleIndicators"),
//     $firstAnimatingElems = $myCarousel
//       .find(".carousel-item:first")
//       .find("[data-animation ^= 'animated']");

//   $myCarousel.carousel();

//   doAnimations($firstAnimatingElems);

//   $myCarousel.on("slide.bs.carousel", function(e) {
//     var $animatingElems = $(e.relatedTarget).find(
//       "[data-animation ^= 'animated']"
//     );
//     doAnimations($animatingElems);
//   });
// })(jQuery);
// $(document).ready(function(){
//   $("#flip").click(function(){
//     $("#panel").slideDown("slow");
//   });
// });

$('.carousel').carousel({
  interval: 2000
})
$('.carousel').on('slide.bs.carousel',function(e){

  $(this).find('.Caption_show').hide();

});
$('.carousel').on('slid.bs.carousel',function(e){
  var slideFrom = $(this).find('.active').index();
  var slideTo = $(e.relatedTarget).index();
  // var cap_index = $(this).find('.Caption_show').index();
  // $(this).find('.Caption_show')
  // console.log(cap_index);

  $(this).find('.Caption_show').slideDown("slow");
  console.log(slideFrom+' => '+slideTo);
});
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
 
//   } else {

//   }
//   prevScrollpos = currentScrollPos;
// }
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log(document.body.scrollTop);
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("mec-header_navbar").style.top = "-250px";
  } else {

    document.getElementById("mec-header_navbar").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}
