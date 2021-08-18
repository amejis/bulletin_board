import express from 'express'
//import mongoose from 'mongoose'
import mongoose from 'mongoose'

const app = express()
const port = 3001
const dburl = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false&useUnifiedTopology=true'

mongoose.connect(dburl,dbErr => {
  if(dbErr)throw new Error(err)
  else console.log(`db connected`)
  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})