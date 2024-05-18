function DetailsController(target) {
  this.target = target;
}

DetailsController.prototype.init = function () {
  var curTarget = document.body.querySelector(this.target);

  curTarget.addEventListener('toggle', function(e) {
    var parent = curTarget.parentNode;

    if (parent.open) {

    }
  });
}