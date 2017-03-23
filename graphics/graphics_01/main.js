~function () {
	var LEFT=37, UP=38, RIGHT=39, DOWN=40;
  var dirs = {[LEFT]:0, [UP]:0, [RIGHT]:0, [DOWN]:0};
  var SPEED = 10;
  var x = 0, y = 0;

  $(document).keydown(function (e) {
		dirs[e.keyCode] = 1;
  })

  $(document).keyup(function (e) {
		dirs[e.keyCode] = 0;
  })
  
  setInterval(function () {
  	var $div = $("div");

		x -= dirs[LEFT] * SPEED;
    x += dirs[RIGHT] * SPEED;
    y -= dirs[UP] * SPEED;
    y += dirs[DOWN] * SPEED;

    $div.css('transform', `translate(${x}px, ${y}px)`);
  }, 100)
}();
