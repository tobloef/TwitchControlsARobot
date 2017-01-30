"use strict";

 ;(function() {
	const tmi = require("tmi.js");
	const config = require("./config").twitch;

	let commandHandler;

	function initialize() {
		const client = tmi.client(config);
		client.on("chat", onChat);
		connect(client);
	}

	function connect(client) {
		client.connect().then(function() {
			console.log("Connected!");
		}).then(function ping() {
			client.ping();
			setTimeout(ping, config.pingDelay);
		});
	}

	function onChat(channel, userstate, message, self) {
		if (self) {
			return;
		}
		if (userstate.username == null || userstate.username === "") {
			return;
		}
		if (commandHandler == null) {
			return;
		}
		for (const key in config.commands) {
			if (config.commands[key].indexOf(message.toLowerCase()) > -1) {
				if (config.logCommands) {
					console.log("TWITCH", userstate.username, key);
				}
				commandHandler(key, userstate.username);
			}
		}
	}

	function setCommandHandler(newCommandHandler) {
		commandHandler = newCommandHandler;
	}


	module.exports = {
		setCommandHandler,
		initialize
	};
}());
