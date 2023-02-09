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

  Mojo.Event.listen(this.controller.get("redButton"), Mojo.Event.tap, this.setRed);
  Mojo.Event.listen(this.controller.get("greenButton"), Mojo.Event.tap, this.setGreen);
  Mojo.Event.listen(this.controller.get("blueButton"), Mojo.Event.tap, this.setBlue);
  Mojo.Event.listen(this.controller.get("whiteButton"), Mojo.Event.tap, this.setWhite);
  Mojo.Event.listen(this.controller.get("offButton"), Mojo.Event.tap, this.setOff);
  Mojo.Event.listen(this.controller.get("autoButton"), Mojo.Event.tap, this.setAuto);
  Mojo.Event.listen(this.controller.get("sunsetButton"), Mojo.Event.tap, this.setSunset);
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
  /* this function should do any cleanup needed before the scene is destroyed as 
     a result of being popped off the scene stack */
};

FirstAssistant.prototype.setRed = function (event) {
  var request = new Ajax.Request("http://192.168.7.244/manual?red=255&green=0&blue=0&white=0", {
    method: "get",
    evalJSON: "false"
  });
}

FirstAssistant.prototype.setGreen = function (event) {
  var request = new Ajax.Request("http://192.168.7.244/manual?red=0&green=255&blue=0&white=0", {
    method: "get",
    evalJSON: "false"
  });
}

FirstAssistant.prototype.setBlue = function (event) {
  var request = new Ajax.Request("http://192.168.7.244/manual?red=0&green=0&blue=255&white=0", {
    method: "get",
    evalJSON: "false"
  });
}

FirstAssistant.prototype.setWhite = function (event) {
  var request = new Ajax.Request("http://192.168.7.244/manual?red=0&green=0&blue=0&white=255", {
    method: "get",
    evalJSON: "false"
  });
}

FirstAssistant.prototype.setOff = function (event) {
  var request = new Ajax.Request("http://192.168.7.244/manual?red=0&green=0&blue=0&white=0", {
    method: "get",
    evalJSON: "false"
  });
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