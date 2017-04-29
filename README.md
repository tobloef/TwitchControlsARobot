# Twitch Contols a Robot
This is the repository for the code running on the robot from [Twitch.tv/TwitchControlsARobot](https://www.twitch.tc/twitchcontrolsarobot).

TCAR (TwitchControlsARobot) is a tank tread robot controlled by the chat on a [Twitch.tv](https://www.twitch.tv/) channel. Users can enter commands into the chat and the robot will move accordingly. The robot responds to the following commands:

| Command   | Aliases           | Description      |
|-----------|-------------------|------------------|
| Forwards  | Forward, Go, F    | Drive forwards.  |
| Backwards | Backward, Back, B | Drive backwards. |
| Left      | L                 | Turn 90° left.   |
| Right     | R                 | Turn 90° right.  |

The robot can use two different modes when deciding how to handle chat commands, Anarchy or Democracy. In Anarchy mode the robot will try act on every new command. In Democracy mode the robot will count each command as a vote and act on the most requested command at a set interval.

## Parts
The robot is built with a Raspberry Pi Model B running a Node.js responsible for reading the Twitch chat and controlling the Rover 5 robot chasis using its GPIO pins. It also has a wireless wi-fi card for the Pi, so it can drive freely around, possibly connected to a phone hotspot. There's also an unknown motor board for controlling the motors in the chasis, but I found it in a big box of random electronics so I don't know the exact model. The whole thing is powered by a power bank for the Pi and 6 AA batteries for the motors. 

![The robot](http://i.imgur.com/dgjWUhul.jpg)
