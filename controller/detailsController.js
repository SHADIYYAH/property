const collections = require('../config/db')
const validateDetails = require('../validation/detailsValidation')

const createDetails = async(req, res)=>{
    try{

     const {error, value} = validateDetails(req.body)
      if(error !== undefined){
      res.status(400).json({
        status: 'false',
        msg: error.details[0].message,
      })
      return;
    }
     const alreadyExists = await collections.details.findOne({
        email 
     });
     if(alreadyExists){
         return res.status(404).json({
            status: 'error',
            msg: ' Details already Exists',
        })
        
     }

        collections.details.insertOne(req.body)
        .then((result)=>{
            console.log(result)

            res.status(200).json({
                ok: 'true',
                msg: 'User created successfully'
            })
        })
        .catch((err)=>{
         console.log(err)

         res.status(500).json({
            status: 'false',
            msg: 'Create user failed',
            error: err.message,
         })
        })
    

}catch(error){
   res.status(201).json({
    ok: 'false',
    msg: error.meassage,
   })
}
}



const updateDetails = ()=>{

}

module.exports = createDetails