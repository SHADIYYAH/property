const collections = require('../config/db')
const validateSkills = require('../validation/skillsValidation')
const createSkills  = (req, res)=>{
try{

    const {error, value} = validateSkills(req.body)
    if(error !== undefined){
      res.status(400).json({
         status: 'false',
         msg: error.skills[0].message,
      })
      return;
    }
    collections.skills.insertOne(req.body)
    .then((result)=>{
      console.log(result)

       res.status(200).json({
         ok: 'true',
         msg: 'User created successfully',
       })
    })
    .catch((err) => {
      console.log(err)

      res.status(400).json({
         status: 'false',
         msg: 'Create user failed',
         error: err.message
      })
     
    })
}catch(error){
  res.status(201).json({
   status: "true",
   msg: error.message
  })
}

   
 
}

module.exports = createSkills;29.125