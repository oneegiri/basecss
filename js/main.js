document.addEventListener("DOMContentLoaded", function () {
  var megamenu = document.body.querySelector(".megamenu");
  var megamenuButton = megamenu.querySelector("#megamenu-button");
  megamenuButton.addEventListener("click", function (e) {
    megamenu.classList.toggle("active");
  });
});
