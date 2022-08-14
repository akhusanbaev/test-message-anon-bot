const {archiveTelegramChannel} = require("./config");
const deleteCallbackQuery = (bot, query) => async () => {
  try {
    return await bot.deleteMessage(query.message.chat.id, query.message.message_id);
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  replyMessage: (bot, msg) => async ({
    chatId, text, messageId, caption, parse_mode, keyboard, inline_keyboard, one_time_keyboard, fromChatId,
    telegramMessage, params, chat_id
  }) => {
    try {
      if (telegramMessage) {
        if (params.text) {
          const text = params.text;
          const options = {};
          if (params.entities.length) options.entities = params.entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendMessage(chat_id, text, options==={}?null:options);
        }
        if (params.photo) {
          const photo = params.photo;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendPhoto(chat_id, photo, options==={}?null:options);
        }
        if (params.video) {
          const video = params.video;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendVideo(chat_id, video, options==={}?null:options);
        }
        if (params.audio) {
          const audio = params.audio;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendAudio(chat_id, audio, options==={}?null:options);
        }
        if (params.animation) {
          const animation = params.animation;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendAnimation(chat_id, animation, options==={}?null:options);
        }
        if (params.document) {
          const document = params.document;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendDocument(chat_id, document, options==={}?null:options);
        }
        if (params.video_note) {
          const video_note = params.video_note;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendVideoNote(chat_id, video_note, options==={}?null:options);
        }
        if (params.voice) {
          const voice = params.voice;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendVoice(chat_id, voice, options==={}?null:options);
        }
        if (params.phone_number) {
          const phone_number = params.phone_number;
          const first_name = params.first_name;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendContact(chat_id, phone_number, first_name, options==={}?null:options);
        }
        if (params.emoji) {
          const options = {};
          options.emoji = params.emoji;
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendDice(chat_id, options==={}?null:options);
        }
        if (params.options.length) {
          const question = params.question;
          const options = params.options;
          const opts = {};
          if (params.options.length) opts.options = params.options;
          if (params.entities.length) opts.entities = params.entities;
          if (params.caption_entities.length) opts.caption_entities = params.caption_entities;
          if (params.media.length) opts.media = params.media;
          if (params.explanation_entities.length) opts.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendPoll(chat_id, question, options, opts==={}?null:opts);
        }
        if (params.address) {
          const latitude = params.latitude;
          const longitude = params.longitude;
          const title = params.title;
          const address = params.address;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendVenue(chat_id, latitude, longitude, title, address, options==={}?null:options);
        }
        if (params.longitude) {
          const latitude = params.latitude;
          const longitude = params.longitude;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendLocation(chat_id, latitude, longitude, options==={}?null:options);
        }
        if (params.sticker) {
          const sticker = params.sticker;
          const options = {};
          if (params.options.length) options.options = params.options;
          if (params.entities.length) options.entities = params.entities;
          if (params.caption_entities.length) options.caption_entities = params.caption_entities;
          if (params.media.length) options.media = params.media;
          if (params.explanation_entities.length) options.explanation_entities = params.explanation_entities;
          if (params.reply_markup) options.reply_markup = params.reply_markup;
          return await bot.sendSticker(chat_id, sticker, options==={}?null:options);
        }
        return;
      }
      let reply_markup = {}
      if (keyboard) reply_markup = {keyboard, resize_keyboard: true, one_time_keyboard: one_time_keyboard===undefined?false:one_time_keyboard}
      if (inline_keyboard) reply_markup.inline_keyboard = inline_keyboard
      if (reply_markup === {}) reply_markup = null
      if (text) return await bot.sendMessage(chatId===undefined?msg.chat.id:chatId, text, {
        parse_mode: parse_mode===undefined?"HTML":parse_mode,
        reply_markup: reply_markup || null
      })
      if (messageId) return await bot.copyMessage(chatId===undefined?msg.chat.id:chatId, fromChatId || archiveTelegramChannel, messageId, {
        caption: caption===undefined?null:caption,
        parse_mode: parse_mode===undefined?"HTML":parse_mode,
        reply_markup: reply_markup || null
      })
    } catch (e) {
      console.log(e)
    }
  },
  alertCallbackQuery: (bot, query) => async ({
    text, showAlert
  }) => {
    try {
      return await bot.answerCallbackQuery(query.id, {text, show_alert: showAlert===undefined?false:typeof showAlert==="boolean"?showAlert:false})
    } catch (e) {
      console.log(e)
    }
  },
  deleteCallbackQuery,
  editCallbackQuery: (bot, query) => async ({
    chatId, text, messageId, caption, parse_mode, keyboard, inline_keyboard, one_time_keyboard, fromChatId
  }) => {
    try {
      let reply_markup = {}
      if (keyboard) reply_markup = {keyboard, resize_keyboard: true, one_time_keyboard: one_time_keyboard===undefined?false:one_time_keyboard}
      if (inline_keyboard) reply_markup.inline_keyboard = inline_keyboard
      if (reply_markup === {}) reply_markup = null
      if (reply_markup && reply_markup.keyboard && query.message.reply_markup.inline_keyboard && text) {
        await deleteCallbackQuery(bot, query)();
        return await bot.sendMessage(chatId===undefined?query.message.chat.id:chatId, text, {
          parse_mode: parse_mode===undefined?"HTML":parse_mode,
          reply_markup: reply_markup || null
        })
      }
      if (reply_markup && reply_markup.keyboard && query.message.reply_markup.inline_keyboard && messageId) {
        await deleteCallbackQuery(bot, query)();
        return await bot.copyMessage(chatId === undefined ? query.message.chat.id : chatId, fromChatId || archiveTelegramChannel, messageId, {
          caption: caption === undefined ? null : caption,
          parse_mode: parse_mode === undefined ? "HTML" : parse_mode,
          reply_markup: reply_markup || null
        })
      }
      if (text && !query.message.text) return await bot.sendMessage(chatId===undefined?query.message.chat.id:chatId, text, {
        parse_mode: parse_mode===undefined?"HTML":parse_mode,
        reply_markup: reply_markup || null
      })
      if (text && query.message.text) return await bot.editMessageText(text, {
        chat_id: chatId===undefined?query.message.chat.id:chatId,
        message_id: query.message.message_id,
        parse_mode: parse_mode===undefined?"HTML":parse_mode,
        reply_markup: reply_markup || null
      })
      if (messageId) {
        await deleteCallbackQuery(bot, query)();
        return await bot.copyMessage(chatId === undefined ? query.message.chat.id : chatId, fromChatId || archiveTelegramChannel, messageId, {
          caption: caption === undefined ? null : caption,
          parse_mode: parse_mode === undefined ? "HTML" : parse_mode,
          reply_markup: reply_markup || null
        })
      }
    } catch (e) {
      console.log(e)
    }
  },
}
