$(document).ready(function() {
	var s = Snap("#test1");
	var bigCircle = s.circle(150, 150, 100);
	bigCircle.attr({
		fill: "#CC0000",
		stroke: "#000",
		strokeWidth: 5
	});
});