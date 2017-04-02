
"use strict"

function angular (a, b, c) {

    if ( a >= b + c || b >+ a + c || c >= a + b ) return ([0,0,0]);

    var la = Math.round (Math.acos ( (a*a + b*b - c*c) / (2 *a * b)) * (180/Math.PI));
    var lb = Math.round (Math.acos ( (b*b + c*c - a*a) / (2 *b * c)) * (180/Math.PI));
    var lc = Math.round (Math.acos ( (c*c + a*a - b*b) / (2 *c * a)) * (180/Math.PI));

    var list = [la, lb, lc];

    list.sort(function(a, b) {
	return a - b;
    });


    return list;
}

console.log (angular (5,4,3));
