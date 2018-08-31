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
$('#galleryMain')[0].style.paddingTop = $('#galleryHeader').height() / 2 + 'px';
window.onresize = () => {
  $('#galleryMain')[0].style.paddingTop = $('#galleryHeader').height() / 2 + 'px';
}

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
    PHOTO_DATA[category].map((currVal, index) => {
      appendImgs += `
      <div class="grid-item col-md-4 pr-md-5 pt-md-5 pb-3">
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
      <div class="grid gallery-wrapper clearfix"">
        <div class="col-md-4 grid-sizer"></div>
        ${appendImgs}

      </div>
    </div>
  </div>
  `

  $('#galleryMain').append(photoLayout);
  $('#galleryMain .row').hide().fadeIn(1500);
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });

  $grid.imagesLoaded( function() {
    clonedAnim[0].style.display = "none";
    $grid.masonry();
    // $('#galleryMain .row').fadeIn(1500);
  });

  // setTimeout(() => {
  //   $('.gallery-wrapper').masonry({
  //     itemSelector: '.grid-item',
  //     columnWidth: '.grid-sizer',
  //     percentPosition: true,
  //     transitionDuration: 0,
  //   });
  //   clonedAnim[0].style.display = "none";
  // }, 1500); //need to change timeout for more pictures

  if (window.matchMedia("(min-width: 992px)").matches) {
    $('#galleryMain')[0].style.paddingTop = $('#galleryHeader').height() / 2 + 'px';
  } else if (window.matchMedia("(min-width: 0px)").matches) {
    $('#galleryMain')[0].style.paddingTop = $('#galleryHeader').height() / 1.3 + 'px';
  }
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
      <div class="col-12 col-md-3 pt-2 pt-md-0 pb-5 align-self-end text-right order-12 order-md-1 imgCaption">
        ${currImgData}
      </div>
      <div class="col-12 col-md-9 pb-md-5 pr-md-5 align-self-end order-1 order-md-12" id="fullImgHeight">
        <div id="closePop">close</div>
        <img src="${currImg.src}" class="popImg pt-md-5">
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

function showVideos() {
  location.hash = `videos/`;

  $('#imgPopup')[0].style.display = "none"; //closes image popup
  $('#galleryMain').empty();
  let clonedAnim = $('#loadingAnim').clone();
  $('#galleryMain').append(clonedAnim);
  clonedAnim[0].style.display = "block";

  let videoLayout = `
  <div class="row">
    <div class="col-6 pt-5">
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/A1pzuN1zAPc" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-6 pr-md-5 pt-5 align-self-center">
      <div class="vidTitle">Kona x Hilo</div>
      <hr>
      <div class="vidInfo">
        location: Hilo/Kona, Hawaii
        <br/>
        date: 07-2017
      </div>
    </div>

    <div class="col-6 pb-3">
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/T4Kyx4fLWmE" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-6 pr-md-5 align-self-center">
      <div class="vidTitle">North Shore</div>
      <hr>
      <div class="vidInfo">
        location: Waimea Bay, Hawaii
        <br/>
        date: 08-2017
      </div>
    </div>

    <div class="col-6 pb-3">
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/ZrSAwheZXFI" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-6 pr-md-5 align-self-center">
      <div class="vidTitle">Makapu'u</div>
      <hr>
      <div class="vidInfo">
        location: Makapu'u/Alan Davis, Hawaii
        <br/>
        date: 08-2017
      </div>
    </div>

    <div class="col-6 pb-3">
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/xoa0R7lAXbQ" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-6 pr-md-5 align-self-center">
      <div class="vidTitle">Summer 2k17</div>
      <hr>
      <div class="vidInfo">
        location: Hawaii
        <br/>
        date: 08-2017
      </div>
    </div>

    <div class="col-6 pb-3">
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/LlkKIThaIm0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-6 pr-md-5 align-self-center">
      <div class="vidTitle">Barbers Point</div>
      <hr>
      <div class="vidInfo">
        location: Hawaii
        <br/>
        date: 08-2017
      </div>
    </div>

    <div class="col-6 pb-3">
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/xgE8mtRsNDg" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-6 pr-md-5 align-self-center">
      <div class="vidTitle">Smoke Bombs</div>
      <hr>
      <div class="vidInfo">
        location: Hawaii
        <br/>
        date: 02-2018
      </div>
    </div>

    <div class="col-6 pb-3">
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/uDKTwVzkKvM" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div class="col-6 pr-md-5 align-self-center">
      <div class="vidTitle">Wailuna</div>
      <hr>
      <div class="vidInfo">
        location: Hawaii
        <br/>
        date: 07-2017
      </div>
    </div>

  </div>
  `

  $('#galleryMain').append(videoLayout);
  $('#galleryMain .row').hide().delay(500).fadeIn(1000);
  setTimeout(() => {
    clonedAnim[0].style.display = "none";
  }, 500)
}