// https://js.checkio.org/mission/x-o-referee

"use strict";

function diag (l) {

	return l[0][0] + l[1][1] + l[2][2];
}

function xoReferee (list) {

	var l = [[0,0,0], [0,0,0], [0,0,0]];

	for (var i = 0; i < 3; i++)
		for (var j = 0; j < 3; j++) 
			l[i][j] = list [i][j];

	for (var i = 0; i < 3; i++) {
		if (l[i].join("") === "XXX") return 'X';
		if (l[i].join("") === "OOO") return 'O';
	}

	console.log(diag(l));

	if (diag(l) === "XXX") return 'X';
	if (diag(l) === "OOO") return 'O';

	for (var i = 0; i < 3; i++)
		for (var j = 0; j < 3; j++) 
			l[i][j] = list [j][2-i];

	for (var i = 0; i < 3; i++) {
		if (l[i].join("") === "XXX") return 'X';
		if (l[i].join("") === "OOO") return 'O';
	}

	console.log(diag(l));

	if (diag(l) === "XXX") return 'X';
	if (diag(l) === "OOO") return 'O';

	return 'D';

}

var list = ["O.X","XX.","XOO"];
console.log(xoReferee(list));

phantom.exit();
