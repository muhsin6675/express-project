const express = require('express')
const router = express.Router()
const { getcontact }

router.route('/').get((req, res) => {
    res.status(200).json(
        {

            messege: 'contact',
            name: 'muhsin'
        }
    )

}).post((req, res) => {
    res.status(200).json(
        {

            messege: `${req.body}`,
            name: 'muhsin'
        }
    )

})
router.route('/:id').put((req, res) => {
    res.status(200).json(
        {

            messege: `create contact for me ${req.params.id} `,
            name: 'muhsin'
        }
    )

}).delete((req, res) => {
    res.status(200).json(
        {

            messege: `delete contact for me ${req.params.id} `,
            name: 'muhsin'
        }
    )

})



module.exports = router