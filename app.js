"use strict"
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      $("#return-to-top").fadeIn(200);
    } else {
      $("#return-to-top").fadeOut(200);
    }
  });
  $("#return-to-top").click(function() {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500
    );
  });


  $(".anchorLink").click(function(e){
    e.preventDefault();

    var this_offset = $(this).offset();
    var that_id     = $(this).attr("href");
    var that_offset = $(that_id).offset();
    var offset_diff = Math.abs(that_offset.top - this_offset.top);

    var base_speed  = 300; // Time in ms per 1,000 pixels
    var speed       = (offset_diff * base_speed) / 400;

    $("html,body").animate({
      scrollTop: that_offset.top
    }, speed);
  });

  $('.btn-profile').click(function(e) {
    e.preventDefault();  //stop the browser from following
    window.location.href = '/assets/_Resume.pdf';
});
