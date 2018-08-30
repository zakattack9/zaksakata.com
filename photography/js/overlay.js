//Media Queries for Overlay
function responsive () {

  /* Smartphone Portrait Mode */
  if (window.matchMedia("(min-width: 0px)").matches) {
    function closeOverlay() {
      overlayOpen = false;
    
      $('#darken').fadeTo(400, 0, () => {
        $('#darken')[0].style.display = "none";
      });
    
      $('#overlay')[0].style.width = "0";
    
      $('#line1')[0].style.marginBottom = "13px";
      $('#line2')[0].style.marginBottom = "13px";
      $('#line3')[0].style.opacity = "1";
    
      $('#line1')[0].style.transform = "rotate(0deg)";
      $('#line2')[0].style.transform = "rotate(0deg)";
    
      $('#sideMenu').removeClass('overlayOpen');
      $('#sideMenu').addClass('overlayClose');
    }
    
    $('#darken').on('click', () => { //closes overlay if user clicks outside of overlay
      closeOverlay();
    })
    
    let overlayOpen = false;
    $('#sideMenu').on('click', () => {
      if (overlayOpen) {
        closeOverlay();
      } else {
        overlayOpen = true;
    
        $('#darken')[0].style.display = "block";
        $('#darken').fadeTo(400, 0.7);
    
        $('#overlay')[0].style.width = "65%";
    
        $('#line1')[0].style.marginBottom = "-3px";
        $('#line2')[0].style.marginBottom = "-3px";
        $('#line3')[0].style.opacity = "0";
    
        $('#line1')[0].style.transform = "rotate(45deg)";
        $('#line2')[0].style.transform = "rotate(-45deg)";
    
        $('#sideMenu').removeClass('overlayClose');
        $('#sideMenu').addClass('overlayOpen');
      }
    
    });
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
    function closeOverlay() {
      overlayOpen = false;
    
      $('#darken').fadeTo(400, 0, () => {
        $('#darken')[0].style.display = "none";
      });
    
      $('#overlay')[0].style.right = "-30%";
    
      $('#line1')[0].style.marginBottom = "13px";
      $('#line2')[0].style.marginBottom = "13px";
      $('#line3')[0].style.opacity = "1";
    
      $('#line1')[0].style.transform = "rotate(0deg)";
      $('#line2')[0].style.transform = "rotate(0deg)";
    
      $('#sideMenu').removeClass('overlayOpen');
      $('#sideMenu').addClass('overlayClose');
    }
    
    $('#darken').on('click', () => { //closes overlay if user clicks outside of overlay
      closeOverlay();
    })
    
    let overlayOpen = false;
    $('#sideMenu').on('click', () => {
      if (overlayOpen) {
        closeOverlay();
      } else {
        overlayOpen = true;
    
        $('#darken')[0].style.display = "block";
        $('#darken').fadeTo(400, 0.7);
    
        $('#overlay')[0].style.right = "0";
    
        $('#line1')[0].style.marginBottom = "-3px";
        $('#line2')[0].style.marginBottom = "-3px";
        $('#line3')[0].style.opacity = "0";
    
        $('#line1')[0].style.transform = "rotate(45deg)";
        $('#line2')[0].style.transform = "rotate(-45deg)";
    
        $('#sideMenu').removeClass('overlayClose');
        $('#sideMenu').addClass('overlayOpen');
      }
    
    });
  }

  /* Extra large devices (large desktops, 1200px and up) */
  if (window.matchMedia("(min-width: 1200px)").matches) {

  }
}
responsive(); //determine what to enable/disable on load

$(window).resize(() => {
  responsive();
});