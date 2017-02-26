// https://js.checkio.org/mission/median

"use strict";

function median(data) {

	var m = data.sort ( function (a, b) {
		return a - b;
	});

	var len = data.length;

	var r = 0;

	if (len % 2 === 1)
		r = m[parseInt(len/2)];
	else
		r = 0.5*(m[parseInt(len/2) - 1] + m[parseInt(len/2)]);

	return r;
}

var m = [ 1, 2, 3, 4, 5, 6 ];

console.log(m);
console.log(median(m));

phantom.exit();
