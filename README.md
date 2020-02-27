# Set up working directory
1. Download npm and node.js
2. Setup a new directory and open cmd in that folder
3. Enter `npm init` and `npm install discord.js`
4. Copy sources from GitHub into that directory

# Creating new Commands
Create a new file in the folder `commands`. The name of the file will be the command name. Use the template below to initialize your command. 

The command logic will be defined in `exports.run`.
Information in `exports.help` should be filled, so the `!help` command displays them correctly.
Additional settings for the command are defined `exports.conf`.

### Command template
In Visual Studio Code: Open javascript.json (`Ctrl + Shift + P`) and add the following snippet.
The template can be used by typing discord.exportKS (`Ctrl + Shift + P`)
```
"Discord kS Command": {
	"prefix": "discord.exportKS",
	"body": [
		"const Discord = require('discord.js');",
		"",
		"exports.run = async (client, msg, args) => {",
		"\t$1",
		"};",
		"",
		"exports.conf = {",
		"\tenabled: true,",
		"\tallowDMs: false,",
		"\taliases: [],",
		"\tdelete: false",
		"\tpermLevel: 0",
		"};",
		"",
		"exports.help = {",
		"\tname: '',",
		"\tdescription: '',",
		"\tusage: '\\`$2\\`'",
		"};"
	],
	"description": "Template for Discord exports (i.e. commands)"
}```


# kS-Discord-bot
A Discord Bot for TSG Clan
