function FirstAssistant() {
  /* this is the creator function for your scene assistant object. It will be passed all the 
     additional parameters (after the scene name) that were passed to pushScene. The reference
     to the scene controller (this.controller) has not be established yet, so any initialization
     that needs the scene controller should be done in the setup function below. */
}

FirstAssistant.prototype.setup = function () {
  /* this function is for setup tasks that have to happen when the scene is first created */

  /* use Mojo.View.render to render view templates and add them to the scene, if needed */

  /* setup widgets here */
  this.controller.setupWidget(
    "manualButton",
    this.attributes = {},
    this.model = {
      label: "Manual Mode",
      disabled: false,
    }
  );

  this.controller.setupWidget(
    "autoButton",
    this.attributes = {},
    this.model = {
      label: "Automatic Mode",
      disabled: false,
    }
  );

  this.controller.setupWidget(
    "sunsetButton",
    this.attributes = {},
    this.model = {
      label: "Start Sunset",
      disabled: false,
    }
  );

  /* add event handlers to listen to events from widgets */

  this.manualHandler = this.goToManual.bindAsEventListener(this);
  this.autoHandler = this.setAuto.bindAsEventListener(this);
  this.sunsetHandler = this.setSunset.bindAsEventListener(this);

  Mojo.Event.listen(this.controller.get("manualButton"), Mojo.Event.tap, this.manualHandler);
  Mojo.Event.listen(this.controller.get("autoButton"), Mojo.Event.tap, this.autoHandler);
  Mojo.Event.listen(this.controller.get("sunsetButton"), Mojo.Event.tap, this.sunsetHandler);
};

FirstAssistant.prototype.activate = function (event) {
  /* put in event handlers here that should only be in effect when this scene is active. For
     example, key handlers that are observing the document */
};

FirstAssistant.prototype.deactivate = function (event) {
  /* remove any event handlers you added in activate and do any other cleanup that should happen before
     this scene is popped or another scene is pushed on top */
};

FirstAssistant.prototype.cleanup = function (event) {
  Mojo.Event.stopListening(this.controller.get("manualButton"), Mojo.Event.tap, this.manualHandler);
  Mojo.Event.stopListening(this.controller.get("autoButton"), Mojo.Event.tap, this.autoHandler);
  Mojo.Event.stopListening(this.controller.get("sunsetButton"), Mojo.Event.tap, this.sunsetHandler);
};

FirstAssistant.prototype.goToManual = function (event) {
  this.controller.stageController.pushScene("manual");
}

FirstAssistant.prototype.setAuto = function (event) {
  var request = new Ajax.Request("http://192.168.7.244/auto", {
    method: "get",
    evalJSON: "false"
  });
}

FirstAssistant.prototype.setSunset = function (event) {
  var request = new Ajax.Request("http://192.168.7.244/sunset", {
    method: "get",
    evalJSON: "false"
  });
}