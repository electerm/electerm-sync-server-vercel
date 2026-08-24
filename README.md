<h1 align="center" style="padding-top: 60px;padding-bottom: 40px;">
    <a href="https://electerm.org">
        <img src="https://github.com/electerm/electerm-resource/raw/master/static/images/electerm.png", alt="" />
    </a>
</h1>

[English](README.md) | [中文](README_CN.md)

# Vercel Electerm sync server


A simple electerm data sync server for Vercel, written with nodejs/ts, data stored in [[cloud.mongodb.com](https://cloud.mongodb.com/)](free tier is enough).

## Use

fork this project to your own account or org and deployed to [Vercel.com](https://Vercel.com), put proper env in project env setting:(get mongodb url from [[cloud.mongodb.com](https://cloud.mongodb.com/))

![electerm-vercel-env-setting](https://github.com/electerm/electerm-sync-server-vercel/assets/1641949/66032c6f-ffa8-491a-9a73-eb5a795d8e7c)

```env
JWT_SECRET=some_secret_very_complicated
JWT_USERS=username1,username2,xxxx,hhhh
DB_URL=mongodb+srv://yourusername:xxxxx@cluster0.yyyyy.mongodb.net/electerm_sync_custom_db_name?retryWrites=true&w=majority
```

![electerm-vercel-sync](https://github.com/electerm/electerm-sync-server-vercel/assets/1641949/4c409f66-ce94-40bc-a128-fd02c3467962)

- Set `https://your-vercel-domain.vercel.app/api/sync` as your sync server url in electerm sync form.
- Set `JWT_SECRET` as your sync JWT SECRET in electerm sync form.
- Set one of `JWT_USERS` as your sync User ID in electerm sync form.

## Dev

```bash
npm i
npm i vercel -g
cp sample.env .env

## local dev
vercel dev

## deploy
vercel deploy
```

## Sync server in other languages

[https://github.com/electerm/electerm/wiki/Custom-sync-server](https://github.com/electerm/electerm/wiki/Custom-sync-server)

## About electerm

Open-sourced terminal/ssh/sftp/telnet/serialport/RDP/VNC/Spice/ftp client(Linux, Mac, Windows, Android, HarmonyOS).

Besides mainstream Windows/macOS/Linux/Android, electerm also supports HarmonyOS, and older systems — Ubuntu 18, Windows 7, macOS 10+, and special Chinese Linux distributions such as UOS, Kylin, and LoongArch (both old-world and new-world).

<p>
  <a href="https://electerm.org">Homepage / Downloads</a> ·
  <a href="https://theme.electerm.org">Theme</a> ·
  <a href="https://github.com/electerm/electerm-web-docker">Docker</a> ·
  <a href="https://demo.electerm.org">Online demo</a> ·
  <a href="https://github.com/electerm/electerm-android">Android</a> ·
  <a href="https://github.com/electerm/electerm-harmony">HarmonyOS</a> ·
  <a href="https://appgallery.huawei.com/app/detail?id=org.electerm.electerm">Huawei AppGallery</a> ·
  <a href="https://www.microsoft.com/store/apps/9NCN7272GTFF">Microsoft Store</a> ·
  <a href="https://snapcraft.io/electerm">Snap Store</a> ·
  <a href="https://repos.electerm.org/deb">deb repo</a> ·
  <a href="https://repos.electerm.org/rpm">rpm repo</a>
</p>

<div>🌐 <strong><a href="https://cloud.electerm.org">electerm online</a></strong> — Public free online electerm app</div>
<div>🤖 <strong><a href="https://ai.electerm.org">electerm AI</a></strong> — Free AI for electerm users</div>
<div>💻 <strong><a href="https://github.com/electerm/electerm-web">electerm-web</a></strong> — Web app version running in browser (including mobile device)</div>

## License

MIT
