$(document).ready(function(){
  $('ul.social-btn .skype').click(function(e){
    e.preventDefault();
    $(this).next(".skype-name").fadeToggle().select();
  });

  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  if(isAndroid) {
    $('#presentation').remove();
  }
});

$(window).load(function(){
  var retina = window.devicePixelRatio > 1;
  if (retina) {
    $('img').each(function(){
      var width = $(this).width();
      var imgDouble = $(this).attr('src').replace(/.png$/, '@2.png');

      $(this).attr('src', imgDouble);
      $(this).css({
        'width' : width,
        'height': 'auto'
      })
    });
  }
})