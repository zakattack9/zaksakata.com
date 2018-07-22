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

  $('#animateName').tilt({
    //glare: true,
    //maxGlare: 0.5, //determines how bright the glare is
    scale: 1.05, //scales tilt element
  })

  //Starts 3D parallax scene
  var scene = document.getElementById('shortBlurbSub');
  var parallaxInstance = new Parallax(scene);

  var scene2 = document.getElementById('shortBlurb');
  var parallaxInstance2 = new Parallax(scene2);
  parallaxInstance2.friction(0.9, 0.9);
  parallaxInstance2.scalar(12, 10);
});

$('#menuBtn').on('click', () => {
  if($('#overlay').height() === 0){
    $('#overlay')[0].style.height = '400px';

    $('#fp-nav')[0].style.display = 'none';

    $('#hr2').css({
      "width": "30px",
      "transform": "rotate(90deg)",
      "margin-bottom": "-4px",
      "transition": "0.2s",
    })

    $('#hr3').css({
      "width": "30px",
      "transition": "0.2s",
    })

    $('#hr1').css({
      "margin-bottom": "-4px",
      "transition": "0.2s",
    })

  } else {
    $('#overlay')[0].style.height = '0';

    $('#fp-nav')[0].style.display = 'block';

    $('#hr2').css({
      "width": "40px",
      "transform": "rotate(0deg)",
      "margin-bottom": "5px",
    })

    $('#hr3').css({
      "width": "60px",
    })

    $('#hr1').css({
      "margin-bottom": "",
    })

  }
})