<p align="center"><a href="https://nodei.co/npm/discord-anti-spam-tr/"><img src="https://nodei.co/npm/discord-anti-spam-tr.png"></a></p>

# discord-anti-spam-tr.js
Discord Sunucusu İçin Spam Koruması
Yardım İçin Fire Team Discord Sunucusu [Fire Team Discord Sunucusu](https://discord.gg/J2FWrfW)

## Kurulum
Bu Mödül Discord.js Botları İçindir [Discord.js](https://discord.js.org/#/) Discord.js Sitesi.

Bunu yaptıktan sonra, anti spam'i ayarlamak çok kolay olacaktır.
Başlamak için aşağıdaki kodu takip edebilirsiniz!
 Eğer Client veya bot Hatası Verirse *antispam(client, {* veya *antispam(bot, {* kullanın
 DİKKAT ADMİNSTRATIOR YETKİSİ BAN YETKİSİ VAR KİCK YETKİSİ OLANLARA İŞLEMEZ
```js
const antispam = require("discord-anti-spam-tr");

antispam(client, {
  uyarmaSınırı: 3, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 5, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 1000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.", // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
  rolMesajı: "Spam için yasaklandı, başka biri var mı?", //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 7,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 10, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 10, // Spamdan sonraki zaman
  rolİsimi: "spam-susturulmuş", // Spam Atan Kullanıcılar Verilecek Röl
});

```
Eğer daha İyi Bir Koruma İstiyorsanız
```js
antispam(client, {
  uyarmaSınırı: 3, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 5, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 1000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.", // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
  rolMesajı: "Spam için yasaklandı, başka biri var mı?", //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 7,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 10, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 10, // Spamdan sonraki zaman
  rolİsimi: "spam-susturulmuş", // Spam Atan Kullanıcılar Verilecek Röl
});
antispam(client , {
  uyarmaSınırı: 3, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 5, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 1000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  maxSpamUyarı: 7,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 10, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 10, // Spamdan sonraki zaman
  rolİsimi: "spam-susturulmuş", // Spam Atan Kullanıcılar Verilecek Röl
},100*100);
```
Bunu Kullanın 


Buyrun Umarım Spamlanmaz sınız

Github Linki [Github](https://github.com/Fire-Team/discord-anti-spam-tr)
