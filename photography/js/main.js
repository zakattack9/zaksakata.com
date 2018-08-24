let overlayOpen = false;
$('#sideMenu').on('click', () => {
  if (overlayOpen) {
    overlayOpen = false;

    $('#overlay')[0].style.right = "-30%";
    $('#homeText')[0].style.left = "0";
    $('#socialLinks')[0].style.left = "0";

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
    $('#homeText')[0].style.left = "-15%";
    $('#socialLinks')[0].style.left = "-15%";

    $('#line1')[0].style.marginBottom = "-3px";
    $('#line2')[0].style.marginBottom = "-3px";
    $('#line3')[0].style.opacity = "0";

    $('#line1')[0].style.transform = "rotate(45deg)";
    $('#line2')[0].style.transform = "rotate(-45deg)";

    $('#sideMenu').removeClass('overlayClose');
    $('#sideMenu').addClass('overlayOpen');
  }
  
})