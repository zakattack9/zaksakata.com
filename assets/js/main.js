$(document).ready(() => {
  $('#fullpage').fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",

    autoScrolling: true,
    navigation: true,
    navigationPosition: "right",
    easingcss3: "ease-in",
    scrollBar: true,
    touchSensitivity: 1,
    // scrollOverflow: true,

    onLeave: function (origin, destination, direction) { //fades menu tab in and out
      if (origin.index == 0 && direction == 'down') {
        $('#menuBtn').fadeTo(50, 0).delay(400).fadeTo(200, 1);
        $('#zCont')[0].style.right = "57%";
        $('#kCont')[0].style.left = "57%";
      } else if (origin.index == 1 && direction == 'up') {
        $('#menuBtn').fadeTo(50, 0).delay(400).fadeTo(200, 1);
        $('#zCont')[0].style.right = "50%";
        $('#kCont')[0].style.left = "49.9%";
      }
    }
  });

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

  //Parallax Scenes for Main Page
  var scene = document.getElementById('shortBlurb');
  var parallaxInstance = new Parallax(scene);
  parallaxInstance.friction(0.9, 0.9);
  parallaxInstance.scalar(15, 10);

  var scene2 = document.getElementById('shortBlurbSub');
  var parallaxInstance2 = new Parallax(scene2);
  parallaxInstance2.friction(0.1, 0.1);

  //Parallax Scenes for About Section
  var layerScene = document.getElementById('layerScene');
  var parallaxInstance3 = new Parallax(layerScene);
  parallaxInstance3.limit(false, 0);
  parallaxInstance3.invert(false, true);
  parallaxInstance3.scalar(5, 0);
  parallaxInstance3.friction(0.3, 0.3);

  var imageScene = document.getElementById('imgParallax');
  var parallaxInstance4 = new Parallax(imageScene);
  parallaxInstance4.friction(0.1, 0.1);

  var aboutTextPlx = document.getElementById('aboutTextPlx');
  var parallaxInstance5 = new Parallax(aboutTextPlx);

  //Parallax Scenes for Skills Section
  var skillsParallax = document.getElementById('skillsParallax');
  var parallaxInstance6 = new Parallax(skillsParallax);

  var skillsParallax2 = document.getElementById('skillsParallax2');
  var parallaxInstance7 = new Parallax(skillsParallax2);

  var skillCardsPlx = document.getElementById('skillCardsPlx');
  var parallaxInstance8 = new Parallax(skillCardsPlx);

  var newSkillsPlx = document.getElementById('newSkillsPlx');
  var parallaxInstance9 = new Parallax(newSkillsPlx);

});

//opens and closes overlay
function closeOverlay() {
  $('#overlay')[0].style.height = '0';
  $('#overlayImg')[0].style.opacity = '0';
  $('#darken').fadeTo(400, 0, () => {
    $('#darken')[0].style.display = "none";
  });

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

$('#menuBtn').on('click', () => {
  if ($('#overlay').height() === 0) {
    $('#overlay')[0].style.height = '400px';
    $('#overlayImg')[0].style.opacity = '1';
    $('#darken')[0].style.display = "block";
    $('#darken').fadeTo(400, 0.7);

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
    closeOverlay();
  }
})

//Overlay navigation functionality (prevents slides from being added to history)
$('#darken').on('click', () => { //closes overlay if user clicks outside of overlay
  closeOverlay();
})

$('#downArrow').on('click', () => {
  fullpage_api.moveTo(2);
})

$('#homeOpt').on('click', () => {
  fullpage_api.moveTo(1);
  $('#zCont')[0].style.right = "50%";
  $('#kCont')[0].style.left = "49.9%";
  closeOverlay();
})

$('#aboutOpt').on('click', () => {
  fullpage_api.moveTo(2);
  closeOverlay();
})

$('#skillsOpt').on('click', () => {
  fullpage_api.moveTo(3);
  closeOverlay();
})

$('#projectsOpt').on('click', () => {
  fullpage_api.moveTo(4);
  closeOverlay();
})

$('#workOpt').on('click', () => {
  fullpage_api.moveTo(5);
  closeOverlay();
})

$('#photographyOpt').on('click', () => {
  fullpage_api.moveTo(6);
  closeOverlay();
})

$('#contactOpt').on('click', () => {
  fullpage_api.moveTo(7);
  closeOverlay();
})