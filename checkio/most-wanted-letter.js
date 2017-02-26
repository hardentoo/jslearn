// https://js.checkio.org/mission/most-wanted-letter

"use strict";

function mostWanted (str) {

	var stat = {};
    
    var key = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < key.length; i++) {
    	stat[key[i]] = 0;
    }
    
    var alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < str.length; i++) {
		
		if (alphas.indexOf(str[i]) != -1)
		  stat[str[i].toLowerCase()]++;   		

    }

    var index = 0;
 	for (var i = 0; i < key.length; i++) {
    	if (stat[key[i]] > stat[key[index]]) index = i;
    }

	return key[index];
}

console.log(mostWanted("accbbde"));

phantom.exit();
