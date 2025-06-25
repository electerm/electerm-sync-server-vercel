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

## License

MIT
