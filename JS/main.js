var listImages = Array.from(document.querySelectorAll(".row .inner img"));
var mainModalBox = document.getElementById("mainModal");
var closeModalIcon = document.querySelector(".fa-xmark");
var arrowRightIcon = document.querySelector(".fa-circle-arrow-right");
var arrowLeftIcon = document.querySelector(".fa-circle-arrow-left");
var modalImage = document.getElementById("modalImage");

var clickedImageIndex;
for (var i = 0; i < listImages.length; i++) {
  listImages[i].addEventListener("click", function (e) {
    clickedImageIndex = listImages.indexOf(e.target);
    hideArrowIcon();
    var clickedImgSrc = e.target.getAttribute("src");
    modalImage.setAttribute("src", clickedImgSrc);
    openModal();
  });
}

closeModalIcon.addEventListener("click", function () {
  closeMOdal();
});

arrowRightIcon.addEventListener("click", function () {
  clickedImageIndex++;
  hideArrowIcon();
  var clickedImgSrc = listImages[clickedImageIndex].getAttribute("src");

  modalImage.setAttribute("src", clickedImgSrc);
});

arrowLeftIcon.addEventListener("click", function () {
  clickedImageIndex--;
  hideArrowIcon();
  var clickedImgSrc = listImages[clickedImageIndex].getAttribute("src");
  modalImage.setAttribute("src", clickedImgSrc);
});

mainModalBox.addEventListener("click", function (e) {
  if (e.target == mainModalBox) {
    closeMOdal();
  }
});

function hideArrowIcon() {
  if (clickedImageIndex == listImages.length - 1) {
    arrowRightIcon.classList.add("d-none");
  } else {
    arrowRightIcon.classList.remove("d-none");
  }

  if (clickedImageIndex == 0) {
    arrowLeftIcon.classList.add("d-none");
  } else {
    arrowLeftIcon.classList.remove("d-none");
  }
}
function openModal() {
  mainModalBox.classList.remove("d-none");
}
function closeMOdal() {
  mainModalBox.classList.add("d-none");
}
