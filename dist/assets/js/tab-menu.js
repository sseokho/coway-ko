$(function () {
  var width = $(window).width();
  if (width <= 720) {
    var title = $('.tab-menu__lists').find(".is-active");
    var startIndex = title.index();
    var $frame = $('.tab-menu__inner');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'centered',
      smart: 1,
      //activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      //startAt: startIndex !== -1 ? startIndex : 0,
      //scrollBar: $wrap.find('.tab-menu'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      //easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,


    });

    $(window).on('resize', function () { $frame.sly('reload'); });
    
  } else {
      
  }



})