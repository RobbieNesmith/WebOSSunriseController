function ManualAssistant() {
  /* this is the creator function for your scene assistant object. It will be passed all the 
     additional parameters (after the scene name) that were passed to pushScene. The reference
     to the scene controller (this.controller) has not be established yet, so any initialization
     that needs the scene controller should be done in the setup function below. */
}

ManualAssistant.prototype.setup = function () {
  /* this function is for setup tasks that have to happen when the scene is first created */

  /* use Mojo.View.render to render view templates and add them to the scene, if needed */

  /* setup widgets here */
  this.controller.setupWidget(
    "redButton",
    this.attributes = {},
    this.model = {
      label: "Set to Red",
      disabled: false,
    }
  );

  this.controller.setupWidget(
    "greenButton",
    this.attributes = {},
    this.model = {
      label: "Set to Green",
      disabled: false,
    }
  );

  this.controller.setupWidget(
    "blueButton",
    this.attributes = {},
    this.model = {
      label: "Set to Blue",
      disabled: false,
    }
  );

  this.controller.setupWidget(
    "whiteButton",
    this.attributes = {},
    this.model = {
      label: "Set to White",
      disabled: false,
    }
  );

  this.controller.setupWidget(
    "offButton",
    this.attributes = {},
    this.model = {
      label: "Turn Off Lights",
      disabled: false,
    }
  );

  this.controller.setupWidget(
    "backButton",
    this.attributes = {},
    this.model = {
      label: "Back",
      disabled: false,
    }
  );

  /* add event handlers to listen to events from widgets */

  this.redHandler = this.setColor({ red: 255, green: 0, blue: 0, white: 0 }).bindAsEventListener(this);
  this.greenHandler = this.setColor({ red: 0, green: 255, blue: 0, white: 0 }).bindAsEventListener(this);
  this.blueHandler = this.setColor({ red: 0, green: 0, blue: 255, white: 0 }).bindAsEventListener(this);
  this.whiteHandler = this.setColor({ red: 0, green: 0, blue: 0, white: 255 }).bindAsEventListener(this);
  this.offHandler = this.setColor({ red: 0, green: 0, blue: 0, white: 0 }).bindAsEventListener(this);
  this.backHandler = this.goBack.bindAsEventListener(this);

  Mojo.Event.listen(this.controller.get("redButton"), Mojo.Event.tap, this.redHandler);
  Mojo.Event.listen(this.controller.get("greenButton"), Mojo.Event.tap, this.greenHandler);
  Mojo.Event.listen(this.controller.get("blueButton"), Mojo.Event.tap, this.blueHandler);
  Mojo.Event.listen(this.controller.get("whiteButton"), Mojo.Event.tap, this.whiteHandler);
  Mojo.Event.listen(this.controller.get("offButton"), Mojo.Event.tap, this.offHandler);
  Mojo.Event.listen(this.controller.get("backButton"), Mojo.Event.tap, this.backHandler);
};

ManualAssistant.prototype.activate = function (event) {
  /* put in event handlers here that should only be in effect when this scene is active. For
     example, key handlers that are observing the document */
};

ManualAssistant.prototype.deactivate = function (event) {
  /* remove any event handlers you added in activate and do any other cleanup that should happen before
     this scene is popped or another scene is pushed on top */
};

ManualAssistant.prototype.cleanup = function (event) {
  Mojo.Event.stopListening(this.controller.get("redButton"), Mojo.Event.tap, this.redHandler);
  Mojo.Event.stopListening(this.controller.get("greenButton"), Mojo.Event.tap, this.greenHandler);
  Mojo.Event.stopListening(this.controller.get("blueButton"), Mojo.Event.tap, this.blueHandler);
  Mojo.Event.stopListening(this.controller.get("whiteButton"), Mojo.Event.tap, this.whiteHandler);
  Mojo.Event.stopListening(this.controller.get("offButton"), Mojo.Event.tap, this.offHandler);
  Mojo.Event.stopListening(this.controller.get("backButton"), Mojo.Event.tap, this.backHandler);
};

/**
@param {{red: number, green: number, blue: number, white: number}} color
@return {function (Mojo.Event): void}
*/
ManualAssistant.prototype.setColor = function (color) {
  return function (event) {
    var request = new Ajax.Request("http://192.168.7.244/manual?red=" + color.red + "&green=" + color.green + "&blue=" + color.blue + "&white=" + color.white, {
      method: "get",
      evalJSON: "false"
    });
  }
}

ManualAssistant.prototype.goBack = function (event) {
  this.controller.stageController.popScene();
}