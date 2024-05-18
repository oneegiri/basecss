function DialogController(target, trigger, modal = true) {
    this.target = target;
    this.trigger = trigger;
    this.modal = modal;
}

DialogController.prototype.init = function () {
    var curTarget = document.body.querySelector(this.target);
    //Close the dialog when the user clicks outside of it.
    curTarget.addEventListener("click", function (event) {
        var rect = dialog.getBoundingClientRect();
        var isInDialog =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
        if (!isInDialog) {
            dialog.close();
        }
    });

    //Open/Close the dialog when the user clicks on the trigger
    var curTrigger = document.body.querySelector(this.trigger);
    
    curTrigger.addEventListener('click', function() {
      if (this.curTarget.open) {
        dialog.close();
      } else {
        if (this.modal) {
          dialog.showModal();
        } else {
          dialog.show();
        }
      }
    });
};

DialogController.prototype.onClose = function() {

}

DialogController.prototype.onShow = function() {

}

DialogController.prototype.onShowModal = function() {

}
