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

// Initialize Masonry


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

$('#gallerySub').on('click', () => {
  location.reload();
})

function shuffle (array) { //shuggle images
  let i = 0;
  let j = 0;
  let temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

//console.log(PHOTO_DATA);
function showPictures (category, folder) {
  $('#galleryMain').empty();
  let clonedAnim = $('#loadingAnim').clone()
  $('#galleryMain').append(clonedAnim);
  clonedAnim[0].style.display = "block";

  let appendImgs = ``;
  shuffle(PHOTO_DATA[category]);
  PHOTO_DATA[category].map((currVal) => {
    //console.log(currVal);
    appendImgs += `
    <div class="col-md-4 pr-md-5 pt-md-5 pb-3 grid-item">
      <img class="img-fluid" src="../img/${folder}/${currVal.img}">
    </div>
    `;
  })
  
  let photoLayout =
  `
  <div class="row pt-2 pb-5">
    <div class="col-lg-12">
      <div class="gallery-wrapper clearfix">
        <div class="col-md-4 grid-sizer"></div>

        ${appendImgs}
      </div>
    </div>
  </div>
  `

  $('#galleryMain').append(photoLayout);
  $('#galleryMain .row').hide().delay(1500).fadeIn(1500);

  setTimeout(() => {
    $('.gallery-wrapper').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      transitionDuration: 0,
    });
    clonedAnim[0].style.display = "none";
  }, 1500); //need to change timeout for more pictures

}