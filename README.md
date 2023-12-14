# DiscordJS v14 Bot Template

## Setup
1. Clone the repository with `git clone https://github.com/FrostemanNeogard/DiscordBotTemplate`
2. Create a `.env` file in the root of the newly created folder and add the following variables:
```
TOKEN=Your bot token
PREFIX=Your preferred command prefix, for example "/".
OWNERID=Your discord user ID.
```
3. Run the bot with `node {path_to_index.js}`

To add commands, create a new `.js` file in the `commands` folder. You can optionally add subfolders and place the commands in those subfolders (similar to the provided "ping" command.)
There is a provided `command_template` file which you can copy and paste into your new command, just make sure to update the "name" and "category" keys.

## Notes
This project is somewhat old and is not being maintained, though it still works as of December 14th 2023.
