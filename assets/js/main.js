$(document).ready(function() {
	$('#fullpage').fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",

		autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: "right",
    easingcss3: "ease-in",
    scrollBar: true,
    touchSensitivity: 1
	});

	//methods
  $.fn.fullpage.setAllowScrolling(true);
  
  AOS.init({
    // Global settings
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  
    // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigger the animation
  });
});