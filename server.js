const express = require ('express')
const app = express()
app.use(express.json())
const contactRouter=require ('./routes/contactRouter.js')
const env= require('dotenv').config()
const port = process.env.PORT || 3300


app.use('/api/contacts',contactRouter)


// app.get ('/api/contacts',(req,res)=>{
//     res.status(200).json(
//         {
//             name:'muhsin'
//         }
//     )
// })





app.listen(port,()=> console.log(`server is running on ${port}`))