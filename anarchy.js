"use strict";

;(function() {
	const config = require("./config").anarchy;

	const commandQueue = [];
	let processingQueue = false;
	let movementHandler;

	function commandHandler(command, username) {
		commandQueue.push({
			command,
			timestamp: Date.now()
		});
		if (!processingQueue) {
			processingQueue = true;
			nextCommand();
		}
	}	

	function nextCommand() {
		if (commandQueue.length === 0) {
			processingQueue = false;
			return;
		}
		const queueItem = commandQueue.shift();
		if (Date.now() - queueItem.timestamp < config.maxCommandAge) {
			if (movementHandler != null) {
				movementHandler(queueItem.command, nextCommand);
				return;
			} else {
				console.log("MovementHandler is null");
			}
		} 
		nextCommand();
	}

	function setMovementHandler(newMovementHandler) {
		movementHandler = newMovementHandler;
	}

	module.exports = {
		commandHandler,
		setMovementHandler
	}
}());
