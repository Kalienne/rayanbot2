const Command = require('./command')

module.exports = class Random extends Command {

  static match (message) {
    return message.content.startsWith('r!random')
  }


  static action (message) {
    let voiceChannel = message.guild.channels
    .filter(function (channel) { return channel.type === 'voice'})
    .first()

  voiceChannel
  .join()
  .then(function (connection) {
    connection.playFile("./random.mp3")

  })

  }

}
