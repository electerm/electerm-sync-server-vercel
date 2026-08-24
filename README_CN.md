# Vercel Electerm 同步服务器

[English](README.md) | [中文](README_CN.md)

开源终端/ssh/telnet/serialport/RDP/VNC/Spice/sftp/ftp客户端(Linux, Mac, Windows, Android, HarmonyOS)。

除了主流的 Windows/macOS/Linux/Android，electerm 还支持鸿蒙(HarmonyOS)，以及老旧系统——如 Ubuntu 18、Windows 7、macOS 10+，以及国产特殊 Linux 发行版如 UOS、麒麟(Kylin)、龙芯(LoongArch，含旧世界与新世界)。

<p>
  <a href="https://electerm.org">主页 / 下载</a> ·
  <a href="https://theme.electerm.org">主题</a> ·
  <a href="https://github.com/electerm/electerm-web-docker">Docker</a> ·
  <a href="https://demo.electerm.org">在线演示</a> ·
  <a href="https://github.com/electerm/electerm-android">Android</a> ·
  <a href="https://github.com/electerm/electerm-harmony">鸿蒙</a> ·
  <a href="https://appgallery.huawei.com/app/detail?id=org.electerm.electerm">华为应用市场</a> ·
  <a href="https://www.microsoft.com/store/apps/9NCN7272GTFF">微软商店</a> ·
  <a href="https://snapcraft.io/electerm">Snap 商店</a> ·
  <a href="https://repos.electerm.org/deb">deb 仓库</a> ·
  <a href="https://repos.electerm.org/rpm">rpm 仓库</a>
</p>

<div>🌐 <strong><a href="https://cloud.electerm.org">electerm 在线版</a></strong> — 公共免费在线 electerm 应用</div>
<div>🤖 <strong><a href="https://ai.electerm.org">electerm AI</a></strong> — 免费为 electerm 用户提供 AI</div>
<div>💻 <strong><a href="https://github.com/electerm/electerm-web">electerm-web</a></strong> — 运行于浏览器(支持移动设备)的 web app 版本</div>

一个简单的 Electerm 数据同步服务器，用于 Vercel，使用 Node.js/TypeScript 编写，数据存储在 [[cloud.mongodb.com](https://cloud.mongodb.com/)](免费层级就足够)。

## 使用

将此项目 fork 到您自己的账户或组织，并部署到 [Vercel.com](https://Vercel.com)，在项目环境设置中放置正确的环境变量：（从 [[cloud.mongodb.com](https://cloud.mongodb.com/) 获取 MongoDB URL）

![electerm-vercel-env-setting](https://github.com/electerm/electerm-sync-server-vercel/assets/1641949/66032c6f-ffa8-491a-9a73-eb5a795d8e7c)

```env
JWT_SECRET=some_secret_very_complicated
JWT_USERS=username1,username2,xxxx,hhhh
DB_URL=mongodb+srv://yourusername:xxxxx@cluster0.yyyyy.mongodb.net/electerm_sync_custom_db_name?retryWrites=true&w=majority
```

![electerm-vercel-sync](https://github.com/electerm/electerm-sync-server-vercel/assets/1641949/4c409f66-ce94-40bc-a128-fd02c3467962)

- 在 Electerm 同步表单中，将 `https://your-vercel-domain.vercel.app/api/sync` 设置为您的同步服务器 URL。
- 在 Electerm 同步表单中，将 `JWT_SECRET` 设置为您的同步 JWT SECRET。
- 在 Electerm 同步表单中，将 `JWT_USERS` 中的一个设置为您的同步用户 ID。

## 开发

```bash
npm i
npm i vercel -g
cp sample.env .env

## 本地开发
vercel dev

## 部署
vercel deploy
```

## 其他语言的同步服务器

[https://github.com/electerm/electerm/wiki/Custom-sync-server](https://github.com/electerm/electerm/wiki/Custom-sync-server)

## 许可证

MIT
