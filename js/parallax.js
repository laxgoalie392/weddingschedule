// The function
var background_image_parallax = function($object, multiplier){
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
  multiplier = 1 - multiplier;
  var $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});
  $(window).scroll(function(){
    var from_top = $doc.scrollTop(),
      bg_css = '0px ' +(multiplier * from_top) + 'px';
    $object.css({"background-position" : bg_css });
  });
};

