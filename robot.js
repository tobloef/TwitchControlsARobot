"use strict;"

;(function() {
	const gpio = require("rpi-gpio");
	const config = require("./config").robot;

	function initialize() {
		gpio.setup(config.pins.rightForward, gpio.DIR_OUT);
		gpio.setup(config.pins.leftForward, gpio.DIR_OUT);
		gpio.setup(config.pins.rightBackward, gpio.DIR_OUT);
		gpio.setup(config.pins.leftBackward, gpio.DIR_OUT);
	}

	function movementHandler(command, callback) {
		switch (command) {
			case "forwards":
				if (config.logMovements) {
					console.log("ROBOT", "Moving forward");
				}
				gpio.write(config.pins.rightForward, true);
				gpio.write(config.pins.leftForward, true);
				break;
			case "backwards":
				if (config.logMovements) {
					console.log("ROBOT", "Moving backward");
				}
				gpio.write(config.pins.rightBackward, true);
				gpio.write(config.pins.leftBackward, true);
				break;
			case "right":
				if (config.logMovements) {
					console.log("ROBOT", "Turning right");
				}
				gpio.write(config.pins.rightBackward, true);
				gpio.write(config.pins.leftForward, true);
				break;
			case "left":
				if (config.logMovements) {
					console.log("ROBOT", "Turning left");
				}
				gpio.write(config.pins.rightForward, true);
				gpio.write(config.pins.leftBackward, true);
				break;
		}
		setTimeout(function() {
			turnOffPins(callback);
		}, config.driveTime);
	}

	function turnOffPins(callback) {
		gpio.write(config.pins.rightForward, false);
		gpio.write(config.pins.leftForward, false);
		gpio.write(config.pins.rightBackward, false);
		gpio.write(config.pins.leftBackward, false);
		if (callback == null) {
			return;
		}
		callback();
	}

	module.exports = {
		movementHandler,
		initialize
	};
}());
