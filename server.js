const express = require ('express')
const app = express()
const contactRouter=require ('./routes/contactRouter.js')
const env= require('dotenv').config()
//setting path
const connectDb = require('./Config/dbConnection.js')

const port = process.env.PORT || 3300
app.use(express.json())
app.use('/api/contacts',contactRouter)


app.get ('/',(req,res)=>{

    // u can send request in 2 ways
    res.status(200).json(
        {
            name:'ths is coming from server'
        }
    )
    // 2nd way

    // console.log('from server')
})

// middleware function
// app.use((req,res,next)=>{
//     console.log('middeleware called');
//     // to login
//     console.log(`${req.url},${req.method}${Date.now()}`);
//     next();
// })
app.listen(port,()=> {console.log(`server is running on ${port}`)
connectDb() })