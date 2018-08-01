//JS media queries for disabling certain libraries

function responsive () {

  /* Smartphone Portrait Mode */
  if (window.matchMedia("(min-width: 0px)").matches) {
    fullpage_api.setResponsive(true);

    parallaxInstance.disable();
    parallaxInstance2.disable();
    parallaxInstance3.disable();
    parallaxInstance4.disable();
    parallaxInstance5.disable();
    parallaxInstance6.disable();
    parallaxInstance7.disable();
    parallaxInstance8.disable();
    parallaxInstance9.disable();
    parallaxInstance10.disable();
    parallaxInstance11.disable();
    parallaxInstance12.disable();
    parallaxInstance13.disable();
    parallaxInstance14.disable();
    parallaxInstance15.disable();
    parallaxInstance16.disable();
    
  }

  /* Small devices (landscape phones, 576px and up) */
  if (window.matchMedia("(min-width: 576px)").matches) {

  }

  /* Medium devices (tablets, 768px and up) */
  if (window.matchMedia("(min-width: 768px)").matches) {
    fullpage_api.setResponsive(false);
    
  }
  
  /* Large devices (desktops, 992px and up) */
  if (window.matchMedia("(min-width: 992px)").matches) {
    //console.log('test');

    parallaxInstance.enable();
    parallaxInstance2.enable();
    parallaxInstance3.enable();
    parallaxInstance4.enable();
    parallaxInstance5.enable();
    parallaxInstance6.enable();
    parallaxInstance7.enable();
    parallaxInstance8.enable();
    parallaxInstance9.enable();
    parallaxInstance10.enable();
    parallaxInstance11.enable();
    parallaxInstance12.enable();
    parallaxInstance13.enable();
    parallaxInstance14.enable();
    parallaxInstance15.enable();
    parallaxInstance16.enable();

  }

  /* Extra large devices (large desktops, 1200px and up) */
  if (window.matchMedia("(min-width: 1200px)").matches) {

  }
}
responsive(); //determine what to enable/disable on load

$(window).resize(() => {
  responsive();
});