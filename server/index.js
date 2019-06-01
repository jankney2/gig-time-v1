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

//endpoints (not done)


// app.get('/users/:id', userCtrl.getUser)
// app.post('/users/create', userCtrl.createUser)
// app.put('/users/edit/:id', userCtrl.editUser)
// app.delete('/users/delete/:id', userCtrl.deleteUser)

// app.get('/clients/:id', clientCtrl.getClient)
// app.post('/clients/create/:userId', clientCtrl.createClient)
// app.put('/clients/edit/:id', clientCtrl.editClient)
// app.delete('/clients/delete/:id', clientCtrl.deleteClient)

// //gets all gigs for a user
// app.get('/gigs/:userId', gigCtrl.getUserGigs)
// //gets only one gig
// app.get('/gigs/:gigId', gigCtrl.getIndividualGig)
// app.post('/gigs/create/:userId', gigCtrl.createGig)
// app.put('/gigs/edit/:gigId', gigCtrl.editGig)
// app.delete('/gigs/delete/:id', gigCtrl.deleteGig)


// app.get('/tasks/:id', taskCtrl.getTask)
// app.post('/tasks/create/:userId', taskCtrl.createTask)
// app.put('/tasks/edit/:id', taskCtrl.editTask)
// app.delete('/tasks/delete/:id', taskCtrl.deleteTask)


//bill entire gig
// app.post('/billing/gig/:gigId', billingCtrl.billGig)
//bill individual task
// app.post('/billing/task/:taskId', billingCtrl.billTask)

