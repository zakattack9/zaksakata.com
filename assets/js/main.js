$('#fullpage').fullpage({
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",

  //autoScrolling: false,
  navigation: true,
  navigationPosition: "right",
  easingcss3: "ease-in",
  scrollBar: true,
  touchSensitivity: 1,
  // scrollOverflow: true,

  onLeave: function (origin, destination, direction) { //fades menu tab in and out
    closeOverlay();
    if (origin.index == 0 && direction == 'down') {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $('#menuBtn').fadeTo(50, 0).delay(400).fadeTo(200, 1);
        // $('#fp-nav ul li a span').fadeTo(50, 0).delay(400).fadeTo(200, 1);
      }
      $('#zCont')[0].style.right = "57%";
      $('#kCont')[0].style.left = "57%";

      $('#fp-nav ul li a span').addClass('whiteSide');
      $('#menuBtn hr').addClass('whiteSide');
    } else if (origin.index == 1 && direction == 'up') {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $('#menuBtn').fadeTo(50, 0).delay(400).fadeTo(200, 1);
        // $('#fp-nav ul li a span').fadeTo(50, 0).delay(400).fadeTo(200, 1);
      }
      $('#zCont')[0].style.right = "50%";
      $('#kCont')[0].style.left = "49.9%";

      // $('#fp-nav ul li a span').removeClass('whiteSide');
      // $('#menuBtn hr').removeClass('whiteSide');
    } else if (origin.index == 1 && direction == 'down') {
      // $('#fp-nav ul li a span').removeClass('whiteSide');
      // $('#menuBtn hr').removeClass('whiteSide');
    } else if (origin.index == 2 && direction == 'up') {
      // $('#fp-nav ul li a span').addClass('whiteSide');
      // $('#menuBtn hr').addClass('whiteSide');
    } else if (origin.index == 4 && direction == 'up' || 'down') {
      $('#openProject')[0].style.right = "-100%";
      $('#darken').fadeTo(400, 0, () => {
        $('#darken')[0].style.display = "none";
      });

      $('#fp-nav')[0].style.display = 'block';

      $('#zCont')[0].style.right = "50%";
      $('#kCont')[0].style.left = "49.9%";
    }
  }

});

function enableAOS() { //determines whether to run AOS (only runs on desktop computers)
  if (window.matchMedia("(min-width: 992px)").matches) {
    //console.log('bigenough');
    return false;
  } else {
    return true;
  }
}

AOS.init({
  // Global settings
  disable: enableAOS(), //does not disable on window resize
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
  mirror: false,
  anchorPlacement: 'top-bottom',
});

$('#animateName').tilt({
  //glare: true,
  //maxGlare: 0.5, //determines how bright the glare is
  scale: 1.05, //scales tilt element
})


//Parallax scenes must be out of $(document).ready scop
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

//Parallax Scenes for Selected Projects Section
var projectsTitle = document.getElementById('projectsTitle');
var parallaxInstance15 = new Parallax(projectsTitle);
parallaxInstance15.invert(false, true);

var spPlxSubTitle = document.getElementById('spPlxSubTitle');
var parallaxInstance16 = new Parallax(spPlxSubTitle);

//Parallax Scenes for Work Experience Section
var logoPlx = document.getElementById('logoPlx');
var parallaxInstance10 = new Parallax(logoPlx);

var wePlxTitle = document.getElementById('wePlxTitle');
var parallaxInstance11 = new Parallax(wePlxTitle);
parallaxInstance11.invert(false, true);

var wePlxSubTitle = document.getElementById('wePlxSubTitle');
var parallaxInstance12 = new Parallax(wePlxSubTitle);
parallaxInstance12.invert(false, true);

var wePlxDesc1 = document.getElementById('wePlxDesc1');
var parallaxInstance13 = new Parallax(wePlxDesc1);

var wePlxDesc2 = document.getElementById('wePlxDesc2');
var parallaxInstance14 = new Parallax(wePlxDesc2);

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

  if (window.matchMedia("(max-width: 990px)").matches) {
    $('#hr1').css({
      "opacity": "1",
      "margin-bottom": "5px",
    })
  }
}

$('#menuBtn').on('click', () => {
  if ($('#overlay').height() === 0) {
    $('#overlay')[0].style.height = '400px';
    $('#overlayImg')[0].style.opacity = '1';
    $('#darken')[0].style.display = "block";
    $('#darken').fadeTo(400, 0.7);

    // $('#fp-nav')[0].style.display = 'none !important';
    $('#fp-nav').attr('style', 'display: none !important');

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

$('#workOpt').on('click', () => {
  fullpage_api.moveTo(4);
  closeOverlay();
})

$('#projectsOpt').on('click', () => {
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

$('#closeOpenPrj').on('click', () => {
  $('#openProject')[0].style.right = "-100%";

  $('#darken').fadeTo(400, 0, () => {
    $('#darken')[0].style.display = "none";
  });

  $('#fp-nav')[0].style.display = 'block';
})

function openPrjOverlay(projectNum) {
  $('#openProject')[0].style.right = "0";

  $('#darken')[0].style.display = "block";
  $('#darken').fadeTo(400, 0.7);

  $('#fp-nav')[0].style.display = 'none';

  var selectedPrj = projects[projectNum - 1]; //subtract 1 since the parameter being passed in is not based off zero index scale
  var prjTemplate =
    `<div class="row mt-md-5 justify-content-md-center">
    <div class="prjID">Project 0${selectedPrj.id}</div>
    <div class="col-md-11 mt-md-0 mt-4 mb-md-0 mb-3 prjTitle title">${selectedPrj.title}</div>
    <div class="col-md-11 mb-md-0 mb-2 subTitle">${selectedPrj.subTitle}</div>
    <div class="col-md-11">
      <div class="row mt-md-4 justify-content-md-start justify-content-center prjDesc">
        <div class="col-md-5 col-10 mr-md-2">
          ${selectedPrj.description}

          <img src="${selectedPrj.imageUrls[1]}" class="img-fluid mt-4 overlayPrjImg">
        </div>

        <div class="col-md-5 col-10">
          <img src="${selectedPrj.imageUrls[2]}" class="img-fluid my-md-0 my-4 overlayPrjImg">

          <div class="mt-md-4 pt-md-3 mb-md-0 mb-5">
            <span class="boldText">Role:</span> ${selectedPrj.role}
            <br>
            <span class="boldText">Tech Stack:</span> ${selectedPrj.techStack}
            <br>
            <a href="${selectedPrj.githubLink}"><span class="githubRepo">
              <i class="fab fa-github"></i>
            </span></a>
            <a href="${selectedPrj.websiteLink}"><div class="visitSite">Visit Website</div></a>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  console.log(selectedPrj);
  $('#prjCont').empty();
  $('#prjCont').append(prjTemplate);
}

$('#send').on('click', () => { //validates all field inputs are filled and includes a valid email address
  let formValid = true;

  $('#errorMsg').empty();
  $('.error').removeClass('error');
  $('#msgInp')[0].style.backgroundColor = "#34364b";

  let validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if ($('#nameInp').val() === '') {
    $('#nameInp').addClass('error');

    formValid = false;

  } if (!validEmailRegex.test($('#emailInp').val())) {
    $('#errorMsg').append("Please include a valid email");
    $('#emailInp').addClass('error');

    formValid = false;

  } if ($('#subjectInp').val() === '') {
    $('#subjectInp').addClass('error');

    formValid = false;

  } if ($('#msgInp').val() === '') {
    $('#msgInp').addClass('error');
    $('#msgInp')[0].style.backgroundColor = "#ff6d6d";

    formValid = false;

  } else if (formValid) {
    $('#send')[0].style.opacity = "0";

    $.ajax({
      url: "https://5bstnxh46j.execute-api.us-west-2.amazonaws.com/dev/contact",
      method: 'POST',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      data: JSON.stringify({
        "name": $('#nameInp').val(),
        "email": $('#emailInp').val(),
        "subject": $('#subjectInp').val(),
        "message": $('#msgInp').val()
      })
    })
      .done((response) => {
        $('#hideSubmit').fadeTo(500, 0, () => {
          $('#showSubmit')[0].style.zIndex = "2";
          $('#showSubmit')[0].style.opacity = "1";
        });
      })
      .fail((err) => { //show error page
        $('#hideSubmit').fadeTo(500, 0, () => {
          $('#showFail')[0].style.zIndex = "2";
          $('#showFail')[0].style.opacity = "1";
        });
      })

  }

})