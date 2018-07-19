$(document).ready(function() {
	$('#fullpage').fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    sectionsColor: ['red', 'green', 'blue'],
    controlArrows: false,
		autoScrolling: true,
    navigation: true,
    navigationPosition: "right"
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});