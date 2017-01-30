"use strict";

;(function() {
	const config = require("./config").democracy;

	let votes = {};
	let movementHandler;
	let tallyInterval;

	function tallyVotes() {
		const talliedVotes = {
			forwards: 0,
			backwards: 0,
			right: 0,
			left: 0
		};
		for (const username in votes) {
			talliedVotes[votes[username]]++;
		}
		if (config.logTalliedVotes) {
			console.log("DEMOCRACY", talliedVotes);
		}
		let command;
		let maxVotes = 0;
		for (const voteCommand in talliedVotes) {
			if (talliedVotes[voteCommand] > maxVotes) {
				command = voteCommand;
				maxVotes = talliedVotes[voteCommand];
			}
		}
		if (command == null || movementHandler == null) {
			return;
		}
		votes = {};
		movementHandler(command);
	}

	function commandHandler(command, username) {
		votes[username] = command;
		if (tallyInterval == null) {
			tallyInterval = setInterval(tallyVotes, config.tallyDelay);
		}
	}

	function setMovementHandler(newMovementHandler) {
		movementHandler = newMovementHandler;
	}

	module.exports = {
		commandHandler,
		setMovementHandler
	};
}());
