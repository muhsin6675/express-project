const getcontact=(req,res)=>{
    res.status(200).json(
        {

            messege:'contact',
            name:'muhsin'
        }
    )

}

module.exports={getcontact}