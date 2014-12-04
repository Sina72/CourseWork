time = function() {
  var seconds = 180;
  var minutes = 180;
  var hours = 180;
  setInterval(function() {
    seconds++;
    $('.second-hand').css('transform', 'rotate(' + seconds + 'deg)');
    if(seconds === 540) {
      seconds = 180;
      minutes += 360/60;
      $('.minute-hand').css('transform', 'rotate(' + minutes + 'deg)');
    }
    if(minutes === 540) {
      minutes = 180;
      hours += 360/12;
      $('.hour-hand').css('transform', 'rotate(' + hours + 'deg)');
    }
  }, 60);
}

time();