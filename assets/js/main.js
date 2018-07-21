$(document).ready(() => {
  $('#fullpage').fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",

    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: "right",
    easingcss3: "ease-in",
    scrollBar: true,
    touchSensitivity: 1,

  });

  //methods

  AOS.init({
    // Global settings
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,

    // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    delay: 200,
    duration: 600,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom',
  });

  $('#tiltEl').tilt({
    glare: true,
    maxGlare: 0.5, //determines how bright the glare is
    scale: 1.05 //scales tilt element
  })
});