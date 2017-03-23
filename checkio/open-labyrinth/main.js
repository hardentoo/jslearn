var canv = document.createElement("canvas");
canv.id = "canvas";
canv.setAttribute("width", "400px");
canv.setAttribute("height", "400px");

document.body.insertBefore(canv, document.body.firstChild);

var ctx = canv.getContext("2d");

var lab = {
	n: 12,
	m: 12,
	x: 10,
	y: 10,
	sx: 30,
	sy: 30,
	dx: 1.5,
	dy: 1.5,
	radius: 5,
	fbcolor: "#37e",
	sbcolor: "#058E3C",
	ebcolor: "#FFB244",
	bcolor: "#ED0D0D",
	step_from: [],
	stop_flag: 0,
	color_flag: 0,
	strway: '',
	time: 500,
	map: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  	  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  	  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  	  [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  	  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  	  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  	  [1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  	  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
  	  [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  	  [1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
  	  [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  	  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

	draw: function () {
		
			ctx.fillStyle = this.fbcolor;
			ctx.strokeStyle = this.sbcolor;
		
			ctx.beginPath();
			ctx.lineHeight = 3;
		
			for (var i = 0; i <= this.n; i++) {
				ctx.moveTo(this.x+i*this.sx, this.y);
				ctx.lineTo(this.x+i*this.sx, this.y+this.m*this.sy);
			}
		
			for (var j = 0; j <= this.m; j++) {
				ctx.moveTo(this.x, this.y+j*this.sy);
				ctx.lineTo(this.x+this.n*this.sx, this.y+j*this.sy);
			}
		
			ctx.stroke();
		
			for (var i = 0; i < this.n; i++) {
		
				for (var j = 0; j < this.m; j++) {
					ctx.fillStyle = this.fbcolor;
					if (i == this.n - 2 & j == this.m - 2) {
						ctx.fillStyle = this.ebcolor;
						ctx.fillRect(this.x+i*this.sx+this.dx, this.y+j*this.sy+this.dy, this.sx-2*this.dx, this.sy-2*this.dy);
					}
					if (this.map[i][j] == 1)	ctx.fillRect(this.x+i*this.sx+this.dx, this.y+j*this.sy+this.dy, this.sx-2*this.dx, this.sy-2*this.dy);
					if (this.map[i][j] == 0)	ctx.strokeRect(this.x+i*this.sx, this.y+j*this.sy,this.sx, this.sy);
				}
			}
		
			ctx.stroke();
			ctx.fill();
			this.ball(this.x,this.y,this.sx,this.sy,this.radius,this.bcolor);
		
		},

	ball: function (x,y,sx,sy,radius,color) {

			ctx.beginPath();
			ctx.arc(x+sx*1.5, y+sy*1.5, radius, 0, Math.PI *2, true)
			ctx.closePath();
		
			ctx.fillStyle = color;
			ctx.fill();
		},

	search: function () {

			var map1= [];

			for (var t = 0; t < this.n; t++){
				map1[t] = [];
			}

			for (var t = 0; t < this.n; t++){
				for (var l = 0; l < this.m; l++){
					map1[t][l] = this.map[t][l];
					}
			}

			var i = j = 1;

			if (this.stop_flag) return;
			this.strway = '';
			var way = [];
			var vec = [[1,1,"P"]];
		
			var k = 0;
			var ret = 0;
		
		    var bool = false;

			while ( (i != this.n - 2 || j != this.m - 2) & k != 100) {
			
				if (this.stop_flag) break;
		
				if (bool) {
					var step3 = vec.pop();
		
					while ( step3[0] != i || step3[1] != j ){ 
						step3 = vec.pop();
					}
		
					vec.push(step3);
					
					ret = 1;
					bool = false;
				}
		
				if (!ret) {

					var vilka = 0;
		
					if (map1[i][j] == 0){	
						
						if (this.map[i - 1][j] == 0) {
							vec.push([i,j,'L']);
							vilka++;
						}
						if (this.map[i][j + 1] == 0) {
							vec.push([i,j,'N']);
							vilka++;
						}
						if (this.map[i + 1][j] == 0) {
							vec.push([i,j,'P']);
							vilka++;
						}
						if (this.map[i][j - 1] == 0) {
							vec.push([i,j,'V']);
							vilka++;
						}
					}	
					
					map1[i][j] = 1;

					if (vilka > 2) {way.push([i,j]);}
		
					var flag = 0;
					
					if (vilka > 1 ) {
						while (flag != 1 ){
							var step2 = vec.pop();
				
							if (step2[2] == 'P' & step2[2] != this.step_from[2]) { i++; this.strway += 'E'; this.step_from = [i,j,'L']; flag = 1;}
							if (step2[2] == 'N' & step2[2] != this.step_from[2]) { j++; this.strway += 'S'; this.step_from = [i,j,'V']; flag = 1;}	
							if (step2[2] == 'V' & step2[2] != this.step_from[2]) { j--; this.strway += 'N'; this.step_from = [i,j,'N']; flag = 1;}
							if (step2[2] == 'L' & step2[2] != this.step_from[2]) { i--; this.strway += 'W'; this.step_from = [i,j,'P']; flag = 1;}
						}	
					}
		
					if (vilka == 1) {
						while (flag != 1 ){
							var step5 = vec.pop();
				
							if (step5[2] == 'P') { i++; this.strway += 'E';flag = 1;}
							if (step5[2] == 'N') { j++; this.strway += 'S';flag = 1;}	
							if (step5[2] == 'V') { j--; this.strway += 'N';flag = 1;}
							if (step5[2] == 'L') { i--; this.strway += 'W';flag = 1;}
						}	
					}		
				}
		
				if (ret) {	
					var flag = 0;
			
					while (flag != 1 ){
						var step7 = vec.pop();

						if (map1[i][j-1] == 1 & map1[i-1][j] == 1 & map1[i][j+1] == 1 & map1[i+1][j] == 1) {

								if (step7[2] == 'P') { i++; this.strway += 'E'; this.step_from = [i,j,'L']; flag = 1;}
								if (step7[2] == 'N') { j++; this.strway += 'S'; this.step_from = [i,j,'V']; flag = 1;}	
								if (step7[2] == 'V') { j--; this.strway += 'N'; this.step_from = [i,j,'N']; flag = 1;}
								if (step7[2] == 'L') { i--; this.strway += 'W'; this.step_from = [i,j,'P']; flag = 1;}
						} else {
			
								if (step7[2] == 'P' & map1[i+1][j] == 0) { i++; this.strway += 'E'; this.step_from = [i,j,'L']; flag = 1;}
								if (step7[2] == 'N' & map1[i][j+1] == 0) { j++; this.strway += 'S'; this.step_from = [i,j,'V']; flag = 1;}	
								if (step7[2] == 'V' & map1[i][j-1] == 0) { j--; this.strway += 'N'; this.step_from = [i,j,'N']; flag = 1;}
								if (step7[2] == 'L' & map1[i-1][j] == 0) { i--; this.strway += 'W'; this.step_from = [i,j,'P']; flag = 1;}
						}
					}
				
					ret = 0;
				}
		
				var nvilka = 0;
		
				if (this.map[i - 1][j] == 0) {
					nvilka++;
				}
				if (this.map[i][j + 1] == 0) {
					nvilka++;
				}
				if (this.map[i + 1][j] == 0) {
					nvilka++;
				}
				if (this.map[i][j - 1] == 0) {
					nvilka++;	
				}
		
				 if (nvilka == 1) {
		
						this.color_flag++;
		
		
				}
			
 		       if (nvilka > 2) {
		
 		       	for (var z = 0; z < way.length; z++) {
 		       		if (way[z][0] == i & way[z][1] == j) {
 		       			bool = true;
 		       			var step1 = way.pop();
 		       			i = step1[0];
 		       			j = step1[1];
 		       			//console.log('+++',i,j);
 		       			this.color_flag++;
 		       		}
		
 		       	}
 		       }
		
				k++;
				var color = ["#ED0D0D", "#28917A", "#E3EE3A", "#D926CE"];
				setTimeout(this.ball, this.time*k, this.x+(i-1)*this.sx,this.y+(j-1)*this.sy, this.sx, this.sy, this.radius, color[this.color_flag %4]);
		
			}
		
			console.log(this.strway);
		}

};

lab.draw();

function start (){

	if (document.getElementById("but").innerHTML != "Стоп") {
		document.getElementById("but").innerHTML = "Стоп";
		lab.search();
		return;
	}

	if (document.getElementById("but").innerHTML != "Стaрт") {
		document.getElementById("but").innerHTML = "Стaрт";
		lab.stop_flag = 1;
		return;
	}

};
