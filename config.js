"use strict";

;(function() {
	module.exports = {
		twitch: {
			options: {
				debug: false
			},
			connection: {
				reconnect: true,
				maxReconnectInterval: 5,
				reconnectDecay: 1,
				timeout: 1000 * 60 * 60
			},
			channels: ["twitchcontrolsarobot"],
			commands: {
				forwards: ["forwards", "forward", "go", "f"],
				backwards: ["backwards", "backward", "back", "b"],
				right: ["right", "r"],
				left: ["left", "l"]
			},
			pingDelay: 30 * 1000,
			logCommands: true
		},
		robot: {
			pins: {
				rightForward: 19,
				leftForward: 23,
				rightBackward: 15,
				leftBackward: 21
			},
			driveTime: 1000 * 1.5,
			logMovements: true
		},
		anarchy: {
			maxCommandAge: 2 * 1000
		},
		democracy: {
			tallyDelay: 15 * 1000,
			logTalliedVotes: true
		},
		useDemocracy: false
	};
}());
