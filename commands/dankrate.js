exports.run = function (undefined, msg) {
	msg.channel.createMessage(`I rate you a ${Math.floor(Math.random() * 100 + 1)}/100 on the dank scale.`)
}
