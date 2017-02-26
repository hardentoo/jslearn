// https://js.checkio.org/mission/count-neighbours

"use strict";

function countNeighbours(data, row, col) {

	var count = 0;

	for (var i = 0; i < data.length; i++) {

		if ( Math.abs(i - row) > 1) continue; 

		for (var j = 0; j < data[0].length; j++) {

				if ( Math.abs(j - col) > 1) continue; 

				if ( Math.abs(i - row) === 0 && Math.abs(j - col) === 0) continue; 
				
				count += data[i][j];
		}

	}

		return count;
}

var data = [[1,0,1,0,1],
			[0,1,0,1,0],
			[1,0,1,0,1],
			[0,1,0,1,0],
			[1,0,1,0,1],
			[0,1,0,1,0]];

var row = 5;

var col = 4;

console.log(countNeighbours(data, row, col));

phantom.exit();
