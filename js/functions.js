//functions.js

Array.prototype.clean = function(deleteValue) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == deleteValue) {
			this.splice(i, 1);
			i--;
		}
	}
};


function getCurrentMs() {
	var date = new Date();
	var ms = date.getTime() / 1000;
	return ms;
}

function degToRad(angle) {
	return ((angle * Math.PI) / 180);
}

function radToDeg(angle) {
	return ((angle * 180) / Math.PI);
}

function random(low, high) {
	var rand = (Math.random() * high) + low;
	return rand;
}

function randomInt(low, high) {
	return (Math.floor((Math.random() * high) + low));
}