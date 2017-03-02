// https://js.checkio.org/mission/non-unique-elements

"use strict";

function nonUniqueElements(data) {
    
    var m = data;
    var r = [];
    for (var i = 0; i < m.length; i++) {
        var bool = false;
	    for (var j = 0; j < m.length; j++) {
		    if ( m[i] === m [j] && i != j) bool = true; 
	    }
	    if (bool) r.push(m[i]); 
    }
    
    return r;
}

var m = [ 3, 3, 7, 7, 4, 8, 2, 1, 6 ];

console.log(m);
console.log(nonUniqueElements(m));

//phantom.exit();
