
var parallax = (function () {
   var bg = document.querySelector('.parallax__bg');
   var train = document.querySelector('.parallax__train');
   var grass = document.querySelector('.parallax__grass');
   var gradient = document.querySelector('.parallax__gradient');

   return {
      move: function (block, windowScroll, strafeAmount) {
         var strafe = windowScroll / -strafeAmount + '%';
         var transformString = 'translate3d(0,' + strafe + ',0)'

         var style = block.style;

         style.transform = transformString;
         style.webkitTransform = transformString;

      },

      init: function(wScroll) {
         this.move (bg, wScroll, 75);
         this.move (train, wScroll, 18);
         this.move (grass, wScroll, 10);
      }
   }


}());


window.onscroll = function () {
   var wScroll = window.pageYOffset;

   // parallax.init(wScroll);

   if (window.innerWidth < 768) {
      parallax.init();
   } else{
      parallax.init(wScroll);
   }

}