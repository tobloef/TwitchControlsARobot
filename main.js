"use strict";

;(function() {
	const config = require("./config");
	const twitch = require("./twitch");
	const robot = require("./robot");
	const democracy = require("./democracy");
	const anarchy = require("./anarchy");

	function initialize() {
		console.log("Initializing...");
		twitch.initialize();
		robot.initialize();
		const mode = config.useDemocracy ? democracy : anarchy;
		twitch.setCommandHandler(mode.commandHandler);
		mode.setMovementHandler(robot.movementHandler);
	}

	initialize();
}());
