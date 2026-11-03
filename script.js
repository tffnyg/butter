/* ==========================================================
   OPTIONAL: lets a normal mouse wheel scroll sideways.
   (Trackpads already scroll sideways without this.)
   Delete this whole block if you don't want it.
   ========================================================== */
window.addEventListener("wheel", function (e) {
  // do nothing if the mouse is over a popup, so the page behind stays put
  if (e.target.closest(".popup, .credits-overlay")) {
    return;
  }
  if (window.innerWidth > 800) {
    window.scrollBy(e.deltaY, 0);
  }
});

/* ==========================================================
   OPTIONAL: stops videos when you close a popup.
   It reloads the video, so it goes back to the start.
   Delete this block if you don't use videos.
   ========================================================== */
var toggles = document.querySelectorAll(".toggle");
toggles.forEach(function (box) {
  box.addEventListener("change", function () {
    if (!box.checked && box.closest(".post")) {
      var videos = box.parentElement.querySelectorAll("iframe");
      videos.forEach(function (video) {
        video.src = video.src;
      });
    }
  });
});