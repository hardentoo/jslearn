function draw() {

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = "#37e";
	ctx.fillRect (20,0,100,100);
	ctx.fillStyle = "#f10";
	ctx.strokeRect (20,120, 100,100);
	ctx.clearRect (30,30, 50,50);

};

draw();
