exports.run = async function (Memer, msg, args) {
	if (!args[0]) {
		return Memer.reply('You gotta give me something to mock :eyes:')
	}

	const dumb = args.join(' ').replace(/c/gi, 'k').replace(/v/gi, 'c')
	const textArray = dumb.toLowerCase().split('')
	const done = textArray.map(capitalizeEven).join('')

	const mockimg = await Memer.snekfetch.get('https://pbs.twimg.com/media/DAU-ZPHUIAATuNy.jpg')

	msg.channel.createMessage(done, { file: mockimg.body, name: 'mock.jpg' })
}

function capitalizeEven (char, index) {
	if (index % 2 === 0) {
		return char.toUpperCase()
	}
	else {
		return char
	}
}