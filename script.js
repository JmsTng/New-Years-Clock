var dt = new Date();

var totalmonths = 12;
var totaldays = 31;
var totalhours = 24;
var totalminutes = 60;
var totalseconds = 60;

// time variables
var months = totalmonths - 1 - dt.getMonth();
var days = totaldays - dt.getDate();
var hours = totalhours - 1 - dt.getHours();
var minutes = totalminutes - 1 - dt.getMinutes();
var seconds = totalseconds - 1 - dt.getSeconds();

// set display
document.querySelector("#months").innerHTML = months;
document.querySelector("#days").innerHTML = days;
document.querySelector("#hours").innerHTML = hours;
document.querySelector("#minutes").innerHTML = minutes;
document.querySelector("#seconds").innerHTML = seconds;

const nyroutine = () => {
	let t = document.querySelector("#after-text").children;
	console.log(typeof t);
	console.log(t.length);
	for (var i = 0; i < t.length; i++) {
		console.log(t[i]);
		t[i].className = "pop";
	}
}

var x = setInterval(function() {
	dt = new Date();
	
	// time variables
	months = totalmonths - 1 - dt.getMonth();
	days = totaldays - dt.getDate();
	hours = totalhours - 1 - dt.getHours();
	minutes = totalminutes - 1 - dt.getMinutes();
	seconds = totalseconds - 1 - dt.getSeconds();

	var newyears = months === 0 && days === 0 && hours === 0 && minutes === 0 && seconds === 0;
	// set display
	document.querySelector("#months").innerHTML = months;
	document.querySelector("#days").innerHTML = days;
	document.querySelector("#hours").innerHTML = hours;
	document.querySelector("#minutes").innerHTML = minutes;
	document.querySelector("#seconds").innerHTML = seconds;
	if (newyears) {
		document.querySelector("#after").className = "anim";
		setTimeout(function() {document.querySelector("#before").remove()}, 3000);
		clearInterval(x);
		nyroutine();
	}
}, 1000);
