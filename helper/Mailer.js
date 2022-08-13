const Users = require("./../models/Users");
const DefaultSettings = require("./../models/DefaultSettings");
const Admins = require("./../models/Admins");
class Mailer {
  constructor(userIds, msg, mailMessage) {
    this.userIds = userIds;
    this.msg = msg;
    this.mailMessage = mailMessage;
    this.mail().then(res => res).catch(err => {console.log(err)});
  }
  mail = async () => {
    try {
      const settings = await DefaultSettings.findOne();
      settings.isMailing = true;
      await settings.save();
      for (let i = 0; i < this.userIds.length; i++) {
        const user = await Users.findById(this.userIds[i]);
        await this.msg.send({chat_id: user.user.id, ...this.mailMessage});
      }
      settings.isMailing = false;
      await settings.save();
      const admins = await Admins.find();
      for (let i = 0; i < admins.length; i++) {
        if (admins[i].state.on === "home") {
          await this.msg.reply({chatId: admins[i].user.id, text: `Рассылка закончилась`});
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = Mailer;