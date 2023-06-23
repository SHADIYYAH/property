const Joi = require('joi')
const validateDetails = () =>{
    const detailsSchema = Joi.object({
        firstname: Joi.string().required(),
        surname: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        dob: Joi.string().required(),
        likes: Joi.string().required(),
        phone: Joi.string().required(),
        
    })
    return detailsSchema.validate(data)
}
module.exports = validateDetails;