import model from './model'
import { Mongoose } from 'mongoose'

export default async function dataOp (id: String, data: Object | undefined): Promise<Object | null> {
  const mongoose = new Mongoose()
  mongoose.set('autoIndex', false)
  const {
    DB_PREFIX = '',
    DB_URL = ''
  } = process.env
  await mongoose.connect(DB_URL)
  const sch = new mongoose.Schema(
    {
      _id: {
        type: String
      },
      ...model
    },
    { timestamps: true }
  )
  const dbRealName = DB_PREFIX + 'Sync'
  const Mod = mongoose.model(dbRealName, sch)
  if (data) {
    return Mod.updateOne({
      _id: id
    }, { data }, {
      upsert: true
    })
  }
  const doc = await Mod.findById(id)
  return doc ? doc.data : null
}
