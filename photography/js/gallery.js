AOS.init({
  // Global settings
  disable: false, //does not disable on window resize
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
  anchorPlacement: 'top-center',
});

let overlayOpen = false;
$('#sideMenu').on('click', () => {
  if (overlayOpen) {
    overlayOpen = false;

    $('#overlay')[0].style.right = "-30%";

    $('#line1')[0].style.marginBottom = "13px";
    $('#line2')[0].style.marginBottom = "13px";
    $('#line3')[0].style.opacity = "1";

    $('#line1')[0].style.transform = "rotate(0deg)";
    $('#line2')[0].style.transform = "rotate(0deg)";

    $('#sideMenu').removeClass('overlayOpen');
    $('#sideMenu').addClass('overlayClose');

  } else {
    overlayOpen = true;

    $('#overlay')[0].style.right = "0";

    $('#line1')[0].style.marginBottom = "-3px";
    $('#line2')[0].style.marginBottom = "-3px";
    $('#line3')[0].style.opacity = "0";

    $('#line1')[0].style.transform = "rotate(45deg)";
    $('#line2')[0].style.transform = "rotate(-45deg)";

    $('#sideMenu').removeClass('overlayClose');
    $('#sideMenu').addClass('overlayOpen');
  }
  
})