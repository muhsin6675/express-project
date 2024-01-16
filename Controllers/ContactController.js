const Contactschema=require('../Model/Contactschema')  ///importing scema from model folder, throughrequiring


const getcontact = async(req,res)=>{
    const allcontacts= await Contactschema.find()   //to see everything inside db(structure)
    
    res.status(200).json(
        allcontacts
    )

}
const createcontact= async(req, res) => {
    const{name,phone,email}=  req.body  ///destructuring
    const contact=  await Contactschema.create({
        name:name,
        phone:phone,
        email:email
    })
    res.status(200).json(
        contact
    )

}

const contactforme=(req, res) => {
    res.status(200).json(
        {

            messege: `create contact for me ${req.params.id} `,
            name: 'muhsin'
        }
    )

}

const deletecontact=(req, res) => {
    res.status(200).json(
        {

            messege: `delete contact for me ${req.params.id} `,
            name: 'muhsin'
        }
    )

}

module.exports={getcontact,createcontact,contactforme,deletecontact}