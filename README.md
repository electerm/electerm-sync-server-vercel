# Vercel Electerm sync server

A simple electerm data sync server for Vercel, written with nodejs/ts, data stored in [[cloud.mongodb.com](https://cloud.mongodb.com/)](free tier is enough).

## Use

fork this project to your own account or org and deployed to [Vercel.com](https://Vercel.com), put proper env in project env setting:

```env
JWT_SECRET=somesecretverycomplicated!@#
JWT_USERS=username1,username2,xxxx,hhhh
DB_URL=mongodb+srv://yourusername:xxxxx@cluster0.yyyyy.mongodb.net/electerm_sync_custom_db_name?retryWrites=true&w=majority
```

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

## License

MIT
