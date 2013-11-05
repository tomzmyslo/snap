$(document).ready(function() {
	var s = Snap("#test1");
	var circle1 = s.circle(150, 150, 100);
	var circle2 = s.circle(150, 150, 95);
	var circle3 = s.circle(150, 150, 85);
	var d = s.text(70, 190, "d");
	var z = s.text(125, 190, "Z");
	var w = s.text(155, 190, "w");
	var dzw = s.group(d, z, w);
	circle1.attr({
		fill: "#000",
	});
	circle2.attr({
		fill: "#FFF"
	});
	circle3.attr({
		fill: "#000"
	});
	d.attr({
	  fill: "#00aeef"
	});
	z.attr({
	  fill: "#ee3a43"
	});
	w.attr({
	  fill: "#c1d72e",
	});
	dzw.attr({
	  "font-size": "108px",
	  "font-family":"verdana"
	});
});