require('dotenv').config()
const express= require('express')
const session= require('express-session')
const massive=require('massive')
const {CONNECTION_STRING, PORT, SESSION_SECRET}= process.env
const app=express()


app.use(express.json())


app.use(session({
  secret: SESSION_SECRET, 
  saveUninitialized:false, 
  resave: false, 
  cookie: {
    maxAge:1000*60*60*24,
      }
}))

massive(CONNECTION_STRING).then( (database)=> {
  app.set('db', database)
  console.log('db connected')
  app.listen(PORT, ()=> {
    console.log('server is running and listening on ', PORT)
  })
})



