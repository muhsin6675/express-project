const express = require('express')
const router = express.Router()
const { getcontact,createcontact,contactforme, deletecontact }=require('../Controllers/ContactController.js')
router.use((req,res,next)=>{
    console.log('middleware is called')
    next()
})


router.route('/')
.get(getcontact)
.post(createcontact)

router.route('/:id')
.put(contactforme)
.delete(deletecontact)



module.exports = router