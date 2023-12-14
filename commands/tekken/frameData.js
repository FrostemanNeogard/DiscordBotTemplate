module.exports = {
  name: "framedata",
  category: "tekken",
  permissions: [],
  devCommand: false,
  run: async ({ client, msg, args }) => {
    // Reply with "Pong!"
    return msg.reply("Framedata!");
  },
};
