// https://js.checkio.org/mission/break-rings

"use strict";

function breakRings (rings) {

	//console.log(rings);
	//console.log(rings.length);

	if (rings.length === 1) return 1;

	var n = 0; 

	while (rings.length > 1) {

		var max = 0;
		for (var i = 0; i < rings.length; i++) {
				if (rings[i][0] > max) max = rings[i][0];
				if (rings[i][1] > max) max = rings[i][1];
		}

		var count = {};

		for (var i = 0; i < rings.length; i++) {
				count[rings[i][0]] = count[rings[i][1]] = 0;
		}
	
		for (var i = 0; i < rings.length; i++) {
				count[rings[i][0]]++;
				count[rings[i][1]]++;
		}

		var maxCount = 0;
		var index = 0;
		for (var i = 1; i <= max; i++) {
				if ( count[i] > maxCount) {
					maxCount = count[i];
					index = i;
				}
		}

		var k = 0;
		var array = [];
		for (var i = 1; i <= max; i++) {
				if ( count[i] === maxCount) {
					array.push(i);
				}
		}

		//console.log (array);

		var nres = max;

		for (var i = 0; i < array.length; i++) {

			var ind = array[i];
			
			//console.log(ind);
			var tmp_rings = [];
			for (var j = 0; j < rings.length; j++) {
				if (rings[j][0] != ind && rings[j][1] != ind)
					tmp_rings.push(rings[j]);
			}

			if (tmp_rings.length === 0) return 1;

			if (rings.length > tmp_rings.length) {
				var nl = breakRings(tmp_rings); 
				if ( nl < nres) nres = nl;	
			}
			
		}

		return nres + 1; 
	}	

/*
		var count = {};
	
		var max = 0;
		for (var i = 0; i < rings.length; i++) {
				if (rings[i][0] > max) max = rings[i][0];
				if (rings[i][1] > max) max = rings[i][1];
		}
	
		console.log("N = ",max);
	
		for (var i = 0; i < rings.length; i++) {
				count[rings[i][0]] = count[rings[i][1]] = 0;
		}
	
		for (var i = 0; i < rings.length; i++) {
				count[rings[i][0]]++;
				count[rings[i][1]]++;
		}
	
		var maxCount = 0;
		var index = 0;
		for (var i = 1; i <= max; i++) {
				if ( count[i] > maxCount) {
					maxCount = count[i];
					index = i;
				}
		}
	
		console.log("maxCount = ", maxCount);

		var k = 0;
		var array = [];
		for (var i = 1; i <= max; i++) {
				if ( count[i] === maxCount) {
					array.push(i);
				}
		}

		if (array.length === 1) {

			console.log("index = ",index, "count = ", maxCount);
		
			var tmp_rings = [];
			for (var i = 0; i < rings.length; i++) {
					if (rings[i][0] != index && rings[i][1] != index)
						tmp_rings.push(rings[i]);
			}
		
			rings = tmp_rings;
		
			console.log(rings);
			return breakRings(rings) + 1;
		}
		else {

			var nres = max;
			for (var ind = 0; ind < array.length; ind++) {
				
				var tmp_rings = [];
				for (var i = 0; i < rings.length; i++) {
					if (rings[i][0] != array[ind] && rings[i][1] != array[ind])
						tmp_rings.push(rings[i]);
				}

				var nl = breakRings(tmp_rings); 
				if ( nl < nres) nres = nl;
			}

			return nres + 1; 
		}
	}

	console.log("===>>>", n, "length = ", rings.length);

	return n;
*/

}

console.log("RES = ", breakRings([[3,4],[5,6],[2,7],[1,5],[2,6],[8,4],[1,7],[4,5],[9,5],[2,3],[8,2],[2,4],[9,6],[5,7],[3,6],[1,3]]));

//phantom.exit();
