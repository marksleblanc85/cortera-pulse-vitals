$(function(){
	$('.pie1').circleProgress({
		value: 0.516,
		size: 100,
		thickness: 20,
		fill: {
			color: '#83be26'
		},
		startAngle: 4.7,
	}).on('circle-animation-progress', function(event, progress, stepValue) {
	    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2).replace(/^0+/, '')  + '%');
	});
	$('.pie2').circleProgress({
		value: 0.295,
		size: 100,
		thickness: 20,
		fill: {
			color: '#00aff0'
		},
		startAngle: 4.7,
	}).on('circle-animation-progress', function(event, progress, stepValue) {
	    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2).replace(/^0+/, '')  + '%');
	});
	$('.pie3').circleProgress({
		value: 0.107,
		size: 100,
		thickness: 20,
		fill: {
			color: '#9353ef'
		},
		startAngle: 4.7,
	}).on('circle-animation-progress', function(event, progress, stepValue) {
	    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2).replace(/^0+/, '')  + '%');
	});
	$('.pie4').circleProgress({
		value: 0.051,
		size: 100,
		thickness: 20,
		fill: {
			color: '#e48833'
		},
		startAngle: 4.7,
	}).on('circle-animation-progress', function(event, progress, stepValue) {
	    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2).replace(/^0+/, '') + '%');
	});
	$('.pie5').circleProgress({
		value: 0.035,
		size: 100,
		thickness: 20,
		fill: {
			color: '#b20f2c'
		},
		startAngle: 4.7,
	}).on('circle-animation-progress', function(event, progress, stepValue) {
	    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2).replace(/^0+/, '') + '%');
	});  
});