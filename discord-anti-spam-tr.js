const authors = [];
var warned = [];
var banned = [];
var messagelog = [];

/**
 * Add simple spam protection to your discord server.
 * @param  {Bot} bot - The discord.js CLient/bot
 * @param  {object} options - Optional (Custom configuarion options)
 * @return {[type]}         [description]
 */
module.exports = function (bot, options) {
  // Set options
  const uyarmaSınırı = (options && options.prefix) || 3;
  const banlamaSınırı = (options && options.prefix) || 5;
  const aralık = (options && options.interval) || 1000;
  const uyarmaMesajı = (options && options.warningMessage) || "Spamı Durdur Yoksa Mutelerim.";
  const rolMesajı = (options && options.roleMessage) || "Spam için yasaklandı, başka biri var mı?";
  const maxSpamUyarı = (options && options.duplicates || 7);
  const maxSpamBan = (options && options.duplicates || 10);
  const zaman = (options && options.zaman || 10);
  const rolİsimi = (options && options.roleName || 10);

  bot.on('message', msg => {

    if(msg.author.id != bot.user.id){
      var now = Math.floor(Date.now());
      authors.push({
        "zaman": now,
        "author": msg.author.id
      });
      messagelog.push({
        "message": msg.content,
        "author": msg.author.id
      });

      // Check how many times the same message has been sent.
      var msgMatch = 0;
      for (var i = 0; i < messagelog.length; i++) {
        if (messagelog[i].message == msg.content && (messagelog[i].author == msg.author.id) && (msg.author.id !== bot.user.id)) {
          msgMatch++;
        }
      }
      // Check matched count
      if (msgMatch == maxSpamUyarı && !warned.includes(msg.author.id)) {
        warn(msg, msg.author.id);
      }
      if (msgMatch == maxSpamBan && !banned.includes(msg.author.id)) {
        ban(msg, msg.author.id);
      }

      matched = 0;

      for (var i = 0; i < authors.length; i++) {
        if (authors[i].zaman > now - interval) {
          matched++;
          if (matched == uyarmaSınırı && !warned.includes(msg.author.id)) {
            warn(msg, msg.author.id);
          }
          else if (matched == banlamaSınırı) {
            if (!banned.includes(msg.author.id)) {
              ban(msg, msg.author.id);
            }
          }
        }
        else if (authors[i].zaman < now - interval) {
          authors.splice(i);
          warned.splice(warned.indexOf(authors[i]));
          banned.splice(warned.indexOf(authors[i]));
        }
        if (messagelog.length >= 200) {
          messagelog.shift();
        }
      }
    }
  });

  /**
   * Warn a user
   * @param  {Object} msg
   * @param  {string} userid userid
   */
  function warn(msg, userid) {
    warned.push(msg.author.id);
    msg.channel.send(msg.author + " " + uyarmaMesajı);
  }

  /**
   * Ban a user by the user id
   * @param  {Object} msg
   * @param  {string} userid userid
   * @return {boolean} True or False
   */
  function ban(msg, userid) {
    for (var i = 0; i < messagelog.length; i++) {
      if (messagelog[i].author == msg.author.id) {
        messagelog.splice(i);

      }
    }

    banned.push(msg.author.id);
    var role = msg.guild.roles.find('name', rolİsimi)
    var user = msg.channel.guild.members.find(member => member.user.id === msg.author.id);
    if (user) {
      user.addRole(role).then((member) => {
        msg.channel.send(msg.author + " " +roleMessage);
					        var test = setTimeout(()=> {
 user.removeRole(role)
 }, zaman);
        return true;
     }).catch(() => {
        msg.channel.send("Susturulmuş" + msg.author);
        return false;
     });
    }
  }

}
