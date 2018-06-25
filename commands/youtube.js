const Command = require('./command')

module.exports = class youtube extends Command {

  static match (message) {
    console.log('checking youtube')
    return message.content.startsWith('r!youtube')
  }


  static action (message) {
    let args = message.content.split(' ')
    args.shift()
    message.delete()
    message.reply('https://www.youtube.com/results?search_query=' + args.join('+'))
  }

}
