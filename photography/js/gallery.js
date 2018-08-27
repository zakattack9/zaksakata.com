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

//pushes base state to URL
history.pushState({ selectedFolder: 'gallery' }, 'newtitle', `/photography/gallery/`);

$('#imgPopup')[0].style.paddingTop = $('#galleryHeader').height() + 'px';

$('#gallerySub').on('click', () => {
  window.location = "../gallery/";
});

function shuffle(array) { //shuggle images
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
function showPictures(category, folder) {
  /*let historyObj = {
    selectedCategory: category,
    selectedFolder: folder
  }*/
  //history.pushState(historyObj, 'newtitle', `/photography/gallery/${folder}`);\
  location.hash = `${folder}/`;

  $('#imgPopup')[0].style.display = "none"; //closes image popup
  $('#galleryMain').empty();
  let clonedAnim = $('#loadingAnim').clone();
  $('#galleryMain').append(clonedAnim);
  clonedAnim[0].style.display = "block";

  let appendImgs = ``;
  shuffle(PHOTO_DATA[category]);
  PHOTO_DATA[category].map((currVal) => {
    //console.log(currVal);
    appendImgs += `
    <div class="col-md-4 pr-md-5 pt-md-5 pb-3 grid-item">
      <img class="img-fluid singleImg" src="../img/${folder}/${currVal.img}">

      <span class="imgData">
        Location: ${currVal.location}<br/>
        Date: ${currVal.date}<br/><br/>
        <span style="font-style: italic">${currVal.id}/${PHOTO_DATA[category].length}</span>
      </span>
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

//allows user to use back button; also changes URL
// $(window).on('popstate', function(e){
//   console.log(e.originalEvent.state.selectedFolder);
//   let destination = e.originalEvent.state.selectedFolder;
//   //console.log(e.target.location.pathname);
//   if (destination === 'gallery') {
//     //location.reload();
//     window.location = "../gallery/";
//   } else {
//     showPictures(destination.selectedCategory, destination.selectedFolder);
//   }
// });

$(window).on('popstate', function (e) {
  //console.log(e.originalEvent.state);
  if (e.originalEvent.state !== null) {
    let destination = e.originalEvent.state.selectedFolder;
    if (destination === 'gallery') {
      //location.reload();
      window.location = "../gallery/";
    }
  }
});

//functionality for expanding up single images
$(document).on('click', '.singleImg', (e) => {
  let currImg = e.target;
  let currImgData = $(currImg).siblings('.imgData')[0].innerHTML;
  $('#imgPopup').empty();
  //console.log($(currImg).siblings('.imgData')[0].innerHTML);
  $('#imgPopup')[0].style.display = "block";

  $('#imgPopup').append(`
    <div class="row h-100">
      <div class="col-3 pb-5 align-self-end text-right imgCaption">
        ${currImgData}
      </div>
      <div class="col-9 pb-5 pr-5 h-100 align-self-end">
        <div id="closePop">close</div>
        <img src="${currImg.src}" class="popImg pt-5">
      </div>
    </div>
  `)
})

$(document).on('click', '#closePop', () => {
  $('#imgPopup')[0].style.display = "none";
})