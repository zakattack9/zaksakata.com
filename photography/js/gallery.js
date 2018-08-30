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
  if (category === 'all') {
    let allImgs = [];

    PHOTO_DATA.map((currVal, index) => {
      currVal.map((currVal) => {
        allImgs.push([currVal, PHOTO_NAMES[index], index]);
      });
    });

    shuffle(allImgs);
    allImgs.map((currVal) => {
      appendImgs += `
      <div class="col-md-4 pr-md-5 pt-md-5 pb-3 grid-item">
        <img class="img-fluid singleImg" src="../img/${currVal[1]}/${currVal[0].img}">
  
        <span class="vidData">
        </span>

        <span class="imgData">
          Location: ${currVal[0].location}<br/>
          Date: ${currVal[0].date}<br/><br/>
          <span style="font-style: italic">${currVal[0].id}/${PHOTO_DATA[currVal[2]].length}</span>
        </span>
      </div>
      `;
    });

  } else if (folder === 'smoke') {
    shuffle(PHOTO_DATA[category]);
    PHOTO_DATA[category].map((currVal) => {
      if ([2, 3, 5, 9, 12, 15, 16, 17, 27, 28, 29, 33, 43, 46].indexOf(currVal.id) > -1) {
        appendImgs += `
        <div class="col-md-4 pr-md-5 pt-md-5 pb-3 grid-item">
          <img class="img-fluid singleImg" src="../img/${folder}/${currVal.img}">

          <span class="vidData">
            <video muted loop class="animSmoke pt-5">
              <source src="../img/smokeAnimated/${currVal.id}.mp4" type="video/mp4">
            </video>
          </span>

          <span class="imgData">
            <div class="animateBtn mb-3">Animate!</div><br/>
            Location: ${currVal.location}<br/>
            Date: ${currVal.date}<br/><br/>
            <span style="font-style: italic">${currVal.id}/${PHOTO_DATA[category].length}</span>
          </span>
        </div>
        `;
      } else {
        appendImgs += `
        <div class="col-md-4 pr-md-5 pt-md-5 pb-3 grid-item">
          <img class="img-fluid singleImg" src="../img/${folder}/${currVal.img}">
  
          <span class="vidData">
          </span>

          <span class="imgData">
            Location: ${currVal.location}<br/>
            Date: ${currVal.date}<br/><br/>
            <span style="font-style: italic"><span class="checkId">${currVal.id}</span>/${PHOTO_DATA[category].length}</span>
          </span>
        </div>
        `; 
      }

    })
  } else {
    shuffle(PHOTO_DATA[category]);
    PHOTO_DATA[category].map((currVal) => {
      appendImgs += `
      <div class="col-md-4 pr-md-5 pt-md-5 pb-3 grid-item">
        <img class="img-fluid singleImg" src="../img/${folder}/${currVal.img}">
  
        <span class="vidData">
        </span>

        <span class="imgData">
          Location: ${currVal.location}<br/>
          Date: ${currVal.date}<br/><br/>
          <span style="font-style: italic">${currVal.id}/${PHOTO_DATA[category].length}</span>
        </span>
      </div>
      `;
    })
  
  }

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
  let currVid = $(currImg).siblings('.vidData')[0].innerHTML;

  $('#imgPopup').empty();
  $('#imgPopup')[0].style.display = "block";

  $('#imgPopup').append(`
    <div class="row h-100">
      <div class="col-3 pb-5 align-self-end text-right imgCaption">
        ${currImgData}
      </div>
      <div class="col-9 pb-5 pr-5 h-100 align-self-end">
        <div id="closePop">close</div>
        <img src="${currImg.src}" class="popImg pt-5">
        ${currVid}
      </div>
    </div>
  `)
})

$(document).on('click', '#closePop', () => {
  $('#imgPopup')[0].style.display = "none";
})

$(document).on('click', '.animateBtn', (e) => {
  let findVid = $(e.target).closest('.row').find('.animSmoke')[0];
  let findImg = $(e.target).closest('.row').find('.popImg')[0];
  
  findImg.style.display = "none";
  findVid.style.display = "block";
  findVid.play();
})